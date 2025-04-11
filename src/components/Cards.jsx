import React from "react";
import { FiArrowRight } from "react-icons/fi";

const campaigns = [
  {
    id: 1,
    title: "50 Azn 50 Bonus",
    image: "https://neptun.az/image/cache/webp/catalog/26.04.24/50-azn-50-bonus-1143x7272-370x225.webp?v=9",
  },
  {
    id: 2,
    title: "Neptunda Dadlı Endirimlər!",
    image: "https://neptun.az/image/cache/webp/catalog/26.04.24/50-azn-50-bonus-1143x7272-370x225.webp?v=9",
  },
  {
    id: 3,
    title: "Həftəsonu Endirimləri Neptunda!",
    image: "https://neptun.az/image/cache/webp/catalog/26.04.24/50-azn-50-bonus-1143x7272-370x225.webp?v=9",
  },
];

function Cards() {
  return (
    <div className="w-full px-4 py-6 mt-2 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {campaigns.map((item) => (
          <div key={item.id} className="bg-white rounded shadow-sm">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[180px] object-cover rounded-t"
              />
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#222]">{item.title} </h3>
              <FiArrowRight size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
