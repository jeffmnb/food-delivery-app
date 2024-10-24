import { ArrowRight, Search, X } from "lucide-react"
import { styled } from "styled-components"
import { defaultTheme } from "../../../../global/styles/theme"
import { StatusOrderType } from "../../Orders.types"

const getStatusPointerColor = ({ status }: StatusOrderType) => {
  switch (status) {
    case "delivered":
      return defaultTheme.colors.green_200
    case "delivering":
      return defaultTheme.colors.blue_400
    case "canceled":
      return defaultTheme.colors.red_500
    case "processing":
      return defaultTheme.colors.yellow_400
    case "pending":
      return defaultTheme.colors.yellow_500
  }
}

export const S = {
  Table: styled.table`
    border-collapse: collapse;
    width: 100%;
    color: ${({ theme }) => theme.colors.gray_400};
    border: 1px solid ${({ theme }) => theme.colors.gray_600};
    border-radius: 0.3125rem;
  `,
  Thead: styled.thead`
    & > tr > th {
      color: ${({ theme }) => theme.colors.gray_400};
    }
  `,
  Tbody: styled.tbody`
    & > tr {
      &:hover {
      }
    }
  `,
  Tr: styled.tr``,
  Th: styled.th`
    padding: 0.75rem;
    text-align: left;
    font-weight: 400;
  `,
  Td: styled.td`
    border-top: 1px ${({ theme }) => theme.colors.gray_600} solid;
    padding: 0.75rem;
    &:nth-child(1),
    &:nth-child(7),
    &:nth-child(8) {
      text-align: center;
    }

    &:nth-child(1) {
      padding-left: 1.125rem;
    }

    &:nth-child(5) {
      padding-right: 18.75rem;
    }

    text-align: left;
    font-weight: 400;
  `,
  StatusPointer: styled.span.withConfig({
    shouldForwardProp: (prop) => prop !== "status",
  })<StatusOrderType>`
    display: inline-block;
    width: 0.625rem;
    height: 0.625rem;
    background-color: ${({ status }) => getStatusPointerColor({ status })};
    border-radius: 50%;
    margin-right: 0.625rem;
  `,
  ButtonApprove: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3125rem;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.9375rem;
    padding: 0.5rem 1rem;
    border: 1px ${({ theme }) => theme.colors.gray_600} solid;
    transition: background-color 0.3s;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.gray_600};
    }
  `,
  ArrowRight: styled(ArrowRight).attrs({ size: 18 })``,
  ButtonCancel: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3125rem;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.9375rem;
    padding: 0.5rem 1rem;
    border: 1px ${({ theme }) => theme.colors.gray_600} solid;
    transition: background-color 0.3s;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.gray_600};
    }
  `,
  X: styled(X).attrs({ size: 18 })``,
  ButtonSearch: styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    padding: 0.5rem;
    width: 2.1875rem;
    height: 2.1875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: 1px ${({ theme }) => theme.colors.gray_600} solid;
    transition: background-color 0.3s;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.gray_600};
    }
  `,
  SearchIcon: styled(Search).attrs({ size: 20 })`
    color: ${({ theme }) => theme.colors.gray_400};
  `,
}
