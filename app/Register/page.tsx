import Head from 'next/head';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen flex flex-col md:flex-row" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="md:w-1/2 bg-[#5F8632] flex flex-col justify-center items-center p-6">
          <img
            src="/Images/Trash_Bin.png"
            alt="Illustration of green recycling bin, large green trash container filled with garbage, and black trash bags on the ground"
            width={400}
            height={300}
            className="max-w-full h-auto mb-8" // Adjusted margin
          />
          <div className="w-full flex justify-center"> {/* Added a wrapper for the button */}
            <Link href="/home_not_logging_in"
              className="bg-[#a56f2a] text-white font-semibold text-sm px-5 py-2 rounded flex items-center gap-2 hover:bg-[#8a5a20] transition">
                Lanjutkan Tanpa Membuat Akun
                <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 bg-white flex flex-col justify-center p-8 md:p-16">
          <h1 className="text-[#5a7f2a] font-extrabold text-5xl mb-10">
            Register
          </h1>
          <form className="space-y-6 max-w-md w-full">
            <div>
              <label htmlFor="fullname" className="block text-sm font-semibold text-slate-900 mb-1">
                Nama Lengkap <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Masukkan nama lengkap"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5a7f2a]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-1">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Masukkan email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5a7f2a]"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-900 mb-1">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Masukkan password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5a7f2a]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-1">
                Nomor Telepon <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Masukkan nomor telepon"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5a7f2a]"
              />
            </div>
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#5a7f2a] text-white font-semibold rounded-md py-3 text-lg hover:bg-[#4e6e23] transition"
              >
                Daftar
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-slate-900">
              Sudah punya akun?{' '}
              <a href="/login" className="text-[#5a7f2a] underline font-semibold">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
