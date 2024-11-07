
import { Orders } from "@/services/orders/orders.types"
import {
  formatDateDistanceToNow,
  formatMoney,
  getStatusDetails,
} from "../../utils"
import { S } from "./OrderTable.styles"
import { OrderTableProps } from "./OrderTable.types"
import { Render } from "@/global/components/Render/Render"

export const OrderTable = ({
  onStepOrder,
  onCancelOrder,
  onOpenDetails,
  orders,
}: OrderTableProps) => {
  const hasOrders = !!orders?.length

  const allowCancelOrder = ({ status }: Pick<Orders, "status">) => {
    if (status === "pending" || status === "processing") return false
    return true
  }

  const getStepOrder = ({
    status,
    orderId,
  }: {
    status: any
    orderId: string
  }) => {
    if (status === "processing")
      return { label: "Em entrega", fn: () => onStepOrder(orderId, "dispatch") }

    if (status === "delivering")
      return { label: "Entregue", fn: () => onStepOrder(orderId, "deliver") }

    return { label: "Aprovar", fn: () => onStepOrder(orderId, "approve") }
  }

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
                  <S.ButtonSearch onClick={() => onOpenDetails(orderId)}>
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
                  <S.ButtonApprove
                    disabled={
                      !(
                        status === "pending" ||
                        status === "processing" ||
                        status === "delivering"
                      )
                    }
                    onClick={() => getStepOrder({ status, orderId })?.fn()}
                  >
                    <S.ArrowRight />
                    {getStepOrder({ status, orderId })?.label}
                  </S.ButtonApprove>
                </S.Td>
                <S.Td>
                  <S.ButtonCancel
                    onClick={() => onCancelOrder(orderId, "cancel")}
                    disabled={allowCancelOrder({ status })}
                  >
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
