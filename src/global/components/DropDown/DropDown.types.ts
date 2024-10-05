export type DropDownProps = {
  title: string
  type?: "header" | "filter"
  height?: number | string
  onSelectLeave?: () => void
  onSelectOwner?: () => void
  onSelectInProgress?: () => void
  onSelectDelivered?: () => void
  onSelectCanceled?: () => void
}

export type ItemSelected =
  | "leave"
  | "owner"
  | "progress"
  | "delivered"
  | "canceled"
