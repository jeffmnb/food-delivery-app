import * as zod from "zod"
import { loginFormSchema } from "./LoginForm.utils"

export type LoginFormProps = {
  onClickLogin: () => void
}

export type LoginFormSchemaType = zod.infer<typeof loginFormSchema>
