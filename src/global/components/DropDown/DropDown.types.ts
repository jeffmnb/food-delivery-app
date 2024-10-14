export type DropDownProps = {
  title: string
  ownerName?: string
  ownerEmail?: string
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
