"use client"

import React, { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaBasketShopping } from "react-icons/fa6"
import dynamic from "next/dynamic"
import Spinner from "@/components/Loading Spinner/Loading-spinner"
import Image from "next/image"

const Mobile_Header_Sidebar_Menu = dynamic(() => import("@/components/header/mobileHeader/mobile header sideBar right - menu/mobile-header-sidebar-menu"), {
   ssr: false,
   loading: () => (
      <h1 className=" fixed z-50 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
         <Spinner />
      </h1>
   ),
})
const Mobile_header_sidebar_shoppingCart = dynamic(() => import("@/components/header/mobileHeader/mobile header sideBar left - shopping cart/mobile-header-sidebar-shoppingCart"), {
   ssr: false,
   loading: () => (
      <h1 className=" fixed z-50 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
         <Spinner />
      </h1>
   ),
})

export default function MobileHeader() {
   const [toggleRight, setToggleRight] = useState(false)
   const [toggleLeft, setToggleLeft] = useState(false)

   const runOverlay = () => {
      setToggleLeft(false)
      setToggleRight(false)
   }

   return (
      //? mobile header

      <div className="flex md:hidden w-full justify-between p-4 items-center bg-white dark:bg-zinc-700">
         {/* shopping cart */}
         <button onClick={() => setToggleLeft(!toggleLeft)}>
            <FaBasketShopping className="hover:text-orange-300 text-black dark:text-white size-7"></FaBasketShopping>
         </button>

         {/* logo */}
         <div className="relative w-40 h-10">
            <Image src="/logo/app-logo-type.svg" fill alt="لوگو" className="object-contain" />
         </div>

         {/* menu btn */}
         <button onClick={() => setToggleRight(!toggleRight)}>
            <GiHamburgerMenu className="text-black hover:text-orange-300 dark:text-white size-7"></GiHamburgerMenu>
         </button>

         {/* Right navBar section - Menu*/}
         {toggleRight && <Mobile_Header_Sidebar_Menu isSidebarOpen={toggleRight} setIsSidebarOpen={setToggleRight}></Mobile_Header_Sidebar_Menu>}

         {/* Left navBar section - Shopping Card  */}
         {toggleLeft && <Mobile_header_sidebar_shoppingCart isSidebarOpen={toggleLeft} setIsSidebarOpen={setToggleLeft}></Mobile_header_sidebar_shoppingCart>}

         {/* overlay */}
         <div onClick={runOverlay} className={` ${toggleLeft || toggleRight ? "visible" : "invisible"} backdrop-blur-xs inset-0 h-full w-full fixed  z-10`}></div>
      </div>
   )

}
