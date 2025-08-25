import { useState, useEffect } from "react";

import CoinList from "@/components/CoinList";

import { type Coin } from "@/types";

const API_URL = import.meta.env.VITE_API_URL;

// TODO: delete this later
import { DUMMY_COINS } from "@/data";

export default function HomePage() {
  const [coins, setCoins] = useState<Coin[]>(DUMMY_COINS);

  useEffect(() => {
    // const getCoins = async () => {
    //   const response = await fetch(
    //     `${API_URL}/markets?vs_currency=usd&per_page=10`
    //   );
    //   const data = await response.json();
    //   console.log(data);
    // };
    // getCoins();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <CoinList coins={coins} />
    </div>
  );
}
