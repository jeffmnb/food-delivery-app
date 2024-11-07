import { defaultTheme } from "@/global/styles/theme"
import ContentLoader from "react-content-loader"

export const DropDownSkeleton = () => (
  <ContentLoader
    speed={2}
    width={150}
    height={40}
    backgroundColor={defaultTheme.colors.black}
    foregroundColor={defaultTheme.colors.gray_550}
  >
    <rect rx="3" ry="3" width="150" height="40" />
  </ContentLoader>
)
