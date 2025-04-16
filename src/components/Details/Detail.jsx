import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../services/api";
import { FaRegStar } from "react-icons/fa";
import Button from "../Button";
import { RiArrowRightWideLine } from "react-icons/ri";
import Error404 from "../Error404";

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    getProductsById(id)
      .then((res) => setProduct(res))
      .catch((err) => setError(true));
  }, [id]);
console.log(product)
  if (error) return <Error404 />;

  if (Object.keys(product).length === 0)
    return (
      <div className="h-[60vh] w-full flex items-center justify-center">
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
            <button className="px-5 cursor-pointer text-[20px] text-primary font-bold">
              -
            </button>
            <p className=" text-[17px] mt-1">
              1{" "}
              <span className="text-[11px] inline-block  translate-y-[-4px] ms-1">
                Eded
              </span>
            </p>
            <button className="px-5  cursor-pointer text-[20px]  text-primary font-bold">
              +
            </button>
          </div>
          <Button label={"Səbətə at"} className="py-2 px-3" />
        </div>
      </div>
    </div>
  );
}

export default Detail;
