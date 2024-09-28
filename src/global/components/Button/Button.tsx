import { S } from "./Button.styles"
import { ButtonProps } from "./Button.types"

export const Button = ({ disabled, onClick, children }: ButtonProps) => {
  return (
    <S.Button disabled={disabled} onClick={onClick}>
      {children}
    </S.Button>
  )
}
