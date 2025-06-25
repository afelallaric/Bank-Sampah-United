"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type WasteType = {
  category_id: string;
  price: number;
  quota: number;
  filled: number;
};

type BankDetail = {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  open_hour: string;
  description: string;
  accept_all: boolean;
  accepted_waste_types: WasteType[];
  status: string;
};

export default function BankDetailPage() {
  const { id } = useParams();
  const [bank, setBank] = useState<BankDetail | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://imk.schematics-its.com/api/bs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBank(data.data);
      })
      .catch((err) => console.error("Failed to load detail:", err));
  }, [id]);

  if (!bank)
    return (
      <>
        <Header />
        <div className="p-8">Loading...</div>;
        <Footer />
      </>
    );

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-black px-6 py-10">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 items-start">
          {/* Left Info */}
          <div>
            <h1 className="text-xl font-bold text-green-700 mb-2">
              {bank.name}
            </h1>
            <p className="text-sm text-green-600 mb-4">
              {bank.accept_all
                ? "Menerima Semua Jenis Sampah"
                : "Jenis Sampah Tertentu"}
            </p>

            <p className="font-semibold">
              Jam Buka: <span className="font-normal">{bank.open_hour}</span>
            </p>
            <p className="font-semibold">
              Status:{" "}
              <span className="text-green-600 font-normal">{bank.status}</span>
            </p>
            <p className="font-semibold">
              Alamat:{" "}
              <span className="font-normal">
                {bank.address}, {bank.city}
              </span>
            </p>
            <p className="font-semibold">
              No. Telp: <span className="font-normal">{bank.phone}</span>
            </p>
          </div>

          {/* Right image */}
          <div className="w-full">
            <img
              src="/Images/sample.png" // CHANGE TO IMG URL FROM BACKEND
              alt="Foto Bank Sampah"
              className="w-full rounded shadow"
            />
          </div>
        </div>

        {/* Waste Types */}
        <div className="mt-10 space-y-6">
          {bank.accepted_waste_types.map((waste, idx) => {
            const percentage = Math.min(
              100,
              (waste.filled / waste.quota) * 100
            );
            return (
              <div key={idx} className="bg-lime-50 p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-1">
                  <div className="font-semibold text-green-800">
                    Kategori #{idx + 1}{" "}
                    {/* CHANGE CATEGORY NAME FROM BACKEND */}
                  </div>
                  <div className="text-sm text-gray-700">
                    {waste.price.toLocaleString("id-ID")}/Kg
                  </div>
                </div>

                <div className="relative w-full h-5 bg-gray-200 rounded overflow-hidden">
                  <div
                    className="bg-black h-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="text-right text-sm mt-1 text-gray-600">
                  {waste.filled}/{waste.quota} Kg
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
