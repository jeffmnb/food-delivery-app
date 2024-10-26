import { styled } from "styled-components"
import { Building2, ChevronDown, DoorOpen } from "lucide-react"
import { DropDownProps } from "./DropDown.types"

export const S = {
  Container: styled.div`
    position: relative;
    display: inline-block;
  `,
  DropdownButton: styled.button<Pick<DropDownProps, "height">>`
    height: ${({ height }) => (height ? `${height}px` : "auto")};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.625rem 0.9375rem;
    border: 1px ${({ theme }) => theme.colors.gray_600} solid;
    cursor: pointer;
  `,
  DropdownTitle: styled.p`
    font-size: 0.9rem;
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
  OwnerArea: styled.li`
    display: flex;
    gap: 0.3125rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    font-size: 0.85rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};

    > p {
      &:nth-child(2) {
        font-weight: normal;
        font-size: 0.7813rem;
        color: ${({ theme }) => theme.colors.gray_400};
      }
    }
  `,
  OwnerItem: styled.p``,
  Item: styled.li<Pick<DropDownProps, "type">>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;

    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray_600};
      cursor: pointer;
    }

    &:last-child {
      color: ${({ theme, type }) =>
        type === "header" ? theme.colors.red_500 : theme.colors.white};
    }
  `,
  Building: styled(Building2).attrs({ size: "1.1rem" })``,
  DoorOpen: styled(DoorOpen).attrs({ size: "1.1rem" })``,
}
