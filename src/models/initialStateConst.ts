import { StateCryptocoin, StateGlobalCryptocoins, SocialStats } from "./models"

// Estado inicial de las estadicticas sociales de una criptomoneda
const SOCIAL_STATS: SocialStats = {
  reddit: {
    avg_active_users: 0,
    subscribers: 0
  },
  twitter: {
    followers_count: 0,
    status_count: 0
  }
}

// estado inicial de las estadísticas globales de las criptomonedas
const GLOBAL_COINS: StateGlobalCryptocoins = {
  active_markets: 0,
  avg_change_percent: 0,
  coins_count: 0,
  mcap_change: "0",
  total_mcap: 0,
  total_volume: 0,
  volume_change: "0" 
}

// Estado inicial de una criptomoneda
const CRYPTOCOIN: StateCryptocoin = {
  id: '0',
  name: '',
  nameid: '',
  rank: 0,
  symbol: '',
  price_usd: '0',
  market_cap_usd: '0',
  volume24: 0,
  percent_change_1h: '0%',
  percent_change_24h: '0%',
  percent_change_7d: '0%',
  msupply: '0',
  tsupply: '0',
  csupply: '0',
}

// Variable global para los estados iniciales
export const INITIAL_STATE = {
    GLOBAL_COINS,
    CRYPTOCOIN,
    SOCIAL_STATS
}