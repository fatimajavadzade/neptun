import React from "react";
import { FaThLarge, FaBars, FaSyncAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
          <label htmlFor="sort" className="text-sm text-black">
            Sırala:
          </label>
          <select
            id="sort"
            className="bg-white rounded-full px-4 py-2 text-sm font-semibold text-black shadow-sm cursor-pointer"
          >
            <option value="default">Əsas</option>
            <option value="adaz">Ad(A-Z)</option>
            <option value="adza">Ad(Z-A)</option>
            <option value="priceLowHigh">
              Qiymət(Aşağıdan <MdOutlineKeyboardArrowRight /> Yuxarıya){" "}
            </option>
            <option value="priceHighLow">
              Qiymət(Yuxarıdan <MdOutlineKeyboardArrowRight /> Aşağıya){" "}
            </option>
            <option value="ratingHigh">Reytinq(yuxari)</option>
            <option value="ratingLow">Reytinq(asagi)</option>
            <option value="modelaz">Model(A-Z)</option>
            <option value="modelza">Model(Z-A)</option>
          </select>
        </div>

        {/* Show count */}
        <div className="flex items-center gap-2">
          <label className="text-sm text-black">Göstər:</label>
          <select
            id="showCount"
            className="bg-white rounded-full px-4 py-2 text-sm font-bold text-black shadow-sm cursor-pointer"
          >
            <option value="12" >12</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
          </select>
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
