import { z } from "zod"

export const orderFilterSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z
    .enum(["pending", "canceled", "processing", "delivering", "delivered"])
    .optional(),
})
