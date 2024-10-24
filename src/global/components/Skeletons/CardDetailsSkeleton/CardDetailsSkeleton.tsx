import { S } from "./CardDetailsSkeleton.styles"

export const CardDetailsSkeleton = () => {
  const amount = ["first", "secondy", "third", "fourth"]
  return (
    <S.Container>
      {amount?.map((item) => (
        <S.RectItem key={item} speed={2}>
          <rect rx="3" ry="3" width="22rem" height="8.875rem" />
        </S.RectItem>
      ))}
    </S.Container>
  )
}
