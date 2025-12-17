import { img } from "../api/data";

const FixedMenu = () => {
  return (
    <div className="fixed z-90 bottom-10 left-0  rounded-r-3xl flex flex-col gap-6 bg-slate-200 border-t-2 border-r-2 border-b-2 border-green-700 py-4 px-1 shadow-ku">
      <div className="flex flex-col items-center justify-center cursor-pointer group  w-30 hover:bg-red-500 rounded-tr-2xl">
        <div className="border-red-600 border-2 p-2 rounded-full shadow-ku transition group-hover:bg-red-700">
          <img src={img[7]} alt="Emergency" className="h-10" />
        </div>
        <p className="text-red-600 font-bold">Emergency</p>
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer group  w-30 hover:bg-red-500 rounded-tr-2xl">
        <div className="border-green-700 border-2 p-2 rounded-full shadow-ku transition group-hover:bg-red-700">
          <img src={img[6]} alt="Emergency" className="h-10" />
        </div>
        <p className="text-green-700 font-bold">Call Center</p>
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer group  w-30 hover:bg-red-500 rounded-tr-2xl">
        <div className="border-green-700 border-2 p-2 rounded-full shadow-ku transition group-hover:bg-red-700">
          <img src={img[6]} alt="Emergency" className="h-10" />
        </div>
        <p className="text-green-700 font-bold">Jadwal Dokter</p>
      </div>
    </div>
  );
};

export default FixedMenu;
