import Head from 'next/head';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen flex flex-col md:flex-row" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="md:w-1/2 bg-[#5F8632] flex justify-center items-center p-6">
          <img
            src="/Images/Trash_Bin.png"
            alt="Illustration of green recycling bin, large green trash container filled with garbage, and black trash bags on the ground"
            width={400}
            height={300}
            className="max-w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 bg-white flex flex-col justify-center p-10">
          <h1 className="text-[#5F8632] font-extrabold text-5xl mb-12">Login</h1>
          <form className="max-w-md w-full">
            <label htmlFor="email" className="block text-[#0B1E3D] font-semibold mb-1">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Masukkan email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-6 text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5F8632]"
            />

            <label htmlFor="password" className="block text-[#0B1E3D] font-semibold mb-1">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Masukkan password"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-10 text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5F8632]"
            />

            <button
              type="submit"
              className="w-full bg-[#5F8632] text-white font-bold text-lg rounded-md py-3 mb-4 hover:bg-[#4a6a26] transition-colors"
            >
              Login
            </button>

            <p className="text-center text-black text-sm">
              Belum punya akun?{' '}
              <a href="/Register" className="font-semibold underline text-[#5F8632]">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
