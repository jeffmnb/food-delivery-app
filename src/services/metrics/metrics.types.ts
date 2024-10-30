export type DayOrdersAmount = { amount: number; diffFromYesterday: number }

export type PopularProducts = {
  product: string
  amount: number
}

export type MetricsOrders = {
  amount?: number
  receipt?: number
  diffFromLastMonth?: number
  diffFromYesterday?: number
}
