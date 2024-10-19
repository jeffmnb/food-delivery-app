import { Orders } from "../../../../services/orders/orders.types"

export type OrderTableProps = {
  onOpenDetails: () => void
  orders: Orders[]
}
