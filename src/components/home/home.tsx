'use client'

import BasicCard from '../basicCard/basicCard'
import { Grid, Button, Card, Skeleton } from '@mui/material'
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined'
import { StateGlobalCryptocoins } from '@/models/models'
import { useRouter } from "next/navigation"
import SkeletonHome from './skeletonHome'
import convertCurrencyUSD, { formatValue } from '@/functions/convertCurrencyUSD'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings'

import style from './home.module.css'
import getClassNumber from '@/functions/getClassNumber'

interface HomeProps {
    stateGlobalCryptocoins: StateGlobalCryptocoins,
    loading: boolean
}

// Componente para el inicio de la aplicación
export default function Home (props: HomeProps){

    const {
        stateGlobalCryptocoins: {
            active_markets,
            avg_change_percent,
            coins_count,
            mcap_change,
            total_mcap,
            total_volume,
            volume_change,
        },
        loading
    } = props

    const router = useRouter()


    const onClickButton = () => {
        router.push('/cryptocoins')
    }

    const homeComponent = (
        <div className={style.home}>
            <Grid 
                container 
                spacing={4}
                direction="row"
                justifyContent="center"
                alignItems="stretch"
            >
                <Grid item xs={3}>
                    <BasicCard 
                        description='Recuento de Monedas' 
                        value={formatValue(coins_count)}
                        icon={<MonetizationOnIcon/>}
                    />
                </Grid>
                <Grid item xs={3}>
                    <BasicCard 
                        description='Mercados Activos'
                        value={formatValue(active_markets)}
                        icon={<StorefrontIcon />}
                    />
                </Grid>
                <Grid item xs={3}>
                    <BasicCard
                        description='Capitalización de Mercado Total'
                        value={convertCurrencyUSD(total_mcap)}
                        icon={<AccountBalanceIcon/>}
                    />
                </Grid>
                <Grid item xs={3}>
                    <BasicCard
                        description='Volumen Total'
                        value={convertCurrencyUSD(total_volume)}
                        icon={<SignalCellularAltIcon/>}
                    />
                </Grid>
                <Grid item xs={3}>
                    <BasicCard
                        description='% Capitalización de Mercado'
                        value={`${mcap_change}%`}
                        nameClass={getClassNumber(mcap_change)}
                        icon={<CurrencyExchangeIcon/>}
                    />
                </Grid>
                <Grid item xs={3}>
                    <BasicCard
                        description='% Cambio de Volumen'
                        value={`${volume_change}%`}
                        nameClass={getClassNumber(volume_change)}
                        icon={<TrackChangesIcon/>}
                    />
                </Grid>
                <Grid item xs={3}>
                    <BasicCard
                        description='% Cambio Promedio'
                        value={`${avg_change_percent}%`}
                        nameClass={getClassNumber(avg_change_percent)}
                        icon={<DisplaySettingsIcon/>}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Card className={style.cardContainer}>
                        <Button 
                            variant="contained" 
                            startIcon={<ListAltOutlinedIcon />}
                            onClick={() => onClickButton()}
                        >
                            Información detallada
                        </Button>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )

    return loading ? <SkeletonHome numContainer={8}/> : homeComponent
}