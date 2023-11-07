import { Grid, Skeleton } from '@mui/material'
import React from 'react'

export default function SkeletonSocialStats() {
  return (
    <Grid container spacing={4}>
        <Grid item xs={12}>
            <Skeleton sx={{ height: 140, transform: 'scale(1.0)'}}/>
        </Grid>
        <Grid item xs={12}>
            <Skeleton sx={{ height: 140, transform: 'scale(1.0)'}}/>
        </Grid>
    </Grid>
  )
}
