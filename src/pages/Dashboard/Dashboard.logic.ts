import { useState } from "react"

export const useDashboardPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // TODO - remover
  setTimeout(() => {
    setIsLoading(false)
  }, 3000)

  return { isLoading }
}
