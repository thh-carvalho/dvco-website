'use client'

import React from 'react'
import { useState } from "react";
import Modal from './Modal';

export default function ButtomMobile(){
        const [isModalOpen, setIsModalOpen] = useState(false);

        const openModal = () => setIsModalOpen(true);
        const closeModal = () => setIsModalOpen(false);

    return(
        <div>
            <button onClick={openModal} className="group flex flex-col justify-around w-8 h-8 cursor-pointer relative"
            aria-label="Toggle Menu"
            id="menu-toggle">
                    <span className="bg-[#fff] h-0.5 w-full rounded transition-all duration-300 ease-out"></span>
                    <span className="bg-[#fff] h-0.5 w-full rounded transition-all duration-300 ease-out"></span>
                    <span className="bg-[#fff] h-0.5 w-full rounded transition-all duration-300 ease-out"></span>
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal} children={undefined}>
            </Modal>

        </div>
    )

}