import { z } from "zod"

export const orderFilterSchema = z.object({
  orderId: z.string().min(1),
  clientName: z.string().min(1),
  orderStatus: z.enum(["all", "progress", "canceled", "delivered"]),
})
