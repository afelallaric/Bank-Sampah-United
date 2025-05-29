'use client';

import React from 'react';
import Link from 'next/link';


export default function HomePage() {
  return (
    <div className="bg-white">
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
              href="/Register"
              className="bg-[#8c6a33] border border-white rounded-md px-4 py-1 text-[13px] font-normal hover:bg-[#7a5c2b] transition"
            >
              REGISTER
            </a>
            <a
              href="/Login"
              className="border border-white rounded-md px-4 py-1 text-[13px] font-normal hover:bg-white hover:text-[#5a7f2a] transition"
            >
              LOGIN
            </a>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 w-full md:w-auto">
          <img
            alt="Bank Sampah United brown logo"
            className="flex-shrink-0"
            height={240}
            width={240}
            src="/Images/Brown_Logo.png"
          />
          <div className="max-w-md">
            <h1 className="text-[#8c6a33] font-extrabold text-3xl leading-tight mb-2">
              Bank Sampah
              <br />
              United
            </h1>
            <p className="text-[14px] text-[#3c3c3c] mb-4">
              Tempat Mencari Bank Sampah Terdekat.
            </p>
            <Link href="/Register">
            <button className="bg-[#8c6a33] text-white font-bold text-[14px] rounded-md px-5 py-2 flex items-center gap-2 hover:bg-[#7a5c2b] transition">
              Start
              <i className="fas fa-arrow-right"></i>
            </button>
            </Link>
          </div>
        </div>
        <img
          alt="Illustration of garbage bins"
          className="w-full max-w-[300px]"
          height={150}
          width={300}
          src="/Images/Trash_Bin.png"
        />
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
