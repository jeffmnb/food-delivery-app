import { useEffect, useState } from "react"
import { S } from "./OrderPagination.styles"
import { ActionSteps, OrderPaginationProps } from "./OrderPagination.types"
import { useFoodDeliveryStore } from "@/global/store"

export const OrderPagination = ({
  perPage,
  totalOrders,
}: OrderPaginationProps) => {
  const {
    setOrders,
    orders: { pageIndex, totalCount },
  } = useFoodDeliveryStore()
  const [actionsStatus, setActionsStatus] = useState({
    next: false,
    preview: false,
    begin: false,
    end: false,
  })
  const pagesAmount = Math.ceil(totalOrders / perPage) || 1

  const getActionsStatus = () => {
    switch (pageIndex) {
      case 0:
        return setActionsStatus({
          begin: true,
          preview: true,
          end: false,
          next: false,
        })
      case totalCount:
        return setActionsStatus({
          begin: false,
          preview: false,
          end: true,
          next: true,
        })
    }
  }

  const handlePagination = (action: ActionSteps) => {
    switch (action) {
      case "next":
        return setOrders({ pageIndex: pageIndex + 1 })
      case "preview":
        return setOrders({ pageIndex: pageIndex - 1 })
      case "begin":
        return setOrders({ pageIndex: 0 })
      case "end":
        return setOrders({ pageIndex: totalCount })
    }
  }

  useEffect(() => {
    getActionsStatus()
  }, [pageIndex])

  return (
    <S.Container>
      <S.TotalCount>Total de {totalOrders} pedido(s)</S.TotalCount>

      <S.PaginationActions>
        <S.PageIndex>
          Página {pageIndex + 1} de {pagesAmount}
        </S.PageIndex>

        <S.PaginationContainer>
          <S.PaginationButton
            disabled={actionsStatus?.begin}
            onClick={() => handlePagination("begin")}
          >
            <S.ChevronsLeft />
          </S.PaginationButton>
          <S.PaginationButton
            disabled={actionsStatus?.preview}
            onClick={() => handlePagination("preview")}
          >
            <S.ChevronLeft />
          </S.PaginationButton>
          <S.PaginationButton
            disabled={actionsStatus?.next}
            onClick={() => handlePagination("next")}
          >
            <S.ChevronRight />
          </S.PaginationButton>
          <S.PaginationButton
            disabled={actionsStatus?.end}
            onClick={() => handlePagination("end")}
          >
            <S.ChevronsRight />
          </S.PaginationButton>
        </S.PaginationContainer>
      </S.PaginationActions>
    </S.Container>
  )
}
