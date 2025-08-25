import { Card, CardContent } from "@/components/ui/card";

import { type Coin } from "@/types";

type CoinListItemProps = {
  coin: Coin;
};

export default function CoinListItem({ coin }: CoinListItemProps) {
  return (
    <Card className="transition-transform hover:-translate-y-2 duration-300">
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <img src={coin.image} alt={coin.name} className="w-10" />
          <div>
            <h3 className="text-lg font-bold">{coin.name}</h3>
            <div className="text-sm text-gray-500 font-bold">
              {coin.symbol.toUpperCase()}
            </div>
          </div>
        </div>

        <div className="text-sm">
          <div>
            Price:{" "}
            {coin.current_price
              ? `$${coin.current_price.toLocaleString()}`
              : "N/A"}
          </div>
          <div
            className={`${
              coin.price_change_percentage_24h >= 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {coin.price_change_percentage_24h} %
          </div>
          <div>Market Cap: {coin.market_cap?.toLocaleString() ?? "N/A"}</div>
        </div>
      </CardContent>
    </Card>
  );
}
