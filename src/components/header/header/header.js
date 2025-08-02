const ShopCartHeader = dynamic(() => import('@/components/header/shopCartHeader/shopCartHeader'));
import React from "react"
import dynamic from "next/dynamic";
import { FaBasketShopping } from "react-icons/fa6"
import { TfiLayoutLineSolid } from "react-icons/tfi"
import Link from "next/link"
import Image from "next/image"


const storeItems = [
  "قهوه ویژه",
  "ویژه در سطح جهان",
  "قهوه درجه یک",
  "ترکیبات تجاری",
  "کپسول قهوه",
  "قهوه زینو برزیلی"
]


export default function Header() {
   return (
      //? Header component

      <div className=" z-10 max-md:hidden max-lg:px-5 backdrop-blur-[6px] bg-stone-900/80 px-10 py-6 top-4 fixed flex left-0 right-0 w-[90%] mx-auto justify-between rounded-3xl">

         {/* left container | basket and login */}
         <div className="flex items-center max-md:gap-0 gap-1.5  text-orange-200">
            {/* login */}
            <div className="flex xl:text-xl gap-1.5 mr-2">
               <Link href="#">ثبت نام</Link>
               <span>|</span>
               <Link href="#">ورود</Link>
            </div>

            {/* line icon */}
            <span className=" text-amber-50">
               <TfiLayoutLineSolid className=" rotate-90 text-amber-50"></TfiLayoutLineSolid>
            </span>

            {/* basket shopping */}
            <div className="flex ml-2">
               <div className="flex items-center py-2 group relative">
                  <FaBasketShopping className=" max-md:size-4 cursor-pointer w-7 h-7" />

                  <div className=" opacity-0 invisible  absolute text-base p-3 w-sm transition-all delay-100 child:transition-colors tracking-normal shadow-2xl flex flex-col items-end bg-white dark:bg-zinc-700 dark:text-white rounded-2xl border-t-[3px]  group-hover:opacity-100 group-hover:visible border-orange-300 text-zinc-700 top-[100%] left-0 ">
                     <ShopCartHeader></ShopCartHeader>
                  </div>
               </div>
            </div>
         </div>

         {/* right container | Menu */}
         <div className=" flex xl:text-xl max-lg:gap-3 gap-3.5 child:hover:text-orange-300  items-center">

            {/* header Menu */}
            <Link href="#">تماس با ما</Link>
            <Link href="#">درباره ما</Link>
            <Link href="#">بلاگ</Link>

            <div className="relative group">
               <Link className=" py-5 group-hover:text-orange-300" href="#">
                  دیکشنری
               </Link>
               <div className=" transition-all child:transition-colors tracking-normal shadow-2xl child:hover:text-orange-300 text-base space-y-4 w-52 absolute right-0 top-8 flex flex-col items-end bg-white dark:bg-zinc-700 dark:text-white rounded-2xl border-t-[3px] border-orange-300 text-zinc-700 p-6 invisible opacity-0  group-hover:visible group-hover:opacity-100">
                  <Link href="#">قهوه ویژه</Link>
                  <Link href="#">ویژه در سطح جهان</Link>
               </div>
            </div>

            <div className="relative group">
               <Link className=" py-5 group-hover:text-orange-300" href="#">
                  فروشگاه
               </Link>
               <div className=" transition-all child:transition-colors tracking-normal font-medium shadow-2xl child:hover:text-orange-300 text-base space-y-4 w-52 absolute right-0 top-8 flex flex-col items-end bg-white dark:bg-zinc-700 dark:text-white rounded-2xl border-t-[3px] border-orange-300 text-zinc-700 p-6 invisible opacity-0  group-hover:visible group-hover:opacity-100">
                  {
                     storeItems.map((item , index) =>  <Link key={index} href="#">{item}</Link>  )
                  }
               </div>
            </div>

            <Link className="font-black  xl:text-xl text-orange-200" href="/">
               صفحه اصلی
            </Link>

            {/* logo */}
            <Link href="/">
               <div className="relative w-10 h-10">
                  <Image src="/logo/logo.png" alt="لوگو" fill sizes="40px" className="object-contain" />
               </div>
            </Link>
         </div>

      </div>
   )
}
