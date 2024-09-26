import { styled } from "styled-components"
import { Pizza } from "lucide-react"

export const S = {
  Container: styled.div`
    display: flex;
    flex: 1;
  `,
  AnimationArea: styled.div`
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    flex: 1;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.gray_600};
  `,
  AnimationHeader: styled.div`
    display: flex;
    padding: 2rem;
    gap: 1rem;
  `,
  IconPizza: styled(Pizza).attrs({ size: "1.375rem" })`
    color: ${({ theme }) => theme.colors.white};
  `,
  AnimationHeaderTitle: styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
  `,
  AnimationFooterTitle: styled.p`
    padding: 2rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray_400};
  `,
  LoginArea: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.black};
    height: 100vh;
    flex: 1.2;
    color: gray;
  `,
  LoginHeaderTitle: styled.p`
    align-self: flex-end;
    &:hover {
      cursor: pointer;
    }
  `,
  FormWrapper: styled.div`
    position: absolute;
    align-self: center;
    top: 36vh;
    width: fit-content;
  `,
}
