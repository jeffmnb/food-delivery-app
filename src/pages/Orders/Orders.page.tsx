import { OrderFilter } from "./components/OrderFilter"
import { OrderPagination } from "./components/OrderPagination"
import { OrderTable } from "./components/OrderTable"
import { S } from "./Orders.styles"

export const OrdersPage = () => {
  return (
    <S.Container>
      <S.TitlePage>Pedidos</S.TitlePage>

      <OrderFilter />
      <OrderTable />

      <OrderPagination pageIndex={0} perPage={1} totalCount={10} />
    </S.Container>
  )
}
