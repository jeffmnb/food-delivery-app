import { styled } from "styled-components"

export const S = {
  InputArea: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    margin-top: 2rem;
  `,
  Label: styled.p`
    color: ${({ theme }) => theme.colors.white};
  `,
  Input: styled.input`
    color: ${({ theme }) => theme.colors.white};
    border: 1px ${({ theme }) => theme.colors.gray_600} solid;
    width: 100%;
    padding: 0.625rem;
    transition: border 0.5s;

    &:focus {
      border: 1px ${({ theme }) => theme.colors.gray_400} solid;
    }
  `,
  TextArea: styled.textarea`
    color: ${({ theme }) => theme.colors.white};
    border: 1px ${({ theme }) => theme.colors.gray_600} solid;
    width: 100%;
    height: 100px;
    padding: 0.625rem;

    &:focus {
      border: 1px ${({ theme }) => theme.colors.gray_500} solid;
    }

    resize: none;
  `,
  Footer: styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
  `,
  CancelButton: styled.button`
    color: ${({ theme }) => theme.colors.white};
    padding: 0.6rem 1rem;
    transition: background-color 0.3s;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.gray_600};
    }
  `,
  SaveButton: styled.button`
    padding: 0.6rem 1rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.green_200};
    border-radius: 0.3125rem;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    &:disabled {
      opacity: 0.5;
    }
  `,
}
