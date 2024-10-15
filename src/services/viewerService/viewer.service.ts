import { useQuery } from "@tanstack/react-query"
import { client } from "../server"
import { ViewerResponse } from "./viewer.types"
import { useNavigate } from "react-router-dom"

export const useViewerService = () => {
  const navigate = useNavigate()

  const getViewer = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return await client.get<ViewerResponse>("/me").catch((err) => {
      console.error("@services/viewer.service.ts/getViewer", err)
      navigate("/auth")
      throw err
    })
  }

  const { data: viewerData } = useQuery({
    queryFn: getViewer,
    queryKey: ["getViewer"],
  })

  return { viewerResponse: viewerData?.data }
}
