import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import { styled } from "styled-components"

export const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
  `,
  TotalCount: styled.p`
    color: ${({ theme }) => theme.colors.gray_500};
    font-size: 0.875rem;
  `,
  PageIndex: styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.875rem;
  `,
  PaginationActions: styled.div`
    display: flex;
    gap: 2.5rem;
    justify-content: space-around;
    align-items: center;
  `,
  PaginationContainer: styled.div`
    display: flex;
    gap: 0.5rem;
  `,
  PaginationButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    border: 1px ${({ theme }) => theme.colors.gray_600} solid;
    width: 1.9rem;
    height: 1.9rem;
    transition: background-color 0.3s;
    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.gray_600};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
  `,
  ChevronsLeft: styled(ChevronsLeft).attrs({ size: 20 })``,
  ChevronLeft: styled(ChevronLeft).attrs({ size: 20 })``,
  ChevronRight: styled(ChevronRight).attrs({ size: 20 })``,
  ChevronsRight: styled(ChevronsRight).attrs({ size: 20 })``,
}
