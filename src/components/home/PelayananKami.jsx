import { FaAmbulance, FaHospital, FaStethoscope, FaUserNurse, FaBed } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { layanan } from "../../api/data";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const iconMap = {
  ambulance: <FaAmbulance className="text-5xl" />,
  medis: <FaStethoscope className="text-5xl" />,
  nurse: <FaUserNurse className="text-5xl" />,
  hospital: <FaHospital className="text-5xl" />,
  docter: <FaUserDoctor className="text-5xl" />,
  bed: <FaBed className="text-5xl" />,
  medicine: <GiMedicines className="text-5xl" />,
};

const PelayananKami = () => {
  return (
    <section className="bg-slate-100 px-60 py-10">
      <h1 className="font-bold text-center text-3xl text-slate-800">Pelayanan Kami</h1>
      <div className="h-[2px] w-80 mx-auto bg-slate-600 mb-14 mt-1"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {layanan.map((item, index) => (
          <div key={index} className="bg-white px-6 pt-6 pb-10 min-h-86 rounded-2xl shadow hover:shadow-xl transition cursor-pointer border-2 border-blue-300 relative">
            <div className="text-slate-50 text-4xl mb-4 ">
              <div className="bg-gradient-to-r  from-emerald-500 via-emerald-700 to-emerald-900  w-20 h-20 flex justify-center items-center rounded-full mx-auto">{iconMap[item.icon]}</div>
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2 text-center">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            <Link to="/" className="absolute  bottom-5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition flex items-center">
              Baca Selengkapnya <MdKeyboardDoubleArrowRight className="text-xl" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PelayananKami;
