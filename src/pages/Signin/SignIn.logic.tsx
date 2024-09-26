import { useNavigate } from "react-router-dom"

export const useSignInPage = () => {
  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate("/")
  }

  return { handleSignIn }
}
