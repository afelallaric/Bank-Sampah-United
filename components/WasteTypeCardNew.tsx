// punya afel

interface WasteType {
  category_id: string;
  price: number;
  quota: number;
  filled: number;
}

type Props = {
  index: number;
  data: any;
  onChange: (
    index: number,
    field: keyof WasteType,
    value: WasteType[keyof WasteType]
  ) => void;
  onRemove: (index: number) => void;
};

const categoryOptions = [
  { id: "89c5a6a3-da5e-40a7-bfd4-6da12126e4d5", label: "Kaleng" },
  { id: "36196d49-5723-4e1e-a7f1-e671d239ebbe", label: "Kertas" },
  { id: "67f02471-4e29-4b48-8d72-dddd955f4b2e", label: "Plastik" },
];

export default function WasteTypeCardNew({
  index,
  data,
  onChange,
  onRemove,
}: Props) {
  const selectedCategory = categoryOptions.find(
    (c) => c.id === data.category_id
  );

  return (
    <div className="bg-[#f7fbb0] border border-[#f7fbb0] rounded-lg p-4 relative mb-4 shadow-sm">
      {/* Display category label instead of index */}
      <div className="text-[#7b9b3a] font-semibold mb-3">
        {selectedCategory?.label || "Pilih Jenis Sampah"}
      </div>
      {/* Remove button */}
      <button
        className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition"
        onClick={() => onRemove(index)}
        aria-label="Hapus jenis sampah"
      >
        ❌
      </button>
      {/* Dropdown for category */}
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Jenis Sampah <span className="text-red-500">*</span>
        </label>
        <select
          className="block w-full border border-[#cbd5a5] rounded-md px-3 py-2 text-sm"
          value={data.category_id}
          onChange={(e) => onChange(index, "category_id", e.target.value)}
        >
          <option value="">-- Pilih --</option>
          {categoryOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {/* Input fields for price, filled, quota */}
      {["price", "filled", "quota"].map((field) => (
        <div key={field} className="mb-3">
          <label className="block text-sm font-medium text-gray-700 capitalize mb-1">
            {field} <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            className="block w-full border border-[#cbd5a5] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#7b9b3a]"
            value={data[field]}
            onChange={(e) =>
              onChange(index, field as keyof WasteType, Number(e.target.value))
            }
          />
        </div>
      ))}
         
    </div>
  );
}
