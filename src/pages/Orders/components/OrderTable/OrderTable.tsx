import { S } from "./OrderTable.styles"
import { OrderTableProps } from "./OrderTable.types"

export const OrderTable = ({ onOpenDetails }: OrderTableProps) => {
  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th></S.Th>
          <S.Th>Identificador</S.Th>
          <S.Th>Realizado há</S.Th>
          <S.Th>Status</S.Th>
          <S.Th>Cliente</S.Th>
          <S.Th>Total do pedido</S.Th>
          <S.Th></S.Th>
          <S.Th></S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        <S.Tr>
          <S.Td>
            <S.ButtonSearch onClick={onOpenDetails}>
              <S.SearchIcon />
            </S.ButtonSearch>
          </S.Td>
          <S.Td>821e78f7asdhdf128h</S.Td>
          <S.Td>há 15 minutos</S.Td>
          <S.Td>
            <S.StatusPointer status="progress" />
            Em andamento
          </S.Td>
          <S.Td>Jeferson Borda </S.Td>
          <S.Td>R$ 149,90</S.Td>
          <S.Td>
            <S.ButtonApprove>
              <S.ArrowRight />
              Aprovar
            </S.ButtonApprove>
          </S.Td>
          <S.Td>
            <S.ButtonCancel>
              <S.X />
              <p>Cancelar</p>
            </S.ButtonCancel>
          </S.Td>
        </S.Tr>
        <S.Tr>
          <S.Td>
            <S.ButtonSearch>
              <S.SearchIcon />
            </S.ButtonSearch>
          </S.Td>
          <S.Td>821e78f7asdhdf128h</S.Td>
          <S.Td>há 15 minutos</S.Td>
          <S.Td>
            <S.StatusPointer status="progress" />
            Em andamento
          </S.Td>
          <S.Td>Jeferson Borda </S.Td>
          <S.Td>R$ 149,90</S.Td>
          <S.Td>
            <S.ButtonApprove>
              <S.ArrowRight />
              Aprovar
            </S.ButtonApprove>
          </S.Td>
          <S.Td>
            <S.ButtonCancel>
              <S.X />
              <p>Cancelar</p>
            </S.ButtonCancel>
          </S.Td>
        </S.Tr>
        <S.Tr>
          <S.Td>
            <S.ButtonSearch>
              <S.SearchIcon />
            </S.ButtonSearch>
          </S.Td>
          <S.Td>821e78f7asdhdf128h</S.Td>
          <S.Td>há 15 minutos</S.Td>
          <S.Td>
            <S.StatusPointer status="progress" />
            Em andamento
          </S.Td>
          <S.Td>Jeferson Borda </S.Td>
          <S.Td>R$ 149,90</S.Td>
          <S.Td>
            <S.ButtonApprove>
              <S.ArrowRight />
              Aprovar
            </S.ButtonApprove>
          </S.Td>
          <S.Td>
            <S.ButtonCancel>
              <S.X />
              Cancelar
            </S.ButtonCancel>
          </S.Td>
        </S.Tr>
      </S.Tbody>
    </S.Table>
  )
}
