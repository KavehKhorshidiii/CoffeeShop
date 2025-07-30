import React from "react"
import Image from "next/image"
import { LuShoppingCart } from "react-icons/lu"
import { FaArrowRightArrowLeft } from "react-icons/fa6"
import { ImStarEmpty } from "react-icons/im"
import { IoIosArrowBack } from "react-icons/io"


// products object
const productObject = [
   { id: 1, title: "قهوه ترک بن مانو مقدار ۲۵۰ گرم خط دوم اسم طولانی", img: "/products/p1.png", score: 1 },
   { id: 2, title: "قهوه ترک بن مانو مقدار ۲۵۰ گرم خط دوم اسم طولانی", img: "/products/p2.png", score: 2 },
   { id: 3, title: "قهوه ترک بن مانو مقدار ۲۵۰ گرم خط دوم اسم طولانی", img: "/products/p3.png", score: 1 },
   { id: 4, title: "قهوه ترک بن مانو مقدار ۲۵۰ گرم خط دوم اسم طولانی", img: "/products/p4.png", score: 1 },
   { id: 5, title: "قهوه ترک بن مانو مقدار ۲۵۰ گرم خط دوم اسم طولانی", img: "/products/p5.png", score: 5 },
   { id: 6, title: "قهوه ترک بن مانو مقدار ۲۵۰ گرم خط دوم اسم طولانی", img: "/products/p6.png", score: 1 },
   { id: 7, title: "قهوه ترک بن مانو مقدار ۲۵۰ گرم خط دوم اسم طولانی", img: "/products/p7.png", score: 3 },
   { id: 8, title: "قهوه ترک بن مانو مقدار ۲۵۰ گرم خط دوم اسم طولانی", img: "/products/p8.png", score: 4 },
]


export default function product() {
   return (
      <>
        {/* text */}
         <div className=" items-end  mt-30 flex justify-between">
            <div className=" flex items-center text-orange-300">
               <IoIosArrowBack></IoIosArrowBack>مشاهده همه محصولات
            </div>
            <div className=" flex text-right gap-y-2 flex-col">
               <span className=" text-4xl font-bold">جدید ترین محصولات</span>
               <span className=" text-lg">فراوری شده از دانه قهوه</span>
            </div>
         </div>

        {/* products */}
         <div className=" mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-between w-full">
            {productObject.map((product) => (
               <div key={product.id} className="shadow-light p-2 text-right rounded-2xl">
                  <div className="flex justify-center">
                     <Image src={product.img} alt="product pho" width={160} height={160} className="w-40 h-40 object-contain" />
                  </div>

                  <div className=" space-y-4">
                     <div className=" text-base text-zinc-700 dark:text-white font-bold  text-right line-clamp-2">{product.title}</div>
                     <div className="font-bold text-lg  text-teal-600 flex justify-end ">
                        <span>تومان</span>
                        <span>۱۷۵،۰۰۰</span>
                     </div>
                     <div className="flex justify-between">
                        <div className="flex">
                           {
                              <>
                                 <ImStarEmpty className=" text-orange-400"></ImStarEmpty>
                                 <ImStarEmpty className=" text-orange-400"></ImStarEmpty>
                                 <ImStarEmpty className=" text-orange-400"></ImStarEmpty>
                                 <ImStarEmpty></ImStarEmpty>
                                 <ImStarEmpty></ImStarEmpty>
                              </>
                           }
                        </div>
                        <div className="flex gap-x-1">
                           <button>
                              <FaArrowRightArrowLeft className=" size-4"></FaArrowRightArrowLeft>
                           </button>
                           <button>
                              <LuShoppingCart className=" size-4"></LuShoppingCart>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </>
   )
}
