import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";

import { Card, CardContent } from "@/components/ui/card";
import { BarLoader } from "react-spinners";

import { type Coin } from "@/types";

const API_URL = import.meta.env.VITE_API_URL;

export default function CoinDetailsPage() {
  const { id } = useParams();

  const [coin, setCoin] = useState<Coin | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCoin = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setCoin(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Failed to fetch");
      } finally {
        setIsLoading(false);
      }
    };

    getCoin();
  }, [id]);

  return (
    <div className="p-8">
      {isLoading && (
        <BarLoader
          color="#2E7FFF"
          width={200}
          cssOverride={{ margin: "100px auto" }}
        />
      )}

      {error && (
        <p className="my-[100px] text-center text-sm text-gray-500">{error}</p>
      )}

      {!isLoading && !error && coin && (
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
              className="w-16 mx-auto"
            />
            <p className="text-sm">{`${
              coin.description.en.split(". ")[0]
            }.`}</p>
            <div>Rank: #{coin.market_cap_rank}</div>
            <div>
              Current Price: $
              {coin.market_data.current_price.usd.toLocaleString()}
            </div>
            <div className="text-sm">
              Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}
            </div>
            <div className="text-sm">
              24h High: ${coin.market_data.high_24h.usd.toLocaleString()}
            </div>
            <div className="text-sm">
              24h Low: ${coin.market_data.low_24h.usd.toLocaleString()}
            </div>
            <div className="text-sm">
              24h Price Change: $
              {coin.market_data.price_change_24h_in_currency.usd.toLocaleString()}{" "}
              ({coin.market_data.price_change_percentage_24h.toFixed(2)}%)
            </div>
            <div className="text-sm">
              Circualting Supply:{" "}
              {coin.market_data.circulating_supply.toLocaleString()}
            </div>
            <div className="text-sm">
              Total Supply: {coin.market_data.total_supply.toLocaleString()}
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
            <div className="text-sm text-blue-500">
              <a href={coin.links.homepage[0]} target="_blank">
                🌐 Website
              </a>
            </div>
            <div className="text-sm">
              Categories: {coin.categories.join(", ")}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
