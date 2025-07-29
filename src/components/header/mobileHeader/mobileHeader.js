import React from "react"
import Image from "next/image"
import MenuBtn from "./menu Btn/menuBtn"
import BasketShoppingCartBtn from "./shopping Cart Btn/basketShoppingCartBtn"


export default function MobileHeader() {

   return (
      //? mobile header

      <div className="flex md:hidden w-full justify-between p-4 items-center bg-white dark:bg-zinc-700">

         {/* shopping cart */}
         <BasketShoppingCartBtn/>

         {/* logo */}
         <div className="relative w-40 h-10">
            <Image src="/logo/app-logo-type.svg" fill alt="لوگو" className="object-contain" />
         </div>

         {/* menu btn */}
         <MenuBtn></MenuBtn>


      </div>
   )

}
