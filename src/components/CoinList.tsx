import CoinListItem from "@/components/CoinListItem";

import { type Coin } from "@/types";

type CoinListProps = {
  coins: Coin[];
};

export default function CoinList({ coins }: CoinListProps) {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {coins.map((coin) => (
        <CoinListItem key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
