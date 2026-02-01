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
import leaflet4 from "../assets/leaflet/4.jpg";
import leaflet5 from "../assets/leaflet/5.jpg";
import leaflet6 from "../assets/leaflet/6.jpg";
import leaflet7 from "../assets/leaflet/7.jpg";
import leaflet8 from "../assets/leaflet/8.png";
import anwar from "../assets/dokter/anwar.png";
import adi from "../assets/dokter/adi.png";
import khayati from "../assets/dokter/khayati.png";
import ricky from "../assets/dokter/ricky.png";
import saria from "../assets/dokter/saria.png";
import jalul from "../assets/dokter/jalul.png";
import sarijan from "../assets/dokter/sarijan.png";
import inet from "../assets/dokter/inet.png";
import haryono from "../assets/dokter/haryono.png";
import alam from "../assets/dokter/alam.png";
import inkoni from "../assets/dokter/inkoni.png";
import levi from "../assets/dokter/levi.png";
import khalifa from "../assets/dokter/khalifa.png";
import desi from "../assets/dokter/desi.png";
import andi from "../assets/dokter/andi.png";
import vida from "../assets/dokter/vida.png";
import windy from "../assets/dokter/windy.png";
import tri from "../assets/dokter/tri.png";
import yayan from "../assets/dokter/yayan.png";
import andreas from "../assets/dokter/andreas.png";
import satya from "../assets/dokter/satya.png";
import aziz from "../assets/dokter/aziz.png";
import iwan from "../assets/dokter/iwan.png";
import faizal from "../assets/dokter/faizal.png";
import prasdika from "../assets/dokter/prasdika.png";
import robi from "../assets/dokter/robi.png";
import kevin from "../assets/dokter/kevin.png";
import hartika from "../assets/dokter/hartika.png";
import agung from "../assets/dokter/agung.png";
import nurwahidin from "../assets/dokter/nurwahidin.png";
import pandu from "../assets/dokter/pandu.png";
import keijstha from "../assets/dokter/keijstha.png";
import ade from "../assets/dokter/ade.png";
import karmila from "../assets/dokter/karmila.png";
import arima from "../assets/dokter/arima.png";
import hana from "../assets/dokter/hana.png";
import ilham from "../assets/dokter/ilham.png";
import hasan from "../assets/direksi/hasan.png";
import adi_hamid from "../assets/direksi/adi.png";
import dyah from "../assets/direksi/dyah.png";
import niken from "../assets/direksi/niken.png";
import gallery1 from "../assets/gallery/1.jpg";
import gallery2 from "../assets/gallery/2.jpg";
import gallery4 from "../assets/gallery/4.jpg";
import gallery5 from "../assets/gallery/5.jpg";
import gallery6 from "../assets/gallery/6.jpg";
import gallery7 from "../assets/gallery/7.jpg";

export const sliderImages = [slider1, slider2, slider3, slider4, slider5];
export const img = [logo, mas, jkn, logo2, ios, go_obat, call, emergency, dokter];
export const dokterImg = [anwar, adi, khayati, ricky, saria, jalul, sarijan, inet, haryono, alam, inkoni, levi, khalifa, desi, andi, vida, windy, tri, yayan, andreas, satya, aziz, iwan, faizal, prasdika, robi, kevin, hartika, agung, nurwahidin, pandu, keijstha, ade, karmila, arima, hana, ilham];
export const images = [imgHome];
export const partner = [bpjskes, bpjstk, car, brilife, kai, jasa_raharja, mag, pln];
export const direksiImg = [hasan, dyah, adi_hamid, niken];

export const direksi = [
  {
    nama: 'dr. H. Hasan Bayuni',
    jabatan: 'Direktur Utama',
    img:hasan
  },
  {
    nama: 'dr. Diah Fitriana',
    jabatan: 'Direktur Pelayanan',
    img:dyah
  },
  {
    nama: 'H. Adi Hamid Fuadi, S.Hi.MM',
    jabatan: 'Direktur Bindatra dan PSDI',
    img:adi_hamid
  },
  {
    nama: 'Tri Utami Niken Widiastuti, SE',
    jabatan: 'Direktur Umum dan Keuangan',
    img:niken
  },
];

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
    foto: dokterImg[0],
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
    foto: dokterImg[2],
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
    foto: dokterImg[8],
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
    foto: dokterImg[3],
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
    foto: dokterImg[1],
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
    foto: dokterImg[4],
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
    foto: dokterImg[5],
    jadwal: {
      senin: "14:30 - 17:30",
      selasa: "14:30 - 17:30",
      rabu: "14:30 - 17:30",
      kamis: "14:30 - 17:30",
      jumat: "14:30 - 17:30",
      sabtu: "14:30 - 17:30",
      minggu: "-",
    },
  },
  {
    nama: "dr. Inet Fyndianne Mentaningrum, Sp. P",
    spesialis: "Spesialis Paru",
    foto: dokterImg[7],
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
    foto: dokterImg[11],
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
    foto: dokterImg[9],
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
    foto: dokterImg[16],
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
    foto: dokterImg[18],
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
    foto: dokterImg[15],
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
    foto: dokterImg[22],
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
    foto: dokterImg[12],
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
    foto: dokterImg[17],
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
    foto: dokterImg[6],
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
    foto: dokterImg[10],
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
    foto: dokterImg[21],
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
    foto: dokterImg[19],
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
    foto: dokterImg[20],
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
    foto: dokterImg[14],
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
    foto: dokterImg[13],
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
   {
    nama: "Muhammad Faizal Hadiyanto, Sp.An",
    spesialis: "Spesialis Anestesi",
    foto: dokterImg[23],
    jadwal: {
      senin: "-",
      selasa: "-",
      rabu: "-",
      kamis: "-",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
   {
    nama: "dr. Prasdika Arie P, Sp.An.TI",
    spesialis: "Spesialis Anestesi",
    foto: dokterImg[24],
    jadwal: {
      senin: "-",
      selasa: "-",
      rabu: "-",
      kamis: "-",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
   {
    nama: "Roby Maulana, dr",
    spesialis: "Dokter Umum",
    foto: dokterImg[25],
    jadwal: {
      senin: "-",
      selasa: "-",
      rabu: "-",
      kamis: "-",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
   {
    nama: "Kevin Deva Candra, dr",
    spesialis: "Dokter Umum",
    foto: dokterImg[26],
    jadwal: {
      senin: "-",
      selasa: "-",
      rabu: "-",
      kamis: "-",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
   {
    nama: "Hartika Dwi Mulyanti, dr",
    spesialis: "Dokter Umum",
    foto: dokterImg[27],
    jadwal: {
      senin: "-",
      selasa: "-",
      rabu: "-",
      kamis: "-",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "Agung Setiawan, dr",
    spesialis: "Dokter Umum",
    foto: dokterImg[28],
    jadwal: {
      senin: "-",
      selasa: "-",
      rabu: "-",
      kamis: "-",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "M. Nurwahidin, dr",
    spesialis: "Dokter Umum",
    foto: dokterImg[29],
    jadwal: {
      senin: "-",
      selasa: "-",
      rabu: "-",
      kamis: "-",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "Pandu Nugroho Kanta, dr",
    spesialis: "Dokter Umum",
    foto: dokterImg[30],
    jadwal: {
      senin: "-",
      selasa: "-",
      rabu: "-",
      kamis: "-",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
  {
    nama: "Keijstha Maya Yuselie, dr",
    spesialis: "Dokter Umum",
    foto: dokterImg[31],
    jadwal: {
      senin: "-",
      selasa: "-",
      rabu: "-",
      kamis: "-",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
   {
    nama: "Ade Guvinda Perdana, dr",
    spesialis: "Dokter Umum",
    foto: dokterImg[32],
    jadwal: {
      senin: "-",
      selasa: "-",
      rabu: "-",
      kamis: "-",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
   {
    nama: "Karmila Bela Nugraheni, dr",
    spesialis: "Dokter Umum",
    foto: dokterImg[33],
    jadwal: {
      senin: "-",
      selasa: "-",
      rabu: "-",
      kamis: "-",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
   {
    nama: "Arima Kurnia Sari Dewi Nurcahyani, dr",
    spesialis: "Dokter Umum",
    foto: dokterImg[34],
    jadwal: {
      senin: "-",
      selasa: "-",
      rabu: "-",
      kamis: "-",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
   {
    nama: "Hana Hanifah, dr",
    spesialis: "Dokter Umum",
    foto: dokterImg[35],
    jadwal: {
      senin: "-",
      selasa: "-",
      rabu: "-",
      kamis: "-",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
   {
    nama: "Ilham Maulana Naufal Nugratama, dr",
    spesialis: "Dokter Umum",
    foto: dokterImg[36],
    jadwal: {
      senin: "-",
      selasa: "-",
      rabu: "-",
      kamis: "-",
      jumat: "-",
      sabtu: "-",
      minggu: "-",
    },
  },
];

export const rawatJalan = [
  {
    poliklinik: "Poliklinik Penyakit Dalam",
    spesialis:'Spasialis Penyakit Dalam',
    dokterPoli: [
      {
        nama: "dr. Khoerul Anwar, Sp.PD",
        foto: anwar,
      },
      {
        nama: "dr. Khayati Handayani, Sp.PD",
        foto: khayati,
      },
      {
        nama: "dr. Haryono Yuniarto, Sp.PD-KGH",
        foto: haryono,
      },
    ],
    layanan: [
      "Pemeriksaan penyakit dalam",
      "Konsultasi diabetes",
      "Konsultasi hipertensi",
      "Pemeriksaan ginjal dan metabolik",
    ],
  },
  {
    poliklinik: "Poliklinik Bedah",

    spesialis:'Spesialis Bedah',
    dokterPoli: [
      {
        nama: "dr. Ricky Dwi Nur Tyastono, Sp.B",
        foto: ricky,
      },
      {
        nama: "dr. Adi Purnomo, Sp.B",
        foto: adi,
      },
    ],

    layanan: [
      "Konsultasi bedah umum",
      "Pemeriksaan luka dan infeksi",
      "Penanganan abses dan bisul",
      "Operasi kecil (rawat jalan)",
      "Perawatan pasca operasi",
      "Bedah saluran cerna",
      "Bedah hernia",
      "Bedah tumor jinak",
    ],
  },
   {
    poliklinik: "Poliklinik Anak",

    spesialis:'Spesialis Anak',
    dokterPoli: [
      {
        nama: "dr. Dyah Ayu Wulansari, M.Sc., Sp.A",
        foto: saria,
      },
      {
        nama: "dr. M. Jalul Mutaqorrib, M.Med.Sc., Sp.A",
        foto: jalul,
      },
    ],

    layanan: [
      "Pemeriksaan kesehatan anak",
      "Imunisasi",
      "Konsultasi tumbuh kembang",
      "Penanganan demam dan infeksi",
    ],
  },
   {
    poliklinik: "Poliklinik Paru",

    spesialis:'Spesialis Paru',
    dokterPoli: [
      {
        nama: "dr. Inet Fyndiannne M, Sp. P",
        foto: inet,
      },
    ],

    layanan: [
      "Konsultasi penyakit paru dan pernapasan",
      "Pemeriksaan batuk kronis dan sesak napas",
      "Penanganan asma dan bronkitis",
      "Diagnosis dan terapi TBC (tuberkulosis)",
      "Pemeriksaan infeksi saluran pernapasan",
      "Spirometri (tes fungsi paru)",
      "Konsultasi berhenti merokok",
      "Penanganan PPOK (Penyakit Paru Obstruktif Kronik)",
    ],
  },
   {
    poliklinik: "Poliklinik Kandungan",

    spesialis:'Spesialis Kandungan',
    dokterPoli: [
      {
        nama: "dr. Deyna Primavita P., Sp.OG(K)-KFM",
        foto: levi,
      },
      {
        nama: "dr. Syaiful Alam, Sp.OG",
        foto: alam,
      },
    ],

    layanan: [
        "Konsultasi kehamilan dan pemeriksaan rutin",
        "USG kehamilan (2D/4D)",
        "Pemantauan tumbuh kembang janin",
        "Konsultasi program hamil",
        "Penanganan gangguan menstruasi",
        "Deteksi dan terapi kista ovarium",
        "Konsultasi menopause",
        "Pemeriksaan kesehatan reproduksi wanita",
        "Penanganan infeksi organ kewanitaan",
    ],
  },
   {
    poliklinik: "Poliklinik THT",

    spesialis:'Spesialis THT',
    dokterPoli: [
      {
        nama: "dr. Windy Rizkiana, Sp.THT-KL",
        foto: windy,
      },
      {
        nama: "dr. Yayan Mitayani, Sp.THT-KL",
        foto: yayan,
      },
    ],

    layanan: [
        "Konsultasi gangguan telinga, hidung, dan tenggorokan",
        "Pemeriksaan infeksi telinga (otitis)",
        "Penanganan gangguan pendengaran",
        "Pemeriksaan dan terapi sinusitis",
        "Penanganan pilek kronis dan alergi hidung",
        "Pemeriksaan amandel dan radang tenggorokan",
        "Penanganan suara serak dan gangguan pita suara",
        "Tindakan pembersihan telinga (serumen)",
        "Deteksi dan terapi polip hidung",
    ],
  },
   {
    poliklinik: "Poliklinik Radiologi",

    spesialis:'Spesialis Radiologi',
    dokterPoli: [
      {
        nama: "dr. Vida Berry Al Aden, Sp.Rad",
        foto: vida,
      },
      {
        nama: "dr. Iwan Danardono, Sp.Rad",
        foto: iwan,
      },
    ],

    layanan: [
        "Pemeriksaan Rontgen (X-Ray)",
        "USG Abdomen dan Organ Dalam",
        "USG Kehamilan (2D/4D)",
        "CT Scan (sesuai indikasi medis)",
        "MRI (jika tersedia)",
        "Pemeriksaan radiologi thorax (paru-paru)",
        "Pemeriksaan tulang dan sendi",
        "Mammografi (pemeriksaan payudara)",
        "Konsultasi hasil pemeriksaan radiologi",
    ],
  },
  {
    poliklinik: "Poliklinik Saraf",

    spesialis:'Spesialis Saraf',
    dokterPoli: [
      {
        nama: "dr. Khalifa Rahmani, Sp.N",
        foto: khalifa,
      },
      {
        nama: "dr. Tri Hastuti H, Sp.S",
        foto: tri,
      },
    ],

    layanan: [
       "Konsultasi gangguan sistem saraf",
      "Penanganan sakit kepala dan migrain",
      "Diagnosis dan terapi stroke",
      "Penanganan kesemutan dan baal (neuropati)",
      "Pemeriksaan gangguan saraf tepi",
      "Penanganan epilepsi dan kejang",
      "Konsultasi gangguan tidur akibat saraf",
      "Penanganan vertigo dan pusing berulang",
      "Pemeriksaan kelemahan otot dan tremor",
    ],
  },
   {
    poliklinik: "Poliklinik Jantung",

    spesialis:'Spesialis Jantung',
    dokterPoli: [
      {
        nama: "dr. Sari Rahayu Dwi Utami, Sp.JP",
        foto: sarijan,
      },
    ],

    layanan: [
       "Konsultasi penyakit jantung dan pembuluh darah",
      "Pemeriksaan tekanan darah dan hipertensi",
      "Diagnosis dan terapi penyakit jantung koroner",
      "Pemeriksaan nyeri dada dan sesak napas",
      "Elektrokardiogram (EKG)",
      "Ekokardiografi (USG jantung)",
      "Treadmill test (uji latih jantung)",
      "Pemantauan gagal jantung",
      "Konsultasi pencegahan serangan jantung",
    ],
  },
  {
    poliklinik: "Poliklinik Mata",

    spesialis:'Spesialis Mata',
    dokterPoli: [
      {
        nama: "dr. Inkoni Novitasari, Sp. M",
        foto: inkoni,
      },
    ],

    layanan: [
       "Konsultasi gangguan kesehatan mata",
      "Pemeriksaan mata rutin dan tajam penglihatan",
      "Penanganan mata merah dan infeksi mata",
      "Diagnosis dan terapi katarak",
      "Pemeriksaan dan terapi glaukoma",
      "Penanganan gangguan refraksi (minus/plus/silinder)",
      "Pemeriksaan retina dan mata diabetes",
      "Pemeriksaan mata anak",
      "Konsultasi operasi mata (sesuai indikasi)",
    ],
  },
  {
    poliklinik: "Poliklinik Orthopedi",

    spesialis:'Spesialis Orthopedi',
    dokterPoli: [
      {
        nama: "dr. M. Abdul Aziz, Sp.OT",
        foto: aziz,
      },
    ],

    layanan: [
       "Konsultasi gangguan tulang dan sendi",
      "Penanganan patah tulang (fraktur)",
      "Terapi nyeri lutut dan pinggul",
      "Penanganan cedera olahraga",
      "Diagnosis dan terapi osteoarthritis",
      "Penanganan skoliosis dan kelainan tulang belakang",
      "Pemeriksaan dislokasi dan keseleo sendi",
      "Tindakan pemasangan gips",
      "Konsultasi operasi tulang (sesuai indikasi medis)",
    ],
  },
  {
    poliklinik: "Poliklinik Urologi",

    spesialis:'Spesialis Urologi',
    dokterPoli: [
      {
        nama: "dr. Andreas Pramudito, Sp. U",
        foto: andreas,
      },
    ],

    layanan: [
        "Konsultasi gangguan saluran kemih dan ginjal",
        "Penanganan batu ginjal dan batu saluran kemih",
        "Diagnosis dan terapi infeksi saluran kemih (ISK)",
        "Konsultasi pembesaran prostat (BPH)",
        "Penanganan gangguan buang air kecil",
        "Pemeriksaan hematuria (urin berdarah)",
        "Konsultasi kesehatan reproduksi pria",
        "Penanganan varikokel dan hidrokel",
        "Konsultasi operasi urologi (sesuai indikasi medis)",
    ],
  },
   {
    poliklinik: "Poliklinik Kulit & Kelamin",

    spesialis:'Spesialis Kulit & Kelamin',
    dokterPoli: [
      {
        nama: "dr. Ahmad Satya Negara, Sp.D.V",
        foto: satya,
      },
    ],

    layanan: [
        "Konsultasi penyakit kulit dan kelamin",
        "Penanganan jerawat dan bekas jerawat",
        "Terapi alergi kulit dan eksim",
        "Penanganan infeksi jamur dan bakteri kulit",
        "Diagnosis dan terapi psoriasis",
        "Penanganan gatal kronis dan dermatitis",
        "Pemeriksaan penyakit menular seksual (PMS)",
        "Konsultasi kesehatan kulit dan perawatan kulit",
        "Tindakan kecil dermatologi (sesuai indikasi medis)",
    ],
  },
   {
    poliklinik: "Poliklinik Rehab Medik",

    spesialis:'Spesialis Rehab Medik',
    dokterPoli: [
      {
        nama: "dr. Andi Sulistyo Nugroho, Sp.KFR",
        foto: andi,
      },
    ],

    layanan: [
        "Konsultasi rehabilitasi dan pemulihan fungsi gerak",
        "Fisioterapi pasca stroke",
        "Terapi nyeri otot dan sendi",
        "Rehabilitasi cedera olahraga",
        "Terapi pasca operasi tulang dan sendi",
        "Latihan penguatan otot dan mobilisasi",
        "Penanganan gangguan saraf motorik",
        "Terapi okupasi untuk aktivitas sehari-hari",
        "Program rehabilitasi pasien disabilitas",
    ],
  },
  {
    poliklinik: "Poliklinik Patologi Klinik",

    spesialis:'Spesialis Patologi Klinik',
    dokterPoli: [
      {
        nama: "dr. Desi Widiyanti, Sp.PK",
        foto: andi,
      },
    ],

    layanan: [
        "Pemeriksaan darah lengkap (hematologi)",
        "Pemeriksaan gula darah dan diabetes",
        "Pemeriksaan kolesterol dan profil lipid",
        "Pemeriksaan fungsi hati dan ginjal",
        "Pemeriksaan urin lengkap",
        "Tes infeksi (Hepatitis, HIV, dll sesuai indikasi)",
        "Pemeriksaan elektrolit dan kimia klinik",
        "Pemeriksaan marker tumor (sesuai kebutuhan)",
        "Konsultasi hasil pemeriksaan laboratorium",
    ],
  },
];

export const rawatInap = [
  {
    kelas: "Bangsal President Suite",
    harga: "xxxxxxxx",
    images: [slider1, slider2, slider3, slider4, slider5],
    fasilitas: [
      "Kamar VIP + ruang tamu",
      "AC dan TV",
      "Kamar mandi dalam",
      "Nurse call 24 jam",
      "Makan pasien & pendamping",
    ],
  },

  {
    kelas: "Bangsal VVIP",
    harga: "xxxxxxxx",
     images: [slider1, slider2, slider3, slider4, slider5],
    fasilitas: [
      "Kamar eksklusif 1 pasien",
      "AC, TV, Sofa keluarga",
      "Kamar mandi dalam + water heater",
      "Pelayanan perawat 24 jam",
      "Makan pasien & pendamping",
      "WiFi dan ruang tunggu keluarga",
    ],
  },

  {
    kelas: "Bangsal VIP",
    harga: "xxxxxxx",
     images: [slider1, slider2, slider3, slider4, slider5],
    fasilitas: [
      "Kamar 1 pasien",
      "AC dan TV",
      "Kamar mandi dalam",
      "Nurse call",
      "Pelayanan perawat",
      "Makan pasien",
    ],
  },

  {
    kelas: "Bangsal Kelas 1",
    harga: "xxxxxx",
     images: [slider1, slider2, slider3, slider4, slider5],
    fasilitas: [
      "Kamar 2 pasien",
      "TV bersama",
      "Kamar mandi dalam",
      "Pelayanan perawat",
      "Nurse call",
    ],
  },

  {
    kelas: "Bangsal Kelas 2",
    harga: "xxxxxxx",
    images: [slider1, slider2, slider3, slider4, slider5],
    fasilitas: [
      "Kamar 3–4 pasien",
      "Kipas angin",
      "Kamar mandi bersama",
      "Pelayanan perawat",
      "Nurse call",
    ],
  },

  {
    kelas: "Bangsal Kelas 3",
    harga: "xxxxxx",
     images: [slider1, slider2, slider3, slider4, slider5],
    fasilitas: [
      "Kamar 6–8 pasien",
      "Ventilasi standar",
      "Kamar mandi bersama",
      "Pelayanan perawat",
      "Nurse call",
    ],
  },
];

export const penunjang = [
  {
    nama: "Instalasi Laboratorium",
    image: slider1,
    fasilitas: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    ],
  },
   {
    nama: "Instalasi Radiologi",
    image: slider1,
    fasilitas: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    ],
  },
   {
    nama: "Instalasi Farmasi",
    image: slider1,
    fasilitas: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    ],
  },
   {
    nama: "Kamar Operasi",
    image: slider1,
    fasilitas: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    ],
  },
   {
    nama: "Klinik Fisioterapi",
    image: slider1,
    fasilitas: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    ],
  },
   {
    nama: "Terapi Wicara",
    image: slider1,
    fasilitas: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    ],
  },
   {
    nama: "Okupasi Terapi",
    image: slider1,
    fasilitas: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    ],
  },
   {
    nama: "Konsultasi Gizi",
    image: slider1,
    fasilitas: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    ],
  },
   {
    nama: "Ambulance 24 jam",
    image: slider1,
    fasilitas: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    ],
  },
   {
    nama: "Suntik KB",
    image: slider1,
    fasilitas: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    ],
  },
   {
    nama: "Donor Darah",
    image: slider1,
    fasilitas: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    ],
  },
   {
    nama: "Pembinaan Kerohanian",
    image: slider1,
    fasilitas: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    ],
  },
]



export const leaflet = [
  {
    id: 1,
    date: "15 November 2025",
    image: leaflet1,
  },
  {
    id: 2,
    date: "13 November 2025",
    image: leaflet2,
  },
  {
    id: 3,
    date: "11 November 2025",
    image: leaflet3,
  },
   {
    id: 4,
    date: "11 November 2025",
    image: leaflet4,
  },
   {
    id: 5,
    date: "11 November 2025",
    image: leaflet5,
  },
   {
    id: 6,
    date: "11 November 2025",
    image: leaflet6,
  },
   {
    id: 7,
    date: "11 November 2025",
    image: leaflet7,
  },
   {
    id: 8,
    date: "11 November 2025",
    image: leaflet8,
  },
]

export const gallery = [
  {
    id: 1,
    date: "9 November 2025",
    image: gallery1,
  },
  {
    id: 2,
    date: "7 November 2025",
    image: gallery2,
  },
  {
    id: 3,
    date: "5 November 2025",
    image: gallery2,
  },
   {
    id: 4,
    date: "5 November 2025",
    image: gallery4,
  },
   {
    id: 5,
    date: "5 November 2025",
    image: gallery5,
  },
   {
    id: 6,
    date: "5 November 2025",
    image: gallery6,
  },
   {
    id: 7,
    date: "5 November 2025",
    image: gallery7,
  },
]
export const dataArtikel = [
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
  {
    id: 13,
    category: "berita",
    title: "RS PKU Sruweng Resmikan Gedung Rawat Inap Baru",
    date: "10 Desember 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>RS PKU Sruweng resmi membuka gedung rawat inap baru untuk meningkatkan pelayanan masyarakat.</p>",
  },
  {
    id: 14,
    category: "berita",
    title: "RS PKU Sruweng Resmikan Gedung Rawat Inap Baru",
    date: "10 Desember 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>RS PKU Sruweng resmi membuka gedung rawat inap baru untuk meningkatkan pelayanan masyarakat.</p>",
  },
  {
    id: 15,
    category: "artikel-kesehatan",
    title: "Cara Mengelola Stres dengan Baik",
    date: "25 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Stres berlebih dapat berdampak buruk pada kesehatan.</p>",
  },
  {
    id: 16,
    category: "artikel-kesehatan",
    title: "Cara Mengelola Stres dengan Baik",
    date: "25 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Stres berlebih dapat berdampak buruk pada kesehatan.</p>",
  },
  {
    id: 17,
    category: "artikel-islami",
    title: "Cara Mengelola Stres dengan Baik",
    date: "25 November 2025",
    image: "https://cdn.banyumasekspres.id/wp-content/uploads/2025/07/pku-sruweng-siap-ikuti-kebijakan-implememtasi-kris.jpg",
    desc: "<p>Stres berlebih dapat berdampak buruk pada kesehatan.</p>",
  },
  {
    id: 18,
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

export const jadwalDokter = [
  {
    spesialis: "Spesialis Penyakit Dalam",
    dokter: [
      {
        nama: "dr. Khoerul Anwar, Sp.PD",
        jam: "09.00 WIB - 13.00 WIB",
        status: true,
      },
      {
        nama: "dr. Haryono Yuniarto, Sp.PD-KGH",
        jam: "07.00 WIB - 09.00 WIB",
        status: true,
      },
    ],
  },
  {
    spesialis: "Spesialis Bedah",
    dokter: [
      {
        nama: "dr. Ricky Dwi Nur Tyastono, Sp.B",
        jam: "09.00 WIB - 12.00 WIB",
        status: true,
      },
      {
        nama: "dr. Adi Purnomo, Sp.B",
        jam: "Tidak Praktik",
        status: false,
      },
    ],
  },
  {
    spesialis: "Spesialis Anak",
    dokter: [
      {
        nama: "dr. Dyah Ayu Wulansari, M.Sc., Sp.A",
        jam: "09.00 WIB - 13.00 WIB",
        status: true,
      },
      {
        nama: "dr. M. Jalul Mutaqorrib, M.Med.Sc., Sp.A",
        jam: "09.00 WIB - 13.00 WIB",
        status: true,
      },
    ],
  },
  {
    spesialis: "Spesialis Paru",
    dokter: [
      {
        nama: "dr. Inet Fyndiannne M, Sp. P",
        jam: "07.00 WIB - 13.00 WIB",
        status: true,
      },
    ],
  },
  {
    spesialis: "Spesialis Kandungan",
    dokter: [
      {
        nama: "dr. Deyna Primavita P., Sp. OG(K)-KFM",
        jam: "14.30 WIB - Selesai",
        status: true,
      },
      {
        nama: "dr. Syaiful Alam, Sp. OG",
        jam: "Tidak Praktik",
        status: false,
      },
    ],
  },
  {
    spesialis: "Spesialis THT",
    dokter: [
      {
        nama: "dr. Windy Rizkiana, Sp. THT-KL",
        jam: "09.00 WIB - 13.00 WIB",
        status: true,
      },
      {
        nama: "dr. Yayan Mitayani, Sp. THT-KL",
        jam: "Tidak Praktik",
        status: false,
      },
    ],
  },
  {
    spesialis: "Spesialis Radiologi",
    dokter: [
      {
        nama: "dr. Vida Berry Al Aden, Sp. Rad",
        jam: "07.00 WIB - 14.00 WIB",
        status: true,
      },
      {
        nama: "dr. Iwan Danardono, Sp. Rad",
        jam: "15.00 WIB - Selesai",
        status: true,
      },
    ],
  },
  {
    spesialis: "Spesialis Saraf",
    dokter: [
      {
        nama: "dr. Khalifa Rahmani, Sp. N",
        jam: "09.00 WIB - 13.00 WIB",
        status: true,
      },
      {
        nama: "dr. Tri Hastuti H, Sp. S",
        jam: "Tidak Praktik",
        status: false,
      },
    ],
  },
  {
    spesialis: "Spesialis Jantung",
    dokter: [
      {
        nama: "dr. Sari Rahayu Dwi Utami, Sp. JP",
        jam: "09.00 WIB - 13.00 WIB",
        status: true,
      },
    ],
  },
  {
    spesialis: "Spesialis Mata",
    dokter: [
      {
        nama: "dr. Inkoni Novitasari, Sp. M",
        jam: "Tidak Praktik",
        status: false,
      },
    ],
  },
  {
    spesialis: "Spesialis Orthopedi",
    dokter: [
      {
        nama: "dr. M. Abdul Aziz, Sp. OT",
        jam: "Tidak Praktik",
        status: false,
      },
    ],
  },
  {
    spesialis: "Spesialis Urologi",
    dokter: [
      {
        nama: "dr. Andreas Pramudito, Sp. U",
        jam: "Tidak Praktik",
        status: false,
      },
    ],
  },
  {
    spesialis: "Spesialis Kulit & Kelamin",
    dokter: [
      {
        nama: "dr. Ahmad Satya Negara, Sp. D.V",
        jam: "Tidak Praktik",
        status: false,
      },
    ],
  },
  {
    spesialis: "Spesialis Rehab Medik",
    dokter: [
      {
        nama: "dr.Andi Sulistyo Nugroho, Sp. KFR",
        jam: "14.30 WIB - Selesai",
        status: true,
      },
      {
        nama: "Fisio Terapi",
        jam: "07.00 WIB - 17.00 WIB",
        status: true,
      },
      {
        nama: "Terapi Wicara & Okupasi",
        jam: "08.00 WIB - Selesai",
        status: true,
      },
    ],
  },
  {
    spesialis: "Klinik Vaksinasi Internasional",
    dokter: [
      {
        nama: "",
        jam: "10.00 WIB - 13.00WIB",
        status: true,
      },
    ],
  },
  {
    spesialis: "Spesialis Patologi Klinik",
    dokter: [
      {
        nama: "dr. Desi Widiyanti, Sp. PK",
        jam: "Tidak Praktik",
        status: false,
      },
    ],
  },
  {
    spesialis: "Klinik Gizi",
    dokter: [
      {
        nama: "",
        jam: "Tidak Praktik",
        status: false,
      },
    ],
  },
];
