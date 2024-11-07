import { OrderDetails } from "@/services/orders/orders.types"


export type OrderModalRef = {
  open: (orderDetails: OrderDetails) => void
  close: () => void
}

export type OrderModalParamsRef = {
  getParam: (param: any) => void
}
