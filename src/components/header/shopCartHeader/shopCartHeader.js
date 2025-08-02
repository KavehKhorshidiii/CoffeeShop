import React from "react"
import { MdOutlineArrowBackIos } from "react-icons/md"
import Link from "next/link"
import Image from "next/image"

export default function ShopCartHeader() {
   return (
      //? shopping cart component

      <>
         {/* cart header */}
         <div className=" flex justify-between  w-full">
            <Link href="#">
               <span className="flex text-sm items-center cursor-pointer tracking-tighter text-orange-300">
                  <MdOutlineArrowBackIos></MdOutlineArrowBackIos>مشاهده سبد خرید
               </span>
            </Link>

            <div className=" text-gray-300 text-xs flex gap-1">
               <span>مورد</span>
               <span>۱</span>
            </div>
         </div>

         {/* product section */}
         <div className="grid w-full max-h-[50vh] overflow-auto">
            <div className=" flex justify-between h-32 my-3.5 border-1 border-black dark:border-white rounded-2xl ">
               <div className=" p-2.5 flex w-2/3 flex-col  h-full justify-between">
                  <h1 className="flex text-base text-zinc-700 dark:text-white font-bold justify-end text-right h-1/2 line-clamp-2">قهوه اسپرسو مدل پرسیکا ۲۵۰ گرم </h1>

                  <div className="flex h-1/2 flex-col">
                     <div className="flex  text-teal-600 justify-end gap-1.5 text-sm">
                        <span>تخفیف</span>
                        <span>۱۴،۵۰۰ </span>
                     </div>
                     <div className="flex justify-end gap-1.5">
                        <span>تومان</span>
                        <span className=" font-bold text-lg">۳۵۰,۰۰۰</span>
                     </div>
                  </div>
               </div>

               <div className="flex w-1/3 items-center justify-center">
                  <Image src={"/products/p1.png"} width={100} height={100} alt="product img"></Image>
               </div>
            </div>
         </div>

         {/* footer curt - price and buy-Btn */}
         <div className="flex w-full justify-between border-t-2 border-white/10 pt-3">
            <button className=" hover:bg-teal-500 bg-teal-600 cursor-pointer rounded-2xl py-3.5 px-6">ثبت سفارش</button>
            <div className=" flex justify-center gap-1.5 text-right flex-col">
               <span className=" text-[10px] font-medium border-gray-300">مبلغ قابل پرداخت</span>
               <span className="flex items-center">
                  <span className="text-xs">تومان</span>
                  <span className=" font-bold text-xl">۵۰۰،۰۰۰</span>
               </span>
            </div>
         </div>
      </>
   )
}
