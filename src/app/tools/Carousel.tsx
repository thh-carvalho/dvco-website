'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default function Carousel(){
    return (
         <Swiper
            modules={[Autoplay]}
            autoplay={{
                 delay: 0, 
                disableOnInteraction: false,
            }}
            loop={true}
            speed={10000} 
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
                // When screen width is >= 480px
                350: {
                slidesPerView: 2, // Show 2 slides
                spaceBetween: 20,
                },
                // When screen width is >= 768px (Standard tablet size)
                768: {
                slidesPerView: 3, // Show 3 slides
                spaceBetween: 30,
                },
                // When screen width is >= 1024px (Standard desktop size)
                1024: {
                slidesPerView: 4, // Show 4 slides
                spaceBetween: 40,
                },
            }}
            // spaceBetween={50}
            className='h-full flex justify-center items-center'
            >
            <SwiperSlide>
                <div className='h-full flex justify-center items-center'>
                    <Image 
                    src="/google-analytics.png"
                    height={60}
                    width={100} 
                    alt="Google Analytics"
                    />
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className='h-full flex justify-center items-center'>
                    <Image 
                    src="/google-tag-manager.png"
                    height={60}
                    width={100} 
                    alt="Google Tag Manager"
                    />
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className='h-full flex justify-center items-center'>
                    <Image 
                    src="/next-js-logo.png"
                    height={60}
                    width={100} 
                    alt="Next.js"
                    />
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className='h-full flex justify-center items-center'>
                    <Image 
                    src="/react-js.logo.png"
                    height={60}
                    width={100} 
                    alt="React.js"
                    />
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className='h-full flex justify-center items-center'>
                    <Image 
                    src="/adobe-analytics.png"
                    height={60}
                    width={100} 
                    alt="Adobe Analytics"
                    />
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className='h-full flex justify-center items-center'>
                    <Image 
                    src="/adobe-target.png"
                    height={60}
                    width={100} 
                    alt="Adobe Target"
                    />
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className='h-full flex justify-center items-center'>
                    <Image 
                    src="/webflow.png"
                    height={60}
                    width={100} 
                    alt="Webflow"
                    />
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className='h-full flex justify-center items-center'>
                    <Image 
                    src="/meta-logo.png"
                    height={60}
                    width={100} 
                    alt="Meta - Facebook, Instagram"
                    />
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className='h-full flex justify-center items-center'>
                    <Image 
                    src="/tiktok-logo.png"
                    height={60}
                    width={100} 
                    alt="Tiktok"
                    />
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className='h-full flex justify-center items-center'>
                    <Image 
                    src="/crazy-egg-Logo.png"
                    height={60}
                    width={100} 
                    alt="CrazyEgg"
                    />
                </div>
            </SwiperSlide>
             <SwiperSlide>
                <div className='h-full flex justify-center items-center'>
                    <Image 
                    src="/hotmart-logo.png"
                    height={60}
                    width={100} 
                    alt="Hotmart"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}