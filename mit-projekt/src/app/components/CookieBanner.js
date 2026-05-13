"use client"

import { useSyncExternalStore } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./cookieBanner.module.css"

const STORAGE_KEY = "creatorsimod-cookie-consent"

function subscribe(callback) {
  window.addEventListener("storage", callback)
  window.addEventListener("creatorsimod-cookie-consent-change", callback)

  return () => {
    window.removeEventListener("storage", callback)
    window.removeEventListener("creatorsimod-cookie-consent-change", callback)
  }
}

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY) === "accepted"
}

function getServerSnapshot() {
  return false
}

function notifyConsentChange() {
  window.dispatchEvent(new Event("creatorsimod-cookie-consent-change"))
}

export default function CookieBanner() {
  const pathname = usePathname()
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/")
  const cookiePolicyPath = isEnglish ? "/en/cookiepolitik" : "/cookiepolitik"

  const t = isEnglish
    ? {
        openSettings: "Open cookie settings",
        settings: "Cookie settings",
        bannerLabel: "Cookie banner",
        title: "Cookies and privacy",
        message:
          "We only use necessary cookies to keep the site working. If you use our Discord widget, Discord may set its own cookies. Read more in our",
        policy: "cookie policy",
        accept: "Understood",
        withdraw: "Withdraw consent",
        readMore: "Read more",
      }
    : {
        openSettings: "Abn cookieindstillinger",
        settings: "Cookieindstillinger",
        bannerLabel: "Cookie banner",
        title: "Cookies og privatliv",
        message:
          "Vi bruger kun nodvendige cookies for at fa siden til at fungere. Nar du bruger vores Discord-widget, kan Discord saette egne cookies. Laes mere i vores",
        policy: "cookiepolitik",
        accept: "Forstaet",
        withdraw: "Traek samtykke tilbage",
        readMore: "Laes mere",
      }

  const hasConsent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const visible = !hasConsent

  const acceptCookies = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted")
    notifyConsentChange()
  }

  const withdrawConsent = () => {
    window.localStorage.removeItem(STORAGE_KEY)
    notifyConsentChange()
  }

  const openCookieSettings = () => {
    window.localStorage.removeItem(STORAGE_KEY)
    notifyConsentChange()
  }

  return (
    <>
      {!visible && (
        <button
          type="button"
          className={styles.settingsTrigger}
          onClick={openCookieSettings}
          aria-label={t.openSettings}
        >
          <span aria-hidden="true">🍪</span>
          <span>{t.settings}</span>
        </button>
      )}

      {visible && (
        <div className={styles.banner} role="dialog" aria-live="polite" aria-label={t.bannerLabel}>
          <div className={styles.content}>
            <div className={styles.textBlock}>
              <h2 className={styles.title}>{t.title}</h2>
              <p className={styles.text}>
                {t.message}{" "}
                <Link href={cookiePolicyPath} className={styles.link}>
                  {t.policy}
                </Link>
                .
              </p>
            </div>

            <div className={styles.actions}>
              <button type="button" className={styles.acceptButton} onClick={acceptCookies}>
                {t.accept}
              </button>
              {hasConsent && (
                <button type="button" className={styles.withdrawButton} onClick={withdrawConsent}>
                  {t.withdraw}
                </button>
              )}
              <Link href={cookiePolicyPath} className={styles.policyButton}>
                {t.readMore}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
