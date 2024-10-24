import { useEffect, useState } from "react"
import { OrdersResponse } from "../../services/orders/orders.types"
import { useOrdersService } from "../../services/orders/orders.service"
import { useFoodDeliveryStore } from "../../global/store"
import { formatTotalCount } from "./utils"

export const useOrdersPage = () => {
  const [ordersDetails, setOrdersDetails] = useState<OrdersResponse>()
  const [isLoadingOrders, setIsLoadingOrders] = useState<boolean>(true)
  const { getOrders } = useOrdersService()
  const {
    orders: { pageIndex },
    setOrders,
  } = useFoodDeliveryStore()

  const getOrdersData = async () => {
    setIsLoadingOrders(true)

    await getOrders({
      pageIndex: pageIndex,
    })
      .then(({ data }) => {
        setOrders({
          totalCount: formatTotalCount(data?.meta?.totalCount!),
          pageIndex: pageIndex,
        })
        setOrdersDetails({ orders: data?.orders, meta: data?.meta })
      })
      .catch(() => setOrdersDetails({ orders: [] }))
  }

  useEffect(() => {
    getOrdersData().finally(() => setIsLoadingOrders(false))
  }, [pageIndex])

  return {
    ordersDetails,
    isLoadingOrders,
  }
}
