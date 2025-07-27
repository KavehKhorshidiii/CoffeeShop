import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { TfiLayoutLineSolid } from "react-icons/tfi";

import ShopCartHeader from "./shopCartHeader/shopCartHeader";

export default function header() {
    return (
        //? Header component

        <div className=" max-md:hidden max-lg:px-5 backdrop-blur-[6px] bg-stone-900/80 px-10 py-2.5 top-4 fixed flex left-0 right-0 w-[90%] mx-auto justify-between rounded-3xl">
            {/* left container | basket and login */}
            <div className="flex items-center max-md:gap-0 gap-1.5  text-orange-200">
                {/* login */}

                <div className="flex gap-1.5 mr-2">
                    <a href="">ثبت نام</a>
                    <span>|</span>
                    <a href="">ورود</a>
                </div>

                <span className=" text-amber-50">
                    <TfiLayoutLineSolid className=" rotate-90 text-amber-50"></TfiLayoutLineSolid>
                </span>

                {/* basket shopping */}

                <div className="flex ml-2">
                    <div className="flex items-center py-2 group relative">
                        <FaBasketShopping className=" max-md:size-4 cursor-pointer w-7 h-7" />

                        <div className=" opacity-0 invisible  absolute text-base p-3 w-sm transition-all delay-100 child:transition-colors tracking-normal shadow-2xl flex flex-col items-end bg-white dark:bg-zinc-700 dark:text-white rounded-2xl border-t-[3px]  group-hover:opacity-100 group-hover:visible border-orange-300 text-zinc-700 top-[100%] left-0 ">
                            <ShopCartHeader></ShopCartHeader>
                        </div>
                    </div>
                </div>
            </div>

            {/* right container */}
            <div className=" flex max-lg:gap-3 gap-3.5 child:hover:text-orange-300  items-center">
                {/* header Menu */}

                <a href="">تماس با ما</a>
                <a href="">درباره ما</a>
                <a href="">بلاگ</a>

                <div className="relative group">
                    <a className=" py-5 group-hover:text-orange-300" href="">
                        دیکشنری
                    </a>
                    <div className=" transition-all child:transition-colors tracking-normal shadow-2xl child:hover:text-orange-300 text-base space-y-4 w-52 absolute right-0 top-8 flex flex-col items-end bg-white dark:bg-zinc-700 dark:text-white rounded-2xl border-t-[3px] border-orange-300 text-zinc-700 p-6 invisible opacity-0  group-hover:visible group-hover:opacity-100">
                        <a href="">قهوه ویژه</a>
                        <a href="">ویژه در سطح جهان</a>
                    </div>
                </div>

                <div className="relative group">
                    <a className=" py-5 group-hover:text-orange-300" href="">
                        فروشگاه
                    </a>
                    <div className=" transition-all child:transition-colors tracking-normal font-medium shadow-2xl child:hover:text-orange-300 text-base space-y-4 w-52 absolute right-0 top-8 flex flex-col items-end bg-white dark:bg-zinc-700 dark:text-white rounded-2xl border-t-[3px] border-orange-300 text-zinc-700 p-6 invisible opacity-0  group-hover:visible group-hover:opacity-100">
                        <a href="">قهوه ویژه</a>
                        <a href="">ویژه در سطح جهان</a>
                        <a href="">قهوه درجه یک</a>
                        <a href="">ترکیبات تجاری</a>
                        <a href="">کپسول قهوه</a>
                        <a href="">قهوه زینو برزیلی</a>
                    </div>
                </div>

                <a className="font-black text-orange-200" href="">
                    صفحه اصلی
                </a>

                {/* logo */}

                <a href=""><img className=" max-md:size-8" src="logo/logo.png" alt="" /></a>
            </div>
        </div>
    );
}
