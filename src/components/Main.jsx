import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Main() {
  const [data, setData] = useState([]);
  const [discountedProducts,setDiscountedProducts]=useState([])
  const [mostSales,setMostSales]=useState([])
  useEffect(() => {
    fetch("https://neptunbk.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
      fetch("https://neptunbk.vercel.app/products/discounted")
      .then((res) => res.json())
      .then((data) => setDiscountedProducts(data.products));

      fetch("https://neptunbk.vercel.app/products/products/populyar")
      .then((res) => res.json())
      .then((data) => setMostSales(data.products));

  }, []);
  // useEffect(() => {
  //   fetch("https://neptunbk.vercel.app/products/discounted")
  //     .then((res) => res.json())
  //     .then((data) => setDiscountedProducts(data.products));
  // }, []);
  return (
    <section id="main">
      <div className="n-container">
        <div className="flex justify-end">
           <a href="#" className="text-primary">Hamsına bax</a>
        </div>
        <div className="flex my-3">
        <div className="w-[375px] h-[375px] relative">
          <Swiper
            slidesPerView={1}
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
        <div className="flex flex-wrap relative w-[790px]">
          <Swiper
            slidesPerView={4}
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
                  <Card item={item} />
                </SwiperSlide>
              ))}
          </Swiper>

          {/* Product Navigation buttons */}
          <div className="swiper-button-prev ">
            <FaChevronLeft  className="text-orange-500 p-1" />
          </div>
          <div className="swiper-button-next ">
            <FaChevronRight  className="text-orange-500 p-1" />
          </div>
        </div>
      </div>
     
      <div className="discounted-products my-[50px]">
        <h4 className="font-bold my-4">Endirimli məhsullar</h4>
        <div className="my-4">
        <Swiper
            slidesPerView={6}
            spaceBetween={10}
           
          >
            {discountedProducts.length > 0 &&
              discountedProducts.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card item={item}/>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <div className="most-sales">
        <h4 className="font-bold my-4">Ən çox satılanlar</h4>
        <div className="my-4">
        <Swiper
            slidesPerView={6}
            spaceBetween={10}
            navigation={{
              nextEl: ".swiper-button-next-3",
              prevEl: ".swiper-button-prev-3",
            }}
            modules={[Navigation]}
          >
            {discountedProducts.length > 0 &&
              discountedProducts.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card item={item} />
                </SwiperSlide>
              ))}
          </Swiper>

        </div>
      </div>

      <div className="product-images flex justify-between items-center h-[400px]">
        <div className="product-image w-[24%]">
          <a href="#">
            <img src="https://neptun.az/image/catalog/bannerler/freshmaker.png" className="object-cover h-full w-full" alt="product-image" />
          </a>
        </div>
        <div className="product-image w-[24%]">
          <a href="#">
            <img src="https://neptun.az/image/catalog/bannerler/payman.png" className="object-cover h-full w-full" alt="product-image" />
          </a>
        </div>
        <div className="product-image w-[24%]">
          <a href="#">
            <img src="https://neptun.az/image/catalog/bannerler/joyful.png" className="object-cover h-full w-full" alt="product-image" />
          </a>
        </div>
        <div className="product-image w-[24%]">
          <a href="#">
            <img src="https://neptun.az/image/catalog/bannerler/pfanner.png" className="object-cover h-full w-full" alt="product-image" />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Main;
