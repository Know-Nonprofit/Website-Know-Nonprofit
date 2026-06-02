import type { APIRoute } from "astro"
import { sendForm } from "@lib/form"

export const POST: APIRoute = async ({ request, locals }) => {
  const body = await request.json()
  const result = await sendForm(body, locals.clientIp)

  if ("error" in result) {
    const status = result.error === "rate_limit" ? 429 : 500
    return new Response(JSON.stringify(result), { status })
  }

  return new Response(JSON.stringify(result), {
    status: result.ok ? 200 : 400,
  })
}
