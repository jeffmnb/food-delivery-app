import { createRef } from "react"
import { ModalTemplate } from "../../../../global/components/ModalTemplate"
import {
  EditProfileFormSchema,
  EditProfileModalRef,
} from "./EditProfileModal.types"
import { Controller, useForm } from "react-hook-form"
import { editProfileFormSchema } from "./EditProfileModal.utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { S } from "./EditProfileModal.styles"
import { useUpdateProfile } from "../../../../services/updateProfile/updateProfile.service"
import { showToast } from "../../../../global/components/Toast"

const editProfileModalRef = createRef<EditProfileModalRef>()
export const openEditProfileModal = () => editProfileModalRef.current?.open()
export const closeEditProfileModal = () => editProfileModalRef.current?.close()

export const EditProfileModal = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<EditProfileFormSchema>({
    resolver: zodResolver(editProfileFormSchema),
    defaultValues: {
      description: "",
      name: "",
    },
  })

  const { updateProfile } = useUpdateProfile()

  const handleSaveProfile = async ({
    description,
    name,
  }: EditProfileFormSchema) => {
    return await updateProfile({ name, description })
      .then(() => {
        reset()
        closeEditProfileModal()
        showToast({
          message: "Dados atualizados com sucesso.",
          type: "success",
        })
      })
      .catch(() => {
        showToast({
          message: "Oops! não foi possível atualizar no momento.",
          type: "error",
        })
      })
  }

  return (
    <ModalTemplate
      ref={editProfileModalRef}
      withCloseButton
      title="Perfil do restaurante"
      subTitle="Atualize as informações do seu estabelecimento."
    >
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <S.InputArea>
            <S.Label>Nome</S.Label>
            <S.Input
              value={field.value}
              onChange={({ target }) => field.onChange(target.value)}
            />
          </S.InputArea>
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field }) => (
          <S.InputArea>
            <S.Label>Descrição</S.Label>
            <S.TextArea
              value={field.value}
              onChange={({ target }) => field.onChange(target.value)}
            />
          </S.InputArea>
        )}
      />

      <S.Footer>
        <S.CancelButton onClick={closeEditProfileModal}>
          Cancelar
        </S.CancelButton>
        <S.SaveButton
          disabled={!isValid}
          onClick={handleSubmit(handleSaveProfile)}
        >
          Salvar
        </S.SaveButton>
      </S.Footer>
    </ModalTemplate>
  )
}
