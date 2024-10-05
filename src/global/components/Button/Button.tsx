import { Search, X } from "lucide-react"
import { Render } from "../Render/Render"
import { S } from "./Button.styles"
import { ButtonProps } from "./Button.types"

export const Button = ({
  disabled,
  onClick,
  children,
  variant,
  typeIcon,
}: ButtonProps) => {
  const getButtonIcon = () => {
    if (typeIcon === "search") return <Search size={"1.1rem"} />
    if (typeIcon === "remove") return <X size={"1.1rem"} />
  }

  return (
    <S.Button variant={variant} disabled={disabled} onClick={onClick}>
      <Render.If isTrue={variant === "secondary"}>{getButtonIcon()}</Render.If>
      {children}
    </S.Button>
  )
}
