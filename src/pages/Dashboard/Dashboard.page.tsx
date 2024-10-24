import { Render } from "../../global/components/Render/Render"
import { CardDetailsSkeleton } from "../../global/components/Skeletons/CardDetailsSkeleton/CardDetailsSkeleton"
import { Toast } from "../../global/components/Toast"
import { CardDetails } from "./components/CardDetails"
import { PopularProductsChart } from "./components/Charts/PopularProductsChart"
import { RevenueChart } from "./components/Charts/RevenueChart/RevenueChart"
import { EditProfileModal } from "./components/EditProfileModal"
import { S } from "./Dashboard.styles"
import { useDashboardPage } from "./Dashboard.logic"

export const DashboardPage = () => {
  const { isLoading } = useDashboardPage()
  return (
    <S.Container>
      <S.TitlePage>Dashboard</S.TitlePage>

      <Render.If isTrue={isLoading}>
        <CardDetailsSkeleton />
      </Render.If>

      <Render.If isTrue={!isLoading}>
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
      </Render.If>

      <EditProfileModal />
      <Toast richColors position="bottom-right" />
    </S.Container>
  )
}
