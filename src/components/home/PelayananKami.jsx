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
    <section data-aos="fade-up" className="bg-white/50 lg:block hidden lg:w-[80%] lg:mx-auto rounded-lg px-5 my-5 shadow-ku">
      <div className=" py-10">
        <h1 className="font-bold text-center text-2xl sm:text-3xl text-emerald-900">Layanan Kami</h1>
        <div className="h-[3px] w-60 lg:w-80 mx-auto bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 mb-8 sm:mb-10 mt-2"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {layanan.map((item, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-lg
              shadow
              hover:shadow-lg
              transition
              cursor-pointer border-green-800 hover:scale-[1.01] border-2
            "
            >
              {/* ICON */}
              <div className="flex justify-center bg-gradient-to-r from-emerald-900 via-emerald-700 to-emerald-600 py-4 rounded-t-sm">
                <div className="bg-white w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full text-yellow-600">{iconMap[item.icon]}</div>
              </div>
              <div className=" rounded-b-xl  relative min-h-[210px] px-4">
                <h3 className="font-bold text-base sm:text-lg text-emerald-900 text-center">{item.title}</h3>

                <p className="text-slate-600 text-sm leading-relaxed text-center sm:text-left ">{item.desc}</p>

                <Link
                  to={item.url}
                  className="
                absolute bottom-5 left-4
                text-sm font-semibold text-blue-500
                hover:text-blue-600
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
