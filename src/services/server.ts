import { QueryClient } from "@tanstack/react-query"
import axios from "axios"

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const queryClient = new QueryClient()
