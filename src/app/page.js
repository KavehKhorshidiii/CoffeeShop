import Header from "@/components/header/header/header"
import MobileHeaderWrapper from "@/components/header/mobileHeader/MobileHeaderWrapper"
import Title from "@/components/Home/Title/Title"
import Product from "@/components/Home/products/product"
import CoffeeSection from "@/components/Home/coffee Section/coffeeSection"
import Slider from "@/components/Home/slider/slider"
import TrendingProduct from "@/components/Home/Trending Product/TrendingProduct"
import Club from "@/components/Home/Club/Club"
import AboutMe from "@/components/Home/aboutMe/aboutMe"


export default function Home() {
   return (
      <div className="w-full bg-gray-100 dark:bg-zinc-800">

         {/* Header */}
         <section>
            <Header></Header>
         </section>

         {/* header mobile */}
         <section>
            <div className="md:hidden">
               <MobileHeaderWrapper />
            </div>
         </section>

         {/* main - body */}
         <main>
            
            {/* title - bg-img */}
            <section>
               <Title></Title>
            </section>

            <section className="flex justify-center">
               <div className=" container">
                  {/* products */}
                  <section>
                     <Product></Product>
                  </section>

                  {/* slider */}
                  <section>
                     <Slider></Slider>
                  </section>

                  {/* coffee section */}
                  <section>
                     <CoffeeSection></CoffeeSection>
                  </section>

                  {/* Trending Product */}
                  <section>
                     <TrendingProduct></TrendingProduct>
                  </section>

                  {/* club */}
                  <section>
                     <Club></Club>
                  </section>

                  {/* about me */}
                  <section>
                     <AboutMe></AboutMe>
                  </section>
               </div>
            </section>
         </main>
      </div>
   )
}
