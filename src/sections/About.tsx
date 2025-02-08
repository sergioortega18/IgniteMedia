"use client";

import { FC, useEffect } from 'react';
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';
import image1 from "@/assets/images/project-1.jpg";
import image2 from "@/assets/images/project-2.jpg";
import image3 from "@/assets/images/project-3.jpg";
import image4 from "@/assets/images/project-4.jpg";
import image5 from "@/assets/images/project-5.jpg";
import Image from "next/image";

const projects = [
    {
        name: "Artisan Brew Co.",
        image: image1,
    },
    {
        name: "Wavelength Studios",
        image: image2,
    },
    {
        name: "Nova Fitness",
        image: image3,
    },
    {
        name: "Urban Plates",
        image: image4,
    },
    {
        name: "Bloom Botanicals",
        image: image5,
    },
];

const Intro: FC = () => {
    const { scope, entranceAnimation } = useTextRevealAnimation();
    const inView = useInView(scope);

    useEffect(() => {
        if (inView) {
            entranceAnimation();
        }
    }, [inView, entranceAnimation]);

    return (
        <section
            className="section relative text-[#E61D40] text-[16px] md:text-[16px] lg:text-[32px] font-sans font-light leading-[1.2] uppercase"
            id="intro"
        >
            <div className='px-4'>
                <div
                    className='text-[#E61D40] text-[16px] md:text-[24px] lg:text-[32px] font-sans font-light leading-[1.2] uppercase'
                    ref={scope}
                >
                    <p className="md:px-36 pb-8">
                        We Create Comprehensive and Customized Solutions to Help Our Clients Achieve Their
                        Goals in the Digital World.
                    </p>
                    <p className='md:mb-20 pb-8 md:pl-48 md:pr-20'>
                        We specialize in holistic growth solutions for brands across tech, CPG, hospitality, and luxury brands.
                        We specialize in content creation, social media advertising, Google advertising, and event strategy.
                        Our mission at IGNITE MEDIA is to help beloved brands grow efficiently, sustainably, and profitably.
                    </p>
                </div>

                <div className="mt-6 md:mt-16">
                    {projects.map(({ name, image }) => (
                        <a
                            href='#'
                            key={name}
                            className="border-t last:border-b border-stone-400 border-dotted md:py-8 flex flex-col relative group/project"
                            aria-label={`View ${name} project`}
                        >
                            <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-stone-300"></div>

                            <div className="relative">
                                <div className="my-4 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
                                    <div className="md:ml-6 lg:group-hover/project:pl-12 transition-all duration-700">
                                        <h3 className="text-[38px] font-serif md:text-[7vw]">{name}</h3>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute aspect-video w-full top-1/2 -translate-y-1/2 opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-100 lg:group-hover/project:scale-120 transition-all duration-500 z-10">
                                            <Image
                                                src={image}
                                                alt={`${name} image`}
                                                className="size-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="lg:group-hover/project:px-8 transition-all duration-500">
                                        <div className="size-6 overflow-hidden">
                                            <div className="h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-transform duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:hidden">
                                    <div className="relative w-full pt-[177.778%]"> {/* 16:9 aspect ratio */}
                                        <Image
                                            src={image}
                                            alt={`${name} image`}
                                            fill
                                            className="absolute top-0 left-0 w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Intro;