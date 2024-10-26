export type Orders = {
  orderId: string
  createdAt: Date
  status: "pending" | "canceled" | "processing" | "delivering" | "delivered"
  customerName: string
  total: number
}

export type OrdersRequest = {
  pageIndex: number
  orderId?: string
  status?:
    | "pending"
    | "canceled"
    | "processing"
    | "delivering"
    | "delivered"
    | "all"
  customerName?: string
}

export type OrdersResponse = {
  orders: Orders[]
  meta?: {
    pageIndex: number
    perPage: number
    totalCount: number
    hasFiltered: boolean
  }
}
