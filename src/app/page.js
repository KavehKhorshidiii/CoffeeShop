import Header from "@/components/header/header/header"
import Image from "next/image"
import MobileHeaderWrapper from "@/components/header/mobileHeader/MobileHeaderWrapper"





export default function Home() {
   return (
      <div className="w-full bg-gray-100 dark:bg-zinc-800">
         <Header></Header>
         <div className="md:hidden">
            <MobileHeaderWrapper/>
         </div>
         <Image src="/bg-img/bgi.webp" alt="coffeeImg" priority width={1920} height={905} />
         <h1 className="h-[4000px]"></h1>
      </div>
   )
}
