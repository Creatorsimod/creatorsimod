"use client"

import { useState } from "react"
import Image from "next/image"
import styles from "../page.module.css"

export default function TeamMember({ name, role, image, links, bio }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={styles.teamMemberCard}>
      <Image
        src={image}
        alt={name}
        width={240}
        height={240}
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
        <span>{isExpanded ? "Skjul" : "Læs mere"}</span>
        <span>{isExpanded ? "▼" : "▶"}</span>
      </button>

      <div className={`${styles.bioContent} ${isExpanded ? styles.expanded : ""}`}>
        <p className={styles.bioText}>{bio}</p>
      </div>
    </div>
  )
}
