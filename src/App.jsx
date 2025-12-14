import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HeaderNavbar from "./components/HeaderNavbar";
import DokterKami from "./pages/DokterKami";
import Footer from "./components/footer";
import JadwalDokter from "./pages/JadwalDokter";
import IndikatorMutu from "./pages/IndikatorMutu";
import Falsafah from "./pages/Falsafah";
import RawatJalan from "./pages/RawatJalan";
import RawatInap from "./pages/RawatInap";
import Igd from "./pages/Igd";
import BedPasien from "./pages/BedPasien";
import GoObat from "./pages/GoObat";
import Berita from "./pages/Berita";
import Promosi from "./pages/Promosi";
import Gallery from "./pages/Gallery";
import Simrs from "./pages/Simrs";
import Karir from "./pages/Karir";
import VidioIslami from "./pages/VidioIslami";
import VidioKesehatan from "./pages/VidioKesehatan";
import ArtikelIslami from "./pages/ArtikelIslami";
import ArtikelKesehatan from "./pages/ArtikelKesehatan";
import PelayananPenunjang from "./pages/PelayananPenunjang";
import { FaWhatsappSquare } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <HeaderNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jadwal-dokter" element={<JadwalDokter />} />
        <Route path="/dokter-kami" element={<DokterKami />} />
        <Route path="/indikator-mutu" element={<IndikatorMutu />} />
        <Route path="/falsafah-visi-misi" element={<Falsafah />} />
        <Route path="/rawat-jalan" element={<RawatJalan />} />
        <Route path="/rawat-inap" element={<RawatInap />} />
        <Route path="/penunjang" element={<PelayananPenunjang />} />
        <Route path="/igd" element={<Igd />} />
        <Route path="/bed-pasien" element={<BedPasien />} />
        <Route path="/go-obat" element={<GoObat />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/keislaman" element={<VidioIslami />} />
        <Route path="/kesehatan" element={<VidioKesehatan />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Simrs" element={<Simrs />} />
        <Route path="/karir" element={<Karir />} />
        <Route path="/artikel-islami" element={<ArtikelIslami />} />
        <Route path="/artikel-kesehatan" element={<ArtikelKesehatan />} />
        <Route path="/promosi-leaflet" element={<Promosi />} />
      </Routes>
      <div className="fixed bottom-20 right-10 bg-white cursor-pointer hover:scale-105 transition-all ease-in-out rounded-lg shadow-icon">
        <FaWhatsappSquare className="text-green-600 text-6xl" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
