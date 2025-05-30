import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { S } from "./SignInForm.styles"
import { SignInFormProps, SignInFormSchemaType } from "./SignInForm.types"
import { signInFormSchema } from "./SignInForm.utils"
import { Input } from "@/global/components/Input"
import { Button } from "@/global/components/Button"

export const SignInForm = ({ onClickSignIn }: SignInFormProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<SignInFormSchemaType>({
    defaultValues: { email: "" },
    resolver: zodResolver(signInFormSchema),
  })

  return (
    <S.Container>
      <S.Title>Acesse seus pedidos</S.Title>
      <S.Subtitle>Acompanhe todos seus pedidos agora mesmo!</S.Subtitle>
      <S.InputArea>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              label="Seu e-mail"
              value={field.value || ""}
              onChange={({ target }) =>
                field.onChange((target as HTMLInputElement).value)
              }
            />
          )}
        />
      </S.InputArea>
      <Button
        variant="primary"
        disabled={!isValid}
        onClick={handleSubmit(({ email }) => {
          reset()
          onClickSignIn(email)
        })}
      >
        Acessar painel
      </Button>
    </S.Container>
  )
}
