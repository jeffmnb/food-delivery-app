import { useState, useEffect, useRef } from "react"
import { S } from "./DropDown.styles"

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (!dropdownRef.current?.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <S.Container ref={dropdownRef}>
      <S.DropdownButton onClick={toggleDropdown}>
        <>
          <S.DropdownTitle>Nome do lugar</S.DropdownTitle>
          <S.ChevronDown />
        </>
      </S.DropdownButton>
      {isOpen && (
        <S.ListItems onClick={toggleDropdown}>
          <S.Item>
            <S.Building />
            Perfil da loja
          </S.Item>

          <S.Item>
            <S.DoorOpen />
            Sair
          </S.Item>
        </S.ListItems>
      )}
    </S.Container>
  )
}
