import { useMutation } from "@tanstack/react-query"
import { client, queryClient } from "../server"
import { OrderDetails, OrdersRequest, OrdersResponse } from "./orders.types"

export const useOrdersService = () => {
  const getOrdersService = async (variables: OrdersRequest) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return await client
      .get<OrdersResponse>("/orders", { params: variables })
      .catch((err) => {
        console.error("@services/orders.service/getOrdersService", err)
        throw err
      })
  }

  const getOrders = async (variables: OrdersRequest) => {
    return await queryClient.fetchQuery({
      queryKey: ["getOrdersService"],
      queryFn: () => getOrdersService(variables),
    })
  }

  const getOrderDetailsService = async ({ orderId }: { orderId: string }) => {
    return await client.get<OrderDetails>(`/orders/${orderId}`).catch((err) => {
      console.error("@services/orders.service/getOrderDetailsService", err)
      throw err
    })
  }

  const getOrderDetails = async ({ orderId }: { orderId: string }) => {
    return await queryClient.fetchQuery({
      queryKey: ["getOrderDetailsService"],
      queryFn: () => getOrderDetailsService({ orderId }),
    })
  }

  const cancelOrderService = async ({ orderId }: { orderId: string }) => {
    return await client.patch(`/orders/${orderId}/cancel`).catch((err) => {
      console.error("@services/orders.service/cancelOrderService", err)
      throw err
    })
  }

  const { mutateAsync: cancelOrder } = useMutation({
    mutationFn: cancelOrderService,
    mutationKey: ["cancelOrderService"],
  })

  return { getOrders, getOrderDetails, cancelOrder }
}
