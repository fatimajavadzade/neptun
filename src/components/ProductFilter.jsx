import React from "react";
import { FaThLarge, FaBars, FaSyncAlt } from "react-icons/fa";

const ProductFilter = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 bg-[#f3f3f3] px-4 py-3 rounded-lg">
      {/* View switcher */}
      <div className="flex items-center gap-3">
        <button className="text-orange-500">
          <FaThLarge size={20} />
        </button>
        <button className="text-gray-500">
          <FaBars size={20} />
        </button>
      </div>

      <div className="flex gap-3">
        {/* Sorting */}
        <div className="flex items-center gap-2">
            <span className="text-sm text-black">Sırala:</span>
            <div className="bg-white rounded-full px-4 py-2 text-sm font-semibold text-black shadow-sm flex items-center gap-2 cursor-pointer">
            Əsas
            <span className="text-xs">▼</span>
            </div>
        </div>

        {/* Show count */}
        <div className="flex items-center gap-2">
            <span className="text-sm text-black">Göstər:</span>
            <div className="bg-white rounded-full px-4 py-2 text-sm font-bold text-black shadow-sm flex items-center gap-2 cursor-pointer">
            12
            <span className="text-xs">▼</span>
            </div>
        </div>

        {/* Compare Button */}
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2 rounded-full transition-all">
            <FaSyncAlt />
            Müqayisə et
        </button>
        </div>
    </div>
  );
};

export default ProductFilter;
