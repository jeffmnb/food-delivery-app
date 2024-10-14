import { client } from "../server"
import { SignIn } from "./auth.types"

export const signIn = async ({ email }: SignIn) => {
  return client.post("/authenticate", { email }).catch((err) => {
    console.error("@services/auth.service.ts", err)
    throw err
  })
}
