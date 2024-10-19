import { client, queryClient } from "../server"
import { ManagedRestaurant } from "./managedRestaurant.types"

export const useManagedRestaurantService = () => {
  const getManagedRestaurantService = async () => {
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

  const getManagedRestaurant = () => {
    return queryClient.fetchQuery({
      queryFn: getManagedRestaurantService,
      queryKey: ["getManagedRestaurant"],
    })
  }

  return {
    getManagedRestaurant,
  }
}
