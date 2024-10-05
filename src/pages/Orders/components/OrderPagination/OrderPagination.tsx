import { S } from "./OrderPagination.styles"
import { OrderPaginationProps } from "./OrderPagination.types"

export const OrderPagination = ({
  pageIndex,
  perPage,
  totalCount,
}: OrderPaginationProps) => {
  const pagesAmount = Math.ceil(totalCount / perPage) || 1

  return (
    <S.Container>
      <S.TotalCount>Total de {totalCount} pedido(s)</S.TotalCount>

      <S.PaginationActions>
        <S.PageIndex>
          Página {pageIndex + 1} de {pagesAmount}
        </S.PageIndex>

        <S.PaginationContainer>
          <S.PaginationButton>
            <S.ChevronsLeft />
          </S.PaginationButton>
          <S.PaginationButton>
            <S.ChevronLeft />
          </S.PaginationButton>
          <S.PaginationButton>
            <S.ChevronRight />
          </S.PaginationButton>
          <S.PaginationButton>
            <S.ChevronsRight />
          </S.PaginationButton>
        </S.PaginationContainer>
      </S.PaginationActions>
    </S.Container>
  )
}
