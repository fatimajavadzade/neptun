import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Button from "./Button";
import { useMatchMedia } from "./hooks/useMatchWidth";
function Footer() {
  return (
    <footer>
      <div className="bg-primary w-full  p-[25px]">
        <div className="footer-services  flex justify-between items-center max-w-[1200px]">
          <div className="flex  flex-col items-center text-center  sm:flex-row sm:text-start">
            <img
              src="https://neptun.az/image/footer_img/delivery.svg"
              className="w-[35px]"
              alt="footer-img"
            />
            <span className="text-white text-[10px] sm:text-[14px] font-bold mx-3">
              Pulsuz çatdırılma
              <br /> 50 azn-dən yuxarı
            </span>
          </div>
          <div className="flex flex-col items-center text-center  sm:flex-row sm:text-start">
            <img
              src="https://neptun.az/image/footer_img/cash.svg"
              className="w-[30px]"
              alt="footer-img"
            />
            <span className="text-white text-[10px] sm:text-[14px] font-bold mx-3">
              Nağd və ya
              <br /> kartla ödəniş
            </span>
          </div>
          <div className="flex flex-col items-center text-center  sm:flex-row sm:text-start">
            <img
              src="https://neptun.az/image/footer_img/gift.svg"
              className="w-[30px]"
              alt="footer-img"
            />
            <span className="text-white text-[10px] sm:text-[14px]  font-bold mx-3">
              Hədiyyə
              <br />
              kuponları
            </span>
          </div>
         { useMatchMedia("(min-width:767px)")&&<><div className="flex">
            <img
              src="https://neptun.az/image/footer_img/online.svg"
              className="w-[30px]"
              alt="footer-img"
            />
            <span className="text-white text-[14px] font-bold mx-3">
              Onlayn
              <br /> müştəri xidmətləri
            </span>
          </div>
          <div className="flex">
            <img
              src="	https://neptun.az/image/footer_img/mobile.svg"
              alt="footer-img"
            />
            <span className="text-white text-[14px] font-bold mx-3">
              Onlayn
              <br /> müştəri xidmətləri
            </span>
          </div></> }
        </div>
        <div className="max-w-[600px] my-9">
          <div className="flex justify-between items-center">
          { useMatchMedia("(min-width:767px)")&& <p className="text-white text-[14px] font-bold mx-3">
              Bizə abunə olun
            </p>}
            <div className="flex border border-white bg-white rounded-full overflow-hidden w-[350px] h-[40px] max-w-md ml-4">
              <input
                type="text"
                placeholder=""
                className="w-full pr-2 py-1 outline-none text-[12px]"
              />
              <Button
                label="Abone ol"
                className="px-4 py-1 text-sm w-[150px] bg-orange-400 hover:bg-orange-500"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
          { useMatchMedia("(min-width:767px)")&&
            <p className="text-white text-[14px] font-bold mx-3 me-5">
              Sms xəbərdarlıq üçün
            </p>}
            <div className="w-[350px] flex items-center justify-between">
              <select
                name="number"
                id="#"
                className="bg-white w-[70px] px-4 h-[40px] outline-0 py-5 rounded-full border-0 font-gray-400"
              >
                <option value="050">050</option>
                <option value="055">055</option>
                <option value="070">070</option>
              </select>
              <div className="flex border border-white bg-white rounded-full overflow-hidden max-w-[250px] h-[40px] ml-1 my-8">
                <input
                  type="text"
                  placeholder=""
                  className="w-full pr-2 py-1 outline-none text-[12px]"
                />
                <Button
                  label="Abone ol"
                  className="px-4 py-1 text-sm w-[150px] bg-orange-400 hover:bg-orange-500"
                />
              </div>
            </div>
          </div>
          <div className={`flex  items-center  ${!useMatchMedia("(min-width:767px)") ? "flex-col items-start gap-2 my-3" : "justify-between "} `}>
            <p className="text-white text-[14px] font-bold mx-3 me-5">
              Bizi izləyin
            </p>
            <div className="max-w-[350px]">
              <div className="max-w-[220px] flex items-center justify-between">
                <div className=" bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center">
                  <FaFacebookF className="text-primary" />
                </div>
                <div className=" bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center">
                  <FaInstagram className="text-primary" />
                </div>

                <div className=" bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center">
                  <FaYoutube className="text-primary" />
                </div>

                <div className=" bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center">
                  <FaLinkedinIn className="text-primary" />
                </div>
              </div>
            </div>
          </div>
          { useMatchMedia("(min-width:767px)")&&
          <div className="flex text-white justify-between my-8">
            <ul>
              <li>
                <a href="#">Haqqımızda</a>
              </li>
              <li>
                <a href="#">Siyasətimiz</a>
              </li>
              <li>
                <a href="#">Yeniliklər</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Aksiyalar</a>
              </li>
              <li>
                <a href="#">Kampaniyalar</a>
              </li>
              <li>
                <a href="#">Neptun bonus kart</a>
              </li>
              <li>
                <a href="#">Elektron kataloq</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Mağazalarımız</a>
              </li>
              <li>
                <a href="#">İrad və təkliflər</a>
              </li>
              <li>
                <a href="#">Alıcıların nəzərinə</a>
              </li>
              <li>
                <a href="#">Partnyorluq</a>
              </li>
              <li>
                <a href="#">Supermarketdə reklam</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Karyera</a>
              </li>
              <li>
                <a href="#">İşə qəbul proseduru</a>
              </li>
              <li>
                <a href="#">Vakansiyalar</a>
              </li>
              <li>
                <a href="#">CV yerləşdirin</a>
              </li>
            </ul>
          </div>}
          <p className="text-white text-[14px] font-bold mx-3 me-5">
            © 2003 - 2023 Neptun Supermarket. All rights reserved
          </p>
          <div className="flex items-center my-5">
            <p className="text-white text-[14px] font-bold mx-3 me-5">
              Created by:
            </p>{" "}
            <a href="#">
              <img
                className="h-[21px] w-[60px"
                src="https://neptun.az/image/catalog/footer/amiroff_creative_agency.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="h-[100px] flex justify-center items-center">
        <img src="https://neptun.az/image/catalog/footer/visalogo.svg" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
