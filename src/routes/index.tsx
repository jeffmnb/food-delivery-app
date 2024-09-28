import { createBrowserRouter } from "react-router-dom"
import { DashboardPage } from "../pages/Dashboard"
import { AuthPage } from "../pages/Auth"

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/",
    element: <DashboardPage />,
  },
])
