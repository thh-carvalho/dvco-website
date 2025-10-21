'use client'

import React from 'react';
import Image from 'next/image'

export default function About(){

    const imageSrc = '/dvco-website'
    return (
        <section id='about-section' className='p-5'> 
            <h2 className='text-[#ffffff] pb-5 text-[20px] font-semibold'>O que fazemos</h2>

            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-5 lg:flex-row lg:mb-10 lg:justify-between lg-mb-5'>
                     <div className='flex flex-col gap-2 rounded animate-rotate-border bg-conic/[from_var(--border-angle)] from-[#050603] via-white to-[#050603] from-80% via-90% to-100% lg:w-[30%] lg:p-[0.5px] lg:pr-[1px] lg:pb-[1px]'>
                        <div className='bg-[#050603] rounded py-5 px-1 lg:h-[99.9%]'>
                                <p className='text-[#ffffff] flex items-center font-semibold'>
                                    <Image
                                        className="dark:invert"
                                        src={imageSrc + "/development.png"}
                                        alt="Next.js logo"
                                        width={50}
                                        height={50}
                                        priority
                                    />

                                    Desenvolvimento</p>
                                <p className='text-[#ffffff]'>Desenvolvimento de sites e Landing Page para o seu negócio.</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 rounded animate-rotate-border bg-conic/[from_var(--border-angle)] from-[#050603] via-white to-[#050603] from-80% via-90% to-100% lg:w-[30%] lg:p-[0.5px] lg:pr-[1px] lg:pb-[1px]'>
                        <div className='bg-[#050603] rounded py-5 px-1 lg:h-[99.9%]'>
                            <p className='text-[#ffffff] flex items-center font-semibold'>
                            <Image
                                className="dark:invert"
                                src={imageSrc + "/web-analytics.png"}
                                alt="Next.js logo"
                                width={50}
                                height={50}
                                priority
                            />
                            Web Anaytics</p>
                        <p className='text-[#ffffff]'>Análise web do seu negócio para entender a jornada do usuário
                            e como otimizar o processo de compra.
                        </p>
                        </div>
                    </div>

                     <div className='flex flex-col gap-2 rounded animate-rotate-border bg-conic/[from_var(--border-angle)] from-[#050603] via-white to-[#050603] from-80% via-90% to-100% lg:w-[30%] lg:p-[0.5px] lg:pr-[1px] lg:pb-[1px]'>
                        <div className='bg-[#050603] rounded py-5 px-1 lg:h-[99.9%]'>
                            <p className='text-[#ffffff] flex items-center font-semibold'>
                                <Image
                                    className="dark:invert"
                                    src={imageSrc + "/data-tracking.png"}
                                    alt="Next.js logo"
                                    width={50}
                                    height={50}
                                    priority
                                />
                                Data Tracking</p>
                            <p className='text-[#ffffff]'>Configuração de eventos personalizados em ambientes web para
                                entender o comportamento do usuário.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 lg:flex-row lg:justify-around lg:pb-10'>
                    <div className='flex flex-col gap-2 rounded animate-rotate-border bg-conic/[from_var(--border-angle)] from-[#050603] via-white to-[#050603] from-80% via-90% to-100% lg:w-[30%] lg:p-[0.5px] lg:pr-[1px] lg:pb-[1px] lg:pt-[1px] lg:items-center'>
                        <div className='bg-[#050603] rounded py-5 px-1'>
                            <p className='text-[#ffffff] flex items-center font-semibold'>
                            <Image
                                className="dark:invert"
                                src={imageSrc + "/digital-marketing.png"}
                                alt="Next.js logo"
                                width={50}
                                height={50}
                                priority
                            />
                            Marketing Digital</p>
                            <p className='text-[#ffffff]'>Extratégia e configuração de campanhas de marketing digital 
                                em plataformas de mídia.
                            </p>
                        </div>
                    </div>
                     <div className='flex flex-col gap-2 rounded animate-rotate-border bg-conic/[from_var(--border-angle)] from-[#050603] via-white to-[#050603] from-80% via-90% to-100% lg:w-[30%] lg:p-[0.5px] lg:pr-[1px] lg:pb-[1px] lg:pt-[1px] lg:items-center'>
                        <div className='bg-[#050603] rounded py-5 px-1'>
                            <p className='text-[#ffffff] flex items-center font-semibold'>
                            <Image
                                className="dark:invert"
                                src={imageSrc + "/ab-test.png"}
                                alt="Next.js logo"
                                width={50}
                                height={50}
                                priority
                            />
                            CRO</p>
                            <p className='text-[#ffffff]'>Configuração de teste AB para otimizar e melhorar
                                as estratégia de vendas.
                            </p>
                        </div>      
                    </div>
                </div>
            </div>
        </section>
    )
}