import { Orders } from "../../../../services/orders/orders.types"

export type OrderTableProps = {
  onOpenDetails: (orderId: string) => void
  onCancelOrder: (orderId: string) => void
  orders: Orders[]
}
