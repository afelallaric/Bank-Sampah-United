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

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[#9b6f2a] font-semibold text-lg">
              Bank Sampah Terdekat
            </h1>
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