import { Render } from "../../../../global/components/Render/Render"
import {
  formatDateDistanceToNow,
  formatMoney,
  getStatusDetails,
} from "../../utils"
import { S } from "./OrderTable.styles"
import { OrderTableProps } from "./OrderTable.types"

export const OrderTable = ({ onOpenDetails, orders }: OrderTableProps) => {
  const hasOrders = !!orders?.length

  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th></S.Th>
          <S.Th>Identificador</S.Th>
          <S.Th>Realizado há</S.Th>
          <S.Th>Status</S.Th>
          <S.Th>Cliente</S.Th>
          <S.Th>Total do pedido</S.Th>
          <S.Th></S.Th>
          <S.Th></S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        <Render.If isTrue={hasOrders}>
          {orders?.map(
            ({ createdAt, customerName, orderId, status, total }) => (
              <S.Tr key={orderId}>
                <S.Td>
                  <S.ButtonSearch onClick={onOpenDetails}>
                    <S.SearchIcon />
                  </S.ButtonSearch>
                </S.Td>
                <S.Td>{orderId.slice(6)}</S.Td>
                <S.Td>{formatDateDistanceToNow(createdAt)}</S.Td>
                <S.Td>
                  <S.StatusPointer status={status} />
                  {getStatusDetails({ status })?.title}
                </S.Td>
                <S.Td>{customerName} </S.Td>
                <S.Td>{formatMoney(total)}</S.Td>
                <S.Td>
                  <S.ButtonApprove>
                    <S.ArrowRight />
                    Aprovar
                  </S.ButtonApprove>
                </S.Td>
                <S.Td>
                  <S.ButtonCancel>
                    <S.X />
                    <p>Cancelar</p>
                  </S.ButtonCancel>
                </S.Td>
              </S.Tr>
            ),
          )}
        </Render.If>
        <Render.If isTrue={!hasOrders}>
          <p style={{ color: "white" }}>NENHUM PEDIDO</p>
        </Render.If>
      </S.Tbody>
    </S.Table>
  )
}
