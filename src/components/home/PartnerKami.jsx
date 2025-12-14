import { Link } from "react-router-dom";
import { partner } from "../../api/data";

const PartnerKami = () => {
  return (
    <section className="bg-slate-50 py-16 px-60">
      <div className="max-w-7xl mx-auto ">
        <h1 className="font-bold text-center text-3xl text-slate-800">Partner Kami</h1>
        <div className="h-[2px] w-80 mx-auto bg-slate-600 mb-10 mt-1"></div>

        {/* GRID PARTNER */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-14 items-center">
          {partner.map((item, index) => (
            <img key={index} src={item} alt="partner" className="h-12 w-full object-contain  hover:scale-105 cursor-pointer transition" />
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-16">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-gradient-to-r  from-emerald-500 via-emerald-700 to-emerald-900  text-white px-8 py-1 rounded shadow hover:bg-blue-800 transition font-semibold text-lg shadow-ku"
          >
            Lihat Selengkapnya
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerKami;
