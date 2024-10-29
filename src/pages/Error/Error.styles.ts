import { styled } from "styled-components"

export const S = {
  Contaner: styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
    align-items: center;
  `,

  Title: styled.h1`
    color: ${({ theme }) => theme.colors.white};
  `,
  Subtitle: styled.button`
    color: ${({ theme }) => theme.colors.white};

    & > span {
      &:hover {
        cursor: pointer;
      }
      color: ${({ theme }) => theme.colors.blue_400};
    }
  `,
  Span: styled.span``,
}
