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
