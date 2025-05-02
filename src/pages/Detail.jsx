import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../services/api";
import { FaRegStar } from "react-icons/fa";
import Button from "../components/Button";
import { RiArrowRightWideLine } from "react-icons/ri";

import toast from "react-hot-toast";
import { BASKET } from "../contexts/BasketContext";
import Error404 from "./error/Error404";

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const [say,setSay]=useState(1);
   const { basket, setBasket } = useContext(BASKET);
  useEffect(() => {
    getProductsById(id)
      .then((res) => setProduct(res))
      .catch((err) => setError(true));
  }, [id]);

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

  if (error) return <Error404 />;

  if (Object.keys(product).length === 0)
    return (
      <div className="h-[80vh] w-full flex items-center justify-center">
        Yuklenirrr...
      </div>
    );
  return (
    <div className="n-container min-h-[80vh]">
      <h3 className="text-gray-600 font-bold py-[36px] flex items-center">
        Ana Səhifə <RiArrowRightWideLine />
        {product.category.categoryName}<RiArrowRightWideLine />
        {product.subcategory.categoryName}<RiArrowRightWideLine />
        {product.name}
      </h3>
      <div className="flex">
        <div className="w-[475px] h-[475px]">
          <img
            className="w-full h-full object-contain"
            src={product.img}
            alt={product.name}
          />
        </div>
        <div className="p-5 ms-7">
          <h2 className="font-bold my-3">{product.name}</h2>
          <div className="flex text-primary text-2xl w-[170px] my-3 justify-between">
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          <p className=" text-gray-400 my-3">0 şərh | Şərh yaz</p>
          <div className="text-[15px]">
            <p className=" text-gray-400 my-1">Model:075908</p>
            <p className=" text-gray-400 my-1">Mövcudluq: Anbarda</p>
          </div>
          <p className="text-primary text-[30px] font-bold my-4">
            {product.price}₼
          </p>
          <div className="flex justify-between w-[150px] my-4">
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
          <Button label={"Səbətə at"} className="py-2 px-3"   func={() => {
                addToBasket(product?.id, product?.name, product?.price, product?.img);
              }} />
        </div>
      </div>
    </div>
  );
}

export default Detail;
