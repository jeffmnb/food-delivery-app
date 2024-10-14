import { Controller, useForm } from "react-hook-form"
import { S } from "./SignUpForm.styles"
import { SignUpFormProps, SignUpFormSchema } from "./SignUpForm.types"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpFormSchema } from "./SignUpForm.utils"
import { Button } from "../../../../global/components/Button/Button"
import { Input } from "../../../../global/components/Input"

export const SignUpForm = ({ onClickSignUp }: SignUpFormProps) => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
    reset,
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
  })

  return (
    <S.Container>
      <S.Title>Crie uma conta grátis</S.Title>
      <S.Subtitle>Seja um parceiro e comece suas vendas!</S.Subtitle>
      <S.InputArea>
        <Controller
          control={control}
          name="restaurantName"
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
          name="managerName"
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
              maxLength={11}
              label="Seu celular"
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
        onClick={handleSubmit((fields) => {
          reset()
          onClickSignUp(fields)
        })}
      >
        Finalizar cadastro
      </Button>
      <S.AgreementText>
        {
          "Ao continuar, você estará concordando com nossos {w=500,td=underline,cur=pointer}termos de serviço{w,td,cur} e {w=500,td=underline,cur=pointer}políticas de privacidade.{w,td,cur}"
        }
      </S.AgreementText>
    </S.Container>
  )
}
