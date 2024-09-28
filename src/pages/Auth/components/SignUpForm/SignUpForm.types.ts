import * as zod from "zod"
import { signUpFormSchema } from "./SignUpForm.utils"

export type SignUpFormProps = {
  onClickSignUp: () => void
}

export type SignUpFormSchemaType = zod.infer<typeof signUpFormSchema>
