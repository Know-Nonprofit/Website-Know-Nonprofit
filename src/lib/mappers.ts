export const mapItems = <T>(
  items: T[],
  transform?: (item: T, index: number) => T
): T[] =>
  items.map((item, i) => (transform ? transform(item, i) : item))

interface FoundationInput {
  foundation: string
  country: string
  problem: string
  solution: string
  result: string
  image: string
  link: string
}

interface FoundationOutput {
  country: string
  title: string
  desc: string
  image: string
  link: string
}

export const mapFoundations = (
  items: FoundationInput[],
  labels: { problem: string; solution: string; result: string }
): FoundationOutput[] =>
  items.map(item => ({
    country: item.country,
    title: item.foundation,
    desc: `${labels.problem}: ${item.problem}\n${labels.solution}: ${item.solution}\n${labels.result}: ${item.result}`,
    image: item.image,
    link: item.link,
  }))
