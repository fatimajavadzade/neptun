import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
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
  'https://neptun.az/image/catalog/icon-menu/neptun-icon.svg  ',
  'https://neptun.az/image/catalog/icon-menu/neptun-icon.svg',
  'https://neptun.az/image/catalog/icon-menu/elektronika-v%C9%99-mebel.svg'
]

function Categories({data}) {
 
  return (
    <section
      className="relative flex"
      // onMouseLeave={() => setActiveCategory(null)}
    >
      <ul className="xl:w-[240px] w-[190px] bg-white border border-gray-200 divide-y divide-gray-100 rounded-sm ">
        {
          data.map((item, i) => (
            <li key={i} className={`flex items-center relative  menuCat justify-between px-3 py-3 cursor-pointer hover:bg-gray-50`}
            >
              <div className="flex items-center gap-2">
                <img
                  src={iconData[i]}
                  className="w-[18px] h-[18px] object-contain"
                />
                <p to={"/product"} className="text-[12px] font-semibold text-[#222] leading-tight">
                  {item.categoryName} 
                </p>
              </div>
              <FiChevronRight className="text-[#222] w-[14px] h-[14px]" />
              {
                item.subcategory.length > 0 &&
                <div className="absolute hidden menuSub left-[240px] top-0 w-[220px] min-w-[200px]  bg-white shadow-md border border-gray-200 z-100" >
                  <ul className="py-2 px-3">
                    {
                    
                      item.subcategory.map((sub,i) => (
                      
                        <li key={i}
                          className="py-1 text-[13px] text-[#222] hover:text-orange-500 cursor-pointer"
                        >
                          <Link to={`/category/${sub.id}`}  >{sub.categoryName}</Link> 
                        </li>
                      ))
                    }
                  </ul>
                </div>}
            </li>
          ))
        }
        <li className="flex items-center gap-2 px-3 py-2 bg-orange-500 text-white font-bold cursor-pointer">
          <img
            src="https://neptun.az/image/catalog/icon-menu/Aksiyalar.svg"
            alt="Kampaniyalar"
            className="w-[18px] h-[18px] object-contain"
          />
          <span className="text-[13px] leading-tight">Kampaniyalar</span>
        </li>
      </ul>


    </section>
  );
}

export default Categories;
