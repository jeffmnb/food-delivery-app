import { useNavigate } from "react-router-dom"
import { S } from "./Error.styles"

export const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <S.Contaner>
      <S.Title>Opps tivemos um problema</S.Title>
      <S.Subtitle onClick={() => navigate("/")}>
        Retornar ao <S.Span>Dashboard</S.Span>
      </S.Subtitle>
    </S.Contaner>
  )
}
