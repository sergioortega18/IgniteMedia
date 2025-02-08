'use client'; 
import { FC, useEffect } from 'react';
import Button from '@/components/Button';
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';
import { useInView } from 'framer-motion';

const navItems = [
    {
        label: "Lets Talk",
        href: "#intro",
    },
    {
        label: "Instragram",
        href: "#intro",
    },
    {
        label: "Facebook",
        href: "#projects",
    },
    {
        label: "Twitter",
        href: "#testimonials",
    },
];

const Footer: FC = () => {

    const {scope, entranceAnimation } = useTextRevealAnimation();
    const inView = useInView(scope);

    useEffect(() => {
        if(inView) {
            entranceAnimation();
        }
    }, [inView, entranceAnimation]);


    const handleClickMobileNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const url = new URL(e.currentTarget.href);
        const hash = url.hash;
        const target = document.querySelector(hash);
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className='bg-stone-900 text-white font-aeonik' id="contact">
            <div className="px-6 md:px-12 lg:px-20">
                <div className='section relative'>
                    <div className='flex items-center gap-3 pb-6'>
                        <div className='size-3 rounded-full bg-green-400 animate-pulse'></div>
                        <span className='uppercase'>Available Now</span>
                    </div>

                    <div className='grid md:grid-cols-3 md:items-center'>
                        <div className='md:col-span-2'>
                            <h2 className='text-4xl md:text-7xl lg:text-9xl font-serif leading-[1.5]'
                                ref={scope}>Enough talk. <span className='italic'>let&apos;s</span> make something great together.
                            </h2>
                            <Button
                                variant="secondary"
                                className='mt-16'
                                iconAfter={
                                    <div className='size-6 overflow-hidden'>
                                        <div className='w-12 h-6 flex transition-transform duration-500 group-hover/button:-translate-x-1/2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                            </svg>
                                        </div>
                                    </div>
                                }>
                                IgniteMedia.dev@Gmail.com
                            </Button>
                        </div>
                        <div className='md:col-span-1'>
                            <nav className='flex md:items-end flex-col gap-8 mt-16 md:mt-0 font-aeonik'>
                                {navItems.map(({ href, label }) => (
                                    <a href={href} key={label} onClick={handleClickMobileNavItem}>
                                        <Button variant="text" className='text-[18px]'>{label}</Button>
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
                <p className='py-16 text-white/30 text-sm'>Copyright 2025 &copy; ignite Media &bull; All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;

