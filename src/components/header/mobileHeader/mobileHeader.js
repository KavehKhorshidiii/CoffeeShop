import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBasketShopping } from "react-icons/fa6";

export default function mobileHeader() {
    return (
        <div className="flex md:hidden w-full static top-0 justify-between p-2 items-center max-md:bg-zinc-700">

            <div>
                <FaBasketShopping></FaBasketShopping>
            </div>

            <img className="text-orange-300" src="logo/app-logo-type.svg" alt="" />

            <div>
                <GiHamburgerMenu></GiHamburgerMenu>
            </div>

        </div>
    );
}
