'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface BankSampah {
  id: number;
  nama: string;
  jam_buka: string; // format 'HH:mm'
  jam_tutup: string; // format 'HH:mm'
  aktif?: boolean;
}

export default function BankSampahPage() {
  const [banks, setBanks] = useState<BankSampah[]>([]);

  function isAktif(jam_buka: string, jam_tutup: string): boolean {
    const now = new Date();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();

    const [bukaJam, bukaMenit] = jam_buka.split(':').map(Number);
    const [tutupJam, tutupMenit] = jam_tutup.split(':').map(Number);

    const bukaMinutes = bukaJam * 60 + bukaMenit;
    const tutupMinutes = tutupJam * 60 + tutupMenit;

    return nowMinutes >= bukaMinutes && nowMinutes <= tutupMinutes;
  }

  useEffect(() => {
    axios.get('/api/bank_sampah_saya')
      .then(res => {
        console.log('Data dari API:', res.data); // debug log
        const processed = res.data.map((bank: BankSampah) => ({
          ...bank,
          aktif: isAktif(bank.jam_buka, bank.jam_tutup)
        }));
        console.log('Data yang akan ditampilkan:', processed); // debug log
        setBanks(processed);
      })
      .catch(err => console.error('Gagal fetch data:', err));
  }, []);

  return (
    <div className="bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <header className="bg-[#5a7c33]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-3">
            <img
              alt="Bank Sampah United logo"
              height={40}
              width={40}
              src="/Images/Grey_Logo.png"
              className="w-10 h-10"
            />
            <div className="text-white font-bold text-[15px] leading-tight">
              <div>Bank Sampah</div>
              <div>United</div>
            </div>
          </div>
          <nav className="flex items-center space-x-6 text-white font-bold text-[13px]">
            <button className="flex items-center gap-1 hover:underline">
              LOKASI <i className="fas fa-chevron-down text-[10px]"></i>
            </button>
            <button className="hover:underline">TENTANG KAMI</button>
            <button
              aria-label="User profile"
              className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#5a7c33]"
            >
              <i className="fas fa-user text-lg"></i>
            </button>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[#9b6f2a] font-semibold text-lg">
            Home {'>'} Bank Sampah Saya
          </h1>
          <button className="bg-[#9b6f2a] text-white text-sm font-semibold rounded-md px-4 py-2">
            + Tambah
          </button>
        </div>

        <ul className="space-y-3">
          {banks.map((bank) => (
            <li
              key={bank.id}
              className="flex items-center justify-between bg-[#f7fbb0] shadow-[2px_2px_4px_#d9e2a0] rounded-md px-4 py-2"
            >
              <span className="text-[#7a8f3a] text-base font-normal">{bank.nama}</span>
              <div className="flex items-center space-x-2">
                <span
                  aria-label={`Status ${bank.aktif ? 'Active' : 'Inactive'}`}
                  className={`w-6 h-6 rounded-full border ${
                    bank.aktif ? 'bg-[#1e9e1e] border-[#1e9e1e]' : 'bg-[#d11a1a] border-[#d11a1a]'
                  }`}
                />
                <button
                  aria-label={`Remove ${bank.nama}`}
                  className="bg-[#d9d9d9] rounded-md px-1.5 py-0.5 text-red-600 font-bold text-lg leading-none"
                >
                  ×
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>

      {/* Footer */}
      <footer className="bg-[#5a7f2a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col md:flex-row md:items-start gap-1 md:gap-12">
            <img
              alt="Bank Sampah United grey logo"
              height={100}
              width={100}
              src="/Images/Grey_Logo.png"
            />
            <div>
              <div className="font-bold text-[15px] leading-tight mb-2">
                Bank Sampah
                <br />
                United
              </div>
              <p className="text-[12px] max-w-xs leading-snug">
                Gedung Teknik Informatika, Jl. Teknik Kimia lantai 3, Keputih,
                Kec. Sukolilo, Surabaya, Jawa Timur 60117
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-[13px] mb-2">QUICK LINKS</div>
            <nav className="text-[12px] space-y-1">
              <a className="block hover:underline" href="#">
                HOME
              </a>
              <a className="block hover:underline" href="/Login">
                LOGIN
              </a>
              <a className="block hover:underline" href="#">
                ABOUT US
              </a>
            </nav>
          </div>
        </div>
        <hr className="border-t border-white/30 mx-6" />
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-[10px]">
          <div>© Bank Sampah United 2025 | ALL RIGHT RESERVED</div>
          <div className="flex space-x-4 mt-3 md:mt-0 text-white text-lg">
            <a aria-label="Twitter" className="hover:text-[#1da1f2]" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a aria-label="Instagram" className="hover:text-[#e1306c]" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a aria-label="YouTube" className="hover:text-[#ff0000]" href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a aria-label="LinkedIn" className="hover:text-[#0077b5]" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a aria-label="TikTok" className="hover:text-[#000000]" href="#">
              <i className="fab fa-tiktok"></i>
            </a>
            <a aria-label="Telegram" className="hover:text-[#0088cc]" href="#">
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
