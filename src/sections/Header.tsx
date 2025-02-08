"use client";

import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
    const handleClickMobileNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const url = new URL(e.currentTarget.href);
        const hash = url.hash;
        const target = document.querySelector(hash);
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full backdrop-blur-sm z-10">
                <div className="p-2 md:p-4">
                    <nav className="flex justify-between items-start h-12">
                        {/* Logo */}
                        <Link
                            href="#hero"
                            onClick={handleClickMobileNavItem}
                            className="text-[14px] uppercase font-sans text-[#E61D40]"
                        >
                            ignite Media
                        </Link>

                        {/* Tailwind styled button */}
                        <Link
                            href="#contact"
                            onClick={handleClickMobileNavItem}
                            className="inline-flex items-center justify-end px-1 py-1 text-[14px] text-[#E61D40]"
                        >
                            LET&apos;S TALK
                        </Link>
                    </nav>
                </div>
            </header>

            <div className="fixed bottom-0 left-0 w-full p-2 md:p-4 z-10 flex justify-between items-center hidden md:flex">
                <div>2025</div>
                <div>icon</div>
            </div>
        </>
    );
};

export default Header;