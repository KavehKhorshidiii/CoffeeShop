import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function aboutMe() {
   return (
      <div className="pb-1">
         <Link href="https://github.com/Kaveh-Khorshidi">
            <div className="flex justify-center items-center gap-1">
               <div>
                  <Image width={50} height={50} src="/about me icons/github-svgrepo-com.svg" alt="social icons"></Image>
               </div>
               <div className=" font-bold text-3xl text-black dark:text-white">Kaveh khorshidi</div>
            </div>
         </Link>
      </div>
   )
}
