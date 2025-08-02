"use client"
import React from "react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { LuShoppingCart } from "react-icons/lu"
import { FaArrowRightArrowLeft } from "react-icons/fa6"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import Image from "next/image"

// ? product list
const productObject = [
   { id: 1, title: "قهوه ترک بن مانو مقدار ۲۵۰ گرم خط دوم اسم طولانی", img: "/products/p5.png"},
   { id: 2, title: "قهوه ترک بن مانو مقدار ۲۵۰ گرم خط دوم اسم طولانی", img: "/products/p6.png"},
   { id: 3, title: "قهوه ترک بن مانو مقدار ۲۵۰ گرم خط دوم اسم طولانی", img: "/products/p7.png"},
   { id: 4, title: "قهوه ترک بن مانو مقدار ۲۵۰ گرم خط دوم اسم طولانی", img: "/products/p8.png"},
]

export default function TrendingProduct() {
   return (
      <Swiper
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
            delay: 2600,
            disableOnInteraction: false,
         }}
         pagination={{
            clickable: true,
         }}
         navigation={false}
         modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper my-25 rounded-2xl shadow-dark"
      >
        
        
         {/* show product */}
         {productObject.map((product) => (
            <SwiperSlide className="" key={product.id}>
               <div key={product.id} className="h-70 flex items-center justify-around  p-2 text-right">
                  <div className="flex justify-center">
                     <Image src={product.img} alt="product pho" width={180} height={180} className="w-40 h-40 object-contain" />
                  </div>

                  <div className=" space-y-4">
                     <div className=" text-base xl:text-xl text-zinc-700 dark:text-white font-bold  text-right line-clamp-2">{product.title}</div>
                     <div className="font-bold text-lg  text-teal-600 flex justify-end ">
                        <span>تومان</span>
                        <span>۱۷۵،۰۰۰</span>
                     </div>
                     <div className="flex justify-end">
                        <div className="flex gap-x-1 text-black dark:text-white">
                           <button>
                              <FaArrowRightArrowLeft className=" size-3 md:size-5"></FaArrowRightArrowLeft>
                           </button>
                           <button>
                              <LuShoppingCart className=" size-4  md:size-6"></LuShoppingCart>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         ))}


      </Swiper>
   )
}
