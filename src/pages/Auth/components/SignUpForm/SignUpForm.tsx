import { Controller, useForm } from "react-hook-form"
import { S } from "./SignUpForm.styles"
import { SignUpFormProps, SignUpFormSchemaType } from "./SignUpForm.types"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpFormSchema } from "./SignUpForm.utils"
import { Button } from "../../../../global/components/Button/Button"
import { Input } from "../../../../global/components/Input"

export const SignUpForm = ({ onClickSignUp }: SignUpFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<SignUpFormSchemaType>({
    resolver: zodResolver(signUpFormSchema),
  })

  return (
    <S.Container>
      <S.Title>Crie uma conta grátis</S.Title>
      <S.Subtitle>Seja um parceiro e comece suas vendas!</S.Subtitle>
      <S.InputArea>
        <Controller
          control={control}
          name="businessName"
          render={({ field }) => (
            <Input
              label="Nome do estabelecimento"
              value={field.value || ""}
              onChange={({ target }) =>
                field.onChange((target as HTMLInputElement).value)
              }
            />
          )}
        />

        <Controller
          control={control}
          name="ownerBusinnessName"
          render={({ field }) => (
            <Input
              label="Seu nome"
              value={field.value || ""}
              onChange={({ target }) =>
                field.onChange((target as HTMLInputElement).value)
              }
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              type="email"
              label="Seu e-mail"
              value={field.value || ""}
              onChange={({ target }) =>
                field.onChange((target as HTMLInputElement).value)
              }
            />
          )}
        />

        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <Input
              type="number"
              label="Seu celular"
              value={field.value || ""}
              onChange={({ target }) =>
                field.onChange(parseInt((target as HTMLInputElement).value))
              }
            />
          )}
        />
      </S.InputArea>
      <Button disabled={!isValid} onClick={handleSubmit(onClickSignUp)}>
        Finalizar cadastro
      </Button>
    </S.Container>
  )
}
