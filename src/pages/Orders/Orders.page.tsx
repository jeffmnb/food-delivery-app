import { Render } from "../../global/components/Render/Render"
import { OrderFilterSkeleton } from "../../global/components/Skeletons/OrderFilterSkeleton/OrderFilterSkeleton"
import { OrderTableSkeleton } from "../../global/components/Skeletons/OrderTableSkeleton/OrderTableSkeleton"
import { EditProfileModal } from "../Dashboard/components/EditProfileModal"
import { OrderFilter } from "./components/OrderFilter"
import { openOrderModal, OrderModal } from "./components/OrderModal"
import { OrderPagination } from "./components/OrderPagination"
import { OrderTable } from "./components/OrderTable"
import { useOrdersPage } from "./Orders.logic"
import { S } from "./Orders.styles"

export const OrdersPage = () => {
  const { ordersDetails, isLoadingOrders, getOrdersData } = useOrdersPage()

  return (
    <S.Container>
      <S.TitlePage>Pedidos</S.TitlePage>

      <Render.If isTrue={isLoadingOrders}>
        <OrderFilterSkeleton />
        <OrderTableSkeleton />
      </Render.If>

      <Render.If isTrue={!isLoadingOrders}>
        <OrderFilter onSearchSubmit={getOrdersData} />
        <OrderTable
          orders={ordersDetails?.orders!}
          onOpenDetails={openOrderModal}
        />
        <OrderPagination
          perPage={1}
          totalOrders={ordersDetails?.orders?.length ?? 0}
        />
      </Render.If>

      <OrderModal />
      <EditProfileModal />
    </S.Container>
  )
}
