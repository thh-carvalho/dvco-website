'use client'

import React from 'react'
import ButtonContact from './ButtonContact'

export default function Contact(){
    return (
        <section className="p-5">
            <h2 className='text-[#ffffff] pb-5 text-[20px] font-semibold'>Entre em contato</h2>
            <div className='flex flex-col gap-5'>
                <p className='text-[#ffffff] text-[16px]'>Nos envie uma mensagem que logo um de nossos consultores entrará em contato.</p>

                <div>
                    <form action="">
                        {/* <input className='w-full p-1 mb-2 h-[50px] rounded-sm border-[1px] border-[#fafafafa] text-[#fafafa]' type="text" placeholder='Nome' />
                        <input className='w-full p-1 mb-2 h-[50px] rounded-sm border-[1px] border-[#fafafafa] text-[#fafafa]' type="email" placeholder='E-mail' />
                        <textarea className='w-full p-1 mb-2 h-[100px] rounded-sm border-[1px] border-[#fafafafa] text-[#fafafa]' placeholder='Mensagem'></textarea> */}
                        
                        
                    </form>
                    <ButtonContact />
                </div>
            </div>
        </section>
    )
}