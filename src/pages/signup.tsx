import { signIn } from "next-auth/react";
import { FormEvent } from "react";

export default function signup() {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;
    
        // Simulate registration
        await signIn("credentials", {
          redirect: true,
          username,
          password,
          callbackUrl: "/dashboard",
        });
      };

    const countryCodes = [
        { code: '+1', name: 'United States' },
        { code: '+44', name: 'United Kingdom' },
        { code: '+61', name: 'Australia' },
        { code: '+62', name: 'Indonesia' },
        { code: '+65', name: 'Singapore' },
        { code: '+91', name: 'India' },
    ];
    
    return (
        <div className="bg-blue-50">
            <div className="flex justify-start mt-10 ml-32 md:ml-10">
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
            Welcome to Fowardin
            </h2>
            <h2 className="text-center font-bold text-gray-900 mb-6">
                Revolutionize your communication journey with Fowardin today
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="mt-1 block w-full h-12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        className="mt-1 block w-full h-12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                <div className="flex">
                    <select
                        className="mt-1 mr-1 block w-24 h-12 px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
                        defaultValue="+62"
                        >
                        {countryCodes.map((country) => (
                            <option key={country.code} value={country.code}>
                            {country.code} {country.name}
                            </option>
                        ))}
                        </select>
                        <input
                        type="text"
                        id="whatsapp"
                        placeholder="Whatsapp Phone Number"
                        className="mt-1 block w-full h-12 px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                </div>
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        className="mt-1 block w-full h-12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-medium py-2 px-4 mt-5 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Sign Up
                </button>
                </form>
                <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 font-bold mr-5">
                    Sudah punya akun? {''}
                    <a href="signin" className="text-blue-600 hover:underline font-semibold">
                     Masuk di sini
                    </a>
                </p>
                </div>
            </div>
            </div>
        </div>
    );
}
