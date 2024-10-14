import { useNavigate } from "react-router-dom"
import { showToast } from "../../global/components/Toast"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { signIn } from "../../services/authService/auth.service"

export const useAuthPage = () => {
  const navigate = useNavigate()

  const [authType, setAuthType] = useState<"signIn" | "signUp">("signIn")

  const isSignInSelected = authType === "signIn"

  const { mutateAsync: authenticate } = useMutation({ mutationFn: signIn })

  const handleSelectAuthType = () =>
    authType === "signIn" ? setAuthType("signUp") : setAuthType("signIn")

  const handleSubmitSignIn = async (email: string) => {
    return await authenticate({ email: email })
      .then(() => {
        showToast({
          message: "Autenticação realizada com sucesso!",
          description: "Bem-vindo(a)",
          type: "success",
          onAutoClose: () => navigate("/"),
        })
      })
      .catch(() => {
        showToast({
          message: "Oops! revise seu email.",
          type: "error",
        })
      })
  }

  const handleSubmitSignUp = () => {
    showToast({
      message: "Cadastro realizado com sucesso!",
      description: "Bem-vindo(a)",
      type: "success",
      onAutoClose: () => navigate("/"),
    })
  }

  return {
    isSignInSelected,
    handleSubmitSignUp,
    handleSubmitSignIn,
    handleSelectAuthType,
  }
}
