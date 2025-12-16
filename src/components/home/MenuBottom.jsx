import React from "react";
import { FaUsers, FaAmbulance } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdLibraryBooks } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

const MenuBottom = () => {
  return (
    <section className="lg:hidden fixed bottom-0 w-full z-60 ">
      <div className="grid grid-cols-3 lg:grid-cols-3 h-16 lg:rounded-b-2xl overflow-hidden">
        <Link to="/jadwal-dokter" className="flex flex-col items-center justify-center py-1 bg-green-700 group hover:bg-green-900 transition">
          <div className="bg-white group-hover:bg-green-700 p-1 rounded-full">
            <FaUserDoctor className="text-lg text-green-800 group-hover:text-white" />
          </div>
          <span className="font-semibold text-white text-[12px] leading-3 mt-1">Jadwal Dokter</span>
        </Link>

        <Link to="/" className="flex flex-col items-center justify-center py-1 bg-red-700 border-x-2 border-white group hover:bg-green-900 transition">
          <div className="bg-white p-1 rounded-full group-hover:bg-green-700">
            <FaAmbulance className="text-lg text-red-700 group-hover:text-white" />
          </div>
          <span className="font-semibold text-white text-[12px] leading-3 mt-1">Emergency</span>
        </Link>

        <Link to="/" className="flex flex-col items-center justify-center py-1 bg-green-700 group hover:bg-green-900 transition">
          <div className="bg-white p-1 rounded-full group-hover:bg-green-700">
            <MdCall className="text-lg text-green-800 group-hover:text-white" />
          </div>
          <span className="font-semibold text-white text-[12px] leading-3 mt-1">Call Center</span>
        </Link>
      </div>
    </section>
  );
};

export default MenuBottom;
