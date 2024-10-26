import { useEffect, useState } from "react"
import { OrdersResponse } from "../../services/orders/orders.types"
import { useOrdersService } from "../../services/orders/orders.service"
import { useFoodDeliveryStore } from "../../global/store"
import { getRealIndexTotalCount } from "./utils"
import { OrderFilterInput } from "./components/OrderFilter/OrderFilter.types"

export const useOrdersPage = () => {
  const [ordersDetails, setOrdersDetails] = useState<OrdersResponse>()
  const [isLoadingOrders, setIsLoadingOrders] = useState<boolean>(true)
  const { getOrders } = useOrdersService()
  const {
    orders: { pageIndex },
    setOrders,
  } = useFoodDeliveryStore()

  const getOrdersData = async ({
    status,
    customerName,
    orderId,
  }: OrderFilterInput) => {
    setIsLoadingOrders(true)

    await getOrders({
      pageIndex: pageIndex,
      customerName,
      orderId,
      status: status,
    })
      .then(({ data }) => {
        setOrders({
          totalCount: getRealIndexTotalCount(data?.meta?.totalCount!),
          pageIndex: pageIndex,
          hasFiltered: data?.meta?.hasFiltered,
        })
        setOrdersDetails({ orders: data?.orders, meta: data?.meta })
      })
      .catch(() => setOrdersDetails({ orders: [] }))
      .finally(() => setIsLoadingOrders(false))
  }

  useEffect(() => {
    getOrdersData({})
  }, [pageIndex])

  return {
    ordersDetails,
    isLoadingOrders,
    getOrdersData,
  }
}
