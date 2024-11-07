import { ActionStatus, Orders } from "@/services/orders/orders.types"


export type OrderTableProps = {
  onOpenDetails: (orderId: string) => void
  onCancelOrder: (orderId: string, action: ActionStatus) => void
  onStepOrder: (orderId: string, action: ActionStatus) => void
  orders: Orders[]
}
