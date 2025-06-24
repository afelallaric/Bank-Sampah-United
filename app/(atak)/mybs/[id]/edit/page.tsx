// TES DULU
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import WasteTypeCard from "@/components/WasteTypeCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { use } from "react";

export default function EditBankPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(props.params);
  const router = useRouter();
  const [bank, setBank] = useState<any>(null);
  const [wastes, setWastes] = useState<any[]>([]);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (!id || !token) return;
    // if (!id) return;

    fetch(`https://imk.schematics-its.com/api/bs/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((res) => {
        const data = res.data;
        setBank(data);
        setWastes(data.accepted_waste_types || []);
      })
      .catch((err) => console.error(err));
  }, [id, token]);

  const handleWasteChange = (index: number, field: string, value: any) => {
    const updated = [...wastes];
    updated[index][field] = value;
    setWastes(updated);
  };

  const handleAddWaste = () => {
    setWastes([...wastes, { category_id: "", price: 0, quota: 0, filled: 0 }]);
  };

  const handleRemoveWaste = (index: number) => {
    const updated = [...wastes];
    updated.splice(index, 1);
    setWastes(updated);
  };

  const handleSubmit = async () => {
    if (!token || !bank) return;
    const payload = {
      id: bank.id,
      name: bank.name,
      open_hour: bank.open_hour,
      phone: bank.phone,
      description: bank.description,
      accept_all: bank.accept_all,
      accepted_waste_types: wastes,
    };

    const res = await fetch("https://lala.com/api/bs/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Update success!");
      router.push("/my_banks");
    } else {
      alert("Failed to update.");
    }
  };

  if (!bank) return <div className="p-6">Loading...</div>;

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-xl font-bold text-green-800 mb-4">
          Edit: {bank.name}
        </h1>

        <label className="block font-semibold">Nama Bank Sampah *</label>
        <input
          className="w-full border p-2 mb-3"
          value={bank.name}
          onChange={(e) => setBank({ ...bank, name: e.target.value })}
        />

        <label className="block font-semibold">Alamat *</label>
        <input
          className="w-full border p-2 mb-3"
          value={bank.address}
          onChange={(e) => setBank({ ...bank, address: e.target.value })}
        />

        <label className="block font-semibold">Jam Buka *</label>
        <input
          className="w-full border p-2 mb-3"
          value={bank.open_hour}
          onChange={(e) => setBank({ ...bank, open_hour: e.target.value })}
        />

        <label className="block font-semibold">Kontak *</label>
        <input
          className="w-full border p-2 mb-3"
          value={bank.phone}
          onChange={(e) => setBank({ ...bank, phone: e.target.value })}
        />

        <label className="block font-semibold">Deskripsi *</label>
        <textarea
          className="w-full border p-2 mb-3"
          value={bank.description}
          onChange={(e) => setBank({ ...bank, description: e.target.value })}
        ></textarea>

        <label className="block font-semibold">
          Menerima semua jenis sampah?
        </label>
        <input
          type="checkbox"
          checked={bank.accept_all}
          onChange={(e) => setBank({ ...bank, accept_all: e.target.checked })}
        />

        <h2 className="text-lg font-bold mt-6 mb-2">Jenis Sampah</h2>
        {wastes.map((w, idx) => (
          <WasteTypeCard
            key={idx}
            index={idx}
            data={w}
            onChange={handleWasteChange}
            onRemove={handleRemoveWaste}
          />
        ))}

        <button
          onClick={handleAddWaste}
          className="bg-yellow-600 text-white px-4 py-2 rounded mt-3 mb-6"
        >
          + Tambah
        </button>

        <button
          onClick={handleSubmit}
          className="block w-full bg-green-700 text-white px-4 py-2 rounded"
        >
          Simpan Perubahan
        </button>
      </main>
      <Footer />
    </div>
  );
}
