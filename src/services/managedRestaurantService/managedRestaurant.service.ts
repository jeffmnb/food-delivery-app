import { useQuery } from "@tanstack/react-query"
import { client } from "../server"
import { ManagedRestaurant } from "./managedRestaurant.types"

export const useManagedRestaurantService = () => {
  const getManagedRestaurant = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return await client
      .get<ManagedRestaurant>("/managed-restaurant")
      .catch((err) => {
        console.error(
          "@services/managedRestaurant.service.ts/getManagedRestaurant",
          err,
        )
        throw err
      })
  }
  const { data: managedRestaurant, isLoading } = useQuery({
    queryFn: getManagedRestaurant,
    queryKey: ["getManagedRestaurant"],
  })

  return {
    managedRestaurantResponse: managedRestaurant?.data,
    isLoadingManagedRestaurant: isLoading,
  }
}
