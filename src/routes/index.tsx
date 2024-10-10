import { createBrowserRouter } from "react-router-dom"
import { DashboardPage } from "../pages/Dashboard"
import { AuthPage } from "../pages/Auth"
import { OrdersPage } from "../pages/Orders"
import { AppLayout } from "../global/layouts/AppLayout"
import { NotFoundPage } from "../pages/NotFound"

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/",
    errorElement: <NotFoundPage />,
    element: <AppLayout />,
    children: [{ path: "/", element: <DashboardPage /> }],
  },
  {
    path: "/orders",
    element: <AppLayout />,
    children: [{ path: "/orders", element: <OrdersPage /> }],
  },
])
