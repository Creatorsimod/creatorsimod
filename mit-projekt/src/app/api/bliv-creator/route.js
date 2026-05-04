import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const runtime = "nodejs"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "RESEND_API_KEY mangler i miljøvariablerne." },
        { status: 500 },
      )
    }

    const recipient = process.env.RESEND_TO_EMAIL
    const fromEmail = process.env.RESEND_FROM_EMAIL

    if (!recipient) {
      return Response.json(
        { error: "RESEND_TO_EMAIL mangler i miljøvariablerne." },
        { status: 500 },
      )
    }

    if (!fromEmail) {
      return Response.json(
        { error: "RESEND_FROM_EMAIL mangler i miljøvariablerne." },
        { status: 500 },
      )
    }

    const body = await request.json()
    const creatorName = body?.creatorName?.trim()
    const yourName = body?.yourName?.trim()
    const platform = body?.platform?.trim()
    const description = body?.description?.trim()
    const contactInfo = body?.contactInfo?.trim()

    if (!creatorName || !yourName || !platform || !description || !contactInfo) {
      return Response.json({ error: "Udfyld venligst alle felter." }, { status: 400 })
    }

    const contactIsEmail = emailPattern.test(contactInfo)

    const html = `
      <h2>Ny Bliv Creator ansøgning</h2>
      <p><strong>Creator navn:</strong> ${escapeHtml(creatorName)}</p>
      <p><strong>Dit navn:</strong> ${escapeHtml(yourName)}</p>
      <p><strong>Platform:</strong> ${escapeHtml(platform)}</p>
      <p><strong>Kontaktinfo:</strong> ${escapeHtml(contactInfo)}</p>
      <p><strong>Beskrivelse:</strong></p>
      <p>${escapeHtml(description).replaceAll("\n", "<br />")}</p>
    `

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [recipient],
      subject: `Ny Bliv Creator ansøgning fra ${creatorName}`,
      html,
      text: [
        "Ny Bliv Creator ansøgning",
        `Creator navn: ${creatorName}`,
        `Dit navn: ${yourName}`,
        `Platform: ${platform}`,
        `Kontaktinfo: ${contactInfo}`,
        `Beskrivelse: ${description}`,
      ].join("\n"),
      replyTo: contactIsEmail ? contactInfo : undefined,
    })

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({ success: true })
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Kunne ikke sende ansøgningen." },
      { status: 500 },
    )
  }
}