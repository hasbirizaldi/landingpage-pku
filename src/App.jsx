import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HeaderNavbar from "./components/HeaderNavbar";
import DokterKami from "./pages/DokterKami";
import JadwalDokter from "./pages/JadwalDokter";
import IndikatorMutu from "./pages/IndikatorMutu";
import Falsafah from "./pages/Falsafah";
import RawatJalan from "./pages/RawatJalan";
import RawatInap from "./pages/RawatInap";
import Igd from "./pages/Igd";
import BedPasien from "./pages/BedPasien";
import GoObat from "./pages/GoObat";
import Berita from "./pages/Berita";
import Footer from "./components/Footer";
import Promosi from "./pages/Promosi";
import Gallery from "./pages/Gallery";
import Sejarah from "./pages/Sejarah";
import Simrs from "./pages/Simrs";
import Karir from "./pages/Karir";
import VidioIslami from "./pages/VidioIslami";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import VidioKesehatan from "./pages/VidioKesehatan";
import ArtikelIslami from "./pages/ArtikelIslami";
import ArtikelKesehatan from "./pages/ArtikelKesehatan";
import PelayananPenunjang from "./pages/PelayananPenunjang";
import { FaWhatsappSquare } from "react-icons/fa";
import MenuBottom from "./components/home/MenuBottom";
import Akreditasi from "./pages/Akreditasi";

const App = () => {
  return (
    <div className="relative">
      <HeaderNavbar />
      {/* <FixedMenu /> */}
      <MenuBottom />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jadwal-dokter" element={<JadwalDokter />} />
        <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
        <Route path="/dokter-kami" element={<DokterKami />} />
        <Route path="/indikator-mutu" element={<IndikatorMutu />} />
        <Route path="/akreditasi-penghargaan" element={<Akreditasi />} />
        <Route path="/falsafah-visi-misi" element={<Falsafah />} />
        <Route path="/rawat-jalan" element={<RawatJalan />} />
        <Route path="/rawat-inap" element={<RawatInap />} />
        <Route path="/penunjang" element={<PelayananPenunjang />} />
        <Route path="/igd" element={<Igd />} />
        <Route path="/bed-pasien" element={<BedPasien />} />
        <Route path="/go-obat" element={<GoObat />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/akreditasi" element={<Akreditasi />} />
        <Route path="/keislaman" element={<VidioIslami />} />
        <Route path="/kesehatan" element={<VidioKesehatan />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/Simrs" element={<Simrs />} />
        <Route path="/karir" element={<Karir />} />
        <Route path="/artikel-islami" element={<ArtikelIslami />} />
        <Route path="/artikel-kesehatan" element={<ArtikelKesehatan />} />
        <Route path="/promosi-leaflet" element={<Promosi />} />
        <Route path="/vidio-islami" element={<VidioIslami />} />
        <Route path="/vidio-kesehatan" element={<VidioKesehatan />} />
      </Routes>
      <div className="fixed bottom-20 lg:right-10 right-1 z-60 bg-white cursor-pointer hover:scale-105 transition-all ease-in-out rounded-lg shadow-icon">
        <FaWhatsappSquare className="text-green-600 lg:text-6xl text-5xl" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
