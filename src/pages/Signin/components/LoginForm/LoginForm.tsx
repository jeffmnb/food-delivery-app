import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { S } from "./LoginForm.styles"
import { LoginFormProps, LoginFormSchemaType } from "./LoginForm.types"
import { loginFormSchema } from "./LoginForm.utils"

export const LoginForm = ({ onClickLogin }: LoginFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginFormSchemaType>({
    defaultValues: { email: "" },
    resolver: zodResolver(loginFormSchema),
  })

  return (
    <S.Container>
      <S.Title>Acesse seus pedidos</S.Title>
      <S.Subtitle>Acompanhe todos seus pedidos agora mesmo!</S.Subtitle>
      <S.InputArea>
        <S.InputLabel>Seu e-mail</S.InputLabel>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <S.Input
              value={field.value}
              onChange={({ target }) => field.onChange(target.value)}
            />
          )}
        />
      </S.InputArea>
      <S.Button disabled={!isValid} onClick={handleSubmit(onClickLogin)}>
        Acessar painel
      </S.Button>
    </S.Container>
  )
}
