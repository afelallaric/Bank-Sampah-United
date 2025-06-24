"use client";

import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://hereismysite.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data.status && data.data.token) {
        document.cookie = `token=${data.data.token}; path=/;`;
        router.push("/my_banks");
      } else {
        setError("Login gagal. Email atau password salah.");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat login.");
    }
  };

  return (
    <>
      <Head>
        <title>Login - Bank Sampah</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-[#5a7f2a] px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded shadow-md max-w-md w-full"
        >
          <h1 className="text-xl font-bold text-[#5a7f2a] mb-4">Login</h1>

          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
            required
          />

          <label className="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded mb-6"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#5a7f2a] text-white py-2 rounded hover:bg-[#4a6823]"
          >
            Masuk
          </button>
        </form>
      </div>
    </>
  );
}
