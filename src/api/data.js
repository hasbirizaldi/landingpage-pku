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
      senin: "08:00 - 12:00",
      selasa: "-",
      rabu: "08:00 - 12:00",
      kamis: "13:00 - 16:00",
      jumat: "08:00 - 12:00",
      sabtu: "08:00 - 11:00",
      minggu: "-",
    },
  },
  {
    nama: "dr. Siti Aminah, Sp.A",
    spesialis: "Spesialis Anak",
    foto: img[9],
    jadwal: {
      senin: "-",
      selasa: "09:00 - 13:00",
      rabu: "09:00 - 13:00",
      kamis: "-",
      jumat: "09:00 - 12:00",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "dr. Ahmad Fauzi",
    spesialis: "Dokter Umum",
    foto: img[10],
    jadwal: {
      senin: "07:00 - 11:00",
      selasa: "07:00 - 11:00",
      rabu: "07:00 - 11:00",
      kamis: "07:00 - 11:00",
      jumat: "-",
      sabtu: "07:00 - 10:00",
      minggu: "-",
    },
  },
  {
    nama: "dr. Rina Marlina, Sp.OG",
    spesialis: "Spesialis Kandungan",
    foto: img[11],
    jadwal: {
      senin: "13:00 - 16:00",
      selasa: "-",
      rabu: "13:00 - 16:00",
      kamis: "-",
      jumat: "13:00 - 15:00",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "dr. Budi Santoso, Sp.B",
    spesialis: "Spesialis Bedah",
    foto: img[12],
    jadwal: {
      senin: "08:00 - 11:00",
      selasa: "-",
      rabu: "08:00 - 11:00",
      kamis: "-",
      jumat: "08:00 - 11:00",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "dr. Andi Wijaya, Sp.JP",
    spesialis: "Spesialis Jantung",
    foto: img[13],
    jadwal: {
      senin: "-",
      selasa: "13:00 - 16:00",
      rabu: "-",
      kamis: "13:00 - 16:00",
      jumat: "-",
      sabtu: "09:00 - 12:00",
      minggu: "-",
    },
  },
  {
    nama: "dr. Dewi Lestari, Sp.M",
    spesialis: "Spesialis Mata",
    foto: img[14],
    jadwal: {
      senin: "08:00 - 11:00",
      selasa: "08:00 - 11:00",
      rabu: "-",
      kamis: "-",
      jumat: "08:00 - 11:00",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "dr. Hendra Saputra, Sp.THT",
    spesialis: "Spesialis THT",
    foto: img[15],
    jadwal: {
      senin: "-",
      selasa: "09:00 - 12:00",
      rabu: "09:00 - 12:00",
      kamis: "-",
      jumat: "-",
      sabtu: "09:00 - 12:00",
      minggu: "-",
    },
  },
  {
    nama: "dr. Lina Kusuma, Sp.KK",
    spesialis: "Spesialis Kulit",
    foto: img[16],
    jadwal: {
      senin: "13:00 - 16:00",
      selasa: "-",
      rabu: "-",
      kamis: "13:00 - 16:00",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "dr. Yudi Pratama, Sp.S",
    spesialis: "Spesialis Saraf",
    foto: img[17],
    jadwal: {
      senin: "-",
      selasa: "08:00 - 11:00",
      rabu: "-",
      kamis: "08:00 - 11:00",
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
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Dapatkan promo MCU dengan harga spesial.</p>",
  },
  {
    id: 14,
    category: "promosi-leaflet",
    title: "Diskon Pemeriksaan Laboratorium",
    date: "13 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Promo pemeriksaan laboratorium periode terbatas.</p>",
  },
  {
    id: 15,
    category: "promosi-leaflet",
    title: "Promo Paket Persalinan",
    date: "11 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Paket persalinan nyaman dengan harga terjangkau.</p>",
  },

  // ================== GALLERY (3) ==================
  {
    id: 16,
    category: "gallery",
    title: "Fasilitas Rawat Inap",
    date: "9 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Fasilitas rawat inap yang bersih dan nyaman.</p>",
  },
  {
    id: 17,
    category: "gallery",
    title: "Kegiatan Senam Sehat",
    date: "7 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Senam sehat rutin bersama staf dan masyarakat.</p>",
  },
  {
    id: 18,
    category: "gallery",
    title: "Pelayanan Rawat Jalan",
    date: "5 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Pelayanan rawat jalan dengan sistem antrian modern.</p>",
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
