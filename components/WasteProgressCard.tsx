// components/WasteProgressCard.tsx
interface WasteProgress {
  category_name: string;
  price: number;
  filled: number;
  quota: number;
}

export default function WasteProgressCard({ data }: { data: WasteProgress }) {
  const { category_name, price, filled, quota } = data;
  const percent = quota === 0 ? 0 : Math.min((filled / quota) * 100, 100);

  return (
    <div className="bg-[#f5ffc8] rounded-md px-4 py-3">
      <div className="flex justify-between font-bold mb-1">
        <span>{category_name}</span>
        <span>{price.toLocaleString()}/Kg</span>
      </div>
      <div className="bg-gray-300 w-full h-4 rounded-md">
        <div
          className="bg-black h-4 rounded-md"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <p className="text-right text-xs font-semibold">
        {filled}/{quota} (Kg)
      </p>
    </div>
  );
}
