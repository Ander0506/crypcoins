'use client'

import { DataGrid } from '@mui/x-data-grid'
import { columns } from './dataTable'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useGetCryptocoinsQuery } from '@/redux/api/cryptocoinsApi'
import TableSkeleton from './tableSkeleton'
import { StateCryptocoins } from '@/models/models'

import style from './tableGrid.module.css'

interface IpaginationModel {
    page: number
    pageSize: number
}

interface TableGridProps{
    stateCryptocoins: StateCryptocoins[]
    paginationModel: IpaginationModel
    rowCount: number
    fetching: boolean
    loading: boolean
    setPaginationModel: Dispatch<SetStateAction<IpaginationModel>>
}

// Componente para listar en tabla todas las criptomonedas
export default function TableGrid({
    stateCryptocoins,
    paginationModel,
    rowCount,
    fetching,
    loading,
    setPaginationModel

}: TableGridProps) {
        
    const tableGridComponent = (
        <div className={style.tableGrid}>
            <DataGrid
                rows={stateCryptocoins}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: paginationModel
                    }
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                disableColumnMenu
                disableColumnSelector
                disableColumnFilter
                paginationMode="server"
                rowCount={rowCount}
                onPaginationModelChange={setPaginationModel}
                loading={fetching}
                disableDensitySelector
            />
        </div>
    )

    return loading ? <TableSkeleton columns={10}/> : tableGridComponent
}