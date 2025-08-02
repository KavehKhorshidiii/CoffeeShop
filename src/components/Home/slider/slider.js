"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"

import { FreeMode, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"



export default function slider() {
   return (
      <Swiper
         modules={[FreeMode, Mousewheel, Pagination]}
         mousewheel
         slidesPerView={4}
         spaceBetween={30}
         freeMode={true}
         pagination={{
            clickable: true,
         }}
         className="mySwiper text-black dark:text-white shadow-dark mb-20 rounded-2xl"
      >  
         <SwiperSlide>
            <Link href="#">
               <div className=" flex flex-col pt-2 pb-6 items-center ">
                  <Image width={120} height={120} className="border-2" src="/categories/category1.png" alt="kk" />
                  <span>اسپرسو</span>
               </div>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="#">
               <div className=" flex flex-col pt-2 pb-6 items-center ">
                  <Image width={120} height={120} className="border-2" src="/categories/category2.png" alt="kk" />
                  <span>لوازم جانبی و تجهیزات</span>
               </div>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="#">
               <div className=" flex flex-col pt-2 pb-6 items-center ">
                  <Image width={120} height={120} className="border-2" src="/categories/category3.png" alt="kk" />
                  <span>اسپرسو ساز</span>
               </div>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="#">
               <div className=" flex flex-col pt-2 pb-6 items-center ">
                  <Image width={120} height={120} className="border-2" src="/categories/category4.png" alt="kk" />
                  <span>پک تسترس قهوه </span>
               </div>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="#">
               <div className=" flex flex-col pt-2 pb-6 items-center ">
                  <Image width={120} height={120} className="border-2" src="/categories/category5.png" alt="kk" />
                  <span>قهوه ترک</span>
               </div>
            </Link>
         </SwiperSlide>
      </Swiper>
   )
}
