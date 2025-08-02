import React from "react"
import Image from "next/image"
import { IoIosArrowBack } from "react-icons/io"


export default function Club() {
   return (
      <div className="coffeeClub mb-20 md:mb-20 px-11 flex flex-col-reverse xl:flex-row rounded-2xl h-80 xl:h-36 bg-linear-to-tr from-emerald-500 to-emerald-800">

        {/* Right section */}
         <div className=" justify-between items-center w-full xl:w-1/2 flex h-full">
            <div className=" flex items-center flex-col">
               <span className=" font-bold text-3xl">524</span>
               <span className="mb-2">امتیاز شما</span>
               <span className=" bg-orange-300 p-2 w-full rounded-2xl flex items-center"><IoIosArrowBack></IoIosArrowBack>دریافت جایزه</span>
            </div>

            <div className="flex h-full gap-2 p-1 w-4/6 md:w-3/5 items-center">
               <div className=" bg-white rounded-2xl h-4/6 md:h-5/6 w-1/3 flex flex-col justify-center items-center">
                  <Image width={60} height={60} src="/club/Ticket-Star.svg" alt="coffee club img"></Image>
                  <span className="text-emerald-500 text-sm">جایزه ها</span>
               </div>
               <div className=" bg-white rounded-2xl h-4/6 md:h-5/6 w-1/3 flex flex-col justify-center items-center">
                  <Image width={60} height={60} src="/club/Activity.svg" alt="coffee club img"></Image>
                  <span className="text-emerald-500 text-sm">ماموریت ها</span>
               </div>
               <div className=" bg-white rounded-2xl h-4/6 md:h-5/6 w-1/3 flex flex-col justify-center items-center">
                  <Image width={60} height={60} src="/club/Discovery.svg" alt="coffee club img"></Image>
                  <span className="text-emerald-500 text-sm">چرخ و بخت</span>
               </div>
            </div>
         </div>

        {/* left section  */}
         <div className="flex justify-end items-center gap-2 w-full xl:w-1/2 h-full">
            <div className="flex flex-col text-right gap-2">
               <span className="  font-bold text-4xl">کافی کلاب</span>
               <span className="font-thin">میدونستی میتونی با امتیاز هات قهوه بگیری؟</span>
            </div>
            <div>
               <Image width={80} height={80} src="/club/diamond.png" alt="club img"></Image>
            </div>
         </div>

      </div>
   )
}
