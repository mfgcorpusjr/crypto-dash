import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="p-8">
      <Card className="max-w-lg mx-auto">
        <CardContent className="space-y-8">
          <h1 className="text-2xl font-bold">About Crypto Dash</h1>

          <p className="text-sm">
            Crypto Dash is a simple React application that displays live
            cryptocurrency data using CoinGecko API.
          </p>

          <p className="text-sm">
            You can explore the top cryptocurrencies by market cap, filter by
            name or symbol, and sort them by price, market cap, or 24-hour
            change.
          </p>

          <p className="text-sm">
            🚀 Future features might include detailed coin views, favorites,
            pagination and much more!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
