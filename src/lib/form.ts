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
  const resend = new Resend(import.meta.env.RESEND_API_KEY)
  await resend.emails.send({
    from: import.meta.env.EMAIL_FROM,
    to: import.meta.env.EMAIL_TO,
    replyTo: data.email,
    subject: `Nuevo contacto web — ${(data.fundacion || data.organization || "sin fundación")}`,
    text: Object.entries(data)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n"),
  })

  return { ok: true as const }
}
