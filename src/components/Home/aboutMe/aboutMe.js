import React from "react"
import Image from "next/image"
import Link from "next/link"

//? about me section - github link
export default function aboutMe() {
   return (
      <div className="pb-1">
         <Link href="https://github.com/Kaveh-Khorshidi">
            <div className="flex justify-center items-center gap-1">
               <div className=" font-bold text-sm text-black dark:text-white">Kaveh khorshidi</div>
            </div>
         </Link>
      </div>
   )
}
