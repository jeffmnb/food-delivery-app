import { useNavigate } from "react-router-dom"
import { S } from "./NotFound.styles"

export const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <S.Contaner>
      <S.Title>Página não encontrada</S.Title>
      <S.Subtitle onClick={() => navigate("/")}>
        Retornar ao <S.Span>Dashboard</S.Span>
      </S.Subtitle>
    </S.Contaner>
  )
}
