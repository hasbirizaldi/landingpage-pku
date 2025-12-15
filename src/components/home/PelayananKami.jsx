import { FaAmbulance, FaHospital, FaStethoscope, FaUserNurse, FaBed } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { layanan } from "../../api/data";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const iconMap = {
  ambulance: <FaAmbulance className="text-4xl sm:text-5xl" />,
  medis: <FaStethoscope className="text-4xl sm:text-5xl" />,
  nurse: <FaUserNurse className="text-4xl sm:text-5xl" />,
  hospital: <FaHospital className="text-4xl sm:text-5xl" />,
  docter: <FaUserDoctor className="text-4xl sm:text-5xl" />,
  bed: <FaBed className="text-4xl sm:text-5xl" />,
  medicine: <GiMedicines className="text-4xl sm:text-5xl" />,
};

const PelayananKami = () => {
  return (
    <section className="bg-slate-100 px-4 sm:px-10 lg:px-60 py-10 sm:py-14">
      <h1 className="font-bold text-center text-2xl sm:text-3xl text-slate-800">Pelayanan Kami</h1>

      <div className="h-[2px] w-40 sm:w-60 lg:w-80 mx-auto bg-slate-600 mb-10 sm:mb-14 mt-2"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {layanan.map((item, index) => (
          <div
            key={index}
            className="
              bg-white px-6 pt-6 pb-12
              min-h-[320px]
              rounded-2xl
              shadow
              hover:shadow-xl
              transition
              cursor-pointer
              border-2 border-blue-300
              relative
            "
          >
            {/* ICON */}
            <div className="mb-4 flex justify-center">
              <div className="bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full text-white">{iconMap[item.icon]}</div>
            </div>

            <h3 className="font-bold text-base sm:text-lg text-slate-800 mb-2 text-center">{item.title}</h3>

            <p className="text-slate-600 text-sm leading-relaxed text-center sm:text-left">{item.desc}</p>

            <Link
              to="/"
              className="
                absolute bottom-5 left-6
                text-sm font-semibold text-blue-600
                hover:text-blue-800
                transition
                flex items-center
              "
            >
              Baca Selengkapnya
              <MdKeyboardDoubleArrowRight className="text-xl ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PelayananKami;
