import { Viewer } from "../../services/viewerService/viewer.types"
import { ManagedRestaurant } from "../../services/managedRestaurantService/managedRestaurant.types"

export type UseFoodDeliveryStore = {
  viewer: Viewer
  managedRestaurant: ManagedRestaurant
  orders: { pageIndex: number; totalCount: number }
  setOrders: (orders: { pageIndex: number; totalCount?: number }) => void
  setViewer: (viewer: Viewer) => void
  setManagedRestaurant: (managedRestaurant: ManagedRestaurant) => void
  resetStore: () => void
}
