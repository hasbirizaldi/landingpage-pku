import { Link } from "react-router-dom";
import { partner } from "../../api/data";

const PartnerKami = () => {
  return (
    <section className="bg-white/50 rounded-lg py-10 sm:py-14 lg:py-10 lg:w-[80%] lg:mx-auto mx-2 my-5 shadow-ku">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-center text-2xl sm:text-3xl text-[#1A2A75]">Partner Kami</h1>

        <div className="h-[2px] w-60 lg:w-80 mx-auto bg-gradient-to-r from-[#1A2A75]  to-[#079C4E] to-emerald-500 mb-8 sm:mb-10 mt-2"></div>

        {/* GRID PARTNER */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10">
          <img src={partner[0]} alt="JKN" className="h-6 lg:h-8 w-full object-contain" />
          <img src={partner[1]} alt="BPJSTK" className="h-6 lg:h-10 w-full object-contain" />
          <img src={partner[2]} alt="CAR" className="h-6 lg:h-12 w-full object-contain" />
          <img src={partner[3]} alt="BRILIFE" className="h-6 lg:h-10 w-full object-contain" />
          <img src={partner[4]} alt="KAI" className="h-6 lg:h-8 w-full object-contain" />
          <img src={partner[5]} alt="JASA-RAHARJA" className="h-6 lg:h-12 w-full object-contain" />
          <img src={partner[6]} alt="MAG" className="h-6 lg:h-10 w-full object-contain" />
          <img src={partner[7]} alt="PLN" className="h-6 lg:h-10 w-full object-contain" />
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="
             bg-[#1A2A75]
              text-white
              px-4 sm:px-8 py-2 sm:py-2 
              rounded
              font-semibold
              text-sm sm:text-lg
              shadow-ku
              hover:scale-105
              transition
            "
          >
            Lihat Selengkapnya
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerKami;
