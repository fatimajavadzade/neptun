import React, { useContext, useState } from "react";
import Button from "./Button";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { BASKET } from "../contexts/BasketContext";
import { WishListCntx } from "../contexts/WishContext";
import toast from "react-hot-toast";

function Card({ item, discounted }) {
  const { basket, setBasket } = useContext(BASKET);
  const [say,setSay]=useState(1);
  const { wish,delWish,addWish } = useContext(WishListCntx);
  function addToBasket(id, name, price, img) {
   
    let item = { id, price, img, name, count:say };
    const yoxla = basket.find((el) => el.id == item.id);
    if (yoxla) {
      yoxla.count+=say;
      toast.error("Sepetde var onsuzda")
    } else {
      setBasket([...basket, item]);
      toast.success("Məhsul səbətə əlavə olundu!");
    }
    console.log(basket)
   }
   function changeCount(param){
          if(param==="plus"){
           say<50 && setSay(say+1)
          }
          else{
           say>1 && setSay(say-1)
          }       
          console.log(say)
   }
 
  return (
    <Link to={`/products/${item.id}`}>
      <div className="group rounded-md  dark:bg-gray-50 dark:text-gray-800 min-w-[100px] h-full flex flex-col items-center justify-center">
        <div className="relative w-[112px] h-[112px] m-auto flex flex-col  items-center justify-center ">
          <button className="absolute z-9 top-1 right-2 cursor-pointer text-primary">
          {
  wish.find(el => el.id === item.id) ? (
    <BsHeartFill
      onClick={(e) => {
        e.preventDefault();
        delWish(item.id);
      }}
    />
  ) : (
    <BsHeart
      onClick={(e) => {
        e.preventDefault();
        addWish(item);
      }}
    />
  )
}
           
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
                {item?.name?.length > 20
                  ? item?.name?.slice(0, 20)
                  : item?.name}
              </span>
            </p>
            <div className="text-[22px] my-3 font-bold relative">
              {!discounted && (
                <>
                  <span className="absolute top-[-70%] right-[10%] text-gray-500 text-[16px] line-through">
                    {item?.price}₼
                  </span>
                  <div
                    className=" bg-[#ffd9c0] 
           p-[18px] rounded-full w-[20px] group-hover:bg-primary group-hover:text-white h-[20px] 
           flex items-center justify-center text-[12px] absolute top-[-30%] left-[-60%]
             transition-all duration-300 ease-in-out
           "
                  >
                    {item.discount}%
                  </div>
                </>
              )}
              {(item?.price - (item?.price * (item.discount/100))).toFixed(2)}₼
            </div>
            <div className="flex justify-between">
              <button onClick={(e)=>{
                e.stopPropagation();
                e.preventDefault()
                changeCount("minus")}} className="px-5 cursor-pointer text-[20px] text-primary font-bold">
                -
              </button>
              <p className=" text-[17px] mt-1">
                {say}
                <span className="text-[11px] inline-block  translate-y-[-4px] ms-1">
                  Eded
                </span>
              </p>
              <button onClick={(e)=>{e.preventDefault()
              e.stopPropagation();
              e.preventDefault();
                 changeCount("plus")}} className="px-5  cursor-pointer text-[20px]  text-primary font-bold">
                +
              </button>
            </div>
            <Button
              label={"Səbətə at"}
              className="py-2 px-3"
              func={() => {
                addToBasket(item?.id, item?.name, item?.price, item?.img);
              }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
