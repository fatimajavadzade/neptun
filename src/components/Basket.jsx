import React, { useContext } from 'react';
import { BASKET } from '../contexts/BasketContext';
import { Link } from 'react-router-dom';

const Basket = () => {
  const { basket, setBasket } = useContext(BASKET);
  let total = 0;
  basket.map(item => total += item.price * item.count);

  return (
    <div className="n-container min-h-screen py-10 px-4">
      <h2 className="text-3xl font-semibold mb-6">Səbət</h2>

      {basket.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded-md shadow-md">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left text-sm text-gray-700">
                <th className="p-4">Şəkil</th>
                <th className="p-4">Məhsulun adı</th>
                <th className="p-4">Model</th>
                <th className="p-4">Sayı</th>
                <th className="p-4">Qiyməti</th>
                <th className="p-4">Məbləğ</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4">
                    <div className="flex items-center justify-center">
                      <div className="bg-white border border-gray-200 rounded-md shadow-sm p-2">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="p-4 font-semibold text-gray-800">{item.name}</td>
                  <td className="p-4 text-sm text-gray-600">{item.id}</td>
                  <td className="p-4">{item.count}</td>
                  <td className="p-4">{item.price.toFixed(2)}₼</td>
                  <td className="p-4 font-medium">{(item.count * item.price).toFixed(2)}₼</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-lg text-gray-600 font-medium">Səbət boşdur.</p>
      )}

      <div className="mt-8 flex flex-col gap-6">
        <div>
          <h3 className="text-xl font-medium mb-2">Daha nə etmək istəyirsiniz?</h3>
          <select className="w-full border border-gray-300 rounded px-4 py-2">
            <option>Kupon istifadə etmək</option>
          </select>
        </div>

        <d  iv className="w-1/2 bg-white p-4 border rounded shadow-sm">
          <div className="flex justify-between mb-2">
            <span>Məbləğ:</span>
            <span>{total.toFixed(2)}₼</span>
          </div>
          <div className="flex justify-between font-semibold text-lg border-t pt-2">
            <span>Ümumi məbləğ:</span>
            <span>{total.toFixed(2)}₼</span>
          </div>
        </d>
      </div>

      <div className="my-8 flex flex-col md:flex-row justify-between gap-4">
        <Link
          to="/"
          className="bg-orange-500 text-white rounded px-6 py-3 hover:bg-orange-600 transition text-center"
        >
          Alış-verişə davam
        </Link>
        <button className="bg-orange-500 text-white rounded px-6 py-3 hover:bg-orange-600 transition">
          Sifarişi rəsmiləşdir
        </button>
      </div>
    </div>
  );
};

export default Basket;
