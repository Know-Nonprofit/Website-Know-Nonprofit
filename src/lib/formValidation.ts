const OPTIONAL_FIELDS = new Set(["web", "website"])

export function validateForm(data: Record<string, unknown>) {
  const errors: Record<string, string> = {}

  for (const [field, val] of Object.entries(data)) {
    if (OPTIONAL_FIELDS.has(field)) continue
    if (!val || (typeof val === "string" && val.trim() === "")) {
      errors[field] = "required"
    }
  }

  const email = data.email
  if (typeof email === "string" && email.trim() !== "") {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = "invalid_email"
    }
  }

  return {
    ok: Object.keys(errors).length === 0,
    errors,
    data,
  }
}
