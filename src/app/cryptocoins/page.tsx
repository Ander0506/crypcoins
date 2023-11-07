'use client'

import Layout from '@/components/layout/layout'
import TableGrid from '@/components/tableGrid/tableGrid'
import { useGetCryptocoinsQuery } from '@/redux/api/cryptocoinsApi'
import React, { useState } from 'react'

// Página para listar criptomonedas en tabla
export default function Cryptocoins() {
  
  // Estado para el manejo de la paginación en la tabla de criptomonedas
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  })

  // Servicio para la lista de criptomonedas recive como parámetro un estado paginationModel para la paginación
  // isLoading: indica cuando está cargando la información por primera vez
  // data: información devuelta por el servicio basada en el modelo StateCryptocoinsPage
  // isFetching: indica cuando se vuelve a consultar el servicio por un cambio de estado
  const { isLoading, data, isFetching } = useGetCryptocoinsQuery(
      {
          start: paginationModel.page * 5, 
          limit: paginationModel.pageSize
      }
  )

  return (
    <Layout title='Información Criptomonedas' showButtonBack={true}>
        <TableGrid
          stateCryptocoins={data?.stateCryptocoins ?? []}
          rowCount={data?.total_register ?? 0}
          fetching={isFetching}
          loading={isLoading}
          paginationModel={paginationModel}
          setPaginationModel={setPaginationModel}
        />
    </Layout>
  )
}
