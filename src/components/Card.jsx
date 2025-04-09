import React from 'react'
import Button from './Button'
import { BsHeart } from "react-icons/bs";

function Card({ item }) {
  //  console.log(item)
  return (
    <div className="rounded-md  dark:bg-gray-50 dark:text-gray-800 w-[191px] h-full flex flex-col items-center justify-center">
      <div className="relative w-[112px] h-[112px] m-auto flex flex-col  items-center justify-center">
        <button className="absolute z-9 top-1 right-2 cursor-pointer text-primary"> <BsHeart />
        </button>
        <img
          src={item?.img[0]}
          alt=""
          className="object-fit object-center  dark:bg-gray-500 relative"
        />
      </div>
      <div className="p-3">
        <div className="space-y-3 flex flex-col  items-center justify-center ">
          <p className="text-sm ">
            <span className="text-base text-[10px] font-semibold uppercase">{item?.name?.length > 20 ? item?.name?.slice(0, 20) : item?.name}</span>
          </p>
          <p className="text-[22px] my-3 font-bold">{item?.price}₼</p>
          <div className="flex justify-between">
            <button className="px-5 cursor-pointer text-[20px]">-</button>
            <p className=" text-[17px]">1</p>
            <button className="px-5  cursor-pointer text-[20px]">+</button>
          </div>
          <Button label={"Səbətə at"} className='py-2 px-3' />

        </div>
      </div>
    </div>
  )
}

export default Card