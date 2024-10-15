import { useEffect, useState } from "react"
import { S } from "./Header.styles"
import { PathProps } from "./Header.types"
import { Render } from "../Render/Render"
import { Dropdown } from "../DropDown"
import { useNavigate, useLocation } from "react-router-dom"
import { useViewerService } from "../../../services/viewerService/viewer.service"
import { useManagedRestaurantService } from "../../../services/managedRestaurantService/managedRestaurant.service"
import { DropDownSkeleton } from "../Skeletons/DropDownSkeleton/DropDownSkeleton"
import { openEditProfileModal } from "../../../pages/Dashboard/components/EditProfileModal"
import { useAuthService } from "../../../services/authService/auth.service"
import { showToast } from "../Toast"

export const Header = () => {
  const navigate = useNavigate()
  const { viewerResponse } = useViewerService()
  const { signOut } = useAuthService()
  const { managedRestaurantResponse, isLoadingManagedRestaurant } =
    useManagedRestaurantService()
  const { pathname } = useLocation()
  const [pathSelected, setPathSelected] = useState<PathProps | null>(null)
  const [themeSelected, setThemeSelected] = useState<"dark" | "light">("light")

  const handleSelectPath = (path: PathProps) => {
    if (path === "home") navigate("/")
    if (path === "orders") navigate("/orders")
  }

  const getLocationPath = () => {
    if (pathname === "/") return setPathSelected("home")
    if (pathname === "/orders") return setPathSelected("orders")
  }

  const handleLeaveAccount = async () => {
    return await signOut()
      .then(() => navigate("/auth", { replace: true }))
      .catch(() => {
        showToast({ type: "error", message: "Tente novamente" })
      })
  }

  useEffect(() => {
    getLocationPath()
  }, [pathname])

  return (
    <S.Container>
      <S.PathsArea>
        <S.PizzaIcon />
        <S.PathItem
          isPathSelected={pathSelected === "home"}
          onClick={() => handleSelectPath("home")}
        >
          <S.PathIcon iconName="Home" />
          <S.PathTitle>Início</S.PathTitle>
        </S.PathItem>
        <S.PathItem
          isPathSelected={pathSelected === "orders"}
          onClick={() => handleSelectPath("orders")}
        >
          <S.PathIcon iconName="Orders" />
          <S.PathTitle>Pedidos</S.PathTitle>
        </S.PathItem>
      </S.PathsArea>

      <S.MenuArea>
        <S.ThemeArea>
          <Render.If isTrue={themeSelected === "dark"}>
            <S.ThemeIcon
              onClick={() => setThemeSelected("light")}
              iconName="Moon"
            />
          </Render.If>
          <Render.If isTrue={themeSelected === "light"}>
            <S.ThemeIcon
              onClick={() => setThemeSelected("dark")}
              iconName="Sun"
            />
          </Render.If>
        </S.ThemeArea>
        <Render.If isTrue={isLoadingManagedRestaurant}>
          <DropDownSkeleton />
        </Render.If>
        <Render.If isTrue={!isLoadingManagedRestaurant}>
          <Dropdown
            title={managedRestaurantResponse?.name!}
            ownerName={viewerResponse?.name}
            ownerEmail={viewerResponse?.email}
            type="header"
            onSelectOwner={openEditProfileModal}
            onSelectLeave={handleLeaveAccount}
          />
        </Render.If>
      </S.MenuArea>
    </S.Container>
  )
}
