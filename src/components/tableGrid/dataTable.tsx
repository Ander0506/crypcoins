'use client'

import { GridColDef } from '@mui/x-data-grid'
import convertCurrencyUSD from '../../functions/convertCurrencyUSD'
import getClassNumber from '../../functions/getClassNumber'
import shorValue from '../../functions/shortValue'
import { IconButton } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Link from 'next/link'

// Configuración inicial de las columnas de la tabla de criptomonedas
export const columns: GridColDef[] = [
    { 
        field: 'rank',
        headerName: 'No.',
        width: 50,
        sortable: false,
    },{
        field: ' ',
        headerName: '',
        width:50,
        sortable: false,
        renderCell: (params) => (
            <picture>
                <img 
                    src={`https://www.coinlore.com/img/50x50/${params.row.nameid}.png`} 
                    alt={params.row.name} 
                />
            </picture>
        )
    },{
        field: 'name',
        headerName: 'Moneda',
        width: 120,
        sortable: false
    },{
        field: 'symbol',
        headerName: 'Símbolo',
        width: 100,
        sortable: false
    },{
        field: 'price_usd',
        headerName: 'Precio (USD)',
        width: 120,
        sortable: false,
        headerAlign: 'right',
        align: 'right',
        valueGetter: (params) => convertCurrencyUSD(params.row.price_usd)
    },{
        field: 'percent_change_1h',
        headerName: 'Porcentaje de cambio => 1 Hora',
        width: 230,
        sortable: false,
        align: 'right',
        renderCell: (params) => <span className={getClassNumber(params.row.percent_change_1h)}>{params.row.percent_change_1h}%</span>
    },{
        field: 'percent_change_24h',
        headerName: '1 Día',
        width: 70,
        sortable: false,
        align: 'right',
        renderCell: (params) => <span className={getClassNumber(params.row.percent_change_24h)}>{params.row.percent_change_24h}%</span>
    },{
        field: 'percent_change_7d',
        headerName: '1 Semana',
        width: 100,
        sortable: false,
        align: 'right',
        renderCell: (params) => <span className={getClassNumber(params.row.percent_change_7d)}>{params.row.percent_change_7d}%</span>
    },{
        field: 'market_cap_usd',
        headerName: 'Capitalización Mercado',
        flex: 1,
        sortable: false,
        headerAlign: 'right',
        align: 'right',
        valueGetter: (params) => `$${shorValue(params.row.market_cap_usd, 0)}`
    },{
        field: 'volume24',
        headerName: '24h Volumen',
        flex: 1,
        sortable: false,
        headerAlign: 'right',
        align: 'right',
        valueGetter: (params) => `$${shorValue(params.row.volume24, 1)}`
    },{
        field: 'action',
        headerName: 'Detalle',
        width: 80,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
        renderCell: (params) => (
            <Link 
                href={`/cryptocoins/${params.row.id}`}
            >
                <IconButton 
                    color="primary"
                >
                    <VisibilityIcon />
                </IconButton>
            </Link>
        )
    }
  ]