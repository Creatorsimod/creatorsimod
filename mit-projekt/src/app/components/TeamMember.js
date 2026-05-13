"use client"

import { useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import styles from "../page.module.css"

export default function TeamMember({ name, role, image, links, bio }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/")
  const labels = isEnglish
    ? { showMore: "Read more", hide: "Hide" }
    : { showMore: "Laes mere", hide: "Skjul" }

  return (
    <div className={styles.teamMemberCard}>
      <Image
        src={image}
        alt={name}
        width={380}
        height={380}
        className={styles.teamMemberImage}
      />
      <h3 className={styles.teamMemberName}>{name}</h3>
      <p className={styles.teamMemberRole}>{role}</p>

      <div className={styles.teamMemberLinks}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        className={styles.bioToggle}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{isExpanded ? labels.hide : labels.showMore}</span>
        <span>{isExpanded ? "▼" : "▶"}</span>
      </button>

      <div className={`${styles.bioContent} ${isExpanded ? styles.expanded : ""}`}>
        <p className={styles.bioText}>{bio}</p>
      </div>
    </div>
  )
}
