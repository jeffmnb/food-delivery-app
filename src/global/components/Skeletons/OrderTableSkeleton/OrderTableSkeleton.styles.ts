import ContentLoader from "react-content-loader"
import { styled } from "styled-components"
import { defaultTheme } from "../../../styles/theme"

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  `,
  RectItem: styled(ContentLoader).attrs({
    backgroundColor: defaultTheme.colors.black,
    foregroundColor: defaultTheme.colors.gray_550,
  })`
    width: 100%;
    height: 3.125rem;
  `,
}
