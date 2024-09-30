import React from "react"
import { DynamicTextProps } from "./DynamicText.types"

export const DynamicText = ({ children, ...props }: DynamicTextProps) => {
  if (children && children.includes("{")) {
    const parts = (children || "").split(/[{}]/g)
    const styleMatcher = {
      c: "color",
      cur: "cursor",
      d: "display",
      fs: "fontSize",
      td: "textDecoration",
      w: "fontWeight",
    } as const

    const renderedParts = []

    for (let index = 0; index < parts.length; index++) {
      const part = parts[index]

      // Render line breaks
      if (part === "br") {
        renderedParts.push(<br key={index} />)
        continue
      }

      // Apply styles for odd indices
      if (index % 2 === 1) {
        const sx: React.CSSProperties = {}
        part.split(",").forEach((style) => {
          const [key, value] = style.split("=")
          if (key in styleMatcher) {
            sx[styleMatcher[key as keyof typeof styleMatcher]] = value
          }
        })

        // Render the styled text
        if (index + 1 < parts.length) {
          renderedParts.push(
            <span key={index} style={sx}>
              {parts[index + 1]}
            </span>,
          )
          // Skip the next part since it's already rendered
          index++
        }
      } else {
        // Render unstyled text for even indices
        if (part) {
          renderedParts.push(<span key={index}>{part}</span>)
        }
      }
    }

    return <p {...props}>{renderedParts}</p>
  }

  // Render plain text if no styles are specified
  return <p {...props}>{children}</p>
}
