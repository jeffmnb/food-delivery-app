import { Render } from "../../global/components/Render/Render"
import { CardDetailsSkeleton } from "../../global/components/Skeletons/CardDetailsSkeleton/CardDetailsSkeleton"
import { Toast } from "../../global/components/Toast"
import { CardDetails } from "./components/CardDetails"
import { PopularProductsChart } from "./components/Charts/PopularProductsChart"
import { RevenueChart } from "./components/Charts/RevenueChart/RevenueChart"
import { EditProfileModal } from "./components/EditProfileModal"
import { S } from "./Dashboard.styles"
import { useDashboardPage } from "./Dashboard.logic"
import { Revenues } from "./components/Charts/RevenueChart/RevenueChart.types"

export const DashboardPage = () => {
  const { isLoading, metrics } = useDashboardPage()

  return (
    <S.Container>
      <S.TitlePage>Dashboard</S.TitlePage>

      <Render.If isTrue={isLoading}>
        <CardDetailsSkeleton />
      </Render.If>

      <Render.If isTrue={!isLoading}>
        <S.CardsWrapper>
          <CardDetails
            cardKey="monthReceipt"
            title="Receita total (mês)"
            type="money"
            metrics={metrics?.monthReceipt!}
          />
          <CardDetails
            cardKey="monthOrdersAmount"
            title="Pedidos (mês)"
            metrics={metrics?.monthOrdersAmount!}
          />
          <CardDetails
            cardKey="dayOrdersAmount"
            title="Pedidos (dia)"
            period="daily"
            metrics={metrics?.dayOrdersAmount!}
          />
          <CardDetails
            cardKey="monthCanceledOrdersAmount"
            title="Cancelamento (mês)"
            metrics={metrics?.monthCanceledOrdersAmount!}
          />
        </S.CardsWrapper>

        <S.Charts>
          <S.RevenueChartWrapper>
            <S.RevenueChartHeader>
              <S.Title>Receita no período</S.Title>
              <S.Subtitle>Receita diária no período</S.Subtitle>
            </S.RevenueChartHeader>
            <RevenueChart
              revenues={metrics?.dailyReceiptInPeriod! as Revenues[]}
            />
          </S.RevenueChartWrapper>

          <S.PopularProductsChartWrapper>
            <S.Title>Produtos populares</S.Title>
            <PopularProductsChart products={metrics?.popularProducts!} />
          </S.PopularProductsChartWrapper>
        </S.Charts>
      </Render.If>

      <EditProfileModal />
      <Toast richColors position="bottom-right" />
    </S.Container>
  )
}
