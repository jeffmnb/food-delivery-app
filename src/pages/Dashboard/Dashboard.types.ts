import {
  MetricsOrders,
  PopularProducts,
} from "../../services/metrics/metrics.types"
import { Revenues } from "./components/Charts/RevenueChart/RevenueChart.types"

export type OrderMetrics = {
  monthReceipt: MetricsOrders
  popularProducts: PopularProducts[]
  dayOrdersAmount: MetricsOrders
  monthOrdersAmount: MetricsOrders
  dailyReceiptInPeriod: MetricsOrders | Revenues[]
  monthCanceledOrdersAmount: MetricsOrders
}
