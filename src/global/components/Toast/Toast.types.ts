export type ToastType = "success" | "error" | "warning"

export type ToastRef = {
  open: (props: ToastProps) => string | number
}

export type ToastProps = {
  type: ToastType
  message: string
  description?: string
  duration?: number
  action?: {
    onClick: () => void
    label: string
  }
  onAutoClose?: () => void
}
