import "dotenv/config"
import type { APIRoute } from "astro"
import { subscribeNewsletter } from "@lib/form"

export const POST: APIRoute = async ({ request, locals }) => {
  const body = await request.json()
  const result = await subscribeNewsletter(body.email, locals.clientIp)

  if ("error" in result) {
    const status = result.error === "rate_limit" ? 429
      : result.error === "invalid_email" ? 400
      : 500
    return new Response(JSON.stringify(result), { status })
  }

  return new Response(JSON.stringify(result), { status: 200 })
}
