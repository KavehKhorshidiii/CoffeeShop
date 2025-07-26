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
          <div className='flex items-center py-2 group relative'>
            <FaBasketShopping className=' w-7 h-7'/>

              <div className=' absolute text-base space-y-4 w-sm transition-all child:transition-colors tracking-normal shadow-2xl flex flex-col items-end bg-white dark:bg-zinc-700 dark:text-white rounded-2xl border-t-[3px]  group-hover:opacity-100 group-hover:visible border-orange-300 text-zinc-700 p-2 top-[100%] left-0 '>
                {/* opacity-0 invisible */}
                <div className=' w-full border-2'>
                  مشاهده
                </div>

                <div className=' border-2 w-full h-30'>
                  محصول
                </div>
                
                <div className='flex w-full justify-between'>
                  <button className=' cursor-pointer rounded-2xl border-2 py-3.5 px-6'>ثبت سفارش</button>
                  <div className=' border-2 flex flex-col'>
                    <span>مبلغ قابل پرداخت</span>
                    <span>
                      500,000
                      <span>تومان</span>
                    </span>
                  </div>
                </div>

              </div>

          </div>
        </div>

      </div>

      <div className=' flex gap-3.5  items-center'>

        <a href="">تماس با ما</a>
        <a href="">درباره ما</a>
        <a href="">بلاگ</a>

        <div className='relative group'>
          <a className=' py-5 group-hover:text-orange-300' href="">دیکشنری</a>
          <div className=' transition-all child:transition-colors tracking-normal shadow-2xl child:hover:text-orange-300 text-base space-y-4 w-52 absolute right-0 top-8 flex flex-col items-end bg-white dark:bg-zinc-700 dark:text-white rounded-2xl border-t-[3px] border-orange-300 text-zinc-700 p-6 invisible opacity-0  group-hover:visible group-hover:opacity-100'>
            <a href="">قهوه ویژه</a>
            <a href="">ویژه در سطح جهان</a>
          </div>
        </div>
        
        
        <div className='relative group'>
          <a className=' py-5 group-hover:text-orange-300' href="">فروشگاه</a>
          <div className=' transition-all child:transition-colors tracking-normal shadow-2xl child:hover:text-orange-300 text-base space-y-4 w-52 absolute right-0 top-8 flex flex-col items-end bg-white dark:bg-zinc-700 dark:text-white rounded-2xl border-t-[3px] border-orange-300 text-zinc-700 p-6 invisible opacity-0  group-hover:visible group-hover:opacity-100'>
            <a href="">قهوه ویژه</a>
            <a href="">ویژه در سطح جهان</a>
            <a href="">قهوه درجه یک</a>
            <a href="">ترکیبات تجاری</a>
            <a href="">کپسول قهوه</a>
            <a href="">قهوه زینو برزیلی</a>
          </div>
        </div>

          <a className='font-black text-orange-200' href="">صفحه اصلی</a>

        <a href="">
            <img src="logo/logo.png" alt="" />
        </a>
      </div>

    </div>
  )
}
