import React from 'react'
import { FaTruck } from "react-icons/fa";
function Footer() {
  return (
    <div className='bg-primary w-full h-[500px] p-[25px]'>
      <div className="footer-services  flex justify-between items-center w-[1200px]">
        <div className='flex'>
        <img src="https://neptun.az/image/footer_img/delivery.svg" className='w-[35px]' alt="footer-img" />
      <span class="text-white text-[14px] font-bold mx-3">Pulsuz çatdırılma<br/> 50 azn-dən yuxarı</span>
        </div>
        <div className='flex'>
        <img src="https://neptun.az/image/footer_img/cash.svg" className='w-[30px]' alt="footer-img" />
      <span class="text-white text-[14px] font-bold mx-3">Nağd və ya<br/> kartla ödəniş</span>
        </div>
        <div className='flex'>
        <img src="https://neptun.az/image/footer_img/gift.svg" className='w-[30px]' alt="footer-img" />
      <span class="text-white text-[14px] font-bold mx-3">Hədiyyə<br/>kuponları</span>
        </div>
        <div className='flex'>
        <img src="https://neptun.az/image/footer_img/online.svg" className='w-[30px]' alt="footer-img" />
      <span class="text-white text-[14px] font-bold mx-3">Onlayn<br/> müştəri xidmətləri</span>
        </div>
        <div className='flex'>
        <img src="	https://neptun.az/image/footer_img/mobile.svg"  alt="footer-img" />
      <span class="text-white text-[14px] font-bold mx-3">Onlayn<br/> müştəri xidmətləri</span>
        </div>
      </div>
      <div className="w-[600px]">
        <div className="flex justify-between">
            <p></p><input type="text" />
        </div>
      </div>
    </div>
  )
}

export default Footer