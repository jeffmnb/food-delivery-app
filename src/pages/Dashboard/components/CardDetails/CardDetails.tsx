import { S } from "./CardDetails.styles"
import { CardDetailsProps } from "./CardDetails.types"

export const CardDetails = ({
  title,
  type = "order",
  value,
  period = "monthly",
}: CardDetailsProps) => {
  const renderValue = () => {
    if (type === "money") {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value)
    }

    return value
  }

  const renderPercentage = () => {
    const value = 19
    if (value > 0)
      return <S.Percentage variant={"positive"}>+{value}%</S.Percentage>
    return <S.Percentage variant={"negative"}>-{value}%</S.Percentage>
  }

  const renderDescription = () => {
    if (period === "monthly") return " em relação ao mês passado"
    if (period === "daily") return " em relação a ontem"
  }

  return (
    <S.Container>
      <S.Icon iconType={type} />
      <S.Title>{title}</S.Title>
      <S.Value>{renderValue()}</S.Value>
      <S.Description>
        {renderPercentage()}
        {renderDescription()}
      </S.Description>
    </S.Container>
  )
}
