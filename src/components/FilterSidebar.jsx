import { Slider } from "antd";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FilterSidebar = ({ value, setPrice }) => {
  const [openBrand, setOpenBrand] = useState(true);
  const [openPrice, setOpenPrice] = useState(true);
  return (
    <div className="w-[260px] bg-[#fff] text-black p-4 rounded-xl space-y-4 shadow">
      <h2 className="text-lg font-semibold">Filtr</h2>

      {/* Alt Kateqoriya */}
      <div>
        <div className="flex justify-between items-center cursor-pointer">
          <span className="font-medium">Alt Kateqoriya</span>
          <FaChevronDown />
        </div>
      </div>

      {/* Markası */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpenBrand(!openBrand)}
        >
          <span className="font-medium">Markası</span>
          {openBrand ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openBrand && (
          <div className="mt-2 flex items-center justify-between pl-2">
            <label className="flex items-center gap-2">
              <span className="w-4 h-4 bg-orange-500 block rounded-sm"></span>
              <span className="text-sm font-medium">NEPTUN-MEYVETEREVEZ</span>
            </label>
            <span className="text-orange-400 text-sm pr-2">13</span>
          </div>
        )}
      </div>

      {/* Qiymət */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpenPrice(!openPrice)}
        >
          <span className="font-medium">Qiymət</span>
          {openPrice ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openPrice && (
          <div className="mt-2 px-2">
            <div className="flex justify-between text-sm text-gray-700 mb-2">
              <span>{value && value[0]}</span>
              <span>{value && value[1]}</span>
            </div>

            <Slider
              range={{ draggableTrack: true }}
              step={0.1}
              min={value?.[0]}
              max={value?.[1]}
              // value={value}
              defaultValue={value}
              onChange={(value) => setPrice(value)}
            />
          </div>
        )}
      </div>

      {/* Reset Button */}
      <div className="pt-4">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full transition">
          Hamısını Sıfırla
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
