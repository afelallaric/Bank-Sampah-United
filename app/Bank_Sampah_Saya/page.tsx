'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface BankSampah {
  id: number;
  nama: string;
  jam_buka: string;
  jam_tutup: string;
  aktif?: boolean;
}

export default function BankSampahPage() {
  const [banks, setBanks] = useState<BankSampah[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [profile, setProfile] = useState({
    nama: 'Kinan Alkasari',
    password: '*******',
    email: 'Alkasari32175@gmail.com'
  });

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
        const processed = res.data.map((bank: BankSampah) => ({
          ...bank,
          aktif: isAktif(bank.jam_buka, bank.jam_tutup)
        }));
        setBanks(processed);
      })
      .catch(err => console.error('Gagal fetch data:', err));
  }, []);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className="bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* This div will be dimmed when popup is shown */}
      <div className={`transition-opacity duration-200 ${showEditPopup ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
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
              <div className="relative">
                <button
                  aria-label="User profile"
                  onClick={toggleDropdown}
                  className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#5a7c33]"
                >
                  <i className="fas fa-user text-lg"></i>
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-[#f9f9b6] border border-[#ccc] rounded shadow z-10">
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-[#e0e08c] text-[#5a7c33] font-semibold"
                      onClick={() => {
                        setShowEditPopup(true);
                        setShowDropdown(false);
                      }}
                    >
                      Edit Profile
                    </button>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-[#e0e08c] text-[#d11a1a] font-semibold"
                      onClick={() => alert("Logout action")}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
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
                    className={`text-sm font-bold px-3 py-0.5 rounded-md text-center min-w-[72px] ${
                      bank.aktif
                        ? 'bg-[#e6e6e6] text-[#7a8f3a]'
                        : 'bg-[#d9d9d9] text-[#d11a1a]'
                    }`}
                  >
                    {bank.aktif ? 'Buka' : 'Tutup'}
                  </span>
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
                <a className="block hover:underline" href="#">HOME</a>
                <a className="block hover:underline" href="/Login">LOGIN</a>
                <a className="block hover:underline" href="#">ABOUT US</a>
              </nav>
            </div>
          </div>
          <hr className="border-t border-white/30 mx-6" />
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-[10px]">
            <div>© Bank Sampah United 2025 | ALL RIGHT RESERVED</div>
            <div className="flex space-x-4 mt-3 md:mt-0 text-white text-lg">
              <a aria-label="Twitter" className="hover:text-[#1da1f2]" href="#"><i className="fab fa-twitter"></i></a>
              <a aria-label="Instagram" className="hover:text-[#e1306c]" href="#"><i className="fab fa-instagram"></i></a>
              <a aria-label="YouTube" className="hover:text-[#ff0000]" href="#"><i className="fab fa-youtube"></i></a>
              <a aria-label="LinkedIn" className="hover:text-[#0077b5]" href="#"><i className="fab fa-linkedin-in"></i></a>
              <a aria-label="TikTok" className="hover:text-[#000000]" href="#"><i className="fab fa-tiktok"></i></a>
              <a aria-label="Telegram" className="hover:text-[#0088cc]" href="#"><i className="fab fa-telegram-plane"></i></a>
            </div>
          </div>
        </footer>
      </div>

      {/* Edit Profile Popup */}
      {showEditPopup && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div 
            className="fixed inset-0 bg-black/30" 
            onClick={() => setShowEditPopup(false)}
          ></div>
          <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg relative z-10">
            <div className="flex justify-center mb-4">
              <i className="fas fa-user text-4xl text-[#5a7c33]"></i>
            </div>
            <label className="block text-[#5a7c33] font-semibold mb-1">Nama</label>
            <input
              type="text"
              className="w-full mb-4 px-4 py-2 bg-[#eaeaea] rounded"
              value={profile.nama}
              onChange={(e) => setProfile({ ...profile, nama: e.target.value })}
            />

            <label className="block text-[#5a7c33] font-semibold mb-1">Password</label>
            <div className="relative mb-4">
              <input
                type="password"
                className="w-full px-4 py-2 bg-[#eaeaea] rounded"
                value={profile.password}
                onChange={(e) => setProfile({ ...profile, password: e.target.value })}
              />
              <span className="absolute right-3 top-2.5 text-gray-500">
                <i className="fas fa-eye-slash"></i>
              </span>
            </div>

            <label className="block text-[#5a7c33] font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full mb-4 px-4 py-2 bg-[#eaeaea] rounded"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowEditPopup(false)}
                className="text-red-600 text-xl"
              >
                <i className="fas fa-times-circle"></i>
              </button>
              <button
                onClick={() => {
                  setShowEditPopup(false);
                  alert('Data disimpan');
                }}
                className="text-green-600 text-xl"
              >
                <i className="fas fa-check-circle"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
