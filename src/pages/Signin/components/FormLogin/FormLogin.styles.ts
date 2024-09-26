import { styled } from "styled-components"

export const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  `,
  Title: styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
  `,
  Subtitle: styled.p`
    color: ${({ theme }) => theme.colors.gray_400};
    margin-bottom: 1rem;
  `,
  InputArea: styled.div`
    text-align: start;
  `,
  InputLabel: styled.p`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 5px;
  `,
  Input: styled.input`
    width: 100%;
    padding: 0.625rem;
  `,
  Button: styled.button`
    padding: 0.625rem;
    background-color: ${({ theme }) => theme.colors.red_600};
    color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.3s;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.red_500};
    }
  `,
}
