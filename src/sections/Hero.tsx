"use client";

import { FC, useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import heroImage from '@assets/images/hero-image.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: FC = () => {
    const scrollindDiv = useRef(null);

    const { scrollYProgress } = useScroll({
        target: scrollindDiv,
        offset: ["start end", "end end"],
    });

    const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

    return (
        <section className="relative" id="about">
            <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0 z-0">
                {/* Columna izquierda: Texto */}
                <div className="md:col-span-7 flex flex-col justify-center">
                    <div className=" containter !max-w-full ml-4 md:ml-7">
                        <motion.div
                            className="text-[48px] md:text-[55px] lg:text-[112px] mt-32 md:mt-0 font-serif leading-[1.2] ]"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1>
                                Taste-led
                                <br />
                                Growth Studio
                                <br />
                                <span className="italic">from </span>Medellin
                            </h1>
                        </motion.div>
                        
                        <motion.div
                            className="text-[14px] md:text-[18px] lg:text-[24px] mt-6  font-light leading-[1.2] lg:leading-[1.3]"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h4>
                                We want to help individuals and businesses
                                <br />
                                maximize the value of their virtual content,
                                <br />
                                reducing complexity and improving productivity.
                            </h4>
                        </motion.div>

                        <div className="flex flex-col md:flex-row md:items-center mt-5 md:mt-8 items-start gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <Button
                                    variant="primary"
                                    iconAfter={
                                        <div className="overflow-hidden size-5">
                                            <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                                                    />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    }
                                >
                                    <span className='text-[12px] lg:text-[24px]'>INTRO CALL</span>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Columna derecha: Imagen */}
                <div className="md:col-span-5 relative">
                    <motion.div
                        className="mt-12 md:mt-0 md:size-full md:absolute md:right-0 max-md:!w-full"
                        style={{ width: portraitWidth }}
                    >
                        <Image
                            src={heroImage}
                            alt="My Portrait"
                            priority
                            className="size-full object-cover h-screen"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Espacio para el scroll */}
            <div className="md:h-[200vh] relative" ref={scrollindDiv}></div>
        </section>
    );
};

export default Hero;