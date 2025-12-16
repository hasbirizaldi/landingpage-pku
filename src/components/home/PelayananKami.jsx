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
    <section className="bg-slate-100  lg:block hidden">
      <div className="w-[80%] mx-auto py-10">
        <h1 className="font-bold text-center text-2xl sm:text-3xl text-green-900">Layanan Kami</h1>
        <div className="h-[2px] w-60 lg:w-80 mx-auto bg-green-900 mb-8 sm:mb-10 mt-2"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {layanan.map((item, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-2xl
              shadow
              hover:shadow-xl
              transition
              cursor-pointer border-green-950 border-2
            "
            >
              {/* ICON */}
              <div className="flex justify-center bg-gradient-to-r from-emerald-500 via-emerald-700 to-emerald-900 py-4 rounded-t-xl">
                <div className="bg-gradient-to-r from-emerald-400 via-emerald-700 to-emerald-950 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full text-white">{iconMap[item.icon]}</div>
              </div>
              <div className=" rounded-b-xl  relative min-h-[210px] px-4">
                <h3 className="font-bold text-base sm:text-lg text-slate-800 text-center">{item.title}</h3>

                <p className="text-slate-600 text-sm leading-relaxed text-center sm:text-left ">{item.desc}</p>

                <Link
                  to={item.url}
                  className="
                absolute bottom-5 left-4
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PelayananKami;
