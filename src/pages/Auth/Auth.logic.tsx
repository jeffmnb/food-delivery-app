import { useNavigate } from "react-router-dom"
import { showToast } from "../../global/components/Toast"
import { useState } from "react"

export const useAuthPage = () => {
  const navigate = useNavigate()

  const [authType, setAuthType] = useState<"signIn" | "signUp">("signIn")

  const isSignInSelected = authType === "signIn"

  const handleSelectAuthType = () =>
    authType === "signIn" ? setAuthType("signUp") : setAuthType("signIn")

  const handleSubmitSignIn = () => {
    showToast({
      message: "Autenticação realizada com sucesso!",
      description: "Bem-vindo(a)",
      type: "success",
      onAutoClose: () => navigate("/"),
    })
  }

  const handleSubmitSignUp = () => navigate("/signup")

  return {
    isSignInSelected,
    handleSubmitSignUp,
    handleSubmitSignIn,
    handleSelectAuthType,
  }
}
