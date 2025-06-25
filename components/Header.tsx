"use client";

import Link from "next/link";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";

export default function Header() {
  const user = useUser();
  const router = useRouter();
  const username = user?.username || "Guest";
  const logout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
  };

  return (
    <header className="bg-[#5a7f2a]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <img src="/Images/Grey_Logo.png" height={40} width={40} alt="logo" />
          <div className="text-white font-bold text-[15px]">
            <div>Bank Sampah</div>
            <div>United</div>
          </div>
        </div>

        <nav className="flex items-center space-x-6 text-white font-bold text-[13px]">
          <span>Welcome, {username}</span>
          {!user && (
            <>
              <Link
                href="/register"
                className="bg-[#8c6a33] border border-white rounded-md px-4 py-1 text-[13px] hover:bg-amber-800 transition-colors"
              >
                REGISTER
              </Link>
              <Link
                href="/loginkhu"
                className="border border-white rounded-md px-4 py-1 text-[13px] hover:bg-[#212916] transition-colors"
              >
                LOGIN
              </Link>
            </>
          )}
          {user && (
            <>
              <button
                onClick={logout}
                className="border border-white rounded-md px-4 py-1 text-[13px] bg-red-600 hover:bg-red-700 transition-colors"
              >
                LOGOUT
              </button>
              <button
                onClick={() => router.push("/mybs")}
                className="border border-white rounded-md px-4 py-1 text-[13px] bg-[#8c6a33] hover:bg-amber-800 transition-colors"
              >
                Bank Sampahku
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
