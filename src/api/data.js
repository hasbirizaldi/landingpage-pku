import slider1 from "../assets/slider/s1.webp";
import slider2 from "../assets/slider/s2.webp";
import slider3 from "../assets/slider/s3.webp";
import slider4 from "../assets/slider/s4.webp";
import slider5 from "../assets/slider/s5.webp";
import logo from "../assets/logo/pku.webp";
import imgHome from "../assets/img/1.jpg";
import logo2 from "../assets/logo/kiri.png";
import mas from "../assets/logo/mas.webp";
import jkn from "../assets/logo/jkn.png";
import call from "../assets/logo/call.png";
import emergency from "../assets/logo/emergency.png";
import ios from "../assets/logo/ios.png";
import go_obat from "../assets/logo/go-obat.png";
import pln from "../assets/logo/partner/pln.png";
import mag from "../assets/logo/partner/mag.png";
import bpjstk from "../assets/logo/partner/bpjstk.png";
import bpjskes from "../assets/logo/partner/bpjskes.png";
import car from "../assets/logo/partner/car.png";
import brilife from "../assets/logo/partner/brilife.png";
import kai from "../assets/logo/partner/kai.png";
import jasa_raharja from "../assets/logo/partner/jasa-raharja.png";
import dokter from "../assets/logo/dokter.png";
import leaflet1 from "../assets/leaflet/1.jpg";
import leaflet2 from "../assets/leaflet/2.jpg";
import leaflet3 from "../assets/leaflet/3.jpg";

export const sliderImages = [slider1, slider2, slider3, slider4, slider5];
export const img = [logo, mas, jkn, logo2, ios, go_obat, call, emergency, dokter];
export const images = [imgHome];
export const partner = [bpjskes, bpjstk, car, brilife, kai, jasa_raharja, mag, pln];

export const layanan = [
  {
    title: "Emergency 24 Jam",
    desc: "Instalasi Gawat Darurat (IGD) RS PKU Muhammadiyah Sruweng siap melayani pasien gawat darurat selama 24 jam dengan tenaga medis profesional dan respons cepat. Untuk kondisi darurat, silakan hubungi nomor layanan kami.",
    icon: "ambulance",
    url: "/igd",
  },
  {
    title: "Pelayanan Rawat Jalan",
    desc: "RS PKU Muhammadiyah Sruweng menyediakan pelayanan rawat jalan dengan berbagai poli spesialis yang didukung oleh dokter berpengalaman serta fasilitas medis yang memadai.",
    icon: "medis",
    url: "/rawat-jalan",
  },
  {
    title: "Perawatan Rawat Inap",
    desc: "Kami melayani perawatan pasien rawat inap dengan menyediakan beberapa pilihan kelas bangsal yang nyaman, bersih, dan dilengkapi fasilitas penunjang untuk menunjang proses penyembuhan.",
    icon: "bed",
    url: "/rawat-inap",
  },
  {
    title: "Fasilitas Rumah Sakit",
    desc: "RS PKU Muhammadiyah Sruweng dilengkapi dengan fasilitas medis dan penunjang modern untuk mendukung pelayanan kesehatan yang optimal, aman, dan berkualitas.",
    icon: "hospital",
    url: "/bed-pasien",
  },
  {
    title: "Dokter Kami",
    desc: "Tim dokter RS PKU Muhammadiyah Sruweng terdiri dari dokter umum dan dokter spesialis yang kompeten, berpengalaman, dan berkomitmen memberikan pelayanan terbaik bagi pasien.",
    icon: "docter",
    url: "/dokter-kami",
  },
  {
    title: "Go Obat",
    desc: "Layanan Go Obat memudahkan pasien dalam mendapatkan obat dengan cepat dan aman, baik melalui resep dokter maupun layanan pengantaran sesuai ketentuan yang berlaku.",
    icon: "medicine",
    url: "/go-obat",
  },
];

export const dokterList = [
  {
    nama: "dr. Khoerul Anwar, Sp.PD",
    spesialis: "Spesialis Penyakit Dalam",
    foto: img[8],
    jadwal: {
      senin: "09:00 - 13:00",
      selasa: "09:00 - 13:00",
      rabu: "09:00 - 13:00",
      kamis: "09:00 - 13:00",
      jumat: "09:00 - 13:00",
      sabtu: "09:00 - 13:00",
      minggu: "-",
    },
  },
  {
    nama: "dr. Khayati Handayani, Sp.PD",
    spesialis: "Spesialis Penyakit Dalam",
    foto: img[8],
    jadwal: {
      senin: "-",
      selasa: "14.00 - Selesai",
      rabu: "-",
      kamis: "14.00 - Selesai",
      jumat: "14.00 - Selesai",
      sabtu: "14.00 - Selesai",
      minggu: "-",
    },
  },
  {
    nama: "dr. Haryono Yuniarto, Sp.PD -KGH",
    spesialis: "Spesialis Penyakit Dalam",
    foto: img[8],
    jadwal: {
      senin: "16:00 - 20:00",
      selasa: "-",
      rabu: "-",
      kamis: "-",
      jumat: "07:00 - 09:00",
      sabtu: "07:00 - 09:00",
      minggu: "-",
    },
  },
  {
    nama: "dr. Ricky Dwi Nur Tyastono, Sp.B",
    spesialis: "Spesialis Bedah",
    foto: img[8],
    jadwal: {
      senin: "09:00 - 12:00",
      selasa: "09:00 - 12:00",
      rabu: "09:00 - 12:00",
      kamis: "09:00 - 12:00",
      jumat: "09:00 - 12:00",
      sabtu: "09:00 - 12:00",
      minggu: "-",
    },
  },
  {
    nama: "dr. Adi Purnomo, Sp. B",
    spesialis: "Spesialis Bedah",
    foto: img[8],
    jadwal: {
      senin: "14:30 - Selesai",
      selasa: "14:30 - Selesai",
      rabu: "-",
      kamis: "-",
      jumat: "14:30 - Selesai",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "dr. Dyah Ayu Wulansari, M, Sc, Sp. A",
    spesialis: "Spesialis Anak",
    foto: img[8],
    jadwal: {
      senin: "09:00 - 13:00",
      selasa: "09:00 - 13:00",
      rabu: "09:00 - 13:00",
      kamis: "09:00 - 13:00",
      jumat: "09:00 - 13:00",
      sabtu: "09:00 - 13:00",
      minggu: "-",
    },
  },
  {
    nama: "dr. M. Jalul Mutaqorrib, M.Med.Sc, Sp. A",
    spesialis: "Spesialis Anak",
    foto: img[8],
    jadwal: {
      senin: "14:30 - 17:30",
      selasa: "14:30 - 17:30",
      rabu: "14:30 - 17:30",
      kamis: "14:30 - 17:30",
      jumat: "14:30 - 17:30",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "dr. Inet Fyndianne Mentaningrum, Sp. P",
    spesialis: "Spesialis Paru",
    foto: img[8],
    jadwal: {
      senin: "07:00 - 13:00",
      selasa: "07:00 - 13:00",
      rabu: "07:00 - 13:00",
      kamis: "07:00 - 13:00",
      jumat: "07:00 - 13:00",
      sabtu: "07:00 - 13:00",
      minggu: "-",
    },
  },
  {
    nama: "dr. Deyna Primavita P.,Sp. OG(K)-KFM",
    spesialis: "Spesialis Kandungan",
    foto: img[8],
    jadwal: {
      senin: "14:30 - Selesai",
      selasa: "14:30 - Selesai",
      rabu: "14:30 - Selesai",
      kamis: "14:30 - Selesai",
      jumat: "14:30 - Selesai",
      sabtu: "14:30 - Selesai",
      minggu: "-",
    },
  },
  {
    nama: "dr. Syaiful Alam, Sp. OG",
    spesialis: "Spesialis Kandungan",
    foto: img[8],
    jadwal: {
      senin: "08:00 - 09:00 & 11:00 - 13:00",
      selasa: "08:00 - 12:00",
      rabu: "08:00 - 12:00",
      kamis: "17:00 - 19:00",
      jumat: "17:00 - 19:00",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "dr. Windy Rizkiana, Sp. THT-KL",
    spesialis: "Spesialis THT",
    foto: img[8],
    jadwal: {
      senin: "09:00 - 13:00",
      selasa: "09:00 - 13:00",
      rabu: "09:00 - 13:00",
      kamis: "09:00 - 13:00",
      jumat: "09:00 - 13:00",
      sabtu: "09:00 - 13:00",
      minggu: "-",
    },
  },
  {
    nama: "dr. Yayan Mitayani, Sp. THT-KL",
    spesialis: "Spesialis THT",
    foto: img[8],
    jadwal: {
      senin: "-",
      selasa: "14:30 - 16:00",
      rabu: "-",
      kamis: "14:30 - 16:00",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "dr. Vida Berry Al Aden, Sp. Rad",
    spesialis: "Spesialis Radiologi",
    foto: img[8],
    jadwal: {
      senin: "07:00 - 14:00",
      selasa: "07:00 - 14:00",
      rabu: "07:00 - 14:00",
      kamis: "07:00 - 14:00",
      jumat: "07:00 - 14:00",
      sabtu: "07:00 - 14:00",
      minggu: "-",
    },
  },
  {
    nama: "dr. Iwan Danardono, Sp. THT-KL",
    spesialis: "Spesialis Radiologi",
    foto: img[8],
    jadwal: {
      senin: "15:00 - Selesai",
      selasa: "15:00 - Selesai",
      rabu: "15:00 - Selesai",
      kamis: "15:00 - Selesai",
      jumat: "15:00 - Selesai",
      sabtu: "15:00 - Selesai",
      minggu: "-",
    },
  },
  {
    nama: "dr. Khalifa Rahmani, Sp. N",
    spesialis: "Spesialis Saraf",
    foto: img[8],
    jadwal: {
      senin: "09:00 - 13:00",
      selasa: "09:00 - 13:00",
      rabu: "09:00 - 13:00",
      kamis: "09:00 - 13:00",
      jumat: "09:00 - 13:00",
      sabtu: "09:00 - 13:00",
      minggu: "-",
    },
  },
  {
    nama: "dr. Tri Hastuti H, Sp. S",
    spesialis: "Spesialis THT",
    foto: img[8],
    jadwal: {
      senin: "15:00 - 17:00",
      selasa: "15:00 - 17:00",
      rabu: "15:00 - 17:00",
      kamis: "15:00 - 17:00",
      jumat: "15:00 - 17:00",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "dr. Sari Rahayu Dwi Utami, Sp. JP",
    spesialis: "Spesialis Jantung",
    foto: img[8],
    jadwal: {
      senin: "09:00 - 13:00",
      selasa: "09:00 - 13:00",
      rabu: "09:00 - 13:00",
      kamis: "09:00 - 13:00",
      jumat: "09:00 - 13:00",
      sabtu: "09:00 - 13:00",
      minggu: "-",
    },
  },
  {
    nama: "dr. Inkoni Novitasari, Sp. M",
    spesialis: "Spesialis Mata",
    foto: img[8],
    jadwal: {
      senin: "09:00 - 13:00",
      selasa: "15:00 - Selesai",
      rabu: "09:00 - 13:00",
      kamis: "-",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "dr. M. Abdul Aziz, Sp. OT",
    spesialis: "Spesialis Orthopedi",
    foto: img[8],
    jadwal: {
      senin: "14:30 - Selesai",
      selasa: "14:30 - Selesai",
      rabu: "14:30 - Selesai",
      kamis: "14:30 - Selesai",
      jumat: "14:30 - Selesai",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "dr. Andreas Pramudito, Sp. U",
    spesialis: "Spesialis Urologi",
    foto: img[8],
    jadwal: {
      senin: "09:00 - 12:00",
      selasa: "09:00 - 12:00",
      rabu: "07:00 - 09:30",
      kamis: "09:00 - 12:00",
      jumat: "07:00 - 09:30",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "dr. Ahmad Satya Negara, Sp. D.V",
    spesialis: "Spesialis Kulit & Kelamin",
    foto: img[8],
    jadwal: {
      senin: "09:00 - 12:00",
      selasa: "09:00 - 12:00",
      rabu: "09:00 - 12:00",
      kamis: "09:00 - 12:00",
      jumat: "09:00 - 12:00",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "dr. Andi Sulistyo Nugroho, Sp. KFR",
    spesialis: "Spesialis Rehab Medik",
    foto: img[8],
    jadwal: {
      senin: "-",
      selasa: "14:30 - Selesai",
      rabu: "-",
      kamis: "14:30 - Selesai",
      jumat: "-",
      sabtu: "14:30 - Selesai",
      minggu: "-",
    },
  },
  {
    nama: "dr. Desi Widiyanti, Sp. PK",
    spesialis: "Patologi Klinik",
    foto: img[8],
    jadwal: {
      senin: "-",
      selasa: "10:00",
      rabu: "-",
      kamis: "10:00",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
];

export const dataArtikel = [
  // ================== BERITA (4) ==================
  {
    id: 1,
    category: "berita",
    title: "RS PKU Sruweng Resmikan Gedung Rawat Inap Baru",
    date: "10 Desember 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>RS PKU Sruweng resmi membuka gedung rawat inap baru untuk meningkatkan pelayanan masyarakat.</p>",
  },
  {
    id: 2,
    category: "berita",
    title: "Kegiatan Bakti Sosial Kesehatan Gratis",
    date: "8 Desember 2025",
    image: "https://rri-assets.obs.ap-southeast-4.myhuaweicloud.com/berita/47/o/WhatsApp_Image_2025-12-11_at_16.50.17/9eh23yt3ov5ohcb.jpeg",
    desc: "<p>Kegiatan bakti sosial disambut antusias oleh warga sekitar rumah sakit.</p>",
  },
  {
    id: 3,
    category: "berita",
    title: "Peningkatan Layanan IGD 24 Jam",
    date: "5 Desember 2025",
    image: "https://dk4fkkwa4o9l0.cloudfront.net/production/uploads/announcement/image/4771/Cover_Web.jpg",
    desc: "<p>IGD RS PKU Sruweng kini dilengkapi tenaga medis dan fasilitas yang lebih lengkap.</p>",
  },
  {
    id: 4,
    category: "berita",
    title: "Pelatihan Tanggap Darurat untuk Perawat",
    date: "2 Desember 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Pelatihan rutin dilakukan untuk meningkatkan kompetensi tenaga kesehatan.</p>",
  },

  // ================== ARTIKEL KESEHATAN (4) ==================
  {
    id: 5,
    category: "artikel-kesehatan",
    title: "Tips Menjaga Daya Tahan Tubuh",
    date: "1 Desember 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4keC9ijcaBrkONkb4vok7QbOsS8he2TqQDQ&s",
    desc: "<p>Pola hidup sehat membantu meningkatkan daya tahan tubuh.</p>",
  },
  {
    id: 6,
    category: "artikel-kesehatan",
    title: "Pentingnya Cek Kesehatan Rutin",
    date: "29 November 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz976D0Jv9dpT5TZDNw84JgnfDqEJuHoy7jw&s",
    desc: "<p>Pemeriksaan rutin dapat mendeteksi penyakit lebih dini.</p>",
  },
  {
    id: 7,
    category: "artikel-kesehatan",
    title: "Manfaat Minum Air Putih yang Cukup",
    date: "27 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Air putih berperan penting dalam menjaga fungsi organ tubuh.</p>",
  },
  {
    id: 8,
    category: "artikel-kesehatan",
    title: "Cara Mengelola Stres dengan Baik",
    date: "25 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Stres berlebih dapat berdampak buruk pada kesehatan.</p>",
  },

  // ================== ARTIKEL ISLAMI (4) ==================
  {
    id: 9,
    category: "artikel-islami",
    title: "Menjaga Kesehatan sebagai Amanah",
    date: "23 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Kesehatan adalah amanah dari Allah SWT yang harus dijaga.</p>",
  },
  {
    id: 10,
    category: "artikel-islami",
    title: "Makna Sabar Saat Menghadapi Penyakit",
    date: "21 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Sabar dalam sakit akan mendatangkan pahala.</p>",
  },
  {
    id: 11,
    category: "artikel-islami",
    title: "Berobat dan Bertawakal",
    date: "19 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Islam mengajarkan usaha dan tawakal secara seimbang.</p>",
  },
  {
    id: 12,
    category: "artikel-islami",
    title: "Doa Kesembuhan untuk Orang Sakit",
    date: "17 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Doa menjadi salah satu ikhtiar dalam mencari kesembuhan.</p>",
  },

  // ================== PROMOSI & LEAFLET (3) ==================
  {
    id: 13,
    category: "promosi-leaflet",
    title: "Promo Medical Check Up Akhir Tahun",
    date: "15 November 2025",
    image: leaflet1,
    desc: "<p>Dapatkan promo MCU dengan harga spesial.</p>",
  },
  {
    id: 14,
    category: "promosi-leaflet",
    title: "Diskon Pemeriksaan Laboratorium",
    date: "13 November 2025",
    image: leaflet2,
    desc: "<p>Promo pemeriksaan laboratorium periode terbatas.</p>",
  },
  {
    id: 15,
    category: "promosi-leaflet",
    title: "Promo Paket Persalinan",
    date: "11 November 2025",
    image: leaflet3,
    desc: "<p>Paket persalinan nyaman dengan harga terjangkau.</p>",
  },

  // ================== GALLERY (3) ==================
  {
    id: 16,
    category: "gallery",
    title: "",
    date: "9 November 2025",
    image: slider2,
    desc: "",
  },
  {
    id: 17,
    category: "gallery",
    title: "",
    date: "7 November 2025",
    image: slider3,
    desc: "",
  },
  {
    id: 18,
    category: "gallery",
    title: "",
    date: "5 November 2025",
    image: slider4,
    desc: "",
  },
  {
    id: 19,
    category: "berita",
    title: "RS PKU Sruweng Resmikan Gedung Rawat Inap Baru",
    date: "10 Desember 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>RS PKU Sruweng resmi membuka gedung rawat inap baru untuk meningkatkan pelayanan masyarakat.</p>",
  },
  {
    id: 20,
    category: "berita",
    title: "RS PKU Sruweng Resmikan Gedung Rawat Inap Baru",
    date: "10 Desember 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>RS PKU Sruweng resmi membuka gedung rawat inap baru untuk meningkatkan pelayanan masyarakat.</p>",
  },
  {
    id: 21,
    category: "artikel-kesehatan",
    title: "Cara Mengelola Stres dengan Baik",
    date: "25 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Stres berlebih dapat berdampak buruk pada kesehatan.</p>",
  },
  {
    id: 22,
    category: "artikel-kesehatan",
    title: "Cara Mengelola Stres dengan Baik",
    date: "25 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Stres berlebih dapat berdampak buruk pada kesehatan.</p>",
  },
  {
    id: 23,
    category: "artikel-islami",
    title: "Cara Mengelola Stres dengan Baik",
    date: "25 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Stres berlebih dapat berdampak buruk pada kesehatan.</p>",
  },
  {
    id: 24,
    category: "artikel-islami",
    title: "Cara Mengelola Stres dengan Baik",
    date: "25 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Stres berlebih dapat berdampak buruk pada kesehatan.</p>",
  },
];

export const dataVidio = [
  {
    id: 1,
    title: "Kesan Yoda Idol tentang pelayanan di RS PKU Muhammadiyah Sruweng",
    videoUrl: "https://www.youtube.com/embed/IKaORgMwWp0",
    category: "vidio-promosi",
    uploadDate: "2024-01-10",
  },
  {
    id: 2,
    title: "Pemanfaatan antrian online menggunakan mobile JKN RS PKU Muhammadiyah Sruweng",
    videoUrl: "https://www.youtube.com/embed/0G-QqthdQyQ?si=qAKRcCGgQQzidwxz",
    category: "vidio-promosi",
    uploadDate: "2024-01-18",
  },
  {
    id: 3,
    title: "Mengenal Antibiotik",
    videoUrl: "https://www.youtube.com/embed/IuC3A4RUm1c?si=ABeuafK6bWGdPaiu",
    category: "vidio-kesehatan",
    uploadDate: "2024-02-02",
  },
  {
    id: 4,
    title: "Mengenal TB Paru, Pencegahan dan Pengobatan",
    videoUrl: "https://www.youtube.com/embed/u06foUTS6aI?si=aYjIzrXZBc5pL-by",
    category: "vidio-kesehatan",
    uploadDate: "2024-02-10",
  },
  {
    id: 5,
    title: "Tata Cara Wudhu Menurut Rasulullah SAW",
    videoUrl: "https://www.youtube.com/embed/Zp8qM1J1ibY?si=lxEYYXnS8pNhRwty",
    category: "vidio-keislaman",
    uploadDate: "2024-03-01",
  },
  {
    id: 6,
    title: "Panduan Aplikasi Kajian Rutin Morbis 2",
    videoUrl: "https://www.youtube.com/embed/SlP0IYtIfrY?si=trv0V9kPJRZi-LqM",
    category: "simrs",
    uploadDate: "2024-03-12",
  },
  {
    id: 7,
    title: "Gedung Nyai Walidah PKU Sruweng",
    videoUrl: "https://www.youtube.com/embed/oYeqeL6qgCk?si=JK3f2AOO1Q_gcpaz",
    category: "vidio-promosi",
    uploadDate: "2024-03-20",
  },
  {
    id: 8,
    title: "Layanan Pengantaran Obat sampai Alamat",
    videoUrl: "https://www.youtube.com/embed/nzjoqkrmFCY?si=wevrjr6ZC9bLcMTo",
    category: "vidio-promosi",
    uploadDate: "2024-04-05",
  },
  {
    id: 9,
    title: "Tips Memilih Skincare",
    videoUrl: "https://www.youtube.com/embed/t3YrUjOde_Q?si=vwaegcJDIEhwuD7_",
    category: "vidio-kesehatan",
    uploadDate: "2024-04-12",
  },
  {
    id: 10,
    title: "Tata Cara Tayamum Menurut Rasulullah",
    videoUrl: "https://www.youtube.com/embed/xwEi8Sq87WE?si=JTZvo7a1g2Upau99",
    category: "vidio-keislaman",
    uploadDate: "2024-04-20",
  },
  {
    id: 11,
    title: "Sholat Berdasarkan HPT Muhammadiyah",
    videoUrl: "https://www.youtube.com/embed/3GxHmfti2t8?si=1rqOUqYeClAYWZfu",
    category: "vidio-keislaman",
    uploadDate: "2024-05-01",
  },
  {
    id: 12,
    title: "Tata Cara Mandi Wajib",
    videoUrl: "https://www.youtube.com/embed/vBXKpWKx6bo?si=XNqEffO2jGz8R-mf",
    category: "vidio-keislaman",
    uploadDate: "2024-05-10",
  },
  {
    id: 13,
    title: "Shalat Jama'ah dan Qashar",
    videoUrl: "https://www.youtube.com/embed/rh2mq_H5EYA?si=s7-9Tu3HkBX-U2t3",
    category: "vidio-keislaman",
    uploadDate: "2024-05-18",
  },
  {
    id: 14,
    title: "Panduan Aplikasi Manajemen Laundry Morbis 2",
    videoUrl: "https://www.youtube.com/embed/0yFpFCpncio?si=vVxnGmxX1NAux-dh",
    category: "simrs",
    uploadDate: "2024-06-01",
  },
];

export const dataKarir = [
  {
    id: 1,
    posisi: "Tenaga Teknis Kefarmasian (TTK)",
    jumlah: 2,
    urgent: true,
    deskripsi: "2 Analis dengan persyaratan sebagai berikut :",
    persyaratan: ["Sehat jasmani & rohani", "Pria/wanita usia maksimal 35 tahun", "Pendidikan minimal D3 Farmasi", "Memiliki akun SATUSEHAT", "Tidak sedang bekerja di tempat lain"],
    berkas: [
      "Ijazah/transkrip nilai legalisir",
      "Memiliki STR seumur hidup",
      "Daftar Riwayat Hidup (Bagi yang sudah pernah bekerja)",
      "SKCK Kepolisian",
      "Surat Keterangan Sehat",
      "Pas Foto 4x6",
      "Sertifikat pendukung",
      "Scan KTP yang masih berlaku",
    ],
    batasPendaftaran: "30 September 2025",
  },
  {
    id: 2,
    posisi: "Perawat Rawat Inap",
    jumlah: 3,
    urgent: true,
    deskripsi: "3 Perawat dengan kualifikasi :",
    persyaratan: ["Laki-laki / Perempuan", "Usia maksimal 30 tahun", "Pendidikan minimal D3 Keperawatan", "Memiliki STR aktif", "Mampu bekerja dalam tim", "Bersedia bekerja shift"],
    berkas: ["Ijazah & transkrip nilai", "STR aktif", "CV / Daftar Riwayat Hidup", "SKCK", "Surat Keterangan Sehat", "Pas Foto terbaru", "Scan KTP"],
    batasPendaftaran: "15 Oktober 2025",
  },
  {
    id: 3,
    posisi: "Radiografer",
    jumlah: 1,
    urgent: false,
    deskripsi: "1 Radiografer dengan persyaratan :",
    persyaratan: ["Pendidikan minimal D3 Radiologi", "Memiliki STR aktif", "Pengalaman kerja diutamakan", "Mampu mengoperasikan alat radiologi", "Sehat jasmani & rohani"],
    berkas: ["Ijazah & transkrip nilai", "STR aktif", "CV", "SKCK", "Surat Keterangan Sehat", "Pas Foto", "Scan KTP"],
    batasPendaftaran: "20 Oktober 2025",
  },
  {
    id: 4,
    posisi: "Staff IT Rumah Sakit",
    jumlah: 1,
    urgent: false,
    deskripsi: "1 Staff IT dengan kualifikasi :",
    persyaratan: ["Pendidikan minimal D3/S1 Informatika", "Menguasai jaringan & troubleshooting", "Memahami SIMRS (nilai tambah)", "Mampu bekerja mandiri & tim", "Komunikatif"],
    berkas: ["Ijazah & transkrip nilai", "CV", "Portofolio (jika ada)", "SKCK", "Surat Keterangan Sehat", "Pas Foto", "Scan KTP"],
    batasPendaftaran: "31 Oktober 2025",
  },
];
