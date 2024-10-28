import { useEffect, useState } from "react"
import {
  ActionStatus,
  OrdersResponse,
} from "../../services/orders/orders.types"
import { useOrdersService } from "../../services/orders/orders.service"
import { useFoodDeliveryStore } from "../../global/store"
import { getRealIndexTotalCount } from "./utils"
import { OrderFilterInput } from "./components/OrderFilter/OrderFilter.types"
import { openOrderModal } from "./components/OrderModal"
import { showToast } from "../../global/components/Toast"

export const useOrdersPage = () => {
  const [ordersDetails, setOrdersDetails] = useState<OrdersResponse>()
  const [isLoadingOrders, setIsLoadingOrders] = useState<boolean>(true)
  const { getOrders, getOrderDetails, updateOrderStatus } = useOrdersService()
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

  const getOrderDetailsData = async (orderId: string) => {
    await getOrderDetails({ orderId })
      .then(({ data }) => {
        openOrderModal({ orderDetails: data })
      })
      .catch(() =>
        showToast({
          message: "Não foi possível obter o detalhes do pedido.",
          type: "error",
          duration: 3000,
        }),
      )
  }

  const handleCancelOrder = async (orderId: string, action: ActionStatus) => {
    return showToast({
      message: "Deseja cancelar o pedido?",
      type: "warning",
      duration: 10000,
      action: {
        label: "Cancelar",
        onClick: () =>
          updateOrderStatus({ orderId, action: action })
            .then(() =>
              getOrdersData({}).then(() =>
                showToast({
                  message: "Pedido cancelado com sucesso!",
                  type: "success",
                  duration: 3000,
                }),
              ),
            )
            .catch(() =>
              showToast({
                message: "Não foi possível cancelar o pedido",
                type: "error",
                duration: 3000,
              }),
            ),
      },
    })
  }

  const handleNextStepOrder = async (orderId: string, action: ActionStatus) => {
    return await updateOrderStatus({ orderId, action: action })
      .then(() => {
        getOrdersData({}).then(() =>
          showToast({
            message: "Pedido atualizado!",
            type: "success",
            duration: 3000,
          }),
        )
      })
      .catch(() =>
        showToast({
          message: "Não foi possível atualizar o status do pedido.",
          type: "error",
          duration: 3000,
        }),
      )
  }

  useEffect(() => {
    getOrdersData({})
  }, [pageIndex])

  return {
    ordersDetails,
    isLoadingOrders,
    getOrdersData,
    handleCancelOrder,
    getOrderDetailsData,
    handleNextStepOrder,
  }
}
