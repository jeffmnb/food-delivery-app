import { OrderFilter } from "./components/OrderFilter"
import { openOrderModal, OrderModal } from "./components/OrderModal"
import { OrderPagination } from "./components/OrderPagination"
import { OrderTable } from "./components/OrderTable"
import { useOrdersPage } from "./Orders.logic"
import { S } from "./Orders.styles"

export const OrdersPage = () => {
  const { orders, isLoadingOrders } = useOrdersPage()

  if (isLoadingOrders) return <p style={{ color: "white" }}>LAODING</p>

  return (
    <S.Container>
      <S.TitlePage>Pedidos</S.TitlePage>

      <OrderFilter />
      <OrderTable orders={orders!} onOpenDetails={openOrderModal} />

      <OrderPagination
        pageIndex={0}
        perPage={1}
        totalCount={orders?.length || 0}
      />
      <OrderModal />
    </S.Container>
  )
}
