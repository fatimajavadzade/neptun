import React from 'react'
import Button from './Button'
import { BsHeart } from "react-icons/bs";

function Card() {
   
  return (
    <div className="rounded-md  dark:bg-gray-50 dark:text-gray-800 w-[200px] h-[300px]">
    <div className="relative w-[112px] h-[112px] m-auto flex flex-col  items-center justify-center">
      <button className="absolute z-9 top-1 right-2 cursor-pointer"> <BsHeart  />
</button>
      <img
        src="https://neptun.az/image/cache/catalog/meyve-terevez/qurumeyveler/096889-180x180.jpg?v=9"
        alt=""
        className="object-fit object-center  dark:bg-gray-500 relative"
      />
    </div>
    <div className="p-3">
      <div className="space-y-3 flex flex-col  items-center justify-center ">
        <p className="text-sm">
          <span className="text-base text-[10px] font-semibold uppercase">leroy_jenkins72</span>
        </p>
        <p className="text-[22px] font-bold">10₼</p>
        <div className="flex justify-between">
          <button className="px-5 cursor-pointer text-[20px]">-</button>
          <p className=" text-[17px]">1</p>
          <button className="px-5  cursor-pointer text-[20px]">+</button>
        </div>
       <Button label={"Səbətə at"} onClick={""}/>
       
      </div>
    </div>
    </div>
  )
}

export default Card