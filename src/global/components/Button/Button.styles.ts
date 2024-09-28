import { styled } from "styled-components"

export const S = {
  Button: styled.button`
    padding: 0.625rem;
    background-color: ${({ theme }) => theme.colors.red_600};
    color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.3s;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.red_500};
    }

    &:disabled {
      opacity: 0.65;
      cursor: not-allowed;
    }
  `,
}
