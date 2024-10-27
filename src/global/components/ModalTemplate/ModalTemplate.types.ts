export type ModalTemplateRef = {
  open: (params?: any) => void
  close: () => void
}

export type ModalTemplateProps = {
  withCloseButton?: boolean
  fullSize?: boolean
  onDismiss?: () => void
  children?: React.ReactNode
  title?: string
  subTitle?: string
  footerComponent?: React.ReactNode
}
