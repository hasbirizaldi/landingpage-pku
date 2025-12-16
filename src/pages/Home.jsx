import { useEffect } from "react";
import PartnerKami from "../components/home/PartnerKami";
import JknGoObat from "../components/home/JknGoObat";
import PelayananKami from "../components/home/PelayananKami";
import Slider from "../components/home/Slider";
import FixedMenu from "../components/FixedMenu";
import BeritaArtikel from "../components/home/BeritaArtikel";

const Home = () => {
  useEffect(() => {
    document.title = "RS PKU Sruweng | Beranda";
  }, []);
  return (
    <div>
      {/* konten */}
      <div className="bg-slate-50 relative">
        <Slider />
        <JknGoObat />
        <PartnerKami />
        <PelayananKami />
        <BeritaArtikel />
      </div>
    </div>
  );
};

export default Home;
