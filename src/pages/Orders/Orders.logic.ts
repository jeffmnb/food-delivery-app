import { useEffect, useState } from "react"
import { Orders } from "../../services/orders/orders.types"
import { useOrdersService } from "../../services/orders/orders.service"

export const useOrdersPage = () => {
  const [orders, setOrders] = useState<Orders[]>()
  const [isLoadingOrders, setIsLoadingOrders] = useState<boolean>(true)
  const { getOrders } = useOrdersService()

  const getOrdersData = async () => {
    setIsLoadingOrders(true)

    await getOrders({
      pageIndex: 0,
    })
      .then(({ data }) => setOrders(data?.orders))
      .catch(() => setOrders([]))
  }

  useEffect(() => {
    getOrdersData().finally(() => setIsLoadingOrders(false))
  }, [])

  return {
    orders,
    isLoadingOrders,
  }
}
