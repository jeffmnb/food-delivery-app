import { client, queryClient } from "../server"
import { Viewer } from "./viewer.types"
import { useNavigate } from "react-router-dom"

export const useViewerService = () => {
  const navigate = useNavigate()

  const getViewerService = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return await client.get<Viewer>("/me").catch((err) => {
      console.error("@services/viewer.service.ts/getViewer", err)
      navigate("/auth")
      throw err
    })
  }

  const getViewer = () => {
    return queryClient.fetchQuery({
      queryFn: getViewerService,
      queryKey: ["getViewer"],
    })
  }

  return { getViewer }
}
