import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"
import { UseFoodDeliveryStore } from "./useFoodDeliveryStore.types"
import { Viewer } from "../../services/viewerService/viewer.types"
import { ManagedRestaurant } from "../../services/managedRestaurantService/managedRestaurant.types"

const initialStoreValue = {
  viewer: {},
  managedRestaurant: {},
  orders: { pageIndex: 0, totalCount: 0 },
} as UseFoodDeliveryStore

export const useFoodDeliveryStore = create<UseFoodDeliveryStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialStoreValue,
        setViewer: (viewer: Viewer) =>
          set(
            () => ({
              viewer: viewer,
            }),
            false,
            "setViewer",
          ),
        setManagedRestaurant: (managedRestaurant: ManagedRestaurant) =>
          set(
            () => ({
              managedRestaurant: managedRestaurant,
            }),
            false,
            "setManagedRestaurant",
          ),
        setOrders: ({ pageIndex, totalCount }) => {
          if (pageIndex < 0) return

          set(
            () => ({
              orders: {
                pageIndex: pageIndex,
                totalCount: totalCount ?? 0,
              },
            }),
            false,
            "setOrders",
          )
        },
        resetStore: () =>
          set(
            () => ({
              ...initialStoreValue,
            }),
            false,
            "resetStore",
          ),
      }),
      {
        name: "@food-delivery",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    {
      trace: true,
    },
  ),
)

export const getFoodDeliveryStore = useFoodDeliveryStore.getState
