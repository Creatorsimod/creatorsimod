import Link from "next/link"
import styles from "../page.module.css"
import CreatorsCarousel from "../components/CreatorsCarousel"
import TeamMember from "../components/TeamMember"

export const revalidate = 60

export const metadata = {
  title: "Home | Creators against bullying",
  description:
    "Creators against bullying brings creators together to raise awareness and take action against bullying online, at school, and at work.",
  alternates: {
    canonical: "/en",
  },
}

function renderRichText(value) {
  if (!value) {
    return null
  }

  const renderNodes = (nodes, prefix = "node") => {
    if (!Array.isArray(nodes)) {
      return null
    }

    return nodes.map((node, index) => renderNode(node, `${prefix}-${index}`))
  }

  const renderMarkedText = (textNode, key) => {
    const text = textNode?.value || ""
    const marks = Array.isArray(textNode?.marks) ? textNode.marks : []

    return marks.reduce((content, mark) => {
      switch (mark.type) {
        case "bold":
          return <strong key={`${key}-bold`}>{content}</strong>
        case "italic":
          return <em key={`${key}-italic`}>{content}</em>
        case "underline":
          return <u key={`${key}-underline`}>{content}</u>
        default:
          return content
      }
    }, text)
  }

  const renderNode = (node, key) => {
    if (!node) {
      return null
    }

    if (node.nodeType === "text") {
      return <span key={key}>{renderMarkedText(node, key)}</span>
    }

    const children = renderNodes(node.content, key)

    switch (node.nodeType) {
      case "document":
        return <div key={key}>{children}</div>
      case "paragraph":
        return <p key={key}>{children}</p>
      case "heading-1":
        return <h3 key={key}>{children}</h3>
      case "heading-2":
        return <h4 key={key}>{children}</h4>
      case "heading-3":
      case "heading-4":
      case "heading-5":
      case "heading-6":
        return <h5 key={key}>{children}</h5>
      case "unordered-list":
        return <ul key={key}>{children}</ul>
      case "ordered-list":
        return <ol key={key}>{children}</ol>
      case "list-item":
        return <li key={key}>{children}</li>
      case "blockquote":
        return <blockquote key={key}>{children}</blockquote>
      case "hr":
        return <hr key={key} />
      case "hyperlink":
        return (
          <a key={key} href={node.data?.uri} target="_blank" rel="noreferrer noopener">
            {children}
          </a>
        )
      case "embedded-asset-block": {
        const asset = node.data?.target
        const fileField = getLocalizedAssetField(asset, "file")
        const titleField = getLocalizedAssetField(asset, "title")
        const imageUrl = fileField?.url ? `https:${fileField.url}` : ""

        if (!imageUrl) {
          return null
        }

        return (
          <div
            key={key}
            className={styles.richTextAsset}
            style={{ backgroundImage: `url(${imageUrl})` }}
            aria-label={titleField || "Contentful asset"}
          />
        )
      }
      default:
        return children
    }
  }

  const documentNode = value.nodeType === "document" ? value : value["en-US"] || value

  return renderNode(documentNode, "rich-text-root")
}

function getLocalizedValue(field) {
  if (!field || typeof field !== "object" || Array.isArray(field)) {
    return field || ""
  }

  if (field.nodeType === "document" && Array.isArray(field.content)) {
    return field
  }

  return field["en-US"] || field[Object.keys(field)[0]] || ""
}

function getLinkedAssetId(field) {
  if (!field || typeof field !== "object") {
    return ""
  }

  const localizedLink = field["en-US"] || field[Object.keys(field)[0]] || field
  return localizedLink?.sys?.id || localizedLink?.id || ""
}

function getLocalizedAssetField(asset, fieldName) {
  const val = asset?.fields?.[fieldName]
  if (!val) return ""

  if (typeof val !== "object" || Array.isArray(val)) {
    return getLocalizedValue(val)
  }

  if (val.url || val.fileName || val.contentType || val.details) {
    return val
  }

  if (val.nodeType === "document" && Array.isArray(val.content)) {
    return val
  }

  return val["en-US"] || val[Object.keys(val)[0]] || ""
}

function getContentfulConfig() {
  const spaceId = process.env.CONTENTFUL_SPACE_ID
  const deliveryToken = process.env.CONTENTFUL_DELIVERY_TOKEN
  const previewToken = process.env.CONTENTFUL_PREVIEW_TOKEN
  const usePreview = process.env.CONTENTFUL_USE_PREVIEW === "true" && previewToken

  if (!spaceId || (!deliveryToken && !usePreview)) {
    return null
  }

  return {
    spaceId,
    host: usePreview ? "preview.contentful.com" : "cdn.contentful.com",
    token: usePreview ? previewToken : deliveryToken,
  }
}

async function getCreatorsProjects() {
  const config = getContentfulConfig()

  if (!config) {
    return []
  }

  try {
    const response = await fetch(
      `https://${config.host}/spaces/${config.spaceId}/entries?content_type=creators&include=1&order=sys.createdAt`,
      {
        headers: {
          Authorization: `Bearer ${config.token}`,
        },
        next: {
          revalidate,
        },
      },
    )

    if (!response.ok) {
      return []
    }

    const data = await response.json()
    const assetsById = new Map((data.includes?.Asset || []).map((asset) => [asset.sys.id, asset]))

    const creators = []
    for (const item of data.items || []) {
      const fields = item.fields || {}
      const titleField = getLocalizedValue(fields.navn)
      const categoryField = getLocalizedValue(fields.titel)
      const richTextField = getLocalizedValue(fields.someLinks)
      const imageField = fields.billede
      const assetId = getLinkedAssetId(imageField)
      let asset = assetId ? assetsById.get(assetId) : null

      if (!asset && assetId) {
        asset = (data.includes?.Asset || []).find((a) => a?.sys?.id === assetId) || null
      }

      if (assetId && !asset) {
        try {
          const assetRes = await fetch(`https://${config.host}/spaces/${config.spaceId}/assets/${assetId}`, {
            headers: {
              Authorization: `Bearer ${config.token}`,
            },
            next: {
              revalidate,
            },
          })

          if (assetRes.ok) {
            asset = await assetRes.json()
          }
        } catch {
          // Ignore fallback image fetch errors and continue rendering without image.
        }
      }

      const fileField = getLocalizedAssetField(asset, "file")
      let imageUrl = ""

      if (fileField?.url) {
        const url = String(fileField.url)
        if (url.startsWith("//")) {
          imageUrl = `https:${url}`
        } else if (url.startsWith("http://") || url.startsWith("https://")) {
          imageUrl = url
        } else {
          imageUrl = `https:${url}`
        }
      }

      creators.push({
        id: item.sys.id,
        title: titleField || item.sys.id,
        category: categoryField || "",
        image: imageUrl,
        richText: richTextField,
      })
    }

    return creators
  } catch {
    return []
  }
}

export default async function HomeEn() {
  const creatorsProjects = await getCreatorsProjects()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.heroTop}>
          <h1 className={styles.heroTitle}>Creators against bullying 💙</h1>
          <p className={styles.heroText}>
            We are a community of creators who use our<br />
            platforms to fight bullying and create<br />
            positive change.
          </p>
          <Link href="/en/bliv-creator" className={styles.cta}>
            Join the project
          </Link>
        </section>

        <section className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>The team behind it</h2>
          <p className={styles.sectionSubtitle}>We currently have the following 2 members</p>

          <div className={styles.teamGrid}>
            <TeamMember
              name="Annepane"
              role="Founder"
              image="/annepane.jpg"
              links={[
                { label: "Twitch", url: "https://www.twitch.tv/annepane" },
                { label: "Instagram", url: "https://www.instagram.com/annepanetv/" },
              ]}
              bio="Annepane is a Danish Twitch streamer and content creator focused on gaming, cosplay, and welcoming communities. She is known for her positive energy and safe streams where respect and good vibes are central values. Through Creators against bullying, she works to build a more inclusive online community where everyone feels welcome."
            />
            <TeamMember
              name="Mortenrwinther"
              role="Web Developer & Partner"
              image="/mortenrwinther.png"
              links={[
                { label: "Twitch", url: "https://www.twitch.tv/mortenrwinther" },
                { label: "YouTube", url: "https://www.youtube.com/@mortenrwinther" },
              ]}
              bio="Mortenrwinther is a Danish content creator and Twitch streamer focused on gaming, entertainment, and strong online communities. With a passion for bringing people together through positive energy and authentic content, he actively supports safer spaces online. As part of Creators against bullying, his goal is to promote respect, community, and anti-bullying awareness."
            />
          </div>
        </section>

        <section className={styles.creatorsSection}>
          <h2 className={styles.sectionTitle}>Creators</h2>
          <p className={styles.sectionSubtitle}>See which creators currently support the project</p>

          {creatorsProjects.length ? (
            <CreatorsCarousel projects={creatorsProjects} />
          ) : (
            <p className={styles.sectionSubtitle}>
              There are currently no creators in Contentful, or the connection to the space is missing.
            </p>
          )}
        </section>
      </main>
    </div>
  )
}
