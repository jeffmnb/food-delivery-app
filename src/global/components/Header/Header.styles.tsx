import { Pizza, House, UtensilsCrossed, Moon, Sun } from "lucide-react"
import { styled } from "styled-components"
import { HeaderProps, PathItemProps, ThemeIconProps } from "./Header.types"
import { defaultTheme } from "../../styles/theme"

const BaseIcon = ({ iconName, ...props }: HeaderProps) => {
  if (iconName === "Home") return <House {...props} />
  if (iconName === "Orders") return <UtensilsCrossed {...props} />
  if (iconName === "Moon") return <Moon {...props} />
  if (iconName === "Sun") return <Sun {...props} />
}

export const S = {
  Container: styled.header`
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.black};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px ${({ theme }) => theme.colors.gray_600} solid;
  `,
  PizzaIcon: styled(Pizza).attrs({ size: "1.5rem" })`
    color: ${({ theme }) => theme.colors.white};
  `,
  PathsArea: styled.div`
    display: flex;
    gap: 2rem;
  `,
  MenuArea: styled.div`
    display: flex;
    gap: 1rem;
  `,
  ThemeArea: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border: 1px ${({ theme }) => theme.colors.gray_600} solid;
    border-radius: 5px;
    padding: 7px 10px;
  `,
  PathItem: styled.div.withConfig({
    shouldForwardProp: (prop) => !prop.includes("isPathSelected"),
  })<PathItemProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: ${({ isPathSelected, theme }) =>
      isPathSelected ? theme.colors.white : theme.colors.gray_500};

    &:nth-child(2) {
      padding-left: 1.7rem;
      border-left: 1px ${({ theme }) => theme.colors.gray_600} solid;
    }

    &:hover {
      cursor: pointer;
    }

    transition: color 0.5s;
  `,
  PathIcon: styled(BaseIcon).attrs({
    size: "1.1rem",
  })``,
  PathTitle: styled.p``,
  ThemeIcon: styled(BaseIcon).attrs({
    color: defaultTheme.colors.white,
    size: "1.3rem",
  })<ThemeIconProps>`
    cursor: pointer;
    transition: transform
      ${({ iconName }) => (iconName === "Moon" ? "1s" : "2s")} ease-in-out;

    &:hover {
      transform: rotate(360deg);
    }
  `,
}
