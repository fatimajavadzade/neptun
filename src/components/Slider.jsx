import React, { useState, useEffect } from "react";
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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => {
      if (prev == slides.length - 1) return 0;
      return prev + 1;
    });
  };
  
  const prevSlide = () => {
    setCurrent((prev) => {
      if (prev == 0) return slides.length - 1;
      return prev - 1;
    });
  };
  

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute z-20 left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full cursor-pointer"
      >
        <FiChevronLeft className="text-orange-500 text-2xl" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute z-20 right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full cursor-pointer"
      >
        <FiChevronRight className="text-orange-500 text-2xl" />
      </button>

      <div className="absolute z-20 bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-orange-500" : "bg-white/70"
            } cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
