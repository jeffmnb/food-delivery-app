import * as zod from "zod"

export const loginFormSchema = zod.object({
  email: zod.string().email("Digite um email válido"),
})
