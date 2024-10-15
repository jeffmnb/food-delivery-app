import { useMutation } from "@tanstack/react-query"
import { SignUpFormSchema } from "../../pages/Auth/components/SignUpForm/SignUpForm.types"
import { client } from "../server"
import { SignIn } from "./auth.types"

export const useAuthService = () => {
  const signInService = async ({ email }: SignIn) => {
    return await client.post("/authenticate", { email }).catch((err) => {
      console.error("@services/auth.service.ts/signIn", err)
      throw err
    })
  }

  const signUpService = async (variables: SignUpFormSchema) => {
    return await client.post("/restaurants", variables).catch((err) => {
      console.error("@services/auth.service.ts/signUp", err)
      throw err
    })
  }

  const signOutService = async () => {
    return await client.post("/sign-out").catch((err) => {
      console.error("@services/auth.service.ts/signOut", err)
      throw err
    })
  }

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signInService,
  })
  const { mutateAsync: register } = useMutation({ mutationFn: signUpService })
  const { mutateAsync: signOut } = useMutation({ mutationFn: signOutService })

  return { authenticate, register, signOut }
}
