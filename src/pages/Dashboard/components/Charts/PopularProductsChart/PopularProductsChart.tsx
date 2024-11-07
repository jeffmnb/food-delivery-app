import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  PieLabelRenderProps,
} from "recharts"
import { COLORS } from "../utils/chart.utils"
import { PopularProducts } from "@/services/metrics/metrics.types"

export const PopularProductsChart = ({
  products,
}: {
  products: PopularProducts[]
}) => {
  const getFavoriteProductsLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    index,
  }: PieLabelRenderProps) => {
    const RADIAN = Math.PI / 180
    const radius =
      20 +
      (innerRadius! as number) +
      ((outerRadius! as number) - (innerRadius! as number))
    const x = (cx! as number) + radius * Math.cos(-midAngle * RADIAN)
    const y = (cy! as number) + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        textAnchor={x > (cx as number)! ? "start" : "end"}
        dominantBaseline="central"
        fill="#ababab"
      >
        {products[index!].product.length > 12
          ? products[index!].product.substring(0, 12).concat("...")
          : products[index!].product}{" "}
        ({value})
      </text>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart style={{ fontSize: 12, color: "#3838" }}>
        <Pie
          data={products}
          nameKey="product"
          dataKey="amount"
          cx="50%"
          cy="50%"
          outerRadius={86}
          innerRadius={64}
          strokeWidth={0}
          labelLine={false}
          label={getFavoriteProductsLabel}
          paddingAngle={5}
        >
          {products?.map((_, index) => {
            return <Cell key={`cell-${index}`} fill={COLORS[index]} />
          })}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
