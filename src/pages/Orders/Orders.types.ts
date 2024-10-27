export type StatusOrderType = {
  status:
    | "pending"
    | "canceled"
    | "processing"
    | "delivering"
    | "delivered"
    | "all"
    | StatusOrderType
}
