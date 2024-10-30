import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"
import { Revenues } from "./RevenueChart.types"

export const RevenueChart = ({ revenues }: { revenues: Revenues[] }) => {
  const formatterValue = (value: number) => {
    return value.toLocaleString("pt-BR", { currency: "BRL", style: "currency" })
  }

  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart
        style={{ fontSize: 12 }}
        data={revenues}
        margin={{ right: 3, left: 20, bottom: 3 }}
      >
        <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
        <YAxis
          width={70}
          stroke="#888"
          axisLine={false}
          tickLine={false}
          dataKey="receipt"
          tickFormatter={formatterValue}
          tickMargin={20}
        />
        <CartesianGrid vertical={false} opacity={0.08} />
        <Line
          type="natural"
          strokeWidth={2}
          dataKey="receipt"
          stroke="#373746"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
