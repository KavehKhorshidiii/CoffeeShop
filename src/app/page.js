import Header from "@/components/header/header";


export default function Home() {

  return (
      <div className=" bg-[url(/bg-img/bgi.webp)] bg-contain bg-no-repeat bg-gray-100 dark:bg-zinc-800">
        <Header></Header>
        <h1 className="h-[1000px]"></h1>
      </div>
  );
}