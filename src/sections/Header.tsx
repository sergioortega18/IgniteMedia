"use client";

import { FC, useState } from "react";
import Button from "@/components/Button";
import { motion } from 'framer-motion';


const navItems = [
    {
        label: "About",
        href: "#intro",
    },
    {
        label: "Selected Works",
        href: "#projects",
    },
    {
        label: "Testimonials",
        href: "#testimonials",
    },
    {
        label: "FAQs",
        href: "#faqs",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickMobileNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsOpen(false);

        const url = new URL(e.currentTarget.href);
        const hash = url.hash;
        const target = document.querySelector(hash);
        if(!target) return;
        target.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <header className="relative">
            <motion.div 
                className="fixed px-6 top-0 left-0 w-full overflow-hidden bg-stone-900 z-10 "
                initial={{ height: "0vh" }}
                animate={{ height: isOpen ? "100vh" : "0vh" }}
                transition={{ duration: 0.5 }}
            >
                <nav className="mt-20 flex flex-col">
                    {navItems.map(({ label, href }) => (
                        <a href={href} key={label} 
                            className="text-stone-200 border-t last:border-b border-stone-800 py-8 group/nav-item relative isolate"
                            onClick={handleClickMobileNavItem}
                        >
                            <div className="container !max-w-full flex items-center justify-between font-sans">
                                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500 font-sans">{label} </span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth="1.5" 
                                    stroke="currentColor" 
                                    className="size-6"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" 
                                    />
                                </svg>
                            </div>
                            <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
                        </a>
                    ))}
                </nav>
            </motion.div>
            
{ /*Logo */}
           <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-sm z-10">
                <div className="pt-0 px-6 !max-w-full">
                    <div className="flex justify-between h-14 items-center">
                        <div>
                            <a href="hero"
                            onClick={handleClickMobileNavItem}
                            >
                                <span className="text-[12px] uppercase text-white font-serif">
                                    IGNITE
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

{ /*Boton gira */}
            <div className="fixed top-0 left-0 w-full z-10">
                <div className="pt-0 px-6 !max-w-full">
                    <div className="flex justify-end h-12 items-center">
                        <div className="flex items-center gap-4">

                            <button
                                className="size-8 border border-stone-400 rounded-full inline-flex items-center justify-center bg-[#FAF6EF}"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <svg 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <motion.rect
                                        x="3"
                                        y="7"
                                        width="18"
                                        height="2"
                                        fill="currentColor"
                                        initial={{y: 0, rotate: 0}} 
                                        animate={{
                                            y: isOpen ? 4 : 0,
                                            rotate: isOpen ? 45 : 0
                                        }}
                                        style={{
                                            originX: "12px",
                                            originY: "8px"
                                        }}
                                    />
                                    <motion.rect
                                        x="3"
                                        y="15"
                                        width="18"
                                        height="2"
                                        fill="currentColor"
                                        initial={{y: 0, rotate: 0}} 
                                        animate={{
                                            y: isOpen ? -4 : 0,
                                            rotate: isOpen ? -45 : 0
                                        }}
                                        style={{
                                            originX: "12px",
                                            originY: "16px"
                                        }}
                                    />
                                </svg>
                            </button>
                            
                            <Button variant="primary" className="hidden md:inline-flex text-[12px]">
                                CONTACT US
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;