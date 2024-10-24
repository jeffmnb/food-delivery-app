import { S } from "./OrderTableSkeleton.styles"

export const OrderTableSkeleton = () => {
  const amount = ["first_order", "second_order", "third_order"]
  return (
    <S.Container>
      {amount?.map((item) => (
        <S.RectItem key={item} speed={2}>
          <rect rx="3" ry="3" width="100%" height="50" />
        </S.RectItem>
      ))}
    </S.Container>
  )
}
