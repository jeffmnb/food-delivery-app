import { styled } from "styled-components"
import ContentLoader from "react-content-loader"
import { defaultTheme } from "../../../styles/theme"

export const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    gap: 1.5rem;
  `,
  RectItem: styled(ContentLoader).attrs({
    backgroundColor: defaultTheme.colors.black,
    foregroundColor: defaultTheme.colors.gray_550,
  })`
    width: 22rem;
    height: 8.875rem;
  `,
}
