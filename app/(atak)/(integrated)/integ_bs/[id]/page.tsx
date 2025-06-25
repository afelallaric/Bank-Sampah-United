"use client";
// bank sampah detail dari sisi user
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WasteProgressCard from "@/components/WasteProgressCard";
import Head from "next/head";
import Image from "next/image";
import { use, useEffect, useState } from "react";

interface WasteType {
  category_id: string;
  filled: number;
  quota: number;
  price: number;
}

interface Bank {
  id: string;
  name: string;
  address: string;
  phone: string;
  open_hour: string;
  status: boolean;
  description: string;
  accepted_waste_types: WasteType[];
}

export default function DetailBankSampahPage(props: {
  params: Promise<{ id: string }>;
}) {
  const [bank, setBank] = useState<any>();
  const [wastes, setWaste] = useState<WasteType[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = use(props.params);
  // call api

  useEffect(() => {
    fetch(`https://imk.schematics-its.com/api/bs/${id}`)
      .then((res) => res.json())
      .then((res) => {
        const data = res.data;
        setBank(data);
        setWaste(data.accepted_waste_types || []);
        setLoading(false);
      });
  }, [id]);

  const categoryMap: Record<string, string> = {
    "89c5a6a3-da5e-40a7-bfd4-6da12126e4d5": "Kaleng",
    "36196d49-5723-4e1e-a7f1-e671d239ebbe": "Kertas",
    "67f02471-4e29-4b48-8d72-dddd955f4b2e": "Plastik",
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {loading ? (
        <main className="flex-grow">
          <p> Loading... </p>
        </main>
      ) : (
        <div
          className="bg-white min-h-screen"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {/* Breadcrumb and content */}
          <main className="max-w-7xl mx-auto px-6 py-6 flex-grow">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-[#9b6f2a] font-semibold text-lg">
                {bank.name}
              </h1>
            </div>

            {bank.accept_all ? (
              <h2 className="text-[#5a7c33] font-semibold text-sm mt-2">
                Menerima Semua Jenis Sampah
              </h2>
            ) : (
              <h2 className="text-red-600 font-semibold text-sm mt-2">
                Tidak Menerima Semua Jenis Sampah
              </h2>
            )}

            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="md:col-span-2 text-[13px] space-y-2">
                <p>
                  <strong>Jam Buka :</strong> <br />
                  {bank.open_hour}
                </p>
                <p>
                  <strong>Status :</strong> <br />
                  {bank.status == "active" ? (
                    <span className="text-[#5a7c33]">Aktif</span>
                  ) : (
                    <span className="text-red-600">Tidak Aktif</span>
                  )}
                </p>
                <p>
                  <strong>Alamat :</strong> <br />
                  {bank.address}
                </p>
                <p>
                  <strong>No. Telp :</strong> <br />
                  {bank.phone}
                </p>
                <div>
                  <strong>Deskripsi :</strong>
                  <p>{bank.description}</p>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/Images/Trash_Bin.png"
                  alt="Bank Sampah"
                  width={400}
                  height={300}
                  className="object-cover rounded-md"
                />
              </div>
            </div>

            {/* punyaku */}
            <div className="mt-8 space-y-4 text-sm">
              {wastes.map((w, idx) => (
                <WasteProgressCard
                  key={idx}
                  data={{
                    category_name: categoryMap[w.category_id] || "Sampah Biasa",
                    price: w.price,
                    filled: w.filled,
                    quota: w.quota,
                  }}
                />
              ))}
            </div>
          </main>
        </div>
      )}
      <Footer />
    </div>
  );
}
