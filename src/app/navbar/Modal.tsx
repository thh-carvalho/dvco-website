'use client'

import React, { useEffect } from 'react'

export default function Modal({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }){
  
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isOpen) {
            onClose();
        }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
        document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return(
        <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 lg:w-[200px] lg:border-l lg:border-white">
            <div className="relative h-[10px] w-[10px]" onClick={(e) => e.stopPropagation()}>
                {children}
                <button className="fixed top-0 right-0 pt-3 pr-3 cursor-pointer text-[#ffffff] text-[20px]" onClick={onClose}>
                    &times;
                </button>
            </div>
            <div>
                <li className='border-b border-white text-[#ffffff] pb'><a href="#home-section" className='text-[#ffffff]' onClick={onClose}>Home</a></li>
                <li className='border-b border-white text-[#ffffff] pt-5'><a href="#about-section" className='text-[#ffffff]' onClick={onClose}>O que fazemos</a></li>
                <li className='border-b border-white text-[#ffffff] pt-5'><a href="#contact-section" className='text-[#ffffff]' onClick={onClose}>Entre em contato</a></li>
            </div>
        </div>
    )
}