import React, { useImperativeHandle, useState } from "react"
import { ModalTemplateProps, ModalTemplateRef } from "./ModalTemplate.types"
import { S } from "./ModalTemplate.styles"

export const ModalTemplate = React.forwardRef<
  ModalTemplateRef,
  ModalTemplateProps
>(
  (
    {
      children,
      title,
      subTitle,
      onDismiss,
      footerComponent: Footer,
      fullSize,
      withCloseButton,
    },
    ref,
  ) => {
    const [isModalVisible, setModalVisible] = useState(false)

    const openModal = () => setModalVisible(true)

    const closeModal = () => {
      setModalVisible(false)
      onDismiss?.()
    }

    useImperativeHandle(ref, () => ({
      open: openModal,
      close: closeModal,
    }))

    if (fullSize) return children

    if (!isModalVisible) return <></>

    return (
      <S.Overlay onClick={closeModal}>
        <S.Modal onClick={(e) => e.stopPropagation()}>
          <S.Container>
            <S.HeaderWrapper>
              <S.Header>
                <S.HeaderTitle>{title}</S.HeaderTitle>
                <S.HeaderSubTitle>{subTitle}</S.HeaderSubTitle>
              </S.Header>
              {withCloseButton && (
                <S.CloseButton onClick={closeModal}>X</S.CloseButton>
              )}
            </S.HeaderWrapper>
            {children}
            {Footer}
          </S.Container>
        </S.Modal>
      </S.Overlay>
    )
  },
)

ModalTemplate.displayName = "ModalTemplate"
