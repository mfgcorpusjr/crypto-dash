import { Link } from "react-router";

import { Card, CardContent } from "@/components/ui/card";

import { type Coin } from "@/types";

type CoinDetailsProps = {
  coin: Coin;
};

export default function CoinDetails({ coin }: CoinDetailsProps) {
  const {
    market_data: { current_price, market_cap, high_24h, low_24h },
  } = coin;

  return (
    <Card className="max-w-xl mx-auto">
      <CardContent className="space-y-4 text-center">
        <Link to="/" className="block text-sm text-blue-500">
          {" "}
          ⃪ Back to Home
        </Link>

        <h2 className="text-2xl font-bold">
          {coin.name} ({coin.symbol.toUpperCase()})
        </h2>

        <img
          src={coin.image.large}
          alt={coin.name}
          className="w-16 rounded-full mx-auto"
        />

        {coin.description.en && (
          <p className="text-sm">{`${coin.description.en.split(". ")[0]}.`}</p>
        )}

        <div>
          Rank: {coin.market_cap_rank ? `#${coin.market_cap_rank}` : "N/A"}
        </div>

        <div>
          Current Price:{" "}
          {current_price.usd ? `$${current_price.usd.toLocaleString()}` : "N/A"}
        </div>

        <div className="text-sm">
          Market Cap:{" "}
          {market_cap.usd ? `$${market_cap.usd.toLocaleString()}` : "N/A"}
        </div>

        <div className="text-sm">
          24h High: {high_24h.usd ? `$${high_24h.usd.toLocaleString()}` : "N/A"}
        </div>

        <div className="text-sm">
          24h Low: {low_24h.usd ? `$${low_24h.usd.toLocaleString()}` : "N/A"}
        </div>

        <div className="text-sm">
          24h Price Change: $
          {coin.market_data.price_change_24h_in_currency.usd.toLocaleString()} (
          {coin.market_data.price_change_percentage_24h.toFixed(2)}%)
        </div>

        <div className="text-sm">
          Circualting Supply:{" "}
          {coin.market_data.circulating_supply?.toLocaleString() ?? "N/A"}
        </div>

        <div className="text-sm">
          Total Supply:{" "}
          {coin.market_data.total_supply?.toLocaleString() ?? "N/A"}
        </div>

        <div className="text-sm">
          All-Time High: ${coin.market_data.ath.usd.toLocaleString()} on{" "}
          {new Date(coin.market_data.ath_date.usd).toLocaleDateString()}
        </div>

        <div className="text-sm">
          All-Time Low: ${coin.market_data.atl.usd.toLocaleString()} on{" "}
          {new Date(coin.market_data.atl_date.usd).toLocaleDateString()}
        </div>

        <div className="text-sm">
          Last Updated:{" "}
          {new Date(coin.market_data.last_updated).toLocaleDateString()}
        </div>

        {coin.links.homepage.length !== 0 && (
          <div className="text-sm text-blue-500">
            <a href={coin.links.homepage[0]} target="_blank">
              🌐 Website
            </a>
          </div>
        )}

        <div className="text-sm">
          Categories:{" "}
          {coin.categories.length > 0 ? coin.categories.join(", ") : "N/A"}
        </div>
      </CardContent>
    </Card>
  );
}
