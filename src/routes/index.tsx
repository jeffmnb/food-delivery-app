import { createBrowserRouter } from "react-router-dom"
import { DashboardPage } from "../pages/Dashboard"
import { AuthPage } from "../pages/Auth"
import { OrdersPage } from "../pages/Orders"
import { AppLayout } from "../global/layouts/AppLayout"
import { NotFoundPage } from "../pages/NotFound"
import { ErrorPage } from "../pages/Error"

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <DashboardPage /> }],
  },
  {
    path: "/orders",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: "/orders", element: <OrdersPage /> }],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])
