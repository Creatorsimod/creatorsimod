"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import styles from "./navBar.module.css"

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/")
  const prefix = isEnglish ? "/en" : ""
  const basePath = isEnglish ? pathname.replace(/^\/en/, "") || "/" : pathname || "/"
  const switchToDaPath = isEnglish ? basePath : pathname || "/"
  const switchToEnPath = isEnglish ? pathname : basePath === "/" ? "/en" : `/en${basePath}`

  const toPath = (path) => {
    if (!prefix) return path
    if (path === "/") return prefix
    return `${prefix}${path}`
  }

  const labels = isEnglish
    ? {
        menu: "Menu",
        home: "Home",
        about: "About",
        becomeCreator: "Become a Creator",
        contact: "Contact",
      }
    : {
        menu: "Menu",
        home: "Forside",
        about: "Om os",
        becomeCreator: "Bliv Creator",
        contact: "Kontakt",
      }

  const switchLanguage = (lang, path) => {
    document.cookie = `site-lang=${lang}; path=/; max-age=31536000; samesite=lax`
    setOpen(false)
    router.push(path)
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <div className={styles.brand}>
          <Link href={toPath("/")}>
            <Image
              src="/mainLogo.png"
              alt="CreatorSiMod"
              width={160}
              height={36}
              className={styles.logo}
            />
          </Link>
        </div>

        <button
          className={styles.burger}
          aria-label={labels.menu}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className={styles.burgerBar} />
          <span className={styles.burgerBar} />
          <span className={styles.burgerBar} />
        </button>

        <ul className={`${styles.navList} ${open ? styles.open : ""}`}>
          <li className={styles.navItem}>
            <Link href={toPath("/")}>{labels.home}</Link>
          </li>
          <li className={styles.navItem}>
            <Link href={toPath("/om-os")}>{labels.about}</Link>
          </li>
          <li className={styles.navItem}>
            <Link href={toPath("/bliv-creator")}>{labels.becomeCreator}</Link>
          </li>
          <li className={styles.navItem}>
            <Link href={toPath("/kontakt")}>{labels.contact}</Link>
          </li>
          <li className={`${styles.navItem} ${styles.languageItem}`}>
            <button
              onClick={() => switchLanguage("da", switchToDaPath)}
              className={isEnglish ? "" : styles.activeLanguage}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, font: "inherit", color: "inherit" }}
            >
              DA
            </button>
            <span className={styles.languageDivider}>/</span>
            <button
              onClick={() => switchLanguage("en", switchToEnPath)}
              className={isEnglish ? styles.activeLanguage : ""}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, font: "inherit", color: "inherit" }}
            >
              EN
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
