import { S } from "./Auth.styles"
import Lottie from "lottie-react"
import { useAuthPage } from "./Auth.logic"
import { SignInForm } from "./components/SignInForm"
import { Toast } from "../../global/components/Toast"
import DeliveryLottie from "../../assets/delivey-lottie.json"
import { SignUpForm } from "./components/SignUpForm"
import { Render } from "../../global/components/Render/Render"

export const AuthPage = () => {
  const {
    isSignInSelected,
    handleSubmitSignIn,
    handleSubmitSignUp,
    handleSelectAuthType,
  } = useAuthPage()

  return (
    <S.Container>
      <S.AnimationArea>
        <S.AnimationHeader>
          <S.PizzaIcon />
          <S.AnimationHeaderTitle>delivery.app</S.AnimationHeaderTitle>
        </S.AnimationHeader>
        <Lottie animationData={DeliveryLottie} />
        <S.AnimationFooterTitle>
          Painel do parceiro @ delivery.app - 2024
        </S.AnimationFooterTitle>
      </S.AnimationArea>
      <S.AuthArea>
        <S.AuthHeaderTitle onClick={handleSelectAuthType}>
          <Render.If isTrue={isSignInSelected}>Novo estabelecimento</Render.If>
          <Render.If isTrue={!isSignInSelected}>Fazer login</Render.If>
        </S.AuthHeaderTitle>
        <S.FormWrapper isSignInSelected={isSignInSelected}>
          <Render.If isTrue={isSignInSelected}>
            <SignInForm onClickSignIn={handleSubmitSignIn} />
          </Render.If>
          <Render.If isTrue={!isSignInSelected}>
            <SignUpForm onClickSignUp={handleSubmitSignUp} />
          </Render.If>
        </S.FormWrapper>
      </S.AuthArea>
      <Toast richColors position="bottom-right" />
    </S.Container>
  )
}
