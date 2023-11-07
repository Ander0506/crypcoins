import { StateCryptocoin } from "@/models/models"
import { Card, CardContent, Grid, Typography } from "@mui/material"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import convertCurrencyUSD from "@/functions/convertCurrencyUSD"
import getClassNumber from "@/functions/getClassNumber"
import BasicCard from "../basicCard/basicCard"
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import InventoryIcon from '@mui/icons-material/Inventory'

import style from './cryptocoins.module.css'
import SkeletonCryptocoin from "./skeletonCryptocoin"

interface CryptocoinProps {
    loading: boolean
    cryptocoin: StateCryptocoin
}

// Componente para información general de una criptomoneda
export default function Cryptocoin({
    cryptocoin,
    loading
}: CryptocoinProps) {

    const diferentPrice = (percent: number):string => {
        return convertCurrencyUSD(Number(cryptocoin.price_usd) * (percent / 100))
    }
    const price1h = Number(cryptocoin.price_usd)

    const cryptocoinComponent = (
        <>
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Card sx={{ minWidth: 275, height: "100%" }}>
                    <CardContent>
                        <Grid container spacing={4}>
                            <Grid item xs={2} alignItems="center" className={style.imageContainer}>
                                <Typography variant="body1" component="span">
                                    Puesto {cryptocoin.rank}
                                </Typography>
                                <picture>
                                    <img 
                                        src={`https://www.coinlore.com/img/${cryptocoin.nameid}.png`} 
                                        alt={cryptocoin.name} 
                                    />
                                </picture>
                            </Grid>
                            <Grid item xs={2} alignItems="center" alignSelf='center'>
                                <Typography variant="h3" component="div">
                                    {cryptocoin.name}
                                </Typography>
                                <Typography variant="h4" component="div">
                                    {`(${cryptocoin.symbol})`}
                                </Typography>
                            </Grid>
                            <Grid item xs={4} alignItems="center" alignSelf='center' className={style.price}>
                                <Typography variant="h2" component="div" >
                                    {convertCurrencyUSD(Number(cryptocoin.price_usd))}<span>USD</span>
                                </Typography>
                            </Grid>

                            <Grid item container xs={4} alignItems="center" alignSelf='center'>
                                <Grid item xs={12} className={style.tableHeader}>
                                    <Typography variant="h4" component="div" >
                                        Variación del Precio
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6" component="div" className={style.tableHeader}>
                                        Una Hora
                                    </Typography>
                                    <Typography variant="h5" component="div" className={getClassNumber(cryptocoin.percent_change_1h)}>
                                        {diferentPrice(Number(cryptocoin.percent_change_1h))}
                                    </Typography>
                                    <Typography variant="body1" component="div" className={getClassNumber(cryptocoin.percent_change_1h)}>
                                        {`(${cryptocoin.percent_change_1h}%)`}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6" component="div" className={style.tableHeader}>
                                        Un Día
                                    </Typography>
                                    <Typography variant="h5" component="div" className={getClassNumber(cryptocoin.percent_change_24h)}>
                                        {diferentPrice(Number(cryptocoin.percent_change_24h))}
                                    </Typography>
                                    <Typography variant="body1" component="div" className={getClassNumber(cryptocoin.percent_change_24h)}>
                                        {`(${cryptocoin.percent_change_24h}%)`}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h6" component="div" className={style.tableHeader}>
                                        Una Semana
                                    </Typography>
                                    <Typography variant="h5" component="div" className={getClassNumber(cryptocoin.percent_change_7d)}>
                                        {diferentPrice(Number(cryptocoin.percent_change_7d))}
                                    </Typography>
                                    <Typography variant="body1" component="div" className={getClassNumber(cryptocoin.percent_change_7d)}>
                                        {`(${cryptocoin.percent_change_7d}%)`}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card sx={{ minWidth: 275, height: "100%" }}>
                    <CardContent>
                        <Grid container spacing={4}>
                            <Grid item xs={3}>
                                <BasicCard
                                    description='Capitalización de Mercado Total'
                                    value={convertCurrencyUSD(Number(cryptocoin.market_cap_usd))}
                                    icon={<AccountBalanceIcon/>}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <BasicCard
                                    description='Volumen Total 24h'
                                    value={convertCurrencyUSD(Number(cryptocoin.volume24))}
                                    icon={<SignalCellularAltIcon/>}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <BasicCard
                                    description='Suministro Circulante'
                                    value={convertCurrencyUSD(Number(cryptocoin.csupply))}
                                    icon={<InventoryIcon/>}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <BasicCard
                                    description='Suministro maximo'
                                    value={convertCurrencyUSD(Number(cryptocoin.msupply))}
                                    icon={<InventoryIcon/>}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        </>
    )

  return loading ? <SkeletonCryptocoin /> : cryptocoinComponent
}
