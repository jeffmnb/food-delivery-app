import { S } from "./CardDetails.styles"
import { CardDetailsProps } from "./CardDetails.types"

export const CardDetails = ({
  title,
  type = "order",
  cardKey,
  metrics,
  period = "monthly",
}: CardDetailsProps) => {
  const renderValue = () => {
    if (type === "money" && cardKey === "monthReceipt") {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(metrics?.receipt!)
    }
    return metrics?.amount
  }

  const getTypeMetric = () => {
    switch (cardKey) {
      case "dayOrdersAmount":
        return metrics?.diffFromYesterday
      default:
        return metrics?.diffFromLastMonth
    }
  }

  const renderPercentage = () => {
    if (metrics?.diffFromLastMonth! >= 0 || metrics?.diffFromYesterday! >= 0)
      return (
        <S.Percentage variant={"positive"}>+{getTypeMetric()}%</S.Percentage>
      )
    return <S.Percentage variant={"negative"}>{getTypeMetric()}%</S.Percentage>
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
