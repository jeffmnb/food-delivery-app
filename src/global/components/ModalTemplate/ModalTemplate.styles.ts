import { styled } from "styled-components"
import { X } from "lucide-react"

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
}
