import React from "react"
import Image from "next/image"
import MenuBtn from "./menu Btn/menuBtn"
import BasketShoppingCartBtn from "./shopping Cart Btn/basketShoppingCartBtn"


export default function MobileHeader() {

   return (
      //? mobile header

      <div className="flex w-full justify-between py-3 px-3 items-center bg-white dark:bg-zinc-700">

         {/* shopping cart */}
         <BasketShoppingCartBtn/>

         {/* logo */}
         <div className="relative md:w-40 md:h-10 w-30 h-9">
            <Image src="/logo/app-logo-type.svg" fill alt="لوگو" className="object-contain" />
         </div>

         {/* menu btn */}
         <MenuBtn></MenuBtn>


      </div>
   )

}
