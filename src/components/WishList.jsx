import useConfig from "antd/es/config-provider/hooks/useConfig";
import React, { useContext } from "react";
import { WishListCntx } from "../contexts/WishContext";
import { Link } from "react-router-dom";
import { BASKET } from "../contexts/BasketContext";
import { toast } from "react-hot-toast";

function WishList() {
  const { wish, clearWish, delWish } = useContext(WishListCntx);
  const { addToBasket } = useContext(BASKET);

  return (
    <section className="wrapper n-container py-5 px-3 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-[1.2em] italic">
          My Wishlist:
          <span className="text-sm">( Pulun olanda gəlib alarsan 😔)</span>
        </h1>

        <button
          onClick={clearWish}
          className="font-semibold rounded-md cursor-pointer bg-primary text-white p-2 "
        >
          sebeti temizle
        </button>
      </div>
      <div className="flex items-center gap-[30px] flex-wrap py-[30px] min-h-[60vh]">
        {wish.map((item,i) => (
          <div key={i} className="border card hover:shadow-md transition-all rounded-md p-3 bg-white inline-block">
            <div className="relative">
              <svg
                onClick={() => delWish(item.id)}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="absolute bg-white rounded-full p-1 cursor-pointer top-0 right-0 text-[1.5em] text-[#43766C] hover:text-red-600 hover:scale-[1.1] transition-all"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z" />
              </svg>
              <Link to={`/products/${item.id}`}>
                <img
                  src={item.img[0]}
                  className="w-[150px] object-cover h-[25vh] rounded-md"
                  alt="BELLA 935GR NOVA YASIL ZEYTUN TUMLU S/Q"
                />
                <span className="hidden bg-[#43766ca6] text-white absolute bottom-1 right-1 endirim rounded-md w-[50px] h-[30px] flex justify-center items-center text-[.85em] font-bold">
                  0 %
                </span>
              </Link>
            </div>
            <h5 className="pt-4 hover:text-[#43766C] text-ellipsis whitespace-nowrap overflow-hidden max-w-[148px] text-[.85em] capitalize">
              {item.name}
            </h5>
            <p className="block font-semibold py-3 italic text-[1.2em]">
              {item.price} $
            </p>
            <button onClick={() => {
                addToBasket({...item, count: 1}); 
                delWish(item.id); 
                toast.success("Məhsul səbətə əlavə olundu!");
              }} 
              className="rounded-md text-nowrap flex gap-2 w-full text-[.8em] border border-[#43766C] transition-all duration-200 hover:bg-[#43766c2b] px-4 py-2 font-semibold">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="text-lg text-gray-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M25.45 63.043l-4.364 17.463 8.73 2.18L90.44 97.846l29.402 44.1 62.44 187.32-36.845 73.693h17.827c-2.086 4.238-3.264 8.99-3.264 14 0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14h102.528c-2.086 4.238-3.264 8.99-3.264 14 0 17.567 14.433 32 32 32s32-14.433 32-32c0-5.01-1.178-9.762-3.264-14H393v-18H174.562l23-46h192.924l70-210h-327.67L101.56 82.07 34.183 65.227l-8.733-2.184zm115.038 83.914H231v46h-75.178l-15.334-46zm108.512 0h78v46h-78v-46zm96 0h90.512l-15.334 46H345v-46zm-183.18 64H231v46h-53.846l-15.334-46zm87.18 0h78v46h-78v-46zm96 0h69.18l-15.334 46H345v-46zm-161.846 64H231v46h-32.514l-15.332-46zm65.846 0h78v46h-78v-46zm96 0h47.846l-15.332 46H345v-46zm-153 128c7.84 0 14 6.16 14 14s-6.16 14-14 14-14-6.16-14-14 6.16-14 14-14zm160 0c7.84 0 14 6.16 14 14s-6.16 14-14 14-14-6.16-14-14 6.16-14 14-14z" />
              </svg>{" "}
              Add to Basket
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WishList;
