import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

export const formatDateDistanceToNow = (date: Date) => {
  return formatDistanceToNow(date, { addSuffix: true, locale: ptBR })
}

// TODO - trocar de nome
export const formatTotalCount = (totalCount: number) => {
  return totalCount / 10 - 1
}
