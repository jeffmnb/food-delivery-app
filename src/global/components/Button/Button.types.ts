import React, { ButtonHTMLAttributes } from "react"

export type ButtonProps = {
  variant: "primary" | "secondary"
  typeIcon?: "search" | "remove"
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLElement>
