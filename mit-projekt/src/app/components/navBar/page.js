"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import styles from "./navBar.module.css"

export default function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        <div className={styles.brand}>
          <Link href="/">
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
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className={styles.burgerBar} />
          <span className={styles.burgerBar} />
          <span className={styles.burgerBar} />
        </button>

        <ul className={`${styles.navList} ${open ? styles.open : ""}`}>
          <li className={styles.navItem}>
            <Link href="/">Forside</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/om-os">Om os</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/bliv-creator">Bliv Creator</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
