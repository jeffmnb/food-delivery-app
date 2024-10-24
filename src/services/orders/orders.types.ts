export type Orders = {
  orderId: string
  createdAt: Date
  status: "pending" | "canceled" | "processing" | "delivering" | "delivered"
  customerName: string
  total: number
}

export type OrdersRequest = {
  pageIndex: number
}

export type OrdersResponse = {
  orders: Orders[]
  meta?: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}
