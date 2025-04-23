import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { BASKET } from '../contexts/BasketContext';
import { CiShoppingBasket } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const BasketModal = () => {
  const {basket, setBasket} = useContext(BASKET);
  let mebleg=0
  basket.map(item=>mebleg+=(item.price*item.count))
  function deleteItem(id){
    let newBasket=basket.filter(item=>item.id!=id)
    setBasket(newBasket)
  }
  return (
    <div className="absolute right-0 top-full mt-2 w-[350px] bg-white rounded shadow-xl p-4 z-[999]">
      <div className="max-h-[300px] overflow-auto space-y-4">
      {basket.length > 0 ? (
  basket.map((item, index) => (
    <div to={`/products/${item.id}`} key={index} className="flex items-center space-x-4 border-b pb-4">
      <Link to={`/products/${item.id}`}>
      <img
        src={item?.img}
        alt={item?.name}
        className="w-16 h-16 rounded object-cover"
      /></Link>
      <div className="flex-1">
      <Link to={`/products/${item.id}`}className="text-sm font-medium text-gray-700">{item?.name.length>30 ?item.name.slice(0,20):item.name}</Link>
      </div>
      <div className="text-sm text-gray-600">x {item.count}</div>
      <div className="text-sm font-semibold text-gray-800">{item.price}₼</div>
      <button className="text-gray-500 hover:text-red-600 cursor-pointer" onClick={(e) =>{ 
        e.stopPropagation()
        deleteItem(item.id)}}>
        <MdDelete  size={20} />
      </button>
    </div>
  ))
) : (
  <p className="text-center text-gray-600 font-medium py-6 flex items-center justify-center">
    < CiShoppingBasket className='text-[30px]'/> Səbət boşdur
  </p>
)}

    
      </div>

      <div className="mt-4 border-t pt-4 border-black">
        <p className="text-lg font-bold text-right text-black">
            Ümumi məbləğ: <span className="text-black font-normal">{mebleg.toFixed(2)}$</span>
        </p>
        <div className="mt-4 flex justify-between">
        <Link 
          to={`/basket`}
          className="bg-gray-700 text-white px-6 py-2 rounded-full text-sm font-medium text-center inline-block">
            Səbət
        </Link>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600">
            Sifarişi rəsmiləşdir
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketModal;
