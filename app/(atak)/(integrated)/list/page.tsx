// /list and /home_not_logging_in
"use client";

import BSCard from "@/components/BSCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoggedHeader from "@/components/Header";
import { useEffect, useState } from "react";

type WasteType = {
  category_id: string;
  price: number;
  quota: number;
  filled: number;
};

type Bank = {
  id: string;
  name: string;
  open_hour: string;
  address: string;
  accept_all: boolean;
  accepted_waste_types: WasteType[];
  status: string;
};

export default function BankListPage() {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [loading, setLoading] = useState(true);

  function mapCategoryIdToName(id: string): string {
    if (id.includes("89c5a6a3-da5e-40a7-bfd4-6da12126e4d5")) return "Kaleng";
    if (id.includes("36196d49-5723-4e1e-a7f1-e671d239ebbe")) return "Kertas";
    if (id.includes("67f02471-4e29-4b48-8d72-dddd955f4b2e")) return "Plastik"; // WARNING: blm ada gambarnya
    if (id.includes("a989452f-a833-4f42-9025-6c691d7843b1")) return "Botol";
    return "Trash_Bin"; // fallback
  }

  useEffect(() => {
    fetch("https://imk.schematics-its.com/api/bs")
      .then((res) => res.json())
      .then((data) => {
        setBanks(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching banks:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="min-h-screen bg-white text-black p-6">
        <h1 className="text-2xl font-bold mb-6">Bank Sampah List</h1>

        {loading ? (
          <main className="flex-grow">
            <p>Loading...</p>
          </main>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {banks.map((bank: Bank) => (
              <BSCard
                key={bank.id}
                id={bank.id}
                name={bank.name}
                open_hour={bank.open_hour}
                address={bank.address}
                accept_all={bank.accept_all}
                status={bank.status}
                accepted_waste_types={
                  bank.accepted_waste_types.map((wt) =>
                    mapCategoryIdToName(wt.category_id)
                  ) || []
                }
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
