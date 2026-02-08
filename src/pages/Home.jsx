import { Helmet } from "react-helmet-async";
import PartnerKami from "../components/home/PartnerKami";
import PelayananKami from "../components/home/PelayananKami";
import Slider from "../components/home/Slider";
import BeritaArtikel from "../components/home/BeritaArtikel";
import VidioHome from "../components/home/VidioHome";
import LayananUnggulan from "../components/home/LayananUnggulan";
import JknHome from "../components/home/JknHome";

const Home = () => {

  return (
    <div className="relative min-h-screen">
       <Helmet>
          <title>RS PKU Sruweng | Beranda</title>

          <meta
            name="description"
            content="Website resmi RS PKU Muhammadiyah Sruweng, menyediakan layanan kesehatan, BPJS, rawat inap dan rawat jalan."
          />

          <meta property="og:title" content="RS PKU Sruweng" />
          <meta property="og:image" content="/pku.webp" />
        </Helmet>
      {/* ===== BACKGROUND DIAM ===== */}
      <div
        className="fixed inset-0 bg-cover bg-center -z-20"
        style={{
          backgroundImage: "url('/5.jpg')", // pastikan di public
        }}
      />

      {/* overlay supaya konten jelas */}
      <div className="fixed inset-0 bg-white/70 -z-10" />

      {/* ===== KONTEN HOME ===== */}
      <div className="relative">
        <Slider />

        {/* konten dengan background semi transparan */}
        <div>
          <JknHome />
          <LayananUnggulan />
          <PartnerKami />
          <PelayananKami />
          <BeritaArtikel />
          <VidioHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
