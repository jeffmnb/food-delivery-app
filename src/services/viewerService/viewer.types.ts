export type ViewerResponse = {
  email: string
  id: string
  name: string
  phone: string | null
  role: "manager" | "customer"
  createdAt: Date | null
  updatedAt: Date | null
}
