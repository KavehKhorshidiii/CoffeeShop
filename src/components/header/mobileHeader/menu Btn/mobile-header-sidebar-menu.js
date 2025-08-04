import React from "react"
import { FaBasketShopping } from "react-icons/fa6"
import { ImCross } from "react-icons/im"
import { IoMdLogIn } from "react-icons/io"
import { FaHome } from "react-icons/fa"
import { FaShoppingBasket } from "react-icons/fa"
import { SiDictionarydotcom } from "react-icons/si"
import { PiBagFill } from "react-icons/pi"
import { FaNewspaper } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"


export default function MobileHeaderSidebarMenu({ toggle, setToggle }) {
   //? mobile header sidebar Menu

   return (
      <div
         className={`${
            toggle ? "right-0 translate-x-0 " : " right-0 translate-x-full "
         } px-5 z-20 bg-white text-lg dark:bg-zinc-700 dark:text-amber-50  text-black fixed  bottom-0 w-2/3 top-0`}
      >
         {/* header sideBar */}
         <div className=" dark:border-white/50 border-black/50 border-b-1 py-4 items-center flex justify-between">
            <div>
               <button onClick={() => setToggle(false)}>
                  <ImCross className=" dark:text-white"></ImCross>
               </button>
            </div>

            <div className="relative w-24 h-10">
               <Image src="/logo/logo.png" alt="لوگو" fill sizes="96px" className="object-contain" />
            </div>
         </div>

         {/* body sideBar */}
         <div className=" child:active:text-orange-300 child:hover:text-orange-300 py-6 space-y-5 flex items-end child:flex child:items-center child:gap-2 dark:border-white/50 border-black/50 border-b-1 flex-col">
            <Link href="#">
               صفحه اصلی<FaHome></FaHome>
            </Link>
            <Link href="#">
               فروشگاه<FaShoppingBasket></FaShoppingBasket>
            </Link>
            <Link href="#">
               دیکشنری<SiDictionarydotcom></SiDictionarydotcom>
            </Link>
            <Link href="#">
               درباره ما<PiBagFill></PiBagFill>
            </Link>
            <Link href="#">
               بلاگ<FaNewspaper></FaNewspaper>
            </Link>
            <Link href="#">
               تماس با ما<FaPhone></FaPhone>
            </Link>
         </div>

         {/* footer sidebar */}
         <div className="py-6 space-y-5 flex items-end  flex-col">
            <div className="flex gap-1.5 mr-2 items-center text-lg text-orange-300">
               <Link href="#">ثبت نام</Link>
               <span>|</span>
               <Link href="#">ورود</Link>
               <IoMdLogIn></IoMdLogIn>
            </div>

            <div className=" text-orange-300">
               <Link href="#" className="flex items-center text-lg gap-1.5 mr-2">
                  <span>سبد خرید</span>
                  <FaBasketShopping></FaBasketShopping>
               </Link>
            </div>
         </div>

      </div>
   )
}
