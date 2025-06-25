import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BankCardProps {
  id: string;
  name: string;
  open_hour: string;
  address: string;
  accept_all: boolean;
  accepted_waste_types: string[]; // ["Kaleng", "Kertas", ...]
  status: string;
}

export default function BSCard({
  id,
  name,
  open_hour,
  address,
  accept_all,
  accepted_waste_types,
  status,
}: BankCardProps) {
  const router = useRouter();
  return (
    <div className="bg-[#e6e6e6] rounded-md shadow-md p-4 flex flex-col md:flex-row gap-4">
      <Image
        src="/Images/Trash_Bin.png"
        alt={name}
        width={160}
        height={160}
        className="w-full md:w-40 h-40 object-cover rounded"
      />
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-[#6d914e] font-semibold text-lg">{name}</h2>
          <p className="text-sm text-gray-600">{open_hour}</p>
          <p className="text-xs text-black">{address}</p>
          <p
            className={`text-sm font-medium ${
              status === "active" ? "text-[#4a9449]" : "text-red-500"
            }`}
          >
            {status === "active" ? "Buka" : "Tutup"}
          </p>
          <p
            className={`text-xs ${
              accept_all ? "text-[#4a9449]" : "text-red-500"
            }`}
          >
            {accept_all
              ? "Menerima semua jenis sampah"
              : "Tidak menerima semua jenis sampah"}
          </p>
          <div className="flex gap-2 mt-2">
            {accepted_waste_types.map((type) => (
              <Image
                key={type}
                src={`/Images/${type}.png`}
                alt={type}
                width={40}
                height={40}
                className="w-10 h-10 border border-[#f7fbb0] rounded bg-[#f7fbb0]"
              />
            ))}
          </div>
        </div>
        <button
          onClick={() => router.push(`/bs/${id}`)} // GANTI INI, jangan ada editnya
          className="mt-4 bg-[#7f9748] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#434d2d]"
        >
          Kunjungi
        </button>
      </div>
    </div>
  );
}
