import React from "react"
import { ImCross } from "react-icons/im"
import Image from "next/image"

export default function MobileHeaderSidebarShoppingCart({ toggle , setToggle }) {
   //?  mobile header sidebar shoppingCart

   return (
      <div
         className={`${
            toggle ? "translate-x-0" : "-translate-x-full "
         }  flex left-0 flex-col justify-between px-3 py-4 z-20 bg-white text-lg dark:bg-zinc-700 transition-all duration-500 dark:text-amber-50  text-black fixed bottom-0 top-0 w-1/2`}
      >
         {/* left body sideBar - header*/}
         <div className="h-fit pb-3 dark:border-white/50 border-black/50 border-b-1 flex items-center justify-between w-full">
            <span className=" font-bold">سبد خرید</span>
            <button onClick={() => setToggle(false)}>
               <ImCross className=" dark:text-white"></ImCross>
            </button>
         </div>

         {/* left body sideBar product*/}
         <div className="overflow-auto h-full space-y-1">
            {/* product number one */}
            <div className="grid overflow-auto">
               <div className=" flex justify-between h-32 my-3.5 shadow-light dark:shadow-dark rounded-2xl ">
                  <div className=" p-2.5 flex w-2/3 flex-col  h-full justify-between">
                     <h1 className="flex text-sm text-zinc-700 dark:text-white font-bold justify-end text-right h-1/2 line-clamp-2">قهوه اسپرسو مدل پرسیکا ۲۵۰ گرم </h1>

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

                  <div className="flex w-1/2 items-center justify-center">
                        <Image src={"/products/p1.png"} width={100} height={100}  className="object-contain" alt="product"></Image>
                  </div>
               </div>
            </div>
         </div>

         {/* footer sidebar */}
         <div className="h-fit flex w-full justify-between border-t-2 border-white/10 pt-3">
            <button className=" hover:bg-teal-500 bg-teal-600 cursor-pointer rounded-2xl py-3.5 px-6">ثبت سفارش</button>
            <div className=" flex justify-center gap-1.5 text-right flex-col">
               <span className=" text-[10px] font-medium border-gray-300">مبلغ قابل پرداخت</span>
               <span className="flex items-center">
                  <span className="text-xs">تومان</span>
                  <span className=" font-bold text-xl">۵۰۰،۰۰۰</span>
               </span>
            </div>
         </div>
      </div>
   )
}
