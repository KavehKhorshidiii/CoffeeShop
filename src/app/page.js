import Header from "@/components/header/header/header"
import MobileHeader from "@/components/header/mobileHeader/mobileHeader"
import Image from "next/image"


export default function Home() {
   return (
      <div className=" w-full bg-gray-100 dark:bg-zinc-800">
         <Header></Header>
         <MobileHeader></MobileHeader>
         <Image src="/bg-img/bgi.webp" alt="coffeeImg" priority className="" width={1920} height={905} />
         <h1 className="h-[4000px]"></h1>
      </div>
   )
}
