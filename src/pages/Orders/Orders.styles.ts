import { styled } from "styled-components"

export const S = {
  Container: styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.black};
    padding: 1.8rem;
  `,
  TitlePage: styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  `,
}
