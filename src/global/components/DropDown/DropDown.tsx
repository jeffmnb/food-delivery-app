import { useState, useEffect, useRef } from "react"
import { S } from "./DropDown.styles"
import { DropDownProps } from "./DropDown.types"
import { Render } from "../Render/Render"

export const Dropdown = ({
  title,
  type,
  height,
  onSelectCanceled,
  onSelectDelivered,
  onSelectInProgress,
  onSelectLeave,
  onSelectOwner,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <S.Container ref={dropdownRef}>
      <S.DropdownButton height={height} onClick={() => setIsOpen(!isOpen)}>
        <>
          <S.DropdownTitle>{title}</S.DropdownTitle>
          <S.ChevronDown />
        </>
      </S.DropdownButton>
      {isOpen && (
        <>
          <Render.If isTrue={type === "header"}>
            <S.ListItems onClick={() => setIsOpen(!isOpen)}>
              <S.Item onClick={onSelectOwner}>
                <S.Building />
                Perfil da loja
              </S.Item>
              <S.Item onClick={onSelectLeave} type={type}>
                <S.DoorOpen />
                Sair
              </S.Item>
            </S.ListItems>
          </Render.If>
          <Render.If isTrue={type === "filter"}>
            <S.ListItems onClick={() => setIsOpen(!isOpen)}>
              <S.Item onClick={onSelectDelivered}>Envidado</S.Item>
              <S.Item onClick={onSelectInProgress}>Em andamento</S.Item>
              <S.Item onClick={onSelectCanceled}>Cancelado</S.Item>
            </S.ListItems>
          </Render.If>
        </>
      )}
    </S.Container>
  )
}
