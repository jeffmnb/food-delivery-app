import * as zod from "zod"
import { signInFormSchema } from "./SignInForm.utils"

export type SignInFormProps = {
  onClickSignIn: () => void
}

export type SignInFormSchemaType = zod.infer<typeof signInFormSchema>
