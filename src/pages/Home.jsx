import { useEffect } from "react";
import PartnerKami from "../components/home/PartnerKami";
import JknGoObat from "../components/home/JknGoObat";
import PelayananKami from "../components/home/PelayananKami";
import Slider from "../components/home/Slider";
import BeritaArtikel from "../components/home/BeritaArtikel";

const Home = () => {
  useEffect(() => {
    document.title = "RS PKU Sruweng | Beranda";
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* ===== BACKGROUND DIAM ===== */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage: "url('/5.jpg')", // pastikan di public
        }}
      />

      {/* overlay supaya konten jelas */}
      <div className="fixed inset-0 bg-white/30 -z-10" />

      {/* ===== KONTEN HOME ===== */}
      <div className="relative">
        <Slider />

        {/* konten dengan background semi transparan */}
        <div>
          <JknGoObat />
          <PartnerKami />
          <PelayananKami />
          <BeritaArtikel />
        </div>
      </div>
    </div>
  );
};

export default Home;
