import { useEffect, useState } from "react"
import { useMetricsService } from "../../services/metrics/metrics.service"
import { showToast } from "../../global/components/Toast"
import { OrderMetrics } from "./Dashboard.types"

export const useDashboardPage = () => {
  const {
    getMonthReceipt,
    getPopularProducts,
    getDayOrdersAmount,
    getMonthOrdersAmount,
    getDailyReceiptInPeriod,
    getMonthCanceledOrdersAmount,
  } = useMetricsService()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [metrics, setMetrics] = useState<OrderMetrics>()

  const getOrdersMetrics = async () => {
    setIsLoading(true)
    try {
      await Promise.all([
        getMonthReceipt().then(({ receipt, diffFromLastMonth }) =>
          setMetrics((metrics) => ({
            ...metrics!,
            monthReceipt: { receipt, diffFromLastMonth },
          })),
        ),
        getPopularProducts().then((popularProducts) =>
          setMetrics((metrics) => ({ ...metrics!, popularProducts })),
        ),
        getDayOrdersAmount().then(({ amount, diffFromYesterday }) =>
          setMetrics((metrics) => ({
            ...metrics!,
            dayOrdersAmount: { amount, diffFromYesterday },
          })),
        ),
        getMonthOrdersAmount().then(({ amount, diffFromLastMonth }) =>
          setMetrics((metrics) => ({
            ...metrics!,
            monthOrdersAmount: { amount, diffFromLastMonth },
          })),
        ),
        getDailyReceiptInPeriod().then((revenues) =>
          setMetrics((metrics) => ({
            ...metrics!,
            dailyReceiptInPeriod: revenues,
          })),
        ),
        getMonthCanceledOrdersAmount().then(({ amount, diffFromLastMonth }) =>
          setMetrics((metrics) => ({
            ...metrics!,
            monthCanceledOrdersAmount: { amount, diffFromLastMonth },
          })),
        ),
      ]).finally(() => setIsLoading(false))
    } catch (error) {
      showToast({
        message: "Não foi possível recuperar as métricas de pedidos",
        type: "error",
        duration: 3000,
      })
    }
  }

  useEffect(() => {
    getOrdersMetrics()
  }, [])

  return { isLoading, metrics }
}
