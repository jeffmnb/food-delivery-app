import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  PieLabelRenderProps,
} from "recharts"
import { COLORS } from "../utils/chart.utils"

const data = [
  { product: "Pepperoni", amount: 40 },
  { product: "Mussarela", amount: 30 },
  { product: "Marguerita", amount: 50 },
  { product: "4 Queijos", amount: 16 },
  { product: "Frango frito", amount: 26 },
]

export const PopularProductsChart = () => {
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
        {data[index!].product.length > 12
          ? data[index!].product.substring(0, 12).concat("...")
          : data[index!].product}{" "}
        ({value})
      </text>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart style={{ fontSize: 12, color: "#3838" }}>
        <Pie
          data={data}
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
          {data.map((_, index) => {
            return <Cell key={`cell-${index}`} fill={COLORS[index]} />
          })}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
