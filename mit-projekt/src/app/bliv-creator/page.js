"use client"
import { useEffect, useRef, useState } from "react"
import styles from "./page.module.css"

export default function BlivCreatorPage() {
  const [formData, setFormData] = useState({
    creatorName: "",
    yourName: "",
    platform: "",
    description: "",
    contactInfo: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const successTimerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        window.clearTimeout(successTimerRef.current)
      }
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/bliv-creator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.error || "Der skete en fejl ved afsendelse af formularen.")
      }

      setSubmitted(true)
      setFormData({
        creatorName: "",
        yourName: "",
        platform: "",
        description: "",
        contactInfo: "",
      })

      successTimerRef.current = window.setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.formSection}>
          <h1 className={styles.title}>Bliv Creator</h1>

          {submitted ? (
            <div className={styles.successMessage}>
              <p>Tak for din tilmelding! Vi vender tilbage snart. 💙</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              {error ? (
                <div className={styles.successMessage} role="alert">
                  <p>{error}</p>
                </div>
              ) : null}

              {/* Creator Name */}
              <div className={styles.formGroup}>
                <label htmlFor="creatorName" className={styles.label}>
                  Creator navn <span className={styles.required}>*</span>
                </label>
                <input
                  id="creatorName"
                  type="text"
                  name="creatorName"
                  value={formData.creatorName}
                  onChange={handleChange}
                  placeholder="Dit creator navn"
                  required
                  className={styles.input}
                />
              </div>

              {/* Your Name */}
              <div className={styles.formGroup}>
                <label htmlFor="yourName" className={styles.label}>
                  Dit navn <span className={styles.required}>*</span>
                </label>
                <input
                  id="yourName"
                  type="text"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  placeholder="Dit fulde navn"
                  required
                  className={styles.input}
                />
              </div>

              {/* Main Platform */}
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Dit main somé? <span className={styles.required}>*</span>
                </label>
                <div className={styles.radioGroup}>
                  {["Twitch", "Instagram", "Youtube", "Tiktok", "Andet"].map((platform) => (
                    <div key={platform} className={styles.radioOption}>
                      <input
                        type="radio"
                        id={platform}
                        name="platform"
                        value={platform}
                        checked={formData.platform === platform}
                        onChange={handleChange}
                        required
                        className={styles.radio}
                      />
                      <label htmlFor={platform} className={styles.radioLabel}>
                        {platform}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className={styles.formGroup}>
                <label htmlFor="description" className={styles.label}>
                  Beskriv kort hvorfor du kunne være interesseret i at være en del af
                  konceptet <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Din besked her..."
                  required
                  className={styles.textarea}
                  rows="5"
                />
              </div>

              {/* Contact Info */}
              <div className={styles.formGroup}>
                <label htmlFor="contactInfo" className={styles.label}>
                  Din Discord eller email (Hvor du helst vil kontaktes){" "}
                  <span className={styles.required}>*</span>
                </label>
                <input
                  id="contactInfo"
                  type="text"
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleChange}
                  placeholder="discord@brugernavn eller din@email.dk"
                  required
                  className={styles.input}
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? "Sender..." : "Send ansøgning"}
              </button>
            </form>
          )}
        </section>
      </main>
    </div>
  )
}
