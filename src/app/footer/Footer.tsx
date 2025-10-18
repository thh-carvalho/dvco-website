'use client'

import React from 'react'

export default function Footer(){
    return (
        <div className='w-full h-[100px] p-5 border-t border-white'>
            <div className='w-full'>
                <div>
                    <p className='text-[#fafafa] text-[16px]'>Contato</p>
                    <address>
                        <a className='text-[#fafafa] text-[14px]' href="tel:+551199808089734567890">+55 (11) 98941-6460</a>
                    </address>
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
                <p className='text-[#fafafa] text-[12px]'>© 2025 DVCO</p>
            </div>
        </div>
    )
}