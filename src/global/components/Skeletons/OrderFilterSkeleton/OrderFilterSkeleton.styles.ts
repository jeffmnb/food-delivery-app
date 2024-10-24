import ContentLoader from "react-content-loader"
import { styled } from "styled-components"
import { defaultTheme } from "../../../styles/theme"

export const S = {
  Container: styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  `,
  RectItem: styled(ContentLoader).attrs({
    backgroundColor: defaultTheme.colors.black,
    foregroundColor: defaultTheme.colors.gray_550,
  })`
    width: 12.5rem;
    height: 1.875rem;
  `,
}
