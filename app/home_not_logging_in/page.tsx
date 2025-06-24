import Head from 'next/head';

export default function HomeNotLogginInPage() {
  return (
    <>
      <Head>
        <title>Bank Sampah Saya</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {/* Header */}
          <header className="bg-[#5a7f2a]">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
              <div className="flex items-center space-x-3">
                <img
                  alt="Bank Sampah United logo"
                  height={40}
                  width={40}
                  src="/Images/Grey_Logo.png"
                />
                <div className="text-white font-bold text-[15px] leading-tight">
                  <div>Bank Sampah</div>
                  <div>United</div>
                </div>
              </div>
              <nav className="flex items-center space-x-6 text-white font-bold text-[13px]">
                <div className="relative cursor-pointer select-none flex items-center">
                  <span>LOKASI</span>
                  <i className="fas fa-chevron-down ml-1 text-[10px]"></i>
                </div>
                <div>TENTANG KAMI</div>
                <a
                  href="/register"
                  className="bg-[#8c6a33] border border-white rounded-md px-4 py-1 text-[13px] font-normal hover:bg-[#7a5c2b] transition"
                >
                  REGISTER
                </a>
                <a
                  href="/login"
                  className="border border-white rounded-md px-4 py-1 text-[13px] font-normal hover:bg-white hover:text-[#5a7f2a] transition"
                >
                  LOGIN
                </a>
              </nav>
            </div>
          </header>

        <main className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-[#9b6f2a] font-semibold text-lg mb-4">
            Bank Sampah Terdekat
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Kartu Rizge Kumpeni */}
            <div className="bg-[#e6e6e6] rounded-md shadow-md p-4 flex flex-col md:flex-row gap-4">
              <img
                src="/Images/Trash_Bin.png"
                alt="Rizge Kumpeni"
                className="w-full md:w-40 h-40 object-cover rounded"
              />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-[#6d914e] font-semibold text-lg">Rizge Kumpeni</h2>
                  <p className="text-sm text-gray-600">07.00–22.00</p>
                  <p className="text-xs text-[#000000]">Jl. Arif Rahman Hakim No. 15 Surabaya</p>
                  <p className="text-[#4a9449] text-sm font-medium">Buka</p>
                  <p className="text-xs text-[#4a9449]">Menerima semua jenis sampah</p>
                  <div className="flex gap-2 mt-2">
                    <img src="/Images/Botol.png" alt="Botol" className="w-10 h-10 border border-[#f7fbb0] rounded bg-[#f7fbb0]"/>
                    <img src="/Images/Kertas.png" alt="Kertas" className="w-10 h-10 border border-[#f7fbb0] rounded bg-[#f7fbb0]" />
                    <img src="/Images/Kaleng.png" alt="Kaleng" className="w-10 h-10 border border-[#f7fbb0] rounded bg-[#f7fbb0]" />
                  </div>
                </div>
                <button className="mt-4 bg-[#7f9748] text-white text-sm font-semibold px-4 py-2 rounded">
                  Kunjungi
                </button>
              </div>
            </div>

            {/* Kartu TPASA */}
            <div className="bg-[#e6e6e6] rounded-md shadow-md p-4 flex flex-col md:flex-row gap-4">
              <img
                src="/Images/Trash_Bin.png"
                alt="TPASA"
                className="w-full md:w-40 h-40 object-cover rounded"
              />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-[#6d914e] font-semibold text-lg">TPASA</h2>
                  <p className="text-sm text-gray-600">07.00–18.00</p>
                  <p className="text-xs text-[#000000]">Jl. Arif Rahman Hakim No. 16 Surabaya</p>
                  <p className="text-[#4a9449] text-sm font-medium">Buka</p>
                  <p className="text-xs text-red-500">Tidak menerima semua jenis sampah</p>
                  <div className="flex gap-2 mt-2">
                    <img src="/Images/Kertas.png" alt="Kertas" className="w-10 h-10 border border-[#f7fbb0] rounded bg-[#f7fbb0]" />
                    <img src="/Images/Botol.png" alt="Botol" className="w-10 h-10 border border-[#f7fbb0] rounded bg-[#f7fbb0]" />
                  </div>
                </div>
                <button className="mt-4 bg-[#7f9748] text-white text-sm font-semibold px-4 py-2 rounded">
                  Kunjungi
                </button>
              </div>
            </div>
          </div>
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
    </>
  );
}