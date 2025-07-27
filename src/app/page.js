import Header from "@/components/header/header";
import MobileHeader from "@/components/header/mobileHeader/mobileHeader";

export default function Home() {
    return (
        <div className=" md:bg-[url(/bg-img/bgi.webp)] bg-contain bg-no-repeat bg-gray-100 dark:bg-zinc-800">
            <Header></Header>
            <MobileHeader></MobileHeader>
            <h1 className="h-[1000px]"></h1>
        </div>
    );
}
