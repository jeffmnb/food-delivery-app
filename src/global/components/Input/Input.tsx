import { S } from "./Input.styles"
import { InputProps } from "./Input.types"

export const Input = ({ value, onChange, label, ...props }: InputProps) => {
  return (
    <>
      <S.InputLabel>{label}</S.InputLabel>
      <S.Input {...props} value={value} onChange={onChange} />
    </>
  )
}
