"use client";

export default function Footer() {
  return (
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
              Surabaya
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
          {/* Add social links here */}
        </div>
      </div>
    </footer>
  );
}
