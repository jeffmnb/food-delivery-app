import { client, queryClient } from "../server"
import { OrdersRequest, OrdersResponse } from "./orders.types"

export const useOrdersService = () => {
  const getOrdersService = async (variables: OrdersRequest) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return await client
      .get<OrdersResponse>("/orders", { params: variables })
      .catch((err) => {
        console.error("@services/updateProfile.service.ts/updateProfile", err)
        throw err
      })
  }

  const getOrders = async (variables: OrdersRequest) => {
    return await queryClient.fetchQuery({
      queryKey: ["getOrdersService"],
      queryFn: () => getOrdersService(variables),
    })
  }

  return { getOrders }
}
