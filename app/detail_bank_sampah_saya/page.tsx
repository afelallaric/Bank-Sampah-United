import Head from 'next/head';

export default function DetailBankSampahSayaPage() {
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
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[#9b6f2a] font-semibold text-lg">
              Home {'>'} Bank Sampah Saya {'>'} Rizge Kumpeni
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-70">
            {/* Form Section */}
            <div className="flex-1 space-y-4">
              {[
                ['Nama Bank Sampah', 'isi nama bank sampah....'],
                ['Alamat', 'isi alamat......'],
                ['Jam Buka', 'isi jam buka..........'],
                ['Kontak', 'isi kontak no.telp.......'],
              ].map(([label, placeholder], index) => (
                <div key={index}>
                  <label className="block font-semibold text-sm text-[#003049] mb-1">
                    {label} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none"
                  />
                </div>
              ))}

              {/* Deskripsi */}
              <div>
                <label className="block font-semibold text-sm text-[#003049] mb-1">
                  Deskripsi <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="isi deskripsi.........."
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm h-24 resize-none focus:outline-none"
                ></textarea>
              </div>

              {/* Switch */}
              <div>
                <p className="font-bold text-sm text-[#003049] mb-1">
                  Jenis Sampah yang Diterima
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">
                    Menerima semua jenis sampah?
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
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

        {/* Form Jenis Sampah */}
              <div className="mt-6 space-y-6">
                {/* Card 1 - Kaleng */}
                <div className="bg-[#f8ffcc] rounded-lg p-4 relative">
                  <div className="text-[#7b9b3a] font-semibold mb-3">Kaleng</div>
                  <button
                    aria-label="Hapus Kaleng"
                    className="absolute top-3 right-3 text-red-600 text-xl"
                  >
                    ❌
                  </button>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Harga Beli (per Kg) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        defaultValue={10000}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Terkumpul (dalam Kg) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        defaultValue={250}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Kuota (dalam Kg) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        defaultValue={500}
                      />
                    </div>
                  </div>
                </div>

                {/* Card 2 - Kertas */}
                <div className="bg-[#f8ffcc] rounded-lg p-4 relative">
                  <div className="text-[#7b9b3a] font-semibold mb-3">Kertas</div>
                  <button
                    aria-label="Hapus Kertas"
                    className="absolute top-3 right-3 text-red-600 text-xl"
                  >
                    ❌
                  </button>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Harga Beli (per Kg) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        defaultValue={3000}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Terkumpul (dalam Kg) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        defaultValue={700}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Kuota (dalam Kg) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        defaultValue={1500}
                      />
                    </div>
                  </div>
                </div>

                {/* Tombol Tambah */}
                <div className="flex justify-center">
                  <button className="bg-[#a26c2e] hover:bg-[#895722] text-white font-bold py-2 px-6 rounded w-full md">
                    + Tambah
                  </button>
                </div>

                {/* Tombol Simpan */}
                <div className="flex justify-center">
                  <button className="bg-[#4c7c22] hover:bg-[#3e671b] text-white font-bold py-2 px-6 rounded w-full md">
                    Simpan Perubahan
                  </button>
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