import { client, queryClient } from "../server"
import { Viewer } from "./viewer.types"

export const useViewerService = () => {
  const getViewerService = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return await client.get<Viewer>("/me").catch((err) => {
      console.error("@services/viewer.service.ts/getViewer", err)

      throw err
    })
  }

  const getViewer = () => {
    return queryClient.fetchQuery({
      queryFn: getViewerService,
      queryKey: ["getViewerService"],
    })
  }

  return { getViewer }
}
