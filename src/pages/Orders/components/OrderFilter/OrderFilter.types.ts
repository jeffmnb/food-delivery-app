import { z } from "zod"
import { orderFilterSchema } from "./OrderFilter.utils"
export type OrderFilterInput = z.infer<typeof orderFilterSchema>

export type OrderFilterProps = {
  onSearchSubmit: (values: OrderFilterInput) => void
}
