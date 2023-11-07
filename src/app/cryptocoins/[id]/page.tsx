'use client'

import Cryptocoin from '@/components/cyptocoin/cryptocoin'
import Layout from '@/components/layout/layout'
import SocialStats from '@/components/socialStats/socialStats'
import { INITIAL_STATE } from '@/models/initialStateConst'
import { useGetCryptocoinByIdQuery, useGetSocialStatsByIdQuery } from '@/redux/api/cryptocoinsApi'
import { Grid } from '@mui/material'
import { useParams } from 'next/navigation'

//Página para mostrar información generl de una criptomoneda en específico y estadísticas sociales
export default function CryptocoinPage() {

  // extracción de id enviado desde la url
  const { id } = useParams()
  // Servicio para la información general de una criptomoneda recive como párametro un id
  // isLoading: indica cuando está cargando la información por primera vez
  // data: información devuelta por el servicio basada en el modelo StateCryptocoin
  const { isLoading, data } = useGetCryptocoinByIdQuery({id: id as string})
  
  // Servicio para las estadísticas sociales de una criptomoneda recive como párametro un id
  // loadingSocial: indica cuando está cargando la información por primera vez
  // dataSocial: información devuelta por el servicio basada en el modelo SocialStats
  const { isLoading: loadingSocial, data: dataSocial} = useGetSocialStatsByIdQuery({id: id as string})

  return (
    <Layout 
      title={`Detalle Criptomoneda ${isLoading ? '' :  `${data?.name} (${data?.symbol})`}`}
      showButtonBack={true}
    >
      <Grid container spacing={4}>
          <Grid item xs={12}>
            <Cryptocoin 
                cryptocoin={data ?? INITIAL_STATE.CRYPTOCOIN}
                loading={isLoading}
            />
          </Grid>
          <Grid item xs={12}>
            <SocialStats 
              loading={loadingSocial}
              socialStats={dataSocial ?? INITIAL_STATE.SOCIAL_STATS}
            />
          </Grid>
        </Grid>
    </Layout>
  )
}
