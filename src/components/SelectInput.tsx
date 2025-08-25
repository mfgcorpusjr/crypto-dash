import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectInputProps = {
  id?: string;
  label?: string;
  labelClassName?: string;
  className?: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
};

export default function SelectInput({
  id,
  label,
  labelClassName,
  className,
  options,
  value,
  onChange,
}: SelectInputProps) {
  return (
    <div className="flex items-center gap-4">
      {label && (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      )}

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={id} className={className}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
