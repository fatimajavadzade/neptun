import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Card from '../Card';

function MainSlider({title, data, discounted}) {
    return (
        <div className=" my-[50px]">
            <h4 className="font-bold my-4">{title}</h4>
            <div className="my-4">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={10}

                >
                    {data.length > 0 &&
                        data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Card item={item} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    )
}

export default MainSlider