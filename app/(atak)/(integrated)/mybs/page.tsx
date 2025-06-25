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
              <button className="bg-[#9b6f2a] text-white text-sm font-semibold rounded-md px-4 py-2">
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

      <Footer />
    </div>
  );
}
