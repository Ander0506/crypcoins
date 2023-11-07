'use client'

import { formatValue } from '@/functions/convertCurrencyUSD'
import { Card, CardContent, Grid, Typography } from '@mui/material'

import style from './socialStats.module.css'

interface SocialStatsComponentProps {
    description1: string
    count1: number
    description2: string
    count2: number
    nameImage: string
}

// Componente para mostrar una estadística social de criptomoneda
export default function SocialStatsComponent({
    description1,
    count1,
    description2,
    count2,
    nameImage
}: SocialStatsComponentProps) {
  return (
    <Grid item xs={12}>
        <Card sx={{ minWidth: 275, height: "100%" }}>
            <CardContent>
                <Grid container spacing={4}>
                    <Grid item xs={2} alignItems="center" className={style.containerImage}>
                        <picture>
                            <img 
                                src={`/${nameImage}`} 
                                alt='nameIMG'
                            />
                        </picture>
                    </Grid>
                    <Grid item xs={5} alignItems="center">
                        <Typography variant="h4" component="div">
                            {description1}
                        </Typography>
                        <Typography variant="h3" component="div">
                            {formatValue(count1)}
                        </Typography>
                    </Grid>
                    <Grid item xs={5} alignItems="center">
                        <Typography variant="h4" component="div">
                            {description2}
                        </Typography>
                        <Typography variant="h3" component="div">
                            {formatValue(count2)}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </Grid>
  )
}
