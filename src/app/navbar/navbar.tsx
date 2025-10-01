import React from "react";
import Image from "next/image";
import ButtomMobile from "./buttom-mobile";

export default function Navbar(){
    return (
        <div className="p-5 fixed w-full top-0 z-50">
            <nav className="justify-between flex items-center w-full border-b border-white pb-5">
                <Image
                    className="dark:invert"
                    src="/dvco-logo.PNG"
                    alt="Next.js logo"
                    width={90}
                    height={30}
                    priority
                />

                <ButtomMobile />
            </nav>
        </div>
    )
}