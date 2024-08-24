import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function SignIn() {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = (event.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
    const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement).value;

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      router.push('/dashboard'); // Arahkan ke halaman dashboard setelah login berhasil
    } else {
      router.push('/signup')
    }
  };

    return (
      <div className="min-h-screen bg-blue-50">
        <div className="flex justify-start mt-10 ml-32 md:ml-10 ">
          <img src="Logo.png" alt="" className="w-36 md:w-24" />
        </div>
  
        <div className="flex flex-col md:flex-row justify-evenly mt-14 md:mt-8">
          <div className="hidden md:flex flex-col items-center">
            <div>
              <img className="w-full" src="hero.png" alt="Hero" />
            </div>
            <div className="w-full max-w-md">
              <h1 className="text-2xl font-bold">
                Elevate Your Messaging Efficiency with Our Innovative Admin Tools
              </h1>
              <div className="mt-5 mb-20">
                Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Contact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.
              </div>
            </div>
          </div>
  
          <div className="bg-white p-8 mt-16 rounded-lg shadow-md max-w-md w-full self-start">
            <h2 className="text-2xl text-center font-bold text-gray-900">
              Welcome Back
            </h2>
            <h2 className="text-center font-bold text-gray-900 mb-6">
              We’re so excited to see you again!
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="email"
                  placeholder="Username / Email"
                  className="mt-1 block w-full h-12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="mt-1 block w-full h-12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
  
              <div className="flex items-center justify-between mb-6">
                <a href="#" className="text-sm text-blue-600 hover:underline font-semibold">
                  Lupa Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 font-bold mr-5">
                Butuh buat akun? {''}
                <a href="signup" className="text-blue-600 hover:underline font-semibold">
                    Daftar di sini
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  