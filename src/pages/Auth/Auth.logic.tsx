import { useNavigate } from "react-router-dom"
import { showToast } from "../../global/components/Toast"
import { useState } from "react"
import { SignUpFormSchema } from "./components/SignUpForm/SignUpForm.types"
import { useAuthService } from "../../services/authService/auth.service"

export const useAuthPage = () => {
  const navigate = useNavigate()
  const { authenticate, register } = useAuthService()

  const [authType, setAuthType] = useState<"signIn" | "signUp">("signIn")

  const isSignInSelected = authType === "signIn"

  const handleSelectAuthType = () =>
    authType === "signIn" ? setAuthType("signUp") : setAuthType("signIn")

  const handleSubmitSignIn = async (email: string) => {
    return await authenticate({ email: email })
      .then(({ data }) => {
        showToast({
          message: "Autenticação realizada com sucesso!",
          description: "Bem-vindo(a)",
          type: "success",
          duration: 1500,
          onAutoClose() {
            window.location.href = data
          },
        })
      })
      .catch(() => {
        showToast({
          message: "Oops! revise seu email.",
          type: "error",
        })
      })
  }

  const handleSubmitSignUp = async (fields: SignUpFormSchema) => {
    return await register(fields)
      .then(() => {
        showToast({
          message: "Cadastro realizado com sucesso!",
          description: "Bem-vindo(a)",
          type: "success",
          onAutoClose: () => navigate("/"),
        })
      })
      .catch(() => {
        showToast({
          message: "Oops! revise seus dados.",
          type: "error",
        })
      })
  }

  return {
    isSignInSelected,
    handleSubmitSignUp,
    handleSubmitSignIn,
    handleSelectAuthType,
  }
}
