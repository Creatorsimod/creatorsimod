import Link from "next/link"
import styles from "./page.module.css"
import CreatorsCarousel from "./components/CreatorsCarousel"

export const revalidate = 60

export const metadata = {
  title: "Forside",
  description:
    "Creators imod mobning samler danske creators for at skabe opmærksomhed og handling mod mobning online, i skolen og på arbejdspladsen.",
  alternates: {
    canonical: "/",
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
    const assetsById = new Map(
      (data.includes?.Asset || []).map((asset) => [asset.sys.id, asset]),
    )

    const creators = []
    // Debug: log raw response first item and included assets keys
    if (data.items && data.items[0]) {
      console.log('Contentful raw item preview', { item: data.items[0], includesAssetsCount: (data.includes?.Asset||[]).length })
      console.log('Included asset ids', (data.includes?.Asset||[]).map(a=>a.sys?.id))
    }
    for (const item of (data.items || [])) {
      const fields = item.fields || {}
      const titleField = getLocalizedValue(fields.navn)
      const categoryField = getLocalizedValue(fields.titel)
      const richTextField = getLocalizedValue(fields.someLinks)
      const imageField = fields.billede
      const assetId = getLinkedAssetId(imageField)

      let asset = assetId ? assetsById.get(assetId) : null

      // Extra safety: if map lookup failed, try linear search through includes
      if (!asset && assetId) {
        asset = (data.includes?.Asset || []).find((a) => a?.sys?.id === assetId) || null
        if (asset) console.log('Found asset via linear search', assetId)
      }

      // Fallback: hvis asset ikke er inkluderet i includes, hent det direkte
      if (assetId && !asset) {
        console.log('Contentful asset missing in includes, attempting fetch', { assetId, imageField })
        try {
          const assetRes = await fetch(
            `https://${config.host}/spaces/${config.spaceId}/assets/${assetId}`,
            {
              headers: {
                Authorization: `Bearer ${config.token}`,
              },
              next: {
                revalidate,
              },
            },
          )

          if (!assetRes.ok) {
            console.warn('Asset fetch returned not ok', { assetId, status: assetRes.status })
            const text = await assetRes.text().catch(() => '')
            console.warn('Asset fetch body', text)
          } else {
            asset = await assetRes.json()
            console.log('Fetched missing asset', assetId)
          }
        } catch (e) {
          console.warn('Failed to fetch asset fallback', assetId, e?.message)
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

      console.log('Computed imageUrl', imageUrl, { assetId, assetFound: Boolean(asset) })

      creators.push({
        id: item.sys.id,
        title: titleField || item.sys.id,
        category: categoryField || "",
        image: imageUrl,
        richText: richTextField,
        assetId: assetId,
        imageFieldType: typeof imageField,
        assetFound: Boolean(asset),
        fileKeys: fileField ? Object.keys(fileField) : [],
      })
    }

    if (creators[0]) {
      console.log(
        "Contentful creator debug:",
        JSON.stringify({
          title: creators[0].title,
          image: creators[0].image,
          richTextType: creators[0].richText?.nodeType,
          assetId: creators[0].assetId,
          imageFieldType: creators[0].imageFieldType,
          assetFound: creators[0].assetFound,
          fileKeys: creators[0].fileKeys,
        }),
      )
    }

    return creators
  } catch {
    return []
  }
}

export default async function Home() {
  const creatorsProjects = await getCreatorsProjects()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroTop}>
          <h1 className={styles.heroTitle}>Creators imod mobning 💙</h1>
          <p className={styles.heroText}>
            Vi er et fællesskab af creators, der bruger vores<br />
            platforme til at bekæmpe mobning og skabe en<br />
            positiv forandring.
          </p>
          <Link href="/bliv-creator" className={styles.cta}>
            Bliv en del af projektet
          </Link>
        </section>

        {/* Creators Section */}
        <section className={styles.creatorsSection}>
          <h2 className={styles.sectionTitle}>Creators</h2>
          <p className={styles.sectionSubtitle}>Her kan du se hvilke creators der støtter projektet</p>

          {creatorsProjects.length ? (
            <CreatorsCarousel projects={creatorsProjects} />
          ) : (
            <p className={styles.sectionSubtitle}>
              Der er endnu ingen creators i Contentful, eller også mangler forbindelsen til space’et.
            </p>
          )}
        </section>
      </main>
    </div>
  )
}
