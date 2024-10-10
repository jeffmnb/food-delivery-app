import { createGlobalStyle } from "styled-components"
import { defaultTheme } from "./theme"

const devices = {
  mobile: "@media screen and (max-width: 770px)",
  tablet: "@media (min-width: 770px) and (max-width: 1024px)",
  desktop: `@media screen and (min-width: 1024px`,
} as const

export const caseDevice = (device: keyof typeof devices) => devices[device]

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow:none;
    }

    body, input, textarea, button {
        background-color: ${defaultTheme.colors.black};
        border: 0;
        box-shadow: none;
        border-radius: 5px;
        font: 400 1rem ${({ theme }) => theme.fonts.roboto};
    }

    a{
        text-decoration: none; 
    }
`
