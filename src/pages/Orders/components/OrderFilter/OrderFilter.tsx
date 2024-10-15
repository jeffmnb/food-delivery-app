import { Controller, useForm } from "react-hook-form"
import { S } from "./OrderFilter.styles"
import { zodResolver } from "@hookform/resolvers/zod"
import { OrderFilterSchema } from "./OrderFilter.types"
import { orderFilterSchema } from "./OrderFilter.utils"
import { Dropdown } from "../../../../global/components/DropDown"
import { Button } from "../../../../global/components/Button"

export const OrderFilter = () => {
  const { control, handleSubmit, reset, getValues } =
    useForm<OrderFilterSchema>({
      defaultValues: {
        clientName: "",
        orderId: "",
        orderStatus: "all",
      },
      resolver: zodResolver(orderFilterSchema),
    })

  const translateDropDownTitle = () => {
    const { orderStatus } = getValues()
    if (orderStatus === "all") return "Todos status"
    if (orderStatus === "delivered") return "Entregue"
    if (orderStatus === "progress") return "Em andamento"
    if (orderStatus === "canceled") return "Cancelado"
    return "Todos status"
  }

  return (
    <S.Container>
      <S.Label>Filtros:</S.Label>
      <Controller
        control={control}
        name="orderId"
        render={({ field }) => (
          <S.FilterInput
            value={field.value}
            placeholder="ID do pedido"
            onChange={({ target }) => field.onChange(target.value)}
          />
        )}
      />
      <Controller
        control={control}
        name="clientName"
        render={({ field }) => (
          <S.FilterInput
            placeholder="Nome do cliente"
            value={field.value}
            onChange={({ target }) => field.onChange(target.value)}
          />
        )}
      />
      <Controller
        control={control}
        name="orderStatus"
        render={({ field }) => (
          <Dropdown
            height={35}
            title={translateDropDownTitle()}
            type="filter"
            onSelectDelivered={() => {
              field.onChange("delivered")
            }}
            onSelectInProgress={() => {
              field.onChange("progress")
            }}
            onSelectCanceled={() => {
              field.onChange("canceled")
            }}
          />
        )}
      />
      <Button
        variant="secondary"
        typeIcon="search"
        onClick={handleSubmit((values) => alert(JSON.stringify(values)))}
      >
        Filtrar resultados
      </Button>

      <Button variant="secondary" typeIcon="remove" onClick={() => reset()}>
        Remover filtros
      </Button>
    </S.Container>
  )
}
