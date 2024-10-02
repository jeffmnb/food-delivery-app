import { styled } from "styled-components"
import { Building2, ChevronDown, DoorOpen } from "lucide-react"

export const S = {
  Container: styled.div`
    position: relative;
    display: inline-block;
  `,
  DropdownButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.625rem 0.9375rem;
    border: 1px ${({ theme }) => theme.colors.gray_600} solid;
    cursor: pointer;
  `,
  DropdownTitle: styled.p`
    font-size: 0.85rem;
  `,
  ChevronDown: styled(ChevronDown).attrs({ size: "1.2rem" })``,
  ListItems: styled.ul`
    display: block;
    position: absolute;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 0.3125rem;
    border: 1px ${({ theme }) => theme.colors.gray_600} solid;
    z-index: 1;
    margin-top: 0.3125rem;
  `,
  Item: styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;

    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray_600};
      cursor: pointer;
    }

    &:last-child {
      color: ${({ theme }) => theme.colors.red_500};
    }
  `,
  Building: styled(Building2).attrs({ size: "1.1rem" })``,
  DoorOpen: styled(DoorOpen).attrs({ size: "1.1rem" })``,
}
