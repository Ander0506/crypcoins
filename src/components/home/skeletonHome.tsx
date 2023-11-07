'use client'

import { Grid, Skeleton } from '@mui/material'

import style from './home.module.css'

interface SkeletonHomeProps {
    numContainer: number
}

export default function SkeletonHome({numContainer}: SkeletonHomeProps) {
    let listRender = []

    for (let index = 0; index < numContainer; index++) {
        listRender.push(
            <Grid item xs={3} key={`Skeleton-Home${index}`}>
                <Skeleton sx={{ height: 140, transform: 'scale(1.0)'}}/>
            </Grid>
        )
    }
    
  return (
    <div className={style.home}>
            <Grid 
                container 
                spacing={4}
                direction="row"
                justifyContent="center"
                alignItems="stretch"
            >
               {listRender}
            </Grid>
        </div>
  )
}
