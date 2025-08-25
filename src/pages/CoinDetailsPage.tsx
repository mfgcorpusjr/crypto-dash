import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { BarLoader } from "react-spinners";

import CoinDetails from "@/components/CoinDetails";

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

      {!isLoading && !error && coin && <CoinDetails coin={coin} />}
    </div>
  );
}
