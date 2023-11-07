import { SocialStats, StateCryptocoin, StateCryptocoinsPage, StateGlobalCryptocoins } from "@/models/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Creación de servicios con redux el cual genera un estado y acciones con el response de cada uno
export const cryptocoinsApi = createApi({
    reducerPath: 'cryptocoinsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.coinlore.net/api/'
    }),
    endpoints: (builder) => ({
        // Servicio para las estádisticas globales de las criptomonedas
        getGlobalCryptocoins: builder.query<StateGlobalCryptocoins, null>({
            query: () => 'global/',
            transformResponse: (res: StateGlobalCryptocoins[]) => res[0]
        }),
        // Servicio para la lista de las criptomonedas con paginación
        getCryptocoins: builder.query<StateCryptocoinsPage, {start?: number, limit?: number}>({
            query: ({start = 0, limit = 5}) => `tickers/?start=${start}&limit=${limit}`,
            transformResponse: ({data, info}) => {
                return{
                    stateCryptocoins: data,
                    total_register: info.coins_num
                }
            }
        }),
        // Servicio para una criptomoneda en específico por id
        getCryptocoinById: builder.query<StateCryptocoin, {id: string}>({
            query: ({id}) => `ticker/?id=${id}`,
            transformResponse: (data: StateCryptocoin[]) => data[0]
        }),
        // Servicio para las estádisticas Sociales de una criptomoneda en específico por id
        getSocialStatsById: builder.query<SocialStats, {id: string}>({
            query: ({id}) => `coin/social_stats/?id=${id}`
        }),
    })
})

// exportación de hooks para la extracción de estados y acciones
export const { 
    useGetGlobalCryptocoinsQuery,
    useGetCryptocoinsQuery,
    useGetCryptocoinByIdQuery,
    useGetSocialStatsByIdQuery
} = cryptocoinsApi