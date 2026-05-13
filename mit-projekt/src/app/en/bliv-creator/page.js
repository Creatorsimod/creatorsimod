"use client"
import { useEffect, useRef, useState } from "react"
import styles from "../../bliv-creator/page.module.css"

export default function BlivCreatorPageEn() {
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
  const [imageFile, setImageFile] = useState(null)
  const successTimerRef = useRef(null)
  const fileInputRef = useRef(null)

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

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0]
    setImageFile(file || null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError("")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("creatorName", formData.creatorName)
      formDataToSend.append("yourName", formData.yourName)
      formDataToSend.append("platform", formData.platform)
      formDataToSend.append("description", formData.description)
      formDataToSend.append("contactInfo", formData.contactInfo)
      if (imageFile) {
        formDataToSend.append("image", imageFile)
      }

      const response = await fetch("/api/bliv-creator", {
        method: "POST",
        body: formDataToSend,
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong while submitting the form.")
      }

      setSubmitted(true)
      setFormData({
        creatorName: "",
        yourName: "",
        platform: "",
        description: "",
        contactInfo: "",
      })
      setImageFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ""

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
          <h1 className={styles.title}>Become a Creator</h1>

          {submitted ? (
            <div className={styles.successMessage}>
              <p>Thanks for your application. We will get back to you soon. 💙</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              {error ? (
                <div className={styles.successMessage} role="alert">
                  <p>{error}</p>
                </div>
              ) : null}

              <div className={styles.formGroup}>
                <label htmlFor="creatorName" className={styles.label}>
                  Creator name <span className={styles.required}>*</span>
                </label>
                <input
                  id="creatorName"
                  type="text"
                  name="creatorName"
                  value={formData.creatorName}
                  onChange={handleChange}
                  placeholder="Your creator name"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="yourName" className={styles.label}>
                  Your name <span className={styles.required}>*</span>
                </label>
                <input
                  id="yourName"
                  type="text"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Main platform <span className={styles.required}>*</span>
                </label>
                <div className={styles.radioGroup}>
                  {["Twitch", "Instagram", "Youtube", "Tiktok", "Other"].map((platform) => (
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

              <div className={styles.formGroup}>
                <label htmlFor="description" className={styles.label}>
                  Briefly describe why you want to join the initiative
                  <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className={styles.textarea}
                  rows="5"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contactInfo" className={styles.label}>
                  Your Discord or email (where you prefer to be contacted)
                  <span className={styles.required}>*</span>
                </label>
                <input
                  id="contactInfo"
                  type="text"
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleChange}
                  placeholder="discord@username or your@email.com"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="image" className={styles.label}>
                  Attach logo <span className={styles.required}>*</span>
                </label>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className={styles.fileInput}
                />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? "Sending..." : "Send application"}
              </button>
            </form>
          )}
        </section>
      </main>
    </div>
  )
}
