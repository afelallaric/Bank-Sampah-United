"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />

      {/* Main Section */}
      <main className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8 flex-grow">
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
            <Link href="/list">
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

      <Footer />
    </div>
  );
}
