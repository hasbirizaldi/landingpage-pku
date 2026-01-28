import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
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
import Promosi from "./pages/Promosi";
import Gallery from "./pages/Gallery";
import Sejarah from "./pages/Sejarah";
import Simrs from "./pages/Simrs";
import Karir from "./pages/Karir";
import VidioIslami from "./pages/VidioIslami";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import VidioKesehatan from "./pages/VidioKesehatan";
import VidioPromosi from "./pages/VidioPromosi";
import ArtikelIslami from "./pages/ArtikelIslami";
import ArtikelKesehatan from "./pages/ArtikelKesehatan";
import PelayananPenunjang from "./pages/PelayananPenunjang";
import Akreditasi from "./pages/Akreditasi";
import PublicLayout from "./components/layout/PublicLayout";
import BeritaDetail from "./pages/BeritaDetail";
import TagPage from "./pages/TagPage";

const App = () => {
  return (
    <div className="relative poppins">
      <Routes>
        {/* PUBLIC */}
        <Route element={<PublicLayout />}>
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
          <Route path="/artikel-baru" element={<Berita />} />
          <Route path="/artikel/:slug" element={<BeritaDetail />} />
          <Route path="/tags/:tag" element={<TagPage />} />
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
          <Route path="/vidio-promosi" element={<VidioPromosi />} />
        </Route>
      </Routes>
     
    </div>
  );
};

export default App;
