import { CardDetails } from "./components/CardDetails"
import { S } from "./Dashboard.styles"

export const DashboardPage = () => {
  return (
    <S.Container>
      <S.TitlePage>Dashboard</S.TitlePage>
      <S.CardsWrapper>
        <CardDetails title="Receita total (mês)" type="money" value={1248} />
        <CardDetails title="Pedidos (mês)" value={246} />
        <CardDetails title="Pedidos (dia)" period="daily" value={12} />
        <CardDetails title="Cancelamento (mês)" value={32} />
      </S.CardsWrapper>
    </S.Container>
  )
}
