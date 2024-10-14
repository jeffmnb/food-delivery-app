import { useQuery } from "@tanstack/react-query"
import { client } from "../server"
import { ViewerResponse } from "./viewer.types"

export const useViewerService = () => {
  const getViewer = async () => {
    return await client.get<ViewerResponse>("/me").catch((err) => {
      console.error("@services/viewer.service.ts/getViewer", err)
      throw err
    })
  }

  const { data: viewerData } = useQuery({
    queryFn: getViewer,
    queryKey: ["getViewer"],
  })
  return { viewerResponse: viewerData?.data }
}
