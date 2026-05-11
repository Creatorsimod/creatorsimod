'use client'

import { useEffect, useRef, useState } from 'react'
import styles from '../page.module.css'

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

function getLocalizedAssetField(asset, fieldName) {
  const val = asset?.fields?.[fieldName]
  if (!val) return ""

  if (typeof val !== "object" || Array.isArray(val)) {
    return val
  }

  if (val.url || val.fileName || val.contentType || val.details) {
    return val
  }

  if (val.nodeType === "document" && Array.isArray(val.content)) {
    return val
  }

  return val["en-US"] || val[Object.keys(val)[0]] || ""
}

export default function CreatorsCarousel({ projects }) {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const lastInteractionRef = useRef(Date.now())

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

   // Handle responsive design - update items per page on mount and window resize
   useEffect(() => {
     if (!mounted) return

     const handleResize = () => {
       const width = window.innerWidth
       if (width <= 640) {
         setItemsPerPage(1)
       } else if (width <= 1024) {
         setItemsPerPage(2)
       } else {
         setItemsPerPage(3)
       }
     }

     handleResize()
     window.addEventListener('resize', handleResize)
     return () => window.removeEventListener('resize', handleResize)
   }, [mounted])

   // Auto-rotate carousel - changes every 10 seconds, but only after 10 seconds of inactivity
   useEffect(() => {
     if (!mounted || !projects || projects.length === 0) return

     const timer = setInterval(() => {
       const elapsed = Date.now() - lastInteractionRef.current

       if (elapsed < 10000) {
         return
       }

       lastInteractionRef.current = Date.now()
       setCurrentIndex(prev => (prev + itemsPerPage) % projects.length)
     }, 1000)

     return () => clearInterval(timer)
   }, [mounted, projects, itemsPerPage])

  if (!mounted) return null
  if (!projects || projects.length === 0) return null

  // Get creators based on itemsPerPage
  const getVisibleProjects = () => {
    const visible = []
    for (let i = 0; i < itemsPerPage; i++) {
      visible.push(projects[(currentIndex + i) % projects.length])
    }
    return visible
  }

  const visibleProjects = getVisibleProjects()
  const totalPages = Math.ceil(projects.length / itemsPerPage)

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselGrid}>
        {visibleProjects.map((project, idx) => (
          <div key={project.id || idx} className={styles.carouselItem}>
            <div
              className={styles.imagePlaceholder}
              style={
                project.image
                  ? {
                      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.18)), url(${project.image})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#d4c5b0",
                    }
                  : undefined
              }
            />
            <div className={styles.itemLabel}>
              <span className={styles.itemTitle}>{project.title}</span>
              <span className={styles.itemCategory}>{project.category}</span>
              {project.richText ? (
                <div className={styles.itemRichText}>
                  {renderRichText(project.richText)}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.carouselControls}>
        <button
          className={styles.carouselButton}
          onClick={() => {
            lastInteractionRef.current = Date.now()
            setCurrentIndex(prev => (prev - itemsPerPage + projects.length) % projects.length)
          }}
          aria-label="Forrige creators"
        >
          ←
        </button>

        <div className={styles.carouselIndicators}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${(currentIndex / itemsPerPage) === index ? styles.active : ""}`}
              onClick={() => {
                lastInteractionRef.current = Date.now()
                setCurrentIndex((index * itemsPerPage) % projects.length)
              }}
              aria-label={`Gå til gruppe ${index + 1}`}
            />
          ))}
        </div>

        <button
          className={styles.carouselButton}
          onClick={() => {
            lastInteractionRef.current = Date.now()
            setCurrentIndex(prev => (prev + itemsPerPage) % projects.length)
          }}
          aria-label="Næste creators"
        >
          →
        </button>
      </div>
    </div>
  )
}
