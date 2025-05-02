import React, { useEffect, useState } from "react";
import { FaSyncAlt, FaThLarge, FaBars } from "react-icons/fa";
import Button from "../components/Button";
import Card from "../components/Card";
import { getAllProducts } from "../services/api";
import { RiArrowRightWideLine } from "react-icons/ri";

function SearchDetails() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => setData(res.products));
  }, []);
  return (
    <div className="p-6 min-h-screen n-container">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 py-4">
        <span className="text-orange-500">Ana Səhifə</span> &gt; Axtarış
      </div>

      {/* Başlıq */}
      <h1 className="text-3xl mb-6">Axtarış - alma</h1>

      {/* Axtarış formu */}
      <div className="py-6 space-y-4 max-w-4xl">
        <h2 className="text-lg font-semibold">Axtarış kriteriyaları</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value="alma"
            readOnly
            className="flex-1 border border-gray-300 rounded-full px-4 py-2"
            placeholder="Axtarış sözü"
          />

          <select className="flex-1 border border-gray-300 rounded-full px-4 py-2">
            <option>Bütün bölmələr</option>
          </select>
        </div>

        <div className="flex gap-6 items-center">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="form-checkbox" />
            Alt bölmələrdə axtar
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="form-checkbox" />
            Məhsulun açıqlamasında axtar
          </label>
        </div>

        <Button
          label="Axtar"
          className="py-2 px-4 h-full text-sm bg-orange-400 hover:bg-orange-500"
        />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 rounded-lg">
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
                Qiymət(Aşağıdan <RiArrowRightWideLine /> Yuxarıya){" "}
              </option>
              <option value="priceHighLow">
                Qiymət(Yuxarıdan <RiArrowRightWideLine /> Aşağıya){" "}
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
              <option value="12">12</option>
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
      <div>
        <div className="flex flex-wrap justify-center relative p-2 gap-2">
          {data.length > 0 &&
            data.map((item, index) => (
              <Card key={index} item={item} discounted={true} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchDetails;
