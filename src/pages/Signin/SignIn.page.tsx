import { S } from "./SignIn.styles"
import Lottie from "lottie-react"
import DeliveryLottie from "../../assets/delivey-lottie.json"
import { FormLogin } from "./components/FormLogin"
import { useSignInPage } from "./SignIn.logic"

export const Signin = () => {
  const { handleSignIn } = useSignInPage()

  return (
    <S.Container>
      <S.AnimationArea>
        <S.AnimationHeader>
          <S.IconPizza />
          <S.AnimationHeaderTitle>delivery.app</S.AnimationHeaderTitle>
        </S.AnimationHeader>
        <Lottie animationData={DeliveryLottie} />
        <S.AnimationFooterTitle>
          Painel do parceiro @ delivery.app - 2024
        </S.AnimationFooterTitle>
      </S.AnimationArea>
      <S.LoginArea>
        <S.LoginHeaderTitle>Novo estabelecimento</S.LoginHeaderTitle>
        <S.FormWrapper>
          <FormLogin onClickLogin={handleSignIn} />
        </S.FormWrapper>
      </S.LoginArea>
    </S.Container>
  )
}
