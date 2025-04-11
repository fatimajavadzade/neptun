import React from 'react'
import Button from './Button'
import { BsHeart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

function Card({ item,discounted,detail }) {
 
  return (
    <Link to={`/products/${item.id}`}>
    <div className="group rounded-md  dark:bg-gray-50 dark:text-gray-800 w-[191px] h-full flex flex-col items-center justify-center">
      <div className="relative w-[112px] h-[112px] m-auto flex flex-col  items-center justify-center">
        <button className="absolute z-9 top-1 right-2 cursor-pointer text-primary"> <BsHeart />
        </button>
        {discounted && (
  <button
    className="absolute top-[50%] left-[50%] z-9 
      -translate-x-1/2 -translate-y-3 group-hover:translate-y-0 
      opacity-0 group-hover:opacity-100
      bg-primary text-white 
      rounded-full w-[32px] h-[32px] flex items-center justify-center 
      transition-all duration-300 ease-in-out"
  >
    <FaEye />
  </button>
)}
        <img
          src={item?.img}
          className="object-fit object-center  dark:bg-gray-500 relative"
        />
      </div>
      <div className="p-3">
        <div className="space-y-3 flex flex-col  items-center justify-center ">
          <p className="text-sm ">
            <span className="text-base text-[10px] font-semibold uppercase"> 
              {item?.name?.length > 20 ? item?.name?.slice(0, 20) : item?.name}</span>
          </p>
          <p className="text-[22px] my-3 font-bold relative">
           {!discounted && (<><span className='absolute top-[-70%] right-[10%] text-gray-500 text-[16px] line-through'>{item?.price}₼</span>
            <div className=' bg-[#ffd9c0] 
           p-[18px] rounded-full w-[20px] group-hover:bg-primary group-hover:text-white h-[20px] 
           flex items-center justify-center text-[12px] absolute top-[-30%] left-[-60%]
             transition-all duration-300 ease-in-out
           '>
              -20%
              </div></>)}
                {(item?.price*0.8).toFixed(2)}₼
           </p>
          <div className="flex justify-between">
            <button className="px-5 cursor-pointer text-[20px] text-primary font-bold">-</button>
            <p className=" text-[17px] mt-1">1 <span className='text-[11px] inline-block  translate-y-[-4px] ms-1'>Eded</span></p>
            <button className="px-5  cursor-pointer text-[20px]  text-primary font-bold">+</button>
          </div>
          <Button label={"Səbətə at"} className='py-2 px-3' />

        </div>
      </div>
     </div>
    </Link>
  )
}

export default Card