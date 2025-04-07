import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    id: 1,
    image:
      "https://neptun.az/image/cache/webp/catalog/01.01.01/RamadhanKareem-1130x413.webp?v=9",
  },
  {
    id: 2,
    image:
      "https://neptun.az/image/cache/webp/catalog/01.01.01/heftesonnu-banneri-1-mumtaz-1130x413.webp?v=9",
  },
];

function Slider() {
  return (
    <div className="relative w-[925px] h-[400px] rounded-lg overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover pointer-events-none"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-prev absolute z-20 left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full cursor-pointer">
        <FiChevronLeft className="text-orange-500 text-2xl" />
      </button>
      <button className="custom-next absolute z-20 right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full cursor-pointer">
        <FiChevronRight className="text-orange-500 text-2xl" />
      </button>
    </div>
  );
}

export default Slider;
