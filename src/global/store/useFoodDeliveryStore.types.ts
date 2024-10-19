import { Viewer } from "../../services/viewerService/viewer.types"
import { ManagedRestaurant } from "../../services/managedRestaurantService/managedRestaurant.types"

export type UseFoodDeliveryStore = {
  viewer: Viewer
  managedRestaurant: ManagedRestaurant
  setViewer: (viewer: Viewer) => void
  setManagedRestaurant: (managedRestaurant: ManagedRestaurant) => void
  resetStore: () => void
}
