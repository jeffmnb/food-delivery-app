import { styled } from "styled-components"
import { ButtonProps } from "./Button.types"

export const S = {
  Button: styled.button<Pick<ButtonProps, "variant">>`
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    height: ${({ variant }) => (variant === "primary" ? "auto" : "35px")};
    padding: 0.625rem;
    background-color: ${({ theme, variant }) =>
      variant === "primary" ? theme.colors.red_600 : theme.colors.black};
    border: ${({ variant, theme }) =>
      variant === "primary" ? "none" : `1px ${theme.colors.gray_600} solid`};
    font-size: ${({ variant }) => (variant === "primary" ? "1rem" : "0.9rem")};
    color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.3s;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme, variant }) =>
        variant === "primary" ? theme.colors.red_500 : theme.colors.gray_600};
    }

    &:disabled {
      opacity: 0.65;
      cursor: not-allowed;
    }
  `,
}
