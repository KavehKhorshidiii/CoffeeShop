"use client"
import React from "react"
import { FaBasketShopping } from "react-icons/fa6"
import { useState } from "react"
import Overlay from "../Overlay/overlay"
import dynamic from "next/dynamic"
import Spinner from "@/components/Loading Spinner/Loading-spinner"


const Mobile_header_sidebar_shoppingCart = dynamic(() => import("@/components/header/mobileHeader/shopping Cart Btn/mobile-header-sidebar-shoppingCart"), {
   ssr: false,
   loading: () => (
      <h1 className=" fixed z-50 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
         <Spinner />
      </h1>
   ),
})


export default function BasketShoppingCartBtn() {

   const [toggle, setToggle] = useState(false)

   return (
      <>
         <button onClick={() => setToggle(true)}>
            <FaBasketShopping className="hover:text-orange-300 text-black dark:text-white size-6"></FaBasketShopping>
         </button>


         {toggle && <Mobile_header_sidebar_shoppingCart toggle={toggle} setToggle={setToggle}></Mobile_header_sidebar_shoppingCart>}


         <Overlay toggle={toggle} setToggle={setToggle}></Overlay>
      </>
   )
}
