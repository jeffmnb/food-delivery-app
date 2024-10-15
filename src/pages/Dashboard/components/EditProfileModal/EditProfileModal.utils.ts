import { z } from "zod"

export const editProfileFormSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(2),
})
