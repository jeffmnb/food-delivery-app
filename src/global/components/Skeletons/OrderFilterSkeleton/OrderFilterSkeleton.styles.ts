import { defaultTheme } from "@/global/styles/theme"
import ContentLoader from "react-content-loader"
import { styled } from "styled-components"

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
