import { S } from "./OrderFilterSkeleton.styles"

export const OrderFilterSkeleton = () => {
  const amount = ["id", "name", "dropdown", "filters"]
  return (
    <S.Container>
      {amount?.map((item) => (
        <S.RectItem key={item} speed={2}>
          <rect rx="3" ry="3" width="200" height="30" />
        </S.RectItem>
      ))}
    </S.Container>
  )
}
