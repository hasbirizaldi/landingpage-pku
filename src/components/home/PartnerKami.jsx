import { Link } from "react-router-dom";
import { partner } from "../../api/data";

const PartnerKami = () => {
  return (
    <section className="bg-slate-50 py-10 sm:py-14 lg:py-16 w-[80%] mx-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-center text-2xl sm:text-3xl text-green-900">Partner Kami</h1>

        <div className="h-[2px] w-60 lg:w-80 mx-auto bg-green-900 mb-8 sm:mb-10 mt-2"></div>

        {/* GRID PARTNER */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-0 gap-y-10 ">
          {partner.map((item, index) => (
            <img key={index} src={item} alt="partner" className="h-6 lg:h-10 w-full object-contain" />
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900
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
