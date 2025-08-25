import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

import CoinControls from "@/components/CoinControls";
import CoinList from "@/components/CoinList";

import { type CoinListItem } from "@/types";

const API_URL = import.meta.env.VITE_API_URL;

export default function HomePage() {
  const [coins, setCoins] = useState<CoinListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 1000);
  const [limit, setLimit] = useState("10");
  const [filter, setFilter] = useState("market_cap_desc");

  useEffect(() => {
    const getCoins = async () => {
      try {
        const response = await fetch(
          `${API_URL}/markets?vs_currency=usd&names=${debouncedSearch}&per_page=${limit}&order=${filter}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch: Too Many Requests");
        }

        const data = await response.json();
        setCoins(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Failed to fetch: Too Many Requests"
        );
      } finally {
        setIsLoading(false);
      }
    };

    getCoins();
  }, [debouncedSearch, limit, filter]);

  return (
    <div className="container mx-auto p-8 space-y-8">
      <CoinControls
        search={search}
        setSearch={setSearch}
        limit={limit}
        setLimit={setLimit}
        filter={filter}
        setFilter={setFilter}
      />

      <CoinList coins={coins} isLoading={isLoading} error={error} />
    </div>
  );
}
