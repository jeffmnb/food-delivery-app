import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { GlobalStyle } from "./styles/global.styles"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme"

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
