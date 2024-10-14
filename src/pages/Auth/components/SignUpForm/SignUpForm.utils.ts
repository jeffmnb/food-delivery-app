import * as zod from "zod"

export const signUpFormSchema = zod.object({
  restaurantName: zod.string().min(2),
  managerName: zod.string().min(2),
  email: zod.string().email("Digite um email válido"),
  phone: zod.string().refine((value) => value.length === 11),
})
