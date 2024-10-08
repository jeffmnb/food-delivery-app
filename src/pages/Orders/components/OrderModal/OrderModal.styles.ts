import { X } from "lucide-react"
import { styled } from "styled-components"

export const S = {
  Overlay: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #0009;
    backdrop-filter: blur(1px);
    z-index: 10;
  `,
  Modal: styled.div`
    position: relative;
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.black};
    border: 1px ${({ theme }) => theme.colors.gray_600} solid;
    border-radius: 0.3125rem;
    padding-top: 1.5rem;
    width: 34rem;
    z-index: 11;

    transform: translateY(1.25rem);
    opacity: 0;
    animation: slideUp 0.5s ease forwards;
    @keyframes slideUp {
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,
  Container: styled.div`
    padding: 0.5rem 2rem 2rem 2rem;
    overflow: auto;
  `,
  HeaderWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `,
  Header: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > table {
      color: aliceblue;
    }
  `,
  HeaderTitle: styled.h3`
    color: ${({ theme }) => theme.colors.white};
  `,
  HeaderSubTitle: styled.p`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray_400};
  `,
  CloseButton: styled(X).attrs({ size: "1.3rem", weight: "bold" })`
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: ${({ theme }) => theme.colors.gray_500};
    cursor: pointer;
  `,
  TableDetails: styled.table`
    border-collapse: collapse;
    margin-top: 1rem;
  `,
  TheadDetails: styled.thead``,
  ThDetails: styled.th``,
  TbodyDetails: styled.tbody``,
  TrDetails: styled.tr`
    border-bottom: 1px ${({ theme }) => theme.colors.gray_600} solid;
    &:nth-child(1) {
      text-align: right;
    }
    &:last-child {
      border-bottom: 0px;
    }
  `,
  TdDetails: styled.td`
    text-align: right;
    padding: 1rem 0.8rem;
    &:nth-child(1) {
      text-align: left;
      color: ${({ theme }) => theme.colors.gray_400};
    }
  `,
  TableProduct: styled.table`
    border-collapse: collapse;
    margin-top: 1rem;
  `,
  TrProduct: styled.tr`
    border-bottom: 1px ${({ theme }) => theme.colors.gray_600} solid;
    &:nth-child(1) {
      color: ${({ theme }) => theme.colors.gray_400};
      td {
        color: inherit;
        font-size: inherit;
      }
    }
    &:last-child {
      border-bottom: 0px;
    }
  `,
  TdProduct: styled.td`
    padding: 1rem 0.8rem;
    color: ${({ theme }) => theme.colors.white};

    &:nth-child(1) {
      text-align: left;
    }
    text-align: right;
  `,
  TotalOrder: styled.div`
    background-color: ${({ theme }) => theme.colors.gray_600};
    border-radius: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.8rem;
  `,
  TotalLabel: styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
  `,
}
