// copas'd from /edit
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import WasteTypeCard from "@/components/WasteTypeCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { use } from "react";
import { cookies } from "next/headers";
import WasteTypeCardNew from "@/components/WasteTypeCardNew";

interface WasteType {
  category_id: string;
  price: number;
  quota: number;
  filled: number;
}

export default function EditBankPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(props.params);
  const router = useRouter();
  const [bank, setBank] = useState<any>(null);
  const [wastes, setWastes] = useState<WasteType[]>([]);
  const [token, setToken] = useState<string | null>(null);

  // const token =
  //   typeof window !== "undefined" ? localStorage.getItem("token") : null;
  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith("token="));
    const extractedToken = cookie?.split("=")[1] || null;
    setToken(extractedToken);
  }, []);

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

  const handleWasteChange = (
    index: number,
    field: keyof WasteType,
    value: WasteType[typeof field]
  ) => {
    const updated = [...wastes];
    updated[index] = { ...updated[index], [field]: value };
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
      status: bank.status,
    };

    const res = await fetch("https://imk.schematics-its.com/api/bs/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert("Update success!");
      console.log(payload);
      router.push("/mybs");
    } else {
      console.log(payload);
      alert("Failed to update.");
    }
  };

  if (!bank) return <div className="p-6">Loading...</div>;

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[#9b6f2a] font-semibold text-lg">
            Home {">"} Bank Sampah Saya {">"} {bank.name}
          </h1>
        </div>

        {/* START PUNYA AFEL */}
        <div className="flex flex-col lg:flex-row gap-70">
          {/* Form Section */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Bank Sampah Aktif?</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={bank.status == "active"}
                  onChange={(e) =>
                    setBank({
                      ...bank,
                      status: e.target.checked ? "active" : "inactive",
                    })
                  }
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 peer-focus:ring-green-300 transition-colors duration-300"></div>
                <div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-transform duration-300 peer-checked:translate-x-full"></div>
              </label>
            </div>
            <div key="1">
              <label className="block font-semibold text-sm text-[#003049] mb-1">
                Nama Bank Sampah
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Isi nama bank sampah..."
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                value={bank.name}
                onChange={(e) => setBank({ ...bank, name: e.target.value })}
              />
            </div>
            <div key="2">
              <label className="block font-semibold text-sm text-[#003049] mb-1">
                Alamat
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Isi Alamat..."
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                value={bank.address}
                onChange={(e) => setBank({ ...bank, address: e.target.value })}
              />
            </div>
            <div key="3">
              <label className="block font-semibold text-sm text-[#003049] mb-1">
                Jam Buka
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Isi jam buka..."
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                value={bank.open_hour}
                onChange={(e) =>
                  setBank({ ...bank, open_hour: e.target.value })
                }
              />
            </div>
            <div key="4">
              <label className="block font-semibold text-sm text-[#003049] mb-1">
                Kontak
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Isi kontak no. telp..."
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                value={bank.phone}
                onChange={(e) => setBank({ ...bank, phone: e.target.value })}
              />
            </div>
            {/* deskripsi gweh */}
            <div>
              <label className="block font-semibold text-sm text-[#003049] mb-1">
                Deskripsi <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm h-24 resize-none focus:outline-none"
                placeholder="isi deskripsi.........."
                value={bank.description}
                onChange={(e) =>
                  setBank({ ...bank, description: e.target.value })
                }
              ></textarea>
            </div>

            <div>
              <p className="font-bold text-sm text-[#003049] mb-1">
                Jenis Sampah yang Diterima
              </p>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  Menerima semua jenis sampah?
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={bank.accept_all}
                    onChange={(e) =>
                      setBank({ ...bank, accept_all: e.target.checked })
                    }
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 peer-focus:ring-green-300 transition-colors duration-300"></div>
                  <div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-transform duration-300 peer-checked:translate-x-full"></div>
                </label>
              </div>
            </div>

            {/* Toggle switch section - sebelumnya sudah ditambahkan */}
          </div>

          {/* Image Upload Section */}
          <div className="flex flex-col items-center">
            <img
              src="/Images/Trash_Bin.png"
              alt="Illustration of green recycling bin, large green trash container filled with garbage, and black trash bags on the ground"
              width={400}
              height={300}
              className="max-w-full h-auto mb-8" // Adjusted margin
            />
            <label className="mt-4 font-bold text-sm text-[#003049] flex items-center gap-2">
              Upload Foto <span className="text-red-500">*</span>
              <button
                type="button"
                className="bg-gray-200 hover:bg-gray-300 rounded p-1"
              >
                <i className="fas fa-upload"></i>
              </button>
            </label>
          </div>
        </div>
        {/* END PUNYA AFEL */}
        <div className="mt-6 space-y-6">
          <h2 className="text-lg font-bold mt-6 mb-2">Jenis Sampah</h2>
          {wastes.map((w, idx) => (
            <WasteTypeCardNew
              key={idx}
              index={idx}
              data={w}
              onChange={handleWasteChange}
              onRemove={handleRemoveWaste}
            />
          ))}

          <div className="flex justify-center">
            <button
              className="bg-[#a26c2e] hover:bg-[#895722] text-white font-bold py-2 px-6 rounded w-full md"
              onClick={handleAddWaste}
            >
              + Tambah
            </button>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-[#4c7c22] hover:bg-[#3e671b] text-white font-bold py-2 px-6 rounded w-full md"
              onClick={handleSubmit}
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
