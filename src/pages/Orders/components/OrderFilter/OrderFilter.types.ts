import { z } from "zod"
import { orderFilterSchema } from "./OrderFilter.utils"
export type OrderFilterSchema = z.infer<typeof orderFilterSchema>
