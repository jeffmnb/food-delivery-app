import { DollarSign, Utensils } from "lucide-react"
import { styled } from "styled-components"
import { CardDetailsIcon, CardDetailsPercentage } from "./CardDetails.types"

const BaseIcon = ({ iconType, ...props }: CardDetailsIcon) => {
  if (iconType === "money") return <DollarSign {...props} size={"1.25rem"} />
  return <Utensils {...props} size={"1.1rem"} />
}

export const S = {
  Container: styled.div`
    position: relative;
    width: 22rem;
    padding: 1.7rem;
    border: 1px ${({ theme }) => theme.colors.gray_600} solid;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
  `,
  Icon: styled(BaseIcon)`
    position: absolute;
    top: 1.8rem;
    right: 2rem;
  `,
  Title: styled.p`
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  `,
  Value: styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  `,
  Description: styled.p`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray_500};
  `,
  Percentage: styled.span.withConfig({
    shouldForwardProp: (prop) => prop !== "variant",
  })<CardDetailsPercentage>`
    color: ${({ theme, variant }) =>
      variant === "positive" ? "green" : theme.colors.red_500};
  `,
}
