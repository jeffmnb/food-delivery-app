import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { GlobalStyle } from "./global/styles/global.styles"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./global/styles/theme"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./services/server"

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
