/* eslint-disable import/no-unresolved */
import { createRef, useImperativeHandle } from "react"
import { toast, Toaster, ToasterProps } from "sonner"
import { ToastProps, ToastRef } from "./Toast.types"
import "./styles.css"

const toastRef = createRef<ToastRef>()

export const showToast = (props: ToastProps) => toastRef.current?.open(props)

export const Toast = ({
  richColors = true,
  position = "bottom-right",
}: Pick<ToasterProps, "position" | "richColors">) => {
  useImperativeHandle(toastRef, () => ({
    open: ({ message, description, duration, action, type, onAutoClose }) =>
      toast[type](message, {
        action: action,
        description: description,
        duration: duration,
        onAutoClose: () =>
          setTimeout(() => {
            onAutoClose?.()
          }, 500),
        classNames: { closeButton: "closeButton" },
      }),
  }))

  return (
    <Toaster
      closeButton
      theme="system"
      position={position}
      richColors={richColors}
    />
  )
}
