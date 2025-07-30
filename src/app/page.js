import Header from "@/components/header/header/header"
import Image from "next/image"
import MobileHeaderWrapper from "@/components/header/mobileHeader/MobileHeaderWrapper"
import Title from "@/components/Home/Title/Title"
import Product from "@/components/Home/products/product"

{/* <Image src="/bg-img/bgi.webp" alt="coffeeImg" priority width={1920} height={905} /> */}


export default function Home() {
   return (
      <div className="w-full bg-gray-100 dark:bg-zinc-800">

         {/* Header */}
         <Header></Header>

         {/* header mobile */}
         <div className="md:hidden">
            <MobileHeaderWrapper/>
         </div>
        

         {/* main - body */}
         <main>

            {/* title - bg-img */}
            <Title></Title>

            <section className="flex justify-center">
               <div className=" container">

                  <Product></Product>

               </div>
            </section>

         </main> 
        

      </div>
   )
}
