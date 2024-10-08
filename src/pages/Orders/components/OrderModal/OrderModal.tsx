import { createRef, useImperativeHandle, useState } from "react"
import { OrderModalRef } from "./OrderModal.types"
import { S } from "./OrderModal.styles"

const orderModalRef = createRef<OrderModalRef>()
export const openOrderModal = () => orderModalRef.current?.open()
export const closeOrderModal = () => orderModalRef.current?.close()

export const OrderModal = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const openModal = () => setIsModalVisible(true)
  const closeModal = () => setIsModalVisible(false)

  useImperativeHandle(orderModalRef, () => ({
    open: openModal,
    close: closeModal,
  }))

  if (!isModalVisible) return <></>

  return (
    <S.Overlay onClick={closeModal}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Container>
          <S.HeaderWrapper>
            <S.Header>
              <S.HeaderTitle>Pedido: 123125412321</S.HeaderTitle>
              <S.HeaderSubTitle>Detalhes do pedido</S.HeaderSubTitle>

              <S.TableDetails>
                <S.TheadDetails>
                  <S.ThDetails />
                  <S.ThDetails />
                </S.TheadDetails>
                <S.TbodyDetails>
                  <S.TrDetails>
                    <S.TdDetails>Status</S.TdDetails>
                    <S.TdDetails>Pendente</S.TdDetails>
                  </S.TrDetails>
                  <S.TrDetails>
                    <S.TdDetails>Cliente</S.TdDetails>
                    <S.TdDetails>Jeferson Borda</S.TdDetails>
                  </S.TrDetails>
                  <S.TrDetails>
                    <S.TdDetails>Telefone</S.TdDetails>
                    <S.TdDetails>14 999999999</S.TdDetails>
                  </S.TrDetails>
                  <S.TrDetails>
                    <S.TdDetails>Email</S.TdDetails>
                    <S.TdDetails>email@email.com</S.TdDetails>
                  </S.TrDetails>
                  <S.TrDetails>
                    <S.TdDetails>Realizado há</S.TdDetails>
                    <S.TdDetails>há 3 minutos</S.TdDetails>
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
                {/* comeco dynamico */}
                <S.TrProduct>
                  <S.TdProduct>Pizza Pepperoni Grande</S.TdProduct>
                  <S.TdProduct>2</S.TdProduct>
                  <S.TdProduct>R$ 69,90</S.TdProduct>
                  <S.TdProduct>R$ 139,90</S.TdProduct>
                </S.TrProduct>
                <S.TrProduct>
                  <S.TdProduct>Pizza Calabresa Pequena</S.TdProduct>
                  <S.TdProduct>1</S.TdProduct>
                  <S.TdProduct>R$ 39,90</S.TdProduct>
                  <S.TdProduct>R$ 39,90</S.TdProduct>
                </S.TrProduct>
                {/* fim dynamico */}
              </S.TableProduct>
              <S.TotalOrder>
                <S.TotalLabel>Total do pedido</S.TotalLabel>
                <S.TotalLabel>R$ 179,80</S.TotalLabel>
              </S.TotalOrder>
            </S.Header>

            <S.CloseButton onClick={closeModal}>X</S.CloseButton>
          </S.HeaderWrapper>
        </S.Container>
      </S.Modal>
    </S.Overlay>
  )
}
