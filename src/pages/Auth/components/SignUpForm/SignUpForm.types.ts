import * as zod from "zod"
import { signUpFormSchema } from "./SignUpForm.utils"

export type SignUpFormProps = {
  onClickSignUp: (fields: SignUpFormSchema) => void
}

export type SignUpFormSchema = zod.infer<typeof signUpFormSchema>
