export const mapItems = <T>(
  items: T[],
  transform?: (item: T, index: number) => T
): T[] =>
  items.map((item, i) => (transform ? transform(item, i) : item))
