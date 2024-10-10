import { CardDetails } from "./components/CardDetails"
import { PopularProductsChart } from "./components/Charts/PopularProductsChart"
import { RevenueChart } from "./components/Charts/RevenueChart/RevenueChart"
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

      <S.Charts>
        <S.RevenueChartWrapper>
          <S.RevenueChartHeader>
            <div>
              <S.Title>Receita no período</S.Title>
              <S.Subtitle>Receita diária no período</S.Subtitle>
            </div>

            <p>MyDatePicker</p>
          </S.RevenueChartHeader>
          <RevenueChart />
        </S.RevenueChartWrapper>

        <S.PopularProductsChartWrapper>
          <S.Title>Produtos populares</S.Title>
          <PopularProductsChart />
        </S.PopularProductsChartWrapper>
      </S.Charts>
    </S.Container>
  )
}
