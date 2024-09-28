import { useNavigate } from "react-router-dom"
import { showToast } from "../../global/components/Toast"

export const useSignInPage = () => {
  const navigate = useNavigate()

  const handleSignIn = () => {
    showToast({
      message: "Autenticação realizada com sucesso!",
      description: "Bem-vindo(a)",
      type: "success",
      onAutoClose: () => navigate("/"),
    })
  }

  return { handleSignIn }
}
