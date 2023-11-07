import { Grid, Typography, IconButton } from '@mui/material'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useRouter } from 'next/navigation';

import style from './titleApp.module.css'

interface ITitleApp {
    title: string
    showButtonBack?: boolean
}

// Componente para el t+itulo de la página actual
export default function TitleApp({
    title,
    showButtonBack
}: ITitleApp) {

    const router = useRouter()

    const onClickBack = () => {
        router.back()
    }

    return(
        <>
            <Grid
                container
                marginBottom={4}
                className={style.titleApp}
            >
                {showButtonBack && (
                    <IconButton onClick={() => onClickBack()}>
                        <ArrowBackIosNewOutlinedIcon/>
                    </IconButton>
                )}
                <Typography variant="h3" component="div">
                    {title}
                </Typography>
            </Grid>
        </>
    )
}