import { S } from "./FormLogin.styles"
import { FormLoginProps } from "./FormLogin.types"

export const FormLogin = ({ onClickLogin }: FormLoginProps) => {
  return (
    <S.Container>
      <S.Title>Acesse seus pedidos</S.Title>
      <S.Subtitle>Acompanhe todos seus pedidos agora mesmo!</S.Subtitle>
      <S.InputArea>
        <S.InputLabel>Seu e-mail</S.InputLabel>
        <S.Input />
      </S.InputArea>
      <S.Button onClick={onClickLogin}>Acessar painel</S.Button>
    </S.Container>
  )
}
