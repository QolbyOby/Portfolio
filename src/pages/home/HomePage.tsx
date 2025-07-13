import { Github, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="text-white ">
            <div className="bg-slate-800 p-4 rounded-2xl">
                <h1 className="font-medium">Muhammad Maskun Qolbi</h1>
                <p>( Fullstack Developer )</p>
            </div>

            <div className="flex flex-col">
                <div className="flex justify-between">
                    <h3 className="text-start underline decoration-red-400 decoration-4  mb-2 mt-4 text-lg font-bold ">Tentang Saya</h3>
                    <Link to={'/portfolio'}><p className="text-red-400 decoration-2 mb-2 mt-4 text-lg font-bold ">My Portfolio</p></Link>
                </div>
                <p className="text-justify indent-6">
                    Saya adalah mahasiswa semester 4 di Universitas Bina Sarana Informatika
                    (UBSI) kampus kota tegal, program studi sistem informasi. saya memiliki
                    minat yang besar dalam pengembangan web, serta rasa tahu yang tinggi dalam dunia
                    teknologi. Memiliki keahlian dalam membangun antarmuka menggunakan React js,
                    Next js, Tailwind css, serta pengalaman mendalam dalam pengembangan aplikasi full stack
                    menggunakan laravel dan Next js, Saat ini saya aktif dalam organisasi HIMSI sebagai penelitihan
                    dan pengembangan ( litbang ),
                </p>

                <h3 className="text-start underline  decoration-red-400 decoration-4 mb-2 mt-4 text-lg font-bold ">Pendidikan</h3>
                <div className="flex justify-between">
                    <div className="text-start">
                        <p className="font-bold ">Universitas Bina Saran Informatika</p>
                        <p>Prodi Sistem Informasi S1</p>
                    </div>
                    <p className="text-red-400 font-bold">2023 - Sekarang</p>
                </div>
                <div className="flex justify-between mt-2">
                    <div className="text-start">
                        <p className="font-bold ">SMA Negeri 1 Pangkah</p>
                        <p>Jurusan IPA</p>
                    </div>
                    <p className="text-red-400 font-bold">2020 - 2023</p>
                </div>

                <h3 className="text-start underline decoration-red-400 decoration-4 mb-2 mt-4 text-lg font-bold ">Contact</h3>
                <div className="flex gap-4">
                    <div className="cursor-pointer rounded-xl border border-white/30 bg-gray-800 px-4 py-2 shadow-lg backdrop-blur-lg flex gap-1 text-teal-200">
                        <Github /> <a href="https://github.com/QolbyOby">QolbyOby</a>
                    </div>
                    <div className="cursor-pointer rounded-xl border border-white/30 bg-gray-800 px-4 py-2 shadow-lg backdrop-blur-lg flex gap-1 text-teal-200">
                        <Instagram /> <a href="https://instagram.com/0by_25">@0by_25</a>
                    </div>
                    <div className="cursor-pointer rounded-xl border border-white/30 bg-gray-800 px-4 py-2 shadow-lg backdrop-blur-lg flex gap-1 text-teal-200">
                        <MessageCircle /> <a href="https://wa.me/62895389453841"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}