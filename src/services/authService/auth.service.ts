import { useMutation } from "@tanstack/react-query"
import { SignUpFormSchema } from "../../pages/Auth/components/SignUpForm/SignUpForm.types"
import { client } from "../server"
import { SignIn } from "./auth.types"

export const useAuthService = () => {
  const signIn = async ({ email }: SignIn) => {
    await client.post("/authenticate", { email }).catch((err) => {
      console.error("@services/auth.service.ts/signIn", err)
      throw err
    })
  }

  const signUp = async (variables: SignUpFormSchema) => {
    return await client.post("/restaurants", variables).catch((err) => {
      console.error("@services/auth.service.ts/signUp", err)
      throw err
    })
  }
  const { mutateAsync: authenticate } = useMutation({ mutationFn: signIn })
  const { mutateAsync: register } = useMutation({ mutationFn: signUp })

  return { authenticate, register }
}
