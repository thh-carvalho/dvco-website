'use client'

import React from 'react'
import Image from 'next/image'
import ButtomHome from './ButtonHome'

export default function HomePage(){
    const imageSrc = '/dvco-website'
    return (
            <main className={`bg-[url('${imageSrc}/bg-home.png')] p-5 h-[100vh] w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center gap-[32px] row-start-2 items-center sm:items-start`}>
               <div className='w-full lg:w-[510PX]'>
                     <Image
                        className="dark:invert"
                        src= {imageSrc + "/dvco-logo.PNG"} 
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                    />
                    <h1 className="text-[#fff] pt-5">Seu parceiro em soluções de marketing digital e tecnologia. Te ajudamos a entender
                        o comportamento do seu público e no posicionamento do seu negócio.
                    </h1>

                    <ButtomHome />
               </div>
            </main>
    )
}