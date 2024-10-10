import { styled } from "styled-components"

export const S = {
  Container: styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.black};
    padding: 1.8rem;
  `,
  TitlePage: styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  `,
  CardsWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: left;
    gap: 1.5rem;
  `,
  Charts: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  `,
  RevenueChartWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 62vw;
    padding: 1.5rem;
    border-radius: 0.3125rem;
    border: 1px ${({ theme }) => theme.colors.gray_600} solid;
  `,
  RevenueChartHeader: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-weight: 600;
    margin-bottom: 0.5rem;
  `,
  Subtitle: styled.p`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray_500};
  `,
  PopularProductsChartWrapper: styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 32.55vw;
    padding: 1.5rem;
    border-radius: 0.3125rem;
    border: 1px ${({ theme }) => theme.colors.gray_600} solid;
  `,
}
