// components/Navbar.tsx (or similar)
import React from "react";
import Image from "next/image";
import ButtomMobile from "./buttom-mobile";

const BASE_PATH: string = process.env.NEXT_PUBLIC_IMAGE_BASE_PATH;

export default function Navbar() {
    // 2. Construct the full image source URL
    // Use BASE_PATH (e.g., /dev-images) + '/' + imageName (dvco-logo.PNG
    // We add a check for BASE_PATH, although it should be set.
    const imageSrc = BASE_PATH ? `${BASE_PATH}/dvco-logo.PNG` : `/dvco-logo.PNG`

    console.log(BASE_PATH, ': esse é o base path')

    return (
        <div className="p-5 fixed w-full top-0 z-50">
             <nav className="justify-between flex items-center w-full border-b border-white pb-5">
                 <Image
                    className="dark:invert"
                    src={imageSrc} // 3. Use the dynamic path here
                    alt="logo"
                    width={90}
                    height={30}
                    priority
                />
                <ButtomMobile />
            </nav>
        </div>
    )
}