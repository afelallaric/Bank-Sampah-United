"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

interface BankSampah {
  id: number;
  name: string;
  status: string;
}

export default function BankSampahPage() {
  const [banks, setBanks] = useState<BankSampah[]>([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [newBank, setNewBank] = useState({
    nama: "",
    alamat: "",
    kota: "",
    noTelp: "",
  });
  //   const [showDropdown, setShowDropdown] = useState(false);
  //   const [showEditPopup, setShowEditPopup] = useState(false);
  //   const [profile, setProfile] = useState({
  //     nama: 'Kinan Alkasari',
  //     password: '*******',
  //     email: 'Alkasari32175@gmail.com'
  //   });

  const router = useRouter();

  function isAktif(jam_buka: string, jam_tutup: string): boolean {
    const now = new Date();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();

    const [bukaJam, bukaMenit] = jam_buka.split(":").map(Number);
    const [tutupJam, tutupMenit] = jam_tutup.split(":").map(Number);

    const bukaMinutes = bukaJam * 60 + bukaMenit;
    const tutupMinutes = tutupJam * 60 + tutupMenit;

    return nowMinutes >= bukaMinutes && nowMinutes <= tutupMinutes;
  }

  // get token
  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((c) => c.startsWith("token="));
    const cookieToken = cookie?.split("=")[1] ?? null;
    console.log(cookie?.split("=")[1]);
    console.log(cookieToken);
    setToken(cookieToken);
  }, []);

  useEffect(() => {
    if (!token) return;

    fetch("https://imk.schematics-its.com/api/bs/my-bank-sampah", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        const processed = data.data.map((bank: BankSampah) => ({
          ...bank,
        }));
        setBanks(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("error fetching banks: ", err);
        setLoading(false);
      });
    // axios.get('/api/bank_sampah_saya')
    //   .then(res => {
    //     const processed = res.data.map((bank: BankSampah) => ({
    //       ...bank,
    //       aktif: isAktif(bank.jam_buka, bank.jam_tutup)
    //     }));
    //     setBanks(processed);
    //   })
    //   .catch(err => console.error('Gagal fetch data:', err));
  }, [token]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {loading ? (
        <main className="flex-grow">
          <p> Loading... </p>
        </main>
      ) : (
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-[#9b6f2a] font-semibold text-lg">
                Bank Sampah Saya
              </h1>
              <button
                onClick={() => setShowAddPopup(true)}
                className="bg-[#9b6f2af0] text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-[#9b6f2a]"
              >
                + Tambah
              </button>
            </div>

            <ul className="space-y-3">
              {banks.map((bank) => (
                <li
                  key={bank.id}
                  onClick={() => router.push(`/mybs/${bank.id}`)}
                  className="flex items-center justify-between bg-[#f7fbb0] shadow-[2px_2px_4px_#d9e2a0] rounded-md px-4 py-2 hover:bg-[#d0d474]"
                >
                  <span className="text-[#7a8f3a] text-base font-normal">
                    {bank.name}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-sm font-bold px-3 py-0.5 rounded-md text-center min-w-[72px] ${
                        bank.status == "active"
                          ? "bg-[#e6e6e6] text-[#7a8f3a]"
                          : "bg-[#d9d9d9] text-[#d11a1a]"
                      }`}
                    >
                      {bank.status == "active" ? "Aktif" : "Inaktif"}
                    </span>
                    {/* <button
                      aria-label={`Remove ${bank.name}`}
                      className="bg-[#d9d9d9] rounded-md px-1.5 py-0.5 text-red-600 font-bold text-lg leading-none"
                    >
                      ×
                    </button> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      )}

      {/* Popup Tambah Bank Sampah */}
      {showAddPopup && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div
            className="fixed inset-0 bg-black/30"
            onClick={() => setShowAddPopup(false)}
          ></div>
          <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-lg z-10">
            <label className="block text-[#809d3c] font-semibold mb-1">
              Nama Bank Sampah
            </label>
            <input
              type="text"
              className="w-full mb-3 px-2 py-2 bg-[#eaeaea] rounded"
              placeholder="isi Nama Bank Sampah...."
              value={newBank.nama}
              onChange={(e) => setNewBank({ ...newBank, nama: e.target.value })}
            />

            <label className="block text-[#809d3c] font-semibold mb-1">
              Alamat Bank Sampah
            </label>
            <input
              type="text"
              className="w-full mb-3 px-2 py-2 bg-[#eaeaea] rounded"
              placeholder="isi Alamat Bank Sampah...."
              value={newBank.alamat}
              onChange={(e) =>
                setNewBank({ ...newBank, alamat: e.target.value })
              }
            />

            <label className="block text-[#809d3c] font-semibold mb-1">
              Nama Kota
            </label>
            <input
              type="text"
              className="w-full mb-3 px-2 py-2 bg-[#eaeaea] rounded"
              placeholder="isi Nama Kota...."
              value={newBank.kota}
              onChange={(e) => setNewBank({ ...newBank, kota: e.target.value })}
            />

            <label className="block text-[#809d3c] font-semibold mb-1">
              No. Telp
            </label>
            <input
              type="text"
              className="w-full mb-3 px-2 py-2 bg-[#eaeaea] rounded"
              placeholder="isi No.Telp...."
              value={newBank.noTelp}
              onChange={(e) =>
                setNewBank({ ...newBank, noTelp: e.target.value })
              }
            />

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowAddPopup(false)}
                className="text-xl hover:bg-red-200 rounded"
              >
                ❌
              </button>

              <button
                onClick={async () => {
                  setShowAddPopup(false);
                  try {
                    const payload = {
                      name: newBank.nama,
                      address: newBank.alamat,
                      city: newBank.kota,
                      phone: newBank.noTelp,
                    };

                    // await axios.post(
                    //   "https://imk.schematics-its.com/api/bs/",
                    //   payload,
                    //   {
                    //     headers: {
                    //       Authorization: `Bearer ${token}`,
                    //       "Content-Type": "application/json",
                    //     },
                    //   }
                    // );
                    fetch("https://imk.schematics-its.com/api/bs", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`, // if needed
                      },
                      body: JSON.stringify({
                        name: newBank.nama,
                        address: newBank.alamat,
                        city: newBank.kota,
                        phone: newBank.noTelp,
                      }),
                      // credentials: "include", // needed if your backend uses cookies/session-based login
                    })
                      .then((res) => {
                        if (!res.ok) throw new Error("Failed to submit");
                        return res.json();
                      })
                      .then((data) => {
                        alert("Berhasil ditambahkan!");
                        // Optionally update UI or refetch list
                      })
                      .catch((err) => {
                        console.error("Error:", err);
                        alert("Gagal menambahkan!");
                      });
                    // alert("Bank Sampah berhasil ditambahkan!");
                    setShowAddPopup(false);
                    setNewBank({ nama: "", alamat: "", kota: "", noTelp: "" });

                    // Refresh list
                    fetch(
                      "https://imk.schematics-its.com/api/bs/my-bank-sampah",
                      {
                        headers: { Authorization: `Bearer ${token}` },
                      }
                    )
                      .then((res) => res.json())
                      .then((data) => {
                        const processed = data.data.map((bank: BankSampah) => ({
                          ...bank,
                        }));
                        setBanks(data.data);
                        setLoading(false);
                      })
                      .catch((err) => {
                        console.error("error fetching banks: ", err);
                        setLoading(false);
                      });
                  } catch (err) {
                    console.error("Gagal tambah bank:", err);
                    alert("Gagal menambahkan Bank Sampah.");
                  }
                  // alert("Data berhasil ditambahkan");
                }}
                className="w-10 h-10 hover:bg-green-200 rounded"
                aria-label="Simpan"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00cc00"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10"
                >
                  <polyline points="20 6 10 17 4 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
