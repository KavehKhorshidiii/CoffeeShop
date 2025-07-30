import React from "react"
import Image from "next/image"


export default function Title() {
   return (
      <div className=" flex  items-center top-0">

            <Image src="/bg-img/bgi.webp" alt="coffeeImg" priority width={1920} height={905} />

         <div className=" right-6/10 max-w-1/3 space-y-3  items-end absolute flex  flex-col">
            <h2 className=" text-right font-bold md:text-4xl">قهوه عربیکا تانزانیا</h2>
            <span className=" text-right text-sm md:text-2xl">یک فنجان بالانس</span>
            <span className=" text-right w-1/3 border-b-1 text-orange-300"></span>
            <span className="text-sm md:text-xl text-right">قطعا نام اشنایه عربیکا را شنیده اید ، عربیکا یکی از گونه های قهوه است که در نواحی کختلف کمربند قهوه کشت میشود</span>
         </div>

      </div>
   )
}
