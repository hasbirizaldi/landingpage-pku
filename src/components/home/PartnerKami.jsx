import { Link } from "react-router-dom";
import { partner } from "../../api/data";

const PartnerKami = () => {
  return (
    <section className="bg-slate-50 py-10 sm:py-14 lg:py-16 px-4 sm:px-10 lg:px-60">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-center text-2xl sm:text-3xl text-slate-800">Partner Kami</h1>

        <div className="h-[2px] w-40 sm:w-60 lg:w-80 mx-auto bg-slate-600 mb-8 sm:mb-10 mt-2"></div>

        {/* GRID PARTNER */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 sm:gap-x-10 gap-y-10 sm:gap-y-14 items-center">
          {partner.map((item, index) => (
            <img
              key={index}
              src={item}
              alt="partner"
              className="
                h-10 sm:h-12
                w-full object-contain
                cursor-pointer
                transition
                hover:scale-105
              "
            />
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
              px-6 sm:px-8 py-2
              rounded
              font-semibold
              text-base sm:text-lg
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
