import { useState } from "react"
import { S } from "./Header.styles"
import { PathProps } from "./Header.types"
import { Render } from "../Render/Render"
import { Dropdown } from "../DropDown"

export const Header = () => {
  const [pathSelected, setPathSelected] = useState<PathProps>("home")

  const [themeSelected, setThemeSelected] = useState<"dark" | "light">("light")
  return (
    <S.Container>
      <S.PathsArea>
        <S.PizzaIcon />
        <S.PathItem
          isPathSelected={pathSelected === "home"}
          onClick={() => setPathSelected("home")}
        >
          <S.PathIcon iconName="Home" />
          <S.PathTitle>Início</S.PathTitle>
        </S.PathItem>
        <S.PathItem
          isPathSelected={pathSelected === "orders"}
          onClick={() => setPathSelected("orders")}
        >
          <S.PathIcon iconName="Orders" />
          <S.PathTitle>Pedidos</S.PathTitle>
        </S.PathItem>
      </S.PathsArea>

      <S.MenuArea>
        <S.ThemeArea>
          <Render.If isTrue={themeSelected === "dark"}>
            <S.ThemeIcon
              onClick={() => setThemeSelected("light")}
              iconName="Moon"
            />
          </Render.If>
          <Render.If isTrue={themeSelected === "light"}>
            <S.ThemeIcon
              onClick={() => setThemeSelected("dark")}
              iconName="Sun"
            />
          </Render.If>
        </S.ThemeArea>
        <Dropdown />
      </S.MenuArea>
    </S.Container>
  )
}
