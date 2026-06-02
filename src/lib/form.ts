import { Resend } from "resend"
import { validateForm } from "./formValidation"

const RATE_WINDOW_MS = 60_000
const RATE_MAX = 2
const rateMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(clientIp: string) {
  const now = Date.now()
  const entry = rateMap.get(clientIp)

  if (!entry || now > entry.resetAt) {
    rateMap.set(clientIp, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return { ok: true as const }
  }

  if (entry.count >= RATE_MAX) {
    return { ok: false as const, error: "rate_limit" }
  }

  entry.count++
  return { ok: true as const }
}

export async function sendForm(payload: unknown, clientIp: string) {
  const rate = checkRateLimit(clientIp)
  if (!rate.ok) return { ok: false as const, error: rate.error }

  const validation = validateForm(payload as Record<string, unknown>)
  if (!validation.ok) return validation

  const data = validation.data

  const resendApiKey = import.meta.env.RESEND_API_KEY
  const emailFrom = import.meta.env.EMAIL_FROM
  const emailTo = import.meta.env.EMAIL_TO
  if (!resendApiKey || !emailFrom || !emailTo) {
    console.error("[sendForm] Missing env vars: RESEND_API_KEY, EMAIL_FROM, EMAIL_TO")
    return { ok: false as const, error: "config_error" }
  }

  const resend = new Resend(resendApiKey)

  const { data: emailData, error: emailError } = await resend.emails.send({
    from: emailFrom,
    to: emailTo,
    replyTo: data.email,
    subject: `Nuevo contacto web — ${(data.fundacion || data.organization || "sin fundación")}`,
    text: Object.entries(data)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n"),
  })

  if (emailError) {
    console.error("[sendForm] Resend error:", emailError)
    return { ok: false as const, error: "send_failed" }
  }

  return { ok: true as const }
}
