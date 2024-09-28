import React, { ButtonHTMLAttributes } from "react"

export type ButtonProps = {
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLElement>
