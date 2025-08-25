export type CoinListItem = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price?: number;
  price_change_percentage_24h: number;
  market_cap?: number;
};

export type Coin = {
  id: string;
  symbol: string;
  name: string;
  categories: string[];
  description: {
    en: string;
  };
  links: { homepage: string[] };
  image: { large: string };
  market_cap_rank: number;
  market_data: MarketData;
};

export type MarketData = {
  current_price: { usd?: number };
  ath: { usd: number };
  ath_date: { usd: string };
  atl: { usd: number };
  atl_date: { usd: string };
  market_cap: { usd?: number };
  market_cap_rank: number;
  high_24h: { usd?: number };
  low_24h: { usd?: number };
  price_change_percentage_24h: number;
  price_change_24h_in_currency: { usd: number };
  total_supply: number;
  circulating_supply: number;
  last_updated: string;
};
