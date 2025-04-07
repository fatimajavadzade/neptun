import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";

function Categories() {
  const [data, setData] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetch("https://neptunbk.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <section
      id="categories"
      className="relative flex"
      onMouseLeave={() => setActiveCategory(null)}
    >
      <ul className="w-[240px] bg-white border border-gray-200 divide-y divide-gray-100 rounded-sm overflow-y-auto">
        {data.map((category, index) => (
          <li
            key={index}
            className={`flex items-center justify-between px-3 py-3 cursor-pointer hover:bg-gray-50 ${
              activeCategory?.id === category.id ? "bg-orange-100 font-bold" : ""
            }`}
            onMouseEnter={() => setActiveCategory(category)}
          >
            <div className="flex items-center gap-2">
              <img
                src="https://neptun.az/image/catalog/icon-menu/Meyvə-və-tərəvəz.svg"
                alt={category.categoryName}
                className="w-[18px] h-[18px] object-contain"
              />
              <span className="text-[12px] font-semibold text-[#222] leading-tight">
                {category.categoryName}
              </span>
            </div>
            <FiChevronRight className="text-[#222] w-[14px] h-[14px]" />
          </li>
        ))}

        <li className="flex items-center gap-2 px-3 py-2 bg-orange-500 text-white font-bold cursor-pointer">
          <img
            src="https://neptun.az/image/catalog/icon-menu/Aksiyalar.svg"
            alt="Kampaniyalar"
            className="w-[18px] h-[18px] object-contain"
          />
          <span className="text-[13px] leading-tight">Kampaniyalar</span>
        </li>
      </ul>

      {activeCategory && activeCategory.subcategory && activeCategory.subcategory.length > 0 && (
        <div
          className="absolute left-[240px] top-0 w-[220px] max-h-[130px] overflow-y-auto bg-white shadow-md border border-gray-200 z-10"
          onMouseEnter={() => setActiveCategory(activeCategory)}
        >
          <ul className="py-2 px-3">
            {activeCategory.subcategory.map((item) => (
              <li
                key={item.id}
                className="py-1 text-[13px] text-[#222] hover:text-orange-500 cursor-pointer"
              >
                <a href={`/${item.slug}`}>{item.categoryName}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Categories;
