import { useQuery } from "@tanstack/react-query"
import { client } from "../server"
import { ManagedRestaurantResponse } from "./managedRestaurant.types"

export const useManagedRestaurantService = () => {
  const getManagedRestaurant = async () => {
    return await client
      .get<ManagedRestaurantResponse>("/managed-restaurant")
      .catch((err) => {
        console.error(
          "@services/managedRestaurant.service.ts/getManagedRestaurant",
          err,
        )
        throw err
      })
  }
  const { data: managedRestaurantData } = useQuery({
    queryFn: getManagedRestaurant,
    queryKey: ["getManagedRestaurant"],
  })

  return { managedRestaurantResponse: managedRestaurantData?.data }
}
