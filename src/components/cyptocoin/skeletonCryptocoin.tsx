import { Grid, Skeleton } from "@mui/material";

export default function SkeletonCryptocoin() {
    return (
      <Grid container spacing={4}>
          <Grid item xs={12}>
              <Skeleton sx={{ height: 170, transform: 'scale(1.0)'}}/>
          </Grid>
          <Grid item xs={12}>
              <Skeleton sx={{ height: 140, transform: 'scale(1.0)'}}/>
          </Grid>
      </Grid>
    )
  }