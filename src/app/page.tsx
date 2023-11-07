'use client'

import Home from '@/components/home/home'
import Layout from '@/components/layout/layout'
import TitleApp from '@/components/titleApp/titleApp'
import { INITIAL_STATE } from '@/models/initialStateConst'
import { StateGlobalCryptocoins } from '@/models/models'
import { useGetGlobalCryptocoinsQuery } from '@/redux/api/cryptocoinsApi'


// Página pricipal de la aplicación 
export default function HomePage() {
  
  // Servicio para las estadísticas globales de las criptomonedas
  // isLoading: indica cuando está cargando la información por primera vez
  // data: información devuelta por el servicio basada en el modelo StateGlobalCryptocoins
  const { isLoading, data } = useGetGlobalCryptocoinsQuery(null)

  return (
    <>
      <Layout title='Estadísticas Criptomonedas'>
        <Home 
          loading={isLoading} 
          stateGlobalCryptocoins={data ?? INITIAL_STATE.GLOBAL_COINS} 
        />
      </Layout>
    </>
  )
}