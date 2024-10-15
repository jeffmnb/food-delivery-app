import { z } from "zod"
import { editProfileFormSchema } from "./EditProfileModal.utils"

export type EditProfileModalRef = {
  open: () => void
  close: () => void
}

export type EditProfileFormSchema = z.infer<typeof editProfileFormSchema>
