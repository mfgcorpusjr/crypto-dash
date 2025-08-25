import { Input } from "@/components/ui/input";
import SelectInput from "@/components/SelectInput";

type CoinControlsProps = {
  search: string;
  setSearch: (search: string) => void;
  limit: string;
  setLimit: (search: string) => void;
  filter: string;
  setFilter: (search: string) => void;
};

export default function CoinControls({
  search,
  setSearch,
  limit,
  setLimit,
  filter,
  setFilter,
}: CoinControlsProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <Input
        placeholder="Search coins by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <SelectInput
        id="limit"
        label="Show:"
        labelClassName="text-sm"
        className="flex-1 lg:w-[180px]"
        options={[
          { value: "5", label: "5" },
          { value: "10", label: "10" },
          { value: "20", label: "20" },
          { value: "50", label: "50" },
          { value: "100", label: "100" },
        ]}
        value={limit}
        onChange={setLimit}
      />

      <SelectInput
        id="filter"
        label="Sort By:"
        labelClassName="text-sm"
        className="flex-1 lg:w-[250px]"
        options={[
          { value: "market_cap_desc", label: "Market Cap (High to Low)" },
          { value: "market_cap_asc", label: "Market Cap (Low to High)" },
          { value: "volume_desc", label: "Volume (High to Low)" },
          { value: "volume_asc", label: "Volume (Low to High)" },
        ]}
        value={filter}
        onChange={setFilter}
      />
    </div>
  );
}
