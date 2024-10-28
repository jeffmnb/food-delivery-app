import { StatusOrderType } from "../../pages/Orders/Orders.types"

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

export type OrderDetails = {
  id: string
  createdAt: string
  status: StatusOrderType
  totalInCents: number
  customer: Customer
  orderItems: OrderItem[]
}

export type Customer = {
  name: string
  phone: any
  email: string
}

export type OrderItem = {
  id: string
  priceInCents: number
  quantity: number
  product: { name: string }
}

export type ActionStatus = "cancel" | "approve" | "deliver" | "dispatch"
