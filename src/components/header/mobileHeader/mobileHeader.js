'use client';

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBasketShopping } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { IoMdLogIn } from "react-icons/io";

export default function MobileHeader() {


   const [toggle , setToggle] = useState(false)


   return (

      //? mobile header

      <div className="flex md:hidden w-full justify-between p-4 items-center bg-white dark:bg-zinc-700">


         {/* header mobile section */}
         <div>
            <FaBasketShopping className="hover:text-orange-300 text-black dark:text-white size-7"></FaBasketShopping>
         </div>

         <img className="text-orange-300" src="logo/app-logo-type.svg" alt="" />

         <div>
            <GiHamburgerMenu onClick={()=> setToggle(!toggle)} className="text-black hover:text-orange-300 dark:text-white size-7"></GiHamburgerMenu>
         </div>
      


         {/* navBar section */}
         <div className={` ${toggle ? 'right-0 translate-x-0' : ' right-0 translate-x-full '} px-5 z-20 bg-white text-lg dark:bg-zinc-700 dark:text-amber-50  text-black fixed  bottom-0 w-2/3 top-0`}>
            
            {/* header sideBar */}
            <div className=" dark:border-white/50 border-black/50 border-b-1 py-4 items-center flex justify-between">

               <div>
                  <ImCross onClick={()=> setToggle(!toggle)} className=" dark:text-white"></ImCross>
               </div>

               <div>
                  <img
                     className="text-orange-300"
                     src="logo/app-logo-type.svg"
                     alt=""
                  />
               </div>

               <div>
                  <img className="" src="logo/logo.png" alt="" />
               </div>

            </div>
            

            {/* body sideBar */}
            <div className=" child:active:text-orange-300 child:hover:text-orange-300 py-6 space-y-5 flex items-end dark:border-white/50 border-black/50 border-b-1 flex-col">
               <a href="">صفحه اصلی</a>
               <a href="">فروشگاه</a>
               <a href="">دیکشنری</a>
               <a href="">درباره ما</a>
               <a href="">بلاگ</a>
               <a href="">تماس با ما</a>
            </div>
           

            {/* footer sidebar */}
            <div className="py-6 space-y-5 flex items-end  flex-col">

               <div className="flex gap-1.5 mr-2 items-center text-lg text-orange-300">
                  <a href="">ثبت نام</a>
                  <span>|</span>
                  <a href="">ورود</a>
                  <IoMdLogIn></IoMdLogIn>
               </div>

               <div className=" text-orange-300">
                  <a href="" className="flex items-center text-lg gap-1.5 mr-2">
                     <span>سبد خرید</span>
                     <FaBasketShopping></FaBasketShopping>
                  </a>
               </div>
               
            </div>


         </div>




         {/* overlay */}
         <div className={` ${toggle ? 'visible' : 'invisible'} backdrop-blur-xs inset-0 h-full w-full fixed  z-10`}></div>
      </div>
   );
}
