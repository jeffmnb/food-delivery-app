import { createBrowserRouter } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { Signin } from "../pages/SignIn"

export const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
])
