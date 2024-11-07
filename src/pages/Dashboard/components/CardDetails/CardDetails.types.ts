import { MetricsOrders } from "@/services/metrics/metrics.types"
import { LucideProps } from "lucide-react"

export type CardDetailsProps = {
  title: string
  metrics: MetricsOrders
  type?: "money" | "order"
  period?: "daily" | "monthly"
  cardKey:
    | "monthReceipt"
    | "monthOrdersAmount"
    | "dayOrdersAmount"
    | "monthCanceledOrdersAmount"
}

export type CardDetailsIcon = {
  iconType: CardDetailsProps["type"]
} & LucideProps

export type CardDetailsPercentage = {
  variant: "positive" | "negative"
}
