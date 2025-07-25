import React from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import { TfiLayoutLineSolid } from "react-icons/tfi";





export default function header() {
  return (
    <div className=' backdrop-blur-[6px] bg-stone-900/80 px-10 py-2.5 top-4 fixed flex left-0 right-0 w-[90%] mx-auto justify-between rounded-3xl'>

      <div className='flex items-center gap-1.5  text-orange-200'>
        <div className='flex gap-1.5 mr-2'>
            <a href="">ثبت نام</a>
            <span>|</span>
            <a href="">ورود</a>
        </div>

        <span className=' text-amber-50'><TfiLayoutLineSolid className=' rotate-90 text-amber-50'></TfiLayoutLineSolid></span>

        <div className='flex ml-2'>
          <div className='flex items-center'><FaBasketShopping className=' w-7 h-7'/></div>
        </div>
      </div>
      <div className='flex gap-3.5  items-center'>
        <a href="">تماس با ما</a>
        <a href="">درباره ما</a>
        <a href="">بلاگ</a>
        <a href="">دیکشنری</a>
        <a href="">فروشگاه</a>
        <a className='font-black text-orange-200' href="">صفحه اصلی</a>

        <a href="">
            <img src="logo/logo.png" alt="" />
        </a>
      </div>

    </div>
  )
}
