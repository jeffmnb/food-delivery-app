import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { GlobalStyle } from "./global/styles/global.styles"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./global/styles/theme"

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
