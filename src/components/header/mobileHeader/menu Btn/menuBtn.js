"use client"
import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"
import Overlay from "../Overlay/overlay"
import dynamic from "next/dynamic"
import Spinner from "@/components/Loading Spinner/Loading-spinner"


const Mobile_header_sidebar_Menu = dynamic(() => import("@/components/header/mobileHeader/menu Btn/mobile-header-sidebar-menu"), {
   ssr: false,
   loading: () => (
      <h1 className=" fixed z-50 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
         <Spinner />
      </h1>
   ),
})


export default function MenuBtn() {

   const [toggle, setToggle] = useState(false)

   return (
      <>
         <button onClick={() => setToggle(true)}>
            <GiHamburgerMenu className="hover:text-orange-300 text-black dark:text-white size-7"></GiHamburgerMenu>
         </button>


         {toggle && <Mobile_header_sidebar_Menu toggle={toggle} setToggle={setToggle}></Mobile_header_sidebar_Menu>}


         <Overlay toggle={toggle} setToggle={setToggle}></Overlay>
      </>
   )
}
