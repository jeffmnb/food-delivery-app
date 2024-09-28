import { S } from "./Input.styles"
import { InputProps } from "./Input.types"

export const Input = ({ value, onChange, label }: InputProps) => {
  return (
    <>
      <S.InputLabel>{label}</S.InputLabel>
      <S.Input value={value} onChange={onChange} />
    </>
  )
}
