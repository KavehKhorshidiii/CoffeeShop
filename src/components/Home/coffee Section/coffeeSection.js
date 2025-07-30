import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function CoffeeSection() {
   return (
      <div className="flex gap-5 my-20 w-full">


         <div className=" w-1/2 relative">
         
            <Link href="#">
               <Image className=" object-cover rounded-2xl" src="/coffeeSection/left.jpg" width={500} height={500} alt="coffeeImg" priority />
            </Link>

            <div className=" rounded-2xl bg-black/50 inset-0 absolute"></div>

            <div className=" absolute inset-0 flex flex-col justify-center mr-10 space-y-3 items-end">
                <div className=" text-4xl font-bold">پودر های فوری</div>
                <div className=" text-xl">نسکافه  هات چاکلت  ماسال</div>
            </div>

         </div>


         <div className=" w-1/2 relative">

            <Link href="#">
               <Image className=" object-cover rounded-2xl" src="/coffeeSection/right.jpg" width={500} height={500} alt="coffeeImg" priority />
            </Link>

            <div className=" bg-black/50 inset-0 rounded-2xl absolute"></div>

            <div className=" absolute flex inset-0 justify-center items-end flex-col mr-10 space-y-3 text-4xl">
                <div className=" text-4xl font-bold">انواع قهوه</div>
                <div className=" text-xl">ترکیبی و تک</div>
            </div>

         </div>

      </div>
   )
}
