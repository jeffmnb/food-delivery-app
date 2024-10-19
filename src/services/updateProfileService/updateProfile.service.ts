import { useMutation } from "@tanstack/react-query"
import { client } from "../server"
import { UpdateProfile } from "./updateProfile.types"

export const useUpdateProfile = () => {
  const updateProfileService = async (variables: UpdateProfile) => {
    return await client.put("/profile", variables).catch((err) => {
      console.error("@services/updateProfile.service.ts/updateProfile", err)
      throw err
    })
  }
  const { mutateAsync: updateProfile } = useMutation({
    mutationFn: updateProfileService,
  })

  return { updateProfile }
}
