'use client'

import React from 'react'

export default function ButtomMobile(){
    return (
        <button className="group flex flex-col justify-around w-8 h-8 cursor-pointer relative"
        aria-label="Toggle Menu"
        id="menu-toggle">
            <span className="bg-[#fff] h-0.5 w-full rounded transition-all duration-300 ease-out"></span>
            <span className="bg-[#fff] h-0.5 w-full rounded transition-all duration-300 ease-out"></span>
            <span className="bg-[#fff] h-0.5 w-full rounded transition-all duration-300 ease-out"></span>
        </button>
    )

}