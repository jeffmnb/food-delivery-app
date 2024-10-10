import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

const data = [
  { date: "10/12", revenue: 1200 },
  { date: "11/12", revenue: 800 },
  { date: "12/12", revenue: 900 },
  { date: "13/12", revenue: 400 },
  { date: "14/12", revenue: 2300 },
  { date: "15/12", revenue: 800 },
  { date: "16/12", revenue: 1240 },
]

export const RevenueChart = () => {
  const formatterValue = (value: number) => {
    return value.toLocaleString("pt-BR", { currency: "BRL", style: "currency" })
  }
  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart
        style={{ fontSize: 12 }}
        data={data}
        margin={{ right: 3, left: 20, bottom: 3 }}
      >
        <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
        <YAxis
          width={70}
          stroke="#888"
          axisLine={false}
          tickLine={false}
          dataKey="revenue"
          tickFormatter={formatterValue}
          tickMargin={20}
        />
        <CartesianGrid vertical={false} opacity={0.08} />
        <Line
          type="natural"
          strokeWidth={2}
          dataKey="revenue"
          stroke="#373746"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
