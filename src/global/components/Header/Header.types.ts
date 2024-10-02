import { LucideProps } from "lucide-react"

export type PathProps = "home" | "orders"

export type HeaderProps = {
  iconName: "Home" | "Orders" | "Moon" | "Sun"
} & LucideProps

export type PathItemProps = {
  isPathSelected: boolean
}

export type ThemeIconProps = {
  theme: "dark" | "light"
}
