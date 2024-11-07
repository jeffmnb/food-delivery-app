import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { StatusOrderType } from "../Orders.types"
import { defaultTheme } from "@/global/styles/theme"

export const formatDateDistanceToNow = (date: Date) => {
  return formatDistanceToNow(date, { addSuffix: true, locale: ptBR })
}

export const formatMoney = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(value)
}

export const getRealIndexTotalCount = (totalCount: number) => {
  return Math.ceil(totalCount / 10 - 1)
}

export const getStatusDetails = ({ status }: StatusOrderType) => {
  switch (status) {
    case "delivered":
      return { color: defaultTheme.colors.green_200, title: "Entregue" }
    case "delivering":
      return { color: defaultTheme.colors.blue_400, title: "Em rota" }
    case "canceled":
      return { color: defaultTheme.colors.red_500, title: "Cancelado" }
    case "processing":
      return {
        color: defaultTheme.colors.yellow_400,
        title: "Em andamento",
      }
    case "pending":
      return { color: defaultTheme.colors.yellow_500, title: "Pendente" }
  }
}
