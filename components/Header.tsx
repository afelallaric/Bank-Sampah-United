"use client";

import Link from "next/link";

export default function Header() {
  return (
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
          <div className="relative cursor-pointer flex items-center">
            <span>LOKASI</span>
            <i className="fas fa-chevron-down ml-1 text-[10px]"></i>
          </div>
          <div>TENTANG KAMI</div>
          <Link
            href="/register"
            className="bg-[#8c6a33] border border-white rounded-md px-4 py-1 text-[13px] font-normal hover:bg-[#7a5c2b] transition"
          >
            REGISTER
          </Link>
          <Link
            href="/login"
            className="border border-white rounded-md px-4 py-1 text-[13px] font-normal hover:bg-white hover:text-[#5a7f2a] transition"
          >
            LOGIN
          </Link>
        </nav>
      </div>
    </header>
  );
}
