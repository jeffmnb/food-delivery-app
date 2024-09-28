import * as zod from "zod"

export const signUpFormSchema = zod.object({
  businessName: zod.string().min(2),
  ownerBusinnessName: zod.string().min(2),
  email: zod.string().email("Digite um email válido"),
  phone: zod.number().min(11),
})
