import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { images, sliderImages } from "../../api/data";

export default function ImageSlider() {
  return (
    <div className="w-full px-4 md:px-16 lg:px-60">
      <div className="relative overflow-hidden lg:rounded-xl rounded mb-2">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30">
          <h1 className="lg:text-3xl text-xl font-semibold mb-2">SELAMAT DATANG DI</h1>
          <h1 className="lg:text-5xl text-2xl font-bold mb-1">RS PKU MUHAMMADIYAH SRUWENG</h1>
          <h1 className="lg:text-2xl text-xl">"Semakin Unggul dan Islami"</h1>
        </div>
        <img src={images[0]} alt="Home" className="h-120 w-full object-bottom" />
      </div>
      <div className="">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-2xl"
        >
          {sliderImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img src={img} alt={`slide-${i}`} className="h-[200px] w-full object-cover hover:scale-105 transition duration-500" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
