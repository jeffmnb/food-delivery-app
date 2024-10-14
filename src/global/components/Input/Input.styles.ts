import { styled } from "styled-components"

export const S = {
  InputLabel: styled.p`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.white};
    margin: 1rem 0 0.625rem 0;
  `,
  Input: styled.input`
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: 0.625rem;
  `,
}
