import { BarLoader } from "react-spinners";

import CoinListItem from "@/components/CoinListItem";

import { type CoinListItem as TCoinListItem } from "@/types";

type CoinListProps = {
  coins: TCoinListItem[];
  isLoading: boolean;
  error: string;
};

export default function CoinList({ coins, isLoading, error }: CoinListProps) {
  if (isLoading) {
    return (
      <BarLoader
        color="#2E7FFF"
        width={200}
        cssOverride={{ margin: "100px auto" }}
      />
    );
  }

  if (error) {
    return (
      <p className="my-[100px] text-center text-sm text-gray-500">{error}</p>
    );
  }

  if (coins.length === 0) {
    return (
      <p className="my-[100px] text-center text-sm text-gray-500">
        No coins found
      </p>
    );
  }

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {coins.map((coin) => (
        <CoinListItem key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
