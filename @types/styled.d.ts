import "styled-components"
import { defaultTheme } from "../src/styles/theme"

type DefaultThemeType = typeof defaultTheme

declare module "styled-components" {
  export interface DefaultTheme extends DefaultThemeType {
    readonly
  }
}
