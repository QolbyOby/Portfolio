// Impor semua gambar di sini
import Kriba from '../../../assets/kriba.webp';
import Kriba1 from '../../../assets/kriba1.webp';
import Kriba2 from '../../../assets/kriba2.webp';
import Kriba3 from '../../../assets/kriba3.webp';
import bluelemon from '../../../assets/bluelemon.webp';
import bluelemon1 from '../../../assets/bluelemon1.webp';
import bluelemon2 from '../../../assets/bluelemon2.webp';
import bluelemon3 from '../../../assets/bluelemon3.webp';
import bluelemonvideo from '../../../assets/video/bluelemon.mp4';
import midori from '../../../assets/midori.webp';
import midori1 from '../../../assets/midori1.webp';
import mobilelogo from '../../../assets/mobilelogo.webp';
import mobile2 from '../../../assets/mobile2.webp';
import mobile3 from '../../../assets/mobile3.webp';
import sekolah from '../../../assets/sekolah.webp';
import sekolah1 from '../../../assets/sekolah1.webp';
import sekolah2 from '../../../assets/sekolah2.webp';
import travel from '../../../assets/travel.webp';
import travel1 from '../../../assets/travel1.webp';
import travel2 from '../../../assets/travel2.webp';
import travelVideo from '../../../assets/video/travel.mp4';
import midoriVideo from '../../../assets/video/midori.mp4';

// Buat sebuah array of objects untuk data proyek
export const projectsData = [
    {
        slug: 'kriba', // ID unik untuk URL
        title: 'Kriba',
        image: Kriba,
        deskripsi: 'Aplikasi Toko online berbasis website yang menjual kerajinan bambu',
        detail: (
            <>
                Aplikasi Toko online berbasis website yang menjual kerajinan bambu,
                yang dibuat menggunakan laravel 10 dan midtrans, customer dapat
                memesan produk melalui website ini, dengan fitur Autentikasi,
                keranjang belanja, Payment Gateway, dan Dashboard Admin, projek ini
                adalah program kerja dari <span className=" text-red-400">POMN</span> atau
                Program Organisasi Membangun Negeri.
            </>
        ),
        videoUrl: null,
        galleryImages: [Kriba1, Kriba2, Kriba3],
        stack: 'Laravel 10, Blade Template, Midtrans, Mysql',
        website: 'https://www.kribakendalserut.com',
        github: null
    },
    {
        slug: 'blue-lemon',
        title: 'Blue Lemon',
        image: bluelemon,
        deskripsi: 'Aplikasi Pre Order Roti Berbasis website',
        detail: 'Aplikasi Pre Order Roti Berbasis website, yang dibuat menggunakan laravel 12, react js, customer dapat memesan produk melalui website ini, dengan fitur Autentikasi, keranjang belanja, Payment Gateway, dan Dashboard Admin',
        videoUrl: bluelemonvideo,
        galleryImages: [bluelemon1, bluelemon2, bluelemon3],
        stack: 'Laravel 12, React js, Tailwind css, Shadcn UI, Framer motion Midtrans, Mysql',
        website: null,
        github: 'https://github.com/QolbyOby/Aplikasi-Pre-Order-Blue-Lemon.git'
    },
    {
        slug: 'midori-store',
        title: 'Midori Store',
        image: midori,
        deskripsi: 'Landing Page Toko Online tanaman hias',
        detail: 'Landing page ini menampilkan informasi lengkap mengenai toko online yang menjual berbagai jenis tanaman hias. Website ini dilengkapi dengan fitur keranjang belanja dan autentikasi pengguna (login dan register), dibuat menggunakan Next js dan Tailwind css,',
        videoUrl: midoriVideo,
        galleryImages: [midori, midori1],
        stack: 'Nest js, Tailwind css, Shadcn UI, Framer motion',
        website: null,
        github: 'https://github.com/QolbyOby/Midori_Store.git'
    },
    {
        slug: 'quick-speak',
        title: 'Quick Speak',
        image: mobilelogo,
        deskripsi: 'Aplikasi Mobile untuk membantu penyandang disabilitas tuna wicara',
        detail: 'Aplikasi Mobile untuk membantu penyandang disabilitas tuna wicara, yang dibuat menggunakan flutter dan firebase, dengan fitur Auntentikasi, Text ke Suara, dan Frasa Kata, projek ini adalah Challenge IDCamp 2023',
        videoUrl: null,
        galleryImages: [mobilelogo, mobile2, mobile3],
        stack: 'Flutter, Firebase',
        website: null,
        github: 'https://github.com/QolbyOby/QuickSpeak.git'
    },
    {
        slug: 'centro-tour-travel',
        title: 'Centro Tour Travel',
        image: travel,
        deskripsi: 'Landing page jasa Travel',
        detail: 'landing page jasa travel, yang berisi informasi tentang jasa travel yang dibuat menggunakan laravel 10, blade template',
        videoUrl: travelVideo,
        galleryImages: [travel1, travel2],
        stack: 'Laravel 10, Blade Template, Mysql',
        website: 'https://www.centrotourtravel.com/',
        github: null
    },
    {
        slug: 'sdn-lumingser',
        title: 'SDN Lumingser',
        image: sekolah,
        deskripsi: 'Aplikasi manajemen sekolah berbasis web',
        detail: 'Aplikasi manajemen sekolah berbasis web, yang dibuat menggunakan laravel 10, blade template, dengan fitur Autentikasi, dan Dashboard Admin',
        videoUrl: null,
        galleryImages: [sekolah, sekolah1, sekolah2],
        stack: 'Laravel 10, Blade Template, Tailwind ,Mysql',
        website: 'https://sdnlumingser01.sch.id',
        github: null
    }
];