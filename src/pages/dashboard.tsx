import { getSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { Session } from 'next-auth';

interface DashboardProps {
  session: Session;
}

export default function Dashboard({ session }: DashboardProps) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    signOut({ callbackUrl: '/signin' }); 
  };

  return (
    <div className={`font-sans antialiased transition-colors duration-300 ${darkMode ? 'dark' : 'light'}`} id="app">
        <div className="flex h-screen">
            <div className="bg-white dark:bg-gray-800 w-64 p-6">
                <div className="flex items-center justify-center">
                    <img src="logo1.png" alt="Logo" className="h-8" />
                </div>
                <nav className="mt-10">
                    {['Dashboard', 'Device', 'Contact', 'Groups', 'Message List', 'Broadcast', 'Campaign', 'Auto Reply', 'Customer Service', 'Analytics', 'Forwardin API', 'Settings'].map((item, index) => (
                        <a href="#" key={index} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 dark:hover:bg-gray-700">
                            <i className={`fas fa-${index === 0 ? 'tachometer-alt' : 'mobile-alt'}`}></i> {item}
                        </a>
                    ))}
                </nav>
            </div>

            <div className="flex-1 p-6 dark:bg-gray-900 dark:text-gray-300 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Selamat siang, {session.user?.username} </h2>
                    <div className="flex items-center space-x-4">
                        <i className="fas fa-bell text-xl text-gray-600 dark:text-gray-400"></i>
                        <div className="relative">
                            <button onClick={handleDropdownToggle} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
                                <img src="hero.jpg" alt="Profile Picture" className="w-8 h-8 rounded-full" />{session.user?.username || 'User'} ▼
                            </button>
                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                                    <a href='landing' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                        Go To Landing Page
                                    </a>
                                    <a onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                                        Logout
                                    </a>
                                </div>
                            )}
                        </div>
                        <i className="fas fa-cog text-xl text-gray-600 dark:text-gray-400"></i>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Paket saat ini</h3>
                            <p className="text-xl font-bold text-blue-600 dark:text-blue-400">Starter <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Free</span></p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500 dark:text-gray-400">Aktif sampai dengan Selasa, 29 Agustus 2023</p>
                            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Upgrade Paket</button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600 dark:text-gray-400">Devices</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">8 dari 10 device yang tersedia</p>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-4">
                            <div className="bg-red-600 h-2 rounded-full"></div>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600 dark:text-gray-400">Contacts</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">5 dari 100 kontak yang tersedia</p>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Pesan terakhir</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">Hai apa kabarmu hari ini? Semoga...</p>
                            <span className="text-blue-600 dark:text-blue-400">Terkirim</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">Hai apa kabarmu hari ini? Semoga...</p>
                            <span className="text-blue-600 dark:text-blue-400">Terkirim</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">Hai apa kabarmu hari ini? Semoga...</p>
                            <span className="text-green-600 dark:text-green-400">Diterima</span>
                        </div>
                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Tampilkan lainnya</a>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Analitik</h3>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-2">Ringkasan hari ini</h4>
                            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                                <p className="text-sm text-gray-600 dark:text-gray-400">Device: <span className="font-semibold">RMX3263</span></p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Aktif sejak: <span className="font-semibold">29.8.2023</span></p>
                                <div className="flex justify-between mt-4">
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">Pesan Keluar</p>
                                        <p className="text-gray-900 dark:text-gray-100 font-semibold">24</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">Pesan Masuk</p>
                                        <p className="text-gray-900 dark:text-gray-100 font-semibold">7</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">Pesan Gagal</p>
                                        <p className="text-gray-900 dark:text-gray-100 font-semibold">0</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-2">Total statistik pesan</h4>
                            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">Total Pesan Keluar</p>
                                        <p className="text-gray-900 dark:text-gray-100 font-semibold">45</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">Total Pesan Gagal</p>
                                        <p className="text-gray-900 dark:text-gray-100 font-semibold">8</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">Total Pesan Masuk</p>
                                        <p className="text-gray-900 dark:text-gray-100 font-semibold">23</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="h-32 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                                        <p className="text-4xl font-bold text-blue-500 dark:text-blue-400">505</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button id="dark-mode-toggle" onClick={toggleDarkMode} className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none">
                Toggle Dark Mode
            </button>
        </div>
    </div>
);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/signin', 
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
