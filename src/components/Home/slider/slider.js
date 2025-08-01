"use client"
import React from "react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function slider() {
   return (
      <div className=" border-2">
         <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
         >
            <SwiperSlide><div className=" border-2 p-44 w-10 h-10">box 1</div></SwiperSlide>
            <SwiperSlide><div className=" border-2 p-44 w-10 h-10">box 2</div></SwiperSlide>
            <SwiperSlide><div className=" border-2 p-44 w-10 h-10">box 3</div></SwiperSlide>
            <SwiperSlide><div className=" border-2 p-44 w-10 h-10">box 4</div></SwiperSlide>
            <SwiperSlide><div className=" border-2 p-44 w-10 h-10">box 5</div></SwiperSlide>
           
            {/* <SwiperSlide className=" w-2xl h-16 border-2 border-amber-300">Slide 2</SwiperSlide>
            <SwiperSlide className=" w-2xl h-16 border-2 border-amber-300">Slide 3</SwiperSlide>
            <SwiperSlide className=" w-2xl h-16 border-2 border-amber-300">Slide 4</SwiperSlide>
            <SwiperSlide className=" w-2xl h-16 border-2 border-amber-300">Slide 5</SwiperSlide>
            <SwiperSlide className=" w-2xl h-16 border-2 border-amber-300">Slide 6</SwiperSlide>
            <SwiperSlide className=" w-2xl h-16 border-2 border-amber-300">Slide 7</SwiperSlide> */}
         </Swiper>
      </div>
   )
}
