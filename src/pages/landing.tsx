import { useState } from "react";

export default function SignIn() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="font-sans bg-blue-50 absolute top-0 right-0 left-0">
            <header className="bg-white shadow-md mx-auto mt-10 rounded-2xl max-w-screen-xl">
                <div className="container mx-auto flex flex-wrap justify-between items-center p-5">
                    <div className="text-xl font-bold">
                        <img src="logo.png" alt="Logo" className="w-32" />
                    </div>
                    <div className="md:hidden">
                        <button 
                            className="text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                            onClick={toggleSidebar}
                        >
                            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-4 items-center">
                        <select className="hover:text-blue-600 font-bold border-none bg-transparent" name="" id="">
                            <option value="">Features</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <a href="#pricing" className="hover:text-blue-600 font-bold">Pricing</a>
                        <a href="#demo" className="hover:text-blue-600 font-bold">Demo</a>
                        <a href="#blog" className="hover:text-blue-600 font-bold">Blog</a>
                        <a href="/signin" className="hover:text-blue-600 font-bold">
                            <button className='bg-blue-500 rounded-md px-5 py-2 text-white'>Sign In</button>
                        </a>
                    </nav>
                </div>
            </header>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transform ${isSidebarOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}
                onClick={toggleSidebar}
            >
                <div 
                    className="bg-white w-full h-1/2 rounded-b-xl p-5 flex flex-col justify-between"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center mb-5">
                        <img src="logo.png" alt="Logo" className="w-32" />
                        <button 
                            className="text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                            onClick={toggleSidebar}
                        >
                             <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-4">
                        <select className="hover:text-blue-600 font-bold border-none bg-transparent" name="" id="">
                            <option value="">Features</option>
                            <option value="">Features</option>
                            
                        </select>
                        <a href="#pricing" className="hover:text-blue-600 font-bold">Pricing</a>
                        <a href="#demo" className="hover:text-blue-600 font-bold">Demo</a>
                        <a href="#blog" className="hover:text-blue-600 font-bold">Blog</a>
                        <a href="#signin" className="hover:text-blue-600 font-bold">
                            <button className='bg-blue-500 rounded-md px-5 py-2 text-white'>Sign In</button>
                        </a>
                    </nav>
                </div>
            </div>

            <section id="get" className="bg-blue-50 py-20 justify-between">
                <div className="flex flex-col md:flex-row justify-evenly mt-14 md:mt-8">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="flex flex-col border border-l-black px-3">
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#get">Get Started</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#bro">Broadcast</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#cam">Campaign</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#aut">Auto reply</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#opp">opportunity</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#pricing">Pricing</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#faq">FAQ</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#cont">Contact us</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-sm">
                            <h1 className="text-4xl font-bold">
                                Elevate Your Messaging Efficiency with Our Innovative Admin Tools
                            </h1>
                            <div className="mt-5">
                                Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Contact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.
                            </div>
                            <div className="mt-4 mb-20">
                                <a href=""><button className="bg-black px-10 py-3 text-white rounded-l-md border border-r-slate-100">Daftar Sekarang</button ><button className="bg-black px-5 py-3 text-white rounded-r-md border border-r-slate-100" >=</button></a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div>
                            <img className="w-full" src="hero.png" alt="Hero" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="bro" className="bg-blue-50 py-20 justify-between">
                <div className="flex flex-col md:flex-row justify-evenly mt-14 md:mt-8">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="flex flex-col border border-l-black px-3">
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#get">Get Started</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#bro">Broadcast</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#cam">Campaign</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#aut">Auto reply</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#opp">opportunity</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#pricing">Pricing</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#faq">FAQ</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#cont">Contact us</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>
                            <img className="w-full" src="hero2.png" alt="Hero" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-sm">
                            <h1 className="text-4xl font-bold">
                                Reach Further with Ease
                            </h1>
                            <div className="mt-5">
                                Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini.
                            </div>
                            
                        </div>
                    </div>

                    
                </div>
            </section>

            <section id="cam" className="bg-white py-20 justify-between">
                <div className="flex flex-col md:flex-row justify-evenly mt-14 md:mt-8">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="flex flex-col border border-l-black px-3">
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#get">Get Started</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#bro">Broadcast</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#cam">Campaign</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#aut">Auto reply</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#opp">opportunity</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#pricing">Pricing</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#faq">FAQ</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#cont">Contact us</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-sm">
                            <h1 className="text-4xl font-bold">
                                Right Time, Effective Messages
                            </h1>
                            <div className="mt-5">
                                Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.
                            </div>
                            
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div>
                            <img className="w-full" src="hero3.png" alt="Hero" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="aut" className="bg-blue-50 py-20 justify-between">
                <div className="flex flex-col md:flex-row justify-evenly mt-14 md:mt-8">
                    <div className="hidden md:flex flex-col items-center">
                    <div className="flex flex-col border border-l-black px-3">
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#get">Get Started</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#bro">Broadcast</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#cam">Campaign</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#aut">Auto reply</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#opp">opportunity</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#pricing">Pricing</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#faq">FAQ</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#cont">Contact us</a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>
                            <img className="w-full" src="hero4.png" alt="Hero" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-sm">
                            <h1 className="text-4xl font-bold">
                                Respond Faster with the Convenience of Auto Reply
                            </h1>
                            <div className="mt-5">
                                Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin.
                            </div>
                            
                        </div>
                    </div>

                    
                </div>
            </section>

            <section id="opp" className="bg-white py-20 justify-between">
                <div className="text-center text-blue-600 text-3xl font-bold ">"One Step Closer to More Effective and</div>
                <div className="text-center text-blue-600 text-3xl font-bold mb-20">Connected Communication!"</div>
                <div className="flex flex-col md:flex-row justify-evenly mt-14 md:mt-8">
                    <div className="hidden md:flex flex-col items-center">
                    <div className="flex flex-col border border-l-black px-3">
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#get">Get Started</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#bro">Broadcast</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#cam">Campaign</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#aut">Auto reply</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#opp">opportunity</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#pricing">Pricing</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#faq">FAQ</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#cont">Contact us</a>
                        </div>
                    </div>
                    
                    <div className="ml-20"><img src="hero5.png" alt="" /></div>    
                    <div className="flex flex-col items-center mt-14">
                        <div className="w-screen max-w-3xl">
                        <div className="flex flex-col items-center space-y-2 sm:space-y-0 sm:flex-row sm:justify-center">
                            <button className="bg-white rounded-xl mr-1 px-10 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" >Bisnis dan Pemasaran</button>
                            <button className="bg-white rounded-xl mr-1 px-10 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" >komersial dan Penjualan</button>
                            <button className="bg-white rounded-xl mr-1 px-10 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" >Organisasi Sosial</button>
                        </div>

                            <div className="flex flex-col items-center">
                                <div className="w-full max-w-2xl ml-3 "> 
                                    <div className="mt-5">
                                            Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim promosi, pengumuman, dan informasi produk kepada pelanggan dalam jumlah besar secara efisien. Selain itu, fitur Campaign dapat membantu merencanakan dan menyampaikan pesan iklan dengan waktu yang tepat kepada target audiens yang sesuai.
                                    </div> 
                                </div>
                            </div>  
                        </div>
                    </div>

                    
                </div>
            </section>

            <section id="pricing" className="bg-white py-20 justify-between">
                <div className="text-center text-black text-3xl font-bold ">Our Pricing</div>
                <div className=" flex justify-center mt-8 ">
                    <div className=" py-1 px-10 w-64 flex justify-center shadow-md rounded-3xl">
                        <button className="py-5 px-10 w-52 font-semibold bg-white rounded-3xl hover:bg-blue-600">monthly</button>
                        <button className="py-5 px-10 w-52 font-semibold bg-white rounded-3xl hover:bg-blue-600">Yearly</button>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="text-center">
                        <p className="mt-2 text-blue-500 bg-gray-200 rounded-md p-1">Hemat hingga 25% dengan paket tahunan</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-evenly mt-14 md:mt-8">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="flex flex-col border border-l-black px-3">
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#get">Get Started</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#bro">Broadcast</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#cam">Campaign</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#aut">Auto reply</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#opp">opportunity</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#pricing">Pricing</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#faq">FAQ</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#cont">Contact us</a>
                        </div>
                    </div>
                        <div className=" p-6 rounded-lg text-center hover:bg-slate-50 hover:shadow-lg">
                            <h3 className="text-xl text-start  font-bold">Starter</h3>
                            <h1 className="text-xs text-start w-56 font-semibold">Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.</h1>
                            <p className="text-xl text-start font-bold text-gray-800 mt-2 mb-7">Gratis</p>
                            <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg w-full hover:bg-orange-400">Start Now</button>
                            <ul className="mt-6 space-y-3 text-left">
                                <li>100 Auto reply</li>
                                <li>500 Broadcast</li>
                                <li>50 Campaign</li>
                                <li>500 Contact</li>
                                <li>50 Device</li>
                                <li>Excel / CSV Contact Import</li>
                                <li>Google Contact Sync</li>
                            </ul>
                        </div>
                        <div className=" p-6 rounded-lg text-center hover:bg-slate-50 hover:shadow-lg">
                            <h3 className="text-xl text-start  font-bold">Basic</h3>
                            <h1 className="text-xs text-start w-56 font-semibold">Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.</h1>
                            <p className="text-xl text-start font-bold text-gray-800">Rp65.000/bulan</p>
                            <p className="text-sm text-start font-semibold text-gray-800">Rp650.000 / tahun</p>
                            <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg w-full hover:bg-orange-400">Get Started</button>
                            <ul className="mt-6 space-y-3 text-left">
                                <li>100 Auto reply</li>
                                <li>500 Broadcast</li>
                                <li>50 Campaign</li>
                                <li>500 Contact</li>
                                <li>50 Device</li>
                                <li>Excel / CSV Contact Import</li>
                                <li>Google Contact Sync</li>
                            </ul>
                        </div>
                        <div className=" p-6 rounded-lg text-center hover:bg-slate-50 hover:shadow-lg">
                            <h3 className="text-xl text-start  font-bold">Premium</h3>
                            <h1 className="text-xs text-start w-56 font-semibold">Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.</h1>
                            <p className="text-xl text-start font-bold text-gray-800">Rp76.000/bulan</p>
                            <p className="text-sm text-start font-semibold text-gray-800">Rp800.000 / tahun</p>                            
                            <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg w-full hover:bg-orange-400">Get Started</button>
                            <ul className="mt-6 space-y-3 text-left">
                                <li>100 Auto reply</li>
                                <li>500 Broadcast</li>
                                <li>50 Campaign</li>
                                <li>500 Contact</li>
                                <li>50 Device</li>
                                <li>Excel / CSV Contact Import</li>
                                <li>Google Contact Sync</li>
                            </ul>
                        </div>
                        <div className=" p-6 rounded-lg text-center hover:bg-slate-50 hover:shadow-lg">
                            <h3 className="text-xl text-start  font-bold">Pro</h3>
                            <h1 className="text-xs text-start w-56 font-semibold">Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.</h1>
                            <p className="text-xl text-start font-bold text-gray-800">Rp86.000/bulan</p>
                            <p className="text-sm text-start font-semibold text-gray-800">Rp900.000 / tahun</p>                            
                            <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg w-full hover:bg-orange-400">Get Started</button>
                            <ul className="mt-6 space-y-3 text-left">
                                <li>100 Auto reply</li>
                                <li>500 Broadcast</li>
                                <li>50 Campaign</li>
                                <li>500 Contact</li>
                                <li>50 Device</li>
                                <li>Excel / CSV Contact Import</li>
                                <li>Google Contact Sync</li>
                            </ul>
                        </div>
                    
                </div>
            </section>

            <footer className="bg-blue-600 text-white py-10">
            <section id="faq">
            <h2 className="text-2xl font-bold mt-10 text-center">Frequently Asked Questions</h2>
            <div className="flex flex-col md:flex-row justify-evenly mt-14 md:mt-8">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="flex flex-col border border-l-black px-3">
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#get">Get Started</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#bro">Broadcast</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#cam">Campaign</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#aut">Auto reply</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#opp">opportunity</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#pricing">Pricing</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#faq">FAQ</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#cont">Contact us</a>
                        </div>
                    </div>

                    <div className="mt-6 w-full max-w-4xl px-4">
                        <div className="relative">
                            <input type="text" placeholder="Search..." className="w-full p-3 rounded-lg text-gray-800" />
                            <div className="absolute right-3 top-3">
                                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 4a6 6 0 100 12 6 6 0 000-12zm8.586 12.586a2 2 0 112.828-2.828l-2.828 2.828z" />
                                </svg>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <details className="bg-white text-gray-800 rounded-lg shadow-md open:shadow-lg">
                                <summary className="px-4 py-3 flex justify-between items-center font-medium cursor-pointer focus:outline-none">
                                    Apa itu Forwardin?
                                    <button className="justify-end bg-blue-600 px-3 py-1 text-white">-</button>
                                </summary>
                                <div className="px-4 py-3">
                                    <p>Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk mempermudah pengiriman pesan massal dan manajemen kontak secara efisien.</p>
                                </div>
                            </details>

                            <details className="bg-white text-gray-800 rounded-lg shadow-md open:shadow-lg">
                                <summary className="px-4 py-3 flex justify-between items-center font-medium cursor-pointer focus:outline-none">
                                    Apakah Forwardin cocok untuk saya?
                                    <button className="justify-end bg-blue-600 px-3 py-1 text-white">-</button>
                                </summary>
                                <div className="px-4 py-3">
                                    <p>Ya, Forwardin cocok untuk Anda jika Anda memerlukan alat yang efisien untuk mengelola pesan dan kontak secara massal.</p>
                                </div>
                            </details>

                            <details className="bg-white text-gray-800 rounded-lg shadow-md open:shadow-lg">
                                <summary className="px-4 py-3 flex justify-between items-center font-medium cursor-pointer focus:outline-none">
                                    Apakah Forwardin perlu di-install ke komputer? 
                                    <button className="justify-end bg-blue-600 px-3 py-1 text-white">-</button>
                                </summary>
                                <div className="px-4 py-3">
                                    <p>Tidak, Anda dapat mengakses Forwardin langsung melalui browser tanpa perlu installasi tambahan.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
                <section id="cont" className="mt-48">
                <div className="flex flex-col md:flex-row justify-evenly mt-32 md:mt-8">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="flex flex-col border border-l-black px-3">
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#get">Get Started</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#bro">Broadcast</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#cam">Campaign</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#aut">Auto reply</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#opp">opportunity</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#pricing">Pricing</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#faq">FAQ</a>
                            <a className="text-gray-400 mt-3 hover:text-black hover:font-bold" href="#cont">Contact us</a>
                        </div>
                    </div>
                    <div className="flex flex-col ml-6">
                        <img src="logo.png" className="w-40" alt="" />
                        <h1 className="w-64 text-xs">Fowardin is your ultimate communication management solution. We empower businesses of all sizes with efficient message forwarding, streamlined contact management, and powerful campaign scheduling. Our mission is to simplify your communication processes, helping you engage with your audience effectively and effortlessly. Join us in transforming your communication game today!
                        </h1>
                    </div>
                    <div className="flex flex-col ml-6 mt-2 ">
                        <h1 className="text-xl text-start flex justify-start mb-5">Contact us</h1>
                        <h1 className="w-64 text-xs">
                            Join our mailing list to receive updates, exclusive content, and early access to upcoming events. By signing up, you become an integral part of our community, spreading the message of compassion and making a difference.
                        </h1>
                        <h1 className="w-64 text-xs mt-10">
                            Email: info@fowarin
                        </h1>
                        <h1 className="w-64 text-xs">
                            Phone: +1 (123) 456-7890
                        </h1>
                    </div>
                    <div className="flex flex-col ml-6 mt-2">
                        <h1 className="text-xl text-start flex justify-start mb-5">Lets Talk</h1>
                        <a href="">
                            <h1 className="w-64 text-xs">
                            Facebook
                        </h1>
                        </a>
                        <a href="">
                            <h1 className="w-64 text-xs">
                            Instagram
                        </h1>
                        </a>
                        <a href="">
                            <h1 className="w-64 text-xs">
                            Twitter
                        </h1>
                        </a>
                    </div>
                    
                </div>
                </section>

                <div className="flex justify-center mt-12">Powered By<img className="ml-3" src="logox.png" alt="" /></div>
            </footer>
        </div>
    );
}
