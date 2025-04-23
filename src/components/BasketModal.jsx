import React from 'react';
import { MdDelete } from 'react-icons/md';

const BasketModal = () => {
  return (
    <div className="absolute right-0 top-full mt-2 w-[350px] bg-white rounded shadow-xl p-4 z-[999]">
      <div className="max-h-[300px] overflow-auto space-y-4">
        <div className="flex items-center space-x-4 border-b pb-4">
          <img
            src="#"
            alt="CER.PAPAYA QURUSU KG"
            className="w-16 h-16 rounded object-cover"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700">CER.PAPAYA QURUSU KG</p>
          </div>
          <div className="text-sm text-gray-600">x 1</div>
          <div className="text-sm font-semibold text-gray-800">11.50₼</div>
          <button className="text-gray-500 hover:text-red-600">
            <MdDelete size={20} />
          </button>
        </div>

        <div className="flex items-center space-x-4 border-b pb-4">
          <img
            src="#"
            alt="APPLE KG"
            className="w-16 h-16 rounded object-cover"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-700">APPLE KG</p>
          </div>
          <div className="text-sm text-gray-600">x 2</div>
          <div className="text-sm font-semibold text-gray-800">5.00₼</div>
          <button className="text-gray-500 hover:text-red-600">
            <MdDelete size={20} />
          </button>
        </div>
      </div>

      <div className="mt-4 border-t pt-4 border-black">
        <p className="text-lg font-bold text-right text-black">
            Ümumi məbləğ: <span className="text-black font-normal">11.50₼</span>
        </p>
        <div className="mt-4 flex justify-between">
          <button className="bg-gray-700 text-white px-6 py-2 rounded-full text-sm font-medium">
            Səbət
          </button>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600">
            Sifarişi rəsmiləşdir
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketModal;
