// interface para el response del servicio getCryptocoins
export interface StateCryptocoinsPage{
    stateCryptocoins: StateCryptocoins[]
    total_register: number
}

// interface para el response del servicio getSocialStatsById
export interface SocialStats{
    reddit:{
       avg_active_users: number
       subscribers: number
    }
    twitter:{
       followers_count: number
       status_count: number
    }
}

// interface para el response del servicio getCryptocoinById
export interface StateCryptocoin extends StateCryptocoins {
    csupply: string
    tsupply: string
    msupply: string
}

// interface para los datos esenciales de las criptomonedas
export interface StateCryptocoins{
    id: string
    symbol: string
    name: string
    nameid: string
    rank: number
    price_usd: string
    percent_change_24h: string
    percent_change_1h: string
    percent_change_7d: string
    market_cap_usd: string
    volume24: number
}

// interface para el response del servicio getGlobalCryptocoins
export interface StateGlobalCryptocoins {
    coins_count: number
    active_markets: number
    total_mcap: number
    total_volume: number
    mcap_change: string
    volume_change: string
    avg_change_percent: number
}