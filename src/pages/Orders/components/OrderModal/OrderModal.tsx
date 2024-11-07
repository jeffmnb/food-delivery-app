import { createRef, useImperativeHandle, useState } from "react"
import { OrderModalParamsRef, OrderModalRef } from "./OrderModal.types"

import { S } from "./OrderModal.styles"
import {
  formatDateDistanceToNow,
  formatMoney,
  getStatusDetails,
} from "../../utils"
import { OrderDetails } from "@/services/orders/orders.types"
import { ModalTemplate } from "@/global/components/ModalTemplate"
import { Render } from "@/global/components/Render/Render"

const orderModalRef = createRef<OrderModalRef>()
const orderModalParamRef = createRef<OrderModalParamsRef>()

export const openOrderModal = ({
  orderDetails,
}: {
  orderDetails: OrderDetails
}) => {
  orderModalParamRef.current?.getParam(orderDetails)
  orderModalRef.current?.open(orderDetails)
}

export const closeOrderModal = () => orderModalRef.current?.close()

export const OrderModal = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails>()

  useImperativeHandle(orderModalParamRef, () => ({
    getParam: (param) => setOrderDetails(param),
  }))

  const totalOrderPrice = orderDetails?.orderItems.reduce((acc, orderItem) => {
    const total = orderItem?.priceInCents * orderItem?.quantity + acc
    return total
  }, 0)

  if (!orderDetails) return

  return (
    <ModalTemplate
      ref={orderModalRef}
      withCloseButton
      title={`Pedido: ${orderDetails?.id}`}
      subTitle="Detalhes do pedido"
    >
      <S.TableDetails>
        <S.TheadDetails>
          <S.ThDetails />
          <S.ThDetails />
        </S.TheadDetails>
        <S.TbodyDetails>
          <S.TrDetails>
            <S.TdDetails>Status</S.TdDetails>
            <S.TdDetails>
              <Render.If isTrue={!!orderDetails?.status}>
                {getStatusDetails({ status: orderDetails.status })?.title}
              </Render.If>
            </S.TdDetails>
          </S.TrDetails>
          <S.TrDetails>
            <S.TdDetails>Cliente</S.TdDetails>
            <S.TdDetails>{orderDetails?.customer?.name}</S.TdDetails>
          </S.TrDetails>
          <S.TrDetails>
            <S.TdDetails>Telefone</S.TdDetails>
            <S.TdDetails>
              {orderDetails?.customer?.phone ?? "Indisponível"}
            </S.TdDetails>
          </S.TrDetails>
          <S.TrDetails>
            <S.TdDetails>Email</S.TdDetails>
            <S.TdDetails>{orderDetails?.customer?.email}</S.TdDetails>
          </S.TrDetails>
          <S.TrDetails>
            <S.TdDetails>Realizado há</S.TdDetails>
            <S.TdDetails>
              <Render.If isTrue={!!orderDetails?.createdAt}>
                {formatDateDistanceToNow(new Date(orderDetails.createdAt))}
              </Render.If>
            </S.TdDetails>
          </S.TrDetails>
        </S.TbodyDetails>
      </S.TableDetails>

      <S.TableProduct>
        <S.TrProduct>
          <S.TdProduct>Produto</S.TdProduct>
          <S.TdProduct>Qtd.</S.TdProduct>
          <S.TdProduct>Preço</S.TdProduct>
          <S.TdProduct>Subtotal</S.TdProduct>
        </S.TrProduct>
        {orderDetails?.orderItems.map(
          ({ id, priceInCents, product, quantity }) => (
            <S.TrProduct key={id}>
              <S.TdProduct>{product?.name}</S.TdProduct>
              <S.TdProduct>{quantity}</S.TdProduct>
              <S.TdProduct>{formatMoney(priceInCents)}</S.TdProduct>
              <S.TdProduct>{formatMoney(priceInCents * quantity)}</S.TdProduct>
            </S.TrProduct>
          ),
        )}
      </S.TableProduct>
      <S.TotalOrder>
        <S.TotalLabel>Total do pedido</S.TotalLabel>
        <S.TotalLabel>{formatMoney(totalOrderPrice!)}</S.TotalLabel>
      </S.TotalOrder>
    </ModalTemplate>
  )
}
