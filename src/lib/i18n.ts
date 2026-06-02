export async function getT(locale: string, section: string) {
  const mod = await import(`../i18n/${locale}/${section}.json`)
  return mod.default
}
