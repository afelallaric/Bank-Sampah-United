'use client';

import Head from 'next/head';
import Image from 'next/image';

export default function DetailBankSampahPage() {
  return (
    <>
      <Head>
        <title>Detail Bank Sampah</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-white min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {/* Header */}
        <header className="bg-[#5a7c33]">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-3">
              <Image alt="Bank Sampah United logo" height={40} width={40} src="/Images/Grey_Logo.png" className="w-10 h-10" />
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

        {/* Breadcrumb and content */}
        <main className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[#9b6f2a] font-semibold text-lg">
              Home {'>'} Bank Sampah Saya {'>'} Rizge Kumpeni
            </h1>
          </div>

          <h2 className="text-[#5a7c33] font-semibold text-sm mt-2">Menerima Semua Jenis Sampah</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div className="md:col-span-2 text-[13px] space-y-2">
              <p>
                <strong>Jam Buka :</strong> <br />07.00 - 20.00
              </p>
              <p>
                <strong>Status :</strong> <br /><span className="text-[#5a7c33]">Buka</span>
              </p>
              <p>
                <strong>Alamat :</strong> <br />Jl. Raya Ghufron No.3, Surabaya
              </p>
              <p>
                <strong>No. Telp :</strong> <br />088888888888
              </p>
              <div>
                <strong>Deskripsi :</strong>
                <p>
                  Bank sampah istimewa yang terletak di lokasi strategis dan menerima segala jenis sampah demi tercapainya tujuan lingkungan Sampang yang aman, bersih, dan higienis.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image src="/Images/Trash_Bin.png" alt="Bank Sampah" width={400} height={300} className="object-cover rounded-md" />
            </div>
          </div>

          <div className="mt-8 space-y-4 text-sm">
            <div className="bg-[#f5ffc8] rounded-md px-4 py-3">
              <div className="flex justify-between font-bold mb-1">
                <span>Kaleng</span>
                <span>10.000/Kg</span>
              </div>
              <div className="bg-gray-300 w-full h-4 rounded-md">
                <div className="bg-black h-4 rounded-md" style={{ width: '50%' }}></div>
              </div>
              <p className="text-right text-xs font-semibold">250/500 (Kg)</p>
            </div>

            <div className="bg-[#f5ffc8] rounded-md px-4 py-3">
              <div className="flex justify-between font-bold mb-1">
                <span>Kertas</span>
                <span>3.000/Kg</span>
              </div>
              <div className="bg-gray-300 w-full h-4 rounded-md">
                <div className="bg-black h-4 rounded-md" style={{ width: '47%' }}></div>
              </div>
              <p className="text-right text-xs font-semibold">700/1500 (Kg)</p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-[#5a7f2a] text-white mt-10">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-10">
            <div className="flex flex-col md:flex-row md:items-start gap-1 md:gap-12">
              <Image
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
    </>
  );
}
