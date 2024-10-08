import { LucideProps } from "lucide-react"

export type CardDetailsProps = {
  title: string
  value: number
  type?: "money" | "order"
  period?: "daily" | "monthly"
}

export type CardDetailsIcon = {
  iconType: CardDetailsProps["type"]
} & LucideProps

export type CardDetailsPercentage = {
  variant: "positive" | "negative"
}
