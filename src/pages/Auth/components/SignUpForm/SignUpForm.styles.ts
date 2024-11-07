import { DynamicText } from "@/global/components/DynamicText"
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
  AgreementText: styled(DynamicText)`
    line-height: 140%;
    font-size: 0.875rem;
  `,
}
