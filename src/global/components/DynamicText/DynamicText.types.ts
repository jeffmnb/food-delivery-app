export const styleMatcher = {
  c: "color",
  w: "fontWeight",
  d: "display",
  u: "textDecoration",
} as const

export type StyleKey = keyof typeof styleMatcher

export type DynamicTextProps = {
  children: string
}
