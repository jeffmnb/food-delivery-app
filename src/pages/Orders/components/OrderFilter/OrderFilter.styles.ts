import { styled } from "styled-components"

export const S = {
  Container: styled.div`
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  `,
  Label: styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    font-weight: bold;
  `,
  FilterInput: styled.input`
    width: 13.75rem;
    background-color: transparent;
    border: 1px ${({ theme }) => theme.colors.gray_600} solid;
    border-radius: 0.3125rem;
    padding: 0.4375rem 0.625rem;
    color: ${({ theme }) => theme.colors.white};
  `,
}
