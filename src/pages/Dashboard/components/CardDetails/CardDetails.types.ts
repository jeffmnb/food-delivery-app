import { LucideProps } from "lucide-react"
import { MetricsOrders } from "../../../../services/metrics/metrics.types"

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
