import React, { useEffect, useState } from "react";
import { getAllCategories } from "../services/api";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

const iconData = [
  'https://neptun.az/image/catalog/icon-menu/Meyv%C9%99-v%C9%99-t%C9%99r%C9%99v%C9%99z.svg',
  'https://neptun.az/image/catalog/icon-menu/%C9%99t-v%C9%99-toyuq%20m%C9%99hsullar%C4%B1.svg',
  'https://neptun.az/image/catalog/icon-menu/Qastronom.svg',
  'https://neptun.az/image/catalog/icon-menu/%C9%99rzaq%20m%C9%99hsullar%C4%B1.svg',
  'https://neptun.az/image/catalog/icon-menu/%C5%9Eirniyyat-%C3%A7ay-v%C9%99%20q%C9%99hv%C9%99.svg',
  'https://neptun.az/image/catalog/icon-menu/%C4%B0%C3%A7kil%C9%99r.svg',
  'https://neptun.az/image/catalog/icon-menu/S%C3%BCd-m%C9%99hsullar%C4%B1.svg',
  'https://neptun.az/image/catalog/icon-menu/U%C5%9Faq-m%C9%99hsullar%C4%B1.svg',
  'https://neptun.az/image/catalog/icon-menu/Yuyucu-vasit%C9%99l%C9%99r.svg',
  'https://neptun.az/image/catalog/icon-menu/Kosmetik-v%C9%99-gigiyenik.svg',
  'https://neptun.az/image/catalog/icon-menu/M%C9%99i%C5%9F%C9%99t-m%C9%99tb%C9%99x-v%C9%99-tekstil.svg',
  'https://neptun.az/image/catalog/icon-menu/Konselyariya.svg',
  'https://neptun.az/image/catalog/icon-menu/Heyvan-yeml%C9%99ri.svg',
  'https://neptun.az/image/catalog/icon-menu/neptun-icon.svg',
  'https://neptun.az/image/catalog/icon-menu/neptun-icon.svg',
  'https://neptun.az/image/catalog/icon-menu/elektronika-v%C9%99-mebel.svg'
];

function ResponsiveCategories({ onClose }) {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    getAllCategories().then((res) => setData(res));
  }, []);

  const toggleCategory = (index) => {
    setActiveIndex(index == activeIndex ? null : index);
  };

  return (
    <div className="fixed left-0 z-[9999] bg-white overflow-y-auto w-[80%] max-w-xs shadow-xl h-screen text-black">
      <ul className="divide-y divide-gray-200 text-black">
        {data.map((item, i) => (
          <li key={i}>
            <div
              onClick={() => toggleCategory(i)}
              className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <img src={iconData[i]} className="w-[18px] h-[18px]" alt="icon" />
                <span className="text-sm font-medium">{item.categoryName}</span>
              </div>
              {item.subcategory.length > 0 && <FiChevronDown size={16} />}
            </div>
            {i === activeIndex && item.subcategory.length > 0 && (
              <ul className="bg-gray-50 pl-12 pr-4 py-2 space-y-1">
                {item.subcategory.map((sub, j) => (
                  <li key={j}>
                    <Link
                      to={`/category/${sub.id}`}
                      className="block text-[13px]  hover:text-orange-500"
                      onClick={onClose}
                    >
                      {sub.categoryName}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li className="flex items-center gap-2 px-4 py-3 bg-orange-500 font-bold cursor-pointer">
          <img
            src="https://neptun.az/image/catalog/icon-menu/Aksiyalar.svg"
            className="w-[18px] h-[18px] object-contain"
            alt="Kampaniyalar"
          />
          <span className="text-[13px] leading-tight text-white">Kampaniyalar</span>
        </li>
      </ul>
    </div>
  );
}

export default ResponsiveCategories;
