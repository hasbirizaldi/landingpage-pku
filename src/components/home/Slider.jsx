import React, { useEffect, useState } from "react";
import { sliderImages } from "../../api/data";

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden w-full">
      {/* TEXT CENTER */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6">
        <div>
          <p className="text-3xl md:text-4xl font-bold mb-2 text-white">Selamat Datang di</p>
          <p className="text-4xl md:text-5xl font-bold text-white">RS PKU MUHAMMADIYAH SRUWENG</p>
          <p className="mt-2 text-red-400 font-semibold text-xl md:text-2xl">"Semakin Unggul dan Islami"</p>
        </div>
      </div>

      {/* IMAGE */}
      <img src={sliderImages[index]} alt="slider" className="w-full h-[500px] object-cover brightness-50 transition-all duration-700" />
    </div>
  );
};

export default Slider;
