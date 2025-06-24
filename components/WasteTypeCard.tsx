// components/WasteTypeCard.tsx
type Props = {
  index: number;
  data: any;
  onChange: (index: number, field: string, value: any) => void;
  onRemove: (index: number) => void;
};

export default function WasteTypeCard({
  index,
  data,
  onChange,
  onRemove,
}: Props) {
  return (
    <div className="bg-[#f8ffcc] rounded-lg p-4 relative mb-4">
      <div className="text-[#7b9b3a] font-semibold mb-3">
        Sampah #{index + 1}
      </div>
      <button
        className="absolute top-3 right-3 text-red-600 text-xl"
        onClick={() => onRemove(index)}
      >
        ❌
      </button>

      {["category_id", "price", "filled", "quota"].map((field) => (
        <div key={field} className="mb-2">
          <label className="block text-sm font-medium text-gray-700 capitalize">
            {field.replace("_", " ")} <span className="text-red-500">*</span>
          </label>
          <input
            type={field === "price" ? "number" : "text"}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            value={data[field]}
            onChange={(e) => onChange(index, field, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
