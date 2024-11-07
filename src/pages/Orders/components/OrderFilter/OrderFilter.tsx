import { Controller, useForm } from "react-hook-form"
import { S } from "./OrderFilter.styles"
import { zodResolver } from "@hookform/resolvers/zod"
import { OrderFilterProps, OrderFilterInput } from "./OrderFilter.types"
import { orderFilterSchema } from "./OrderFilter.utils"
import { getStatusDetails } from "../../utils"
import { useEffect, useState } from "react"
import { useFoodDeliveryStore } from "@/global/store"
import { Dropdown } from "@/global/components/DropDown"
import { Button } from "@/global/components/Button"

export const OrderFilter = ({ onSearchSubmit }: OrderFilterProps) => {
  const {
    orders: { hasFiltered },
  } = useFoodDeliveryStore()

  const { control, handleSubmit, reset, getValues, watch } =
    useForm<OrderFilterInput>({
      defaultValues: {
        customerName: "",
        orderId: "",
      },
      resolver: zodResolver(orderFilterSchema),
    })

  const [allowSearchFilter, setAllowSearchFilter] = useState<boolean>(false)

  const [statusSearchFilter, setStatusSearchFilter] =
    useState<Pick<OrderFilterInput, "status">>()

  const translateDropDownTitle = (): string => {
    return (
      getStatusDetails({ status: statusSearchFilter?.status! })?.title ??
      "Todos status"
    )
  }

  const getStatusToEnableFilter = () => {
    const { customerName, orderId, status } = getValues()
    setAllowSearchFilter(
      !!(customerName?.length! | orderId?.length! | status?.length!),
    )
  }

  useEffect(() => {
    getStatusToEnableFilter()
  }, [watch("status"), watch("customerName"), watch("orderId")])

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
            onChange={({ target }) => {
              field.onChange(target.value)
            }}
          />
        )}
      />
      <Controller
        control={control}
        name="customerName"
        render={({ field }) => (
          <S.FilterInput
            placeholder="Nome do cliente"
            value={field.value}
            onChange={({ target }) => {
              field.onChange(target.value)
            }}
          />
        )}
      />
      <Controller
        control={control}
        name="status"
        render={({ field }) => (
          <Dropdown
            height={35}
            title={translateDropDownTitle()}
            type="filter"
            onSelectDelivered={() => {
              setStatusSearchFilter({ status: "delivered" })
              field.onChange("delivered")
            }}
            onSelectInProgress={() => {
              setStatusSearchFilter({ status: "processing" })
              field.onChange("processing")
            }}
            onSelectCanceled={() => {
              setStatusSearchFilter({ status: "canceled" })
              field.onChange("canceled")
            }}
          />
        )}
      />
      <Button
        disabled={!allowSearchFilter}
        variant="secondary"
        typeIcon="search"
        onClick={handleSubmit((values) => onSearchSubmit(values))}
      >
        Filtrar resultados
      </Button>

      <Button
        disabled={!hasFiltered}
        variant="secondary"
        typeIcon="remove"
        onClick={() => {
          reset()
          onSearchSubmit({})
        }}
      >
        Remover filtros
      </Button>
    </S.Container>
  )
}
