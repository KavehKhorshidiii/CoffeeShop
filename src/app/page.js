import Header from "@/components/header/header/header"
import MobileHeaderWrapper from "@/components/header/mobileHeader/MobileHeaderWrapper"
import Title from "@/components/Home/Title/Title"
import Product from "@/components/Home/products/product"
import CoffeeSection from "@/components/Home/coffee Section/coffeeSection"
import Slider from "@/components/Home/slider/slider"


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

                  {/* products */}
                  <Product></Product>

                  {/* coffee section */}
                  <CoffeeSection></CoffeeSection>

                  {/* slider */}
                  <Slider></Slider>
               </div>
            </section>

         </main> 
        

      </div>
   )
}
