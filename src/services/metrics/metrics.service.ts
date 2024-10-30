import { Revenues } from "../../pages/Dashboard/components/Charts/RevenueChart/RevenueChart.types"
import { client, queryClient } from "../server"
import { MetricsOrders, PopularProducts } from "./metrics.types"

export const useMetricsService = () => {
  const getDayOrdersAmount = async () => {
    return queryClient.fetchQuery({
      queryFn: async () =>
        await client
          .get<MetricsOrders>("/metrics/day-orders-amount")
          .then(({ data }) => data)
          .catch((err) => {
            console.error("@services/metrics.service/getDayOrdersAmount")
            throw err
          }),
      queryKey: ["getDayOrdersAmount"],
    })
  }

  const getPopularProducts = async () => {
    return queryClient.fetchQuery({
      queryFn: async () =>
        await client
          .get<PopularProducts[]>("/metrics/popular-products")
          .then(({ data }) => data)
          .catch((err) => {
            console.error("@services/metrics.service/getPopularProducts")
            throw err
          }),
      queryKey: ["getPopularProducts"],
    })
  }

  const getMonthReceipt = async () => {
    return queryClient.fetchQuery({
      queryFn: async () =>
        await client
          .get<MetricsOrders>("/metrics/month-receipt")
          .then(({ data }) => data)
          .catch((err) => {
            console.error("@services/metrics.service/getMonthReceipt")
            throw err
          }),
      queryKey: ["getMonthReceipt"],
    })
  }

  const getMonthOrdersAmount = async () => {
    return queryClient.fetchQuery({
      queryFn: async () =>
        await client
          .get<MetricsOrders>("/metrics/month-orders-amount")
          .then(({ data }) => data)
          .catch((err) => {
            console.error("@services/metrics.service/getMonthOrdersAmount")
            throw err
          }),
      queryKey: ["getMonthOrdersAmount"],
    })
  }

  const getMonthCanceledOrdersAmount = async () => {
    return queryClient.fetchQuery({
      queryFn: async () =>
        await client
          .get<MetricsOrders>("/metrics/month-canceled-orders-amount")
          .then(({ data }) => data)
          .catch((err) => {
            console.error(
              "@services/metrics.service/getMonthCanceledOrdersAmount",
            )
            throw err
          }),
      queryKey: ["getMonthCanceledOrdersAmount"],
    })
  }

  const getDailyReceiptInPeriod = async () => {
    return queryClient.fetchQuery({
      queryFn: async () =>
        await client
          .get<Revenues[]>("/metrics/daily-receipt-in-period", {
            params: {
              from: new Date("2024-09-16").toString(),
              to: new Date("2024-09-22").toString(),
            },
          })
          .then(({ data }) => data)
          .catch((err) => {
            console.error("@services/metrics.service/getDailyReceiptInPeriod")
            throw err
          }),
      queryKey: ["getDailyReceiptInPeriod"],
    })
  }

  return {
    getMonthReceipt,
    getDayOrdersAmount,
    getPopularProducts,
    getMonthOrdersAmount,
    getDailyReceiptInPeriod,
    getMonthCanceledOrdersAmount,
  }
}
