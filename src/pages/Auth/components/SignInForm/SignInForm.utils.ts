import * as zod from "zod"

export const signInFormSchema = zod.object({
  email: zod.string().email("Digite um email válido"),
})
