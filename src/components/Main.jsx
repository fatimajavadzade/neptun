import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MainSlider from "./Slider/MainSlider";
import {
  getAllProducts,
  getProductByDiscount,
  getProductsByPopular,
} from "../services/api";
import { useMatchMedia } from "./hooks/useMatchWidth";


function Main() {
  const [data, setData] = useState([]);
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [mostSales, setMostSales] = useState([]);
  const isPhone = useMatchMedia("(min-width: 776px)");
  useEffect(() => {
    getAllProducts().then((res) => setData(res.products));
    getProductByDiscount().then((data) => setDiscountedProducts(data.products));
    getProductsByPopular().then((data) => setMostSales(data.products));
  }, []);

  return (
    <section id="main" className="pt-[30px]">
      <div className="n-container">
        <div className="flex justify-end">
          <a href="#" className="text-primary">
            Hamsına bax
          </a>
        </div>
      
        <div className="flex my-3 flex-col xl:flex-row">
         {isPhone&& <div className=" xl:w-[375px] h-[375px] relative mb-[5px]">
            <Swiper
        slidesPerView={2} 
        breakpoints={{
          991: {
            slidesPerView: 3 
          },
          1200: {
            slidesPerView: 1 
          }
        }}
              spaceBetween={20}
              navigation={{
                nextEl: ".swiper-button-next-1",
                prevEl: ".swiper-button-prev-1",
              }}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <img
                  className="w-full h-full object-cover rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg"
                  src="https://neptun.az/image/catalog/A.Narmin/A.Narmin2/narminn/nrmn/untitled%20folder/narminn/Narmin/narmin/nrmnn/qovluq/narmin/550x550reklam1.jpg"
                  alt="slide"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-full object-cover rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg"
                  src="https://neptun.az/image/catalog/bannerler/xususi-teklif/siyniyyat.jpg"
                  alt="slide"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-full object-cover rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg"
                  src="https://neptun.az/image/catalog/A.Narmin/A.Narmin2/narminn/nrmn/untitled%20folder/narminn/Narmin/narmin/nrmnn/qovluq/narmin/550x550reklam1.jpg"
                  alt="slide"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          }
          <div className="flex flex-wrap relative w-full xl:w-[790px] justify-center">
            <Swiper
              slidesPerView={1}
              breakpoints={{
                776:{slidesPerView:3},
                1200: {
                  slidesPerView: 4
                }
              }}
              spaceBetween={10}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation]}
            >
              {data.length > 0 &&
                data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Card item={item} discounted={true} />
                  </SwiperSlide>
                ))}
            </Swiper>

            {/* Product Navigation buttons */}
            <div className="swiper-button-prev ">
              <FaChevronLeft className="text-orange-500 p-1" />
            </div>
            <div className="swiper-button-next ">
              <FaChevronRight className="text-orange-500 p-1" />
            </div>
          </div>
        </div>
        {/* burada olacaq */}
        <div>
          <MainSlider title={"En cox satilanlar"} data={discountedProducts} />
        </div>

        <div>
          <MainSlider title={"Endirimli mehsullar"} data={discountedProducts} />
        </div>

        <div className="product-images flex  justify-between flex-col sm:flex-row items-center min-h-[300px] my-5 gap-3">
          <div className="product-image  w-90% sm:w-[24%]">
            <a href="#">
              <img
                src="https://neptun.az/image/catalog/bannerler/freshmaker.png"
                className="object-cover h-full w-full"
                alt="product-image"
              />
            </a>
          </div>
          <div className="product-image w-90% sm:w-[24%]">
            <a href="#">
              <img
                src="https://neptun.az/image/catalog/bannerler/payman.png"
                className="object-cover h-full w-full"
                alt="product-image"
              />
            </a>
          </div>
          <div className="product-image w-90% sm:w-[24%]">
            <a href="#">
              <img
                src="https://neptun.az/image/catalog/bannerler/joyful.png"
                className="object-cover h-full w-full"
                alt="product-image"
              />
            </a>
          </div>
          <div className="product-image w-90% sm:w-[24%]">
            <a href="#">
              <img
                src="https://neptun.az/image/catalog/bannerler/pfanner.png"
                className="object-cover h-full w-full"
                alt="product-image"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
