"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";

type Bank = {
  id: string;
  name: string;
  open_hour: string;
};

export default function BankListPage() {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [loading, setLoading] = useState(true);

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
    <>
      <Header />
      <main className="min-h-screen bg-white text-black p-6">
        <h1 className="text-2xl font-bold mb-6">Bank Sampah List</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {banks.map((bank) => (
              <div
                key={bank.id}
                className="border rounded-lg p-4 shadow bg-gray-100"
              >
                <h2 className="text-lg font-semibold">{bank.name}</h2>
                <p className="text-sm text-gray-700">
                  Jam Buka: {bank.open_hour || "-"}
                </p>
                <button
                  onClick={() => alert(`ID: ${bank.id}`)}
                  className="mt-3 px-3 py-1 bg-green-700 text-white text-sm rounded hover:bg-green-800 transition"
                >
                  Get Detail (ID)
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
