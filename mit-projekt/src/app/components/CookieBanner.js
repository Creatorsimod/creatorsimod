"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import styles from "./cookieBanner.module.css"

const STORAGE_KEY = "creatorsimod-cookie-consent"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(STORAGE_KEY)
    const accepted = savedConsent === "accepted"
    setHasConsent(accepted)
    setVisible(!accepted)
    setMounted(true)
  }, [])

  const acceptCookies = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted")
    setHasConsent(true)
    setVisible(false)
  }

  const withdrawConsent = () => {
    window.localStorage.removeItem(STORAGE_KEY)
    setHasConsent(false)
    setVisible(true)
  }

  const openCookieSettings = () => {
    setVisible(true)
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      {!visible && (
        <button
          type="button"
          className={styles.settingsTrigger}
          onClick={openCookieSettings}
          aria-label="Åbn cookieindstillinger"
        >
          <span aria-hidden="true">🍪</span>
          <span>Cookieindstillinger</span>
        </button>
      )}

      {visible && (
        <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Cookie banner">
          <div className={styles.content}>
            <div className={styles.textBlock}>
              <h2 className={styles.title}>Cookies og privatliv</h2>
              <p className={styles.text}>
                Vi bruger kun nødvendige cookies for at få siden til at fungere. Når du bruger vores
                Discord-widget, kan Discord sætte egne cookies. Læs mere i vores{" "}
                <Link href="/cookiepolitik" className={styles.link}>
                  cookiepolitik
                </Link>
                .
              </p>
            </div>

            <div className={styles.actions}>
              <button type="button" className={styles.acceptButton} onClick={acceptCookies}>
                Forstået
              </button>
              {hasConsent && (
                <button type="button" className={styles.withdrawButton} onClick={withdrawConsent}>
                  Træk samtykke tilbage
                </button>
              )}
              <Link href="/cookiepolitik" className={styles.policyButton}>
                Læs mere
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
