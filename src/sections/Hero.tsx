"use client";

import { FC, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';

const Hero: FC = () => {
    
    const {scope, entranceAnimation} = useTextRevealAnimation();
    useEffect(() => {
        entranceAnimation();
    }, [entranceAnimation]);

    return (
        <section
            id='hero'
            className="relative mt-64 md:mt-0 md:h-screen flex flex-col justify-end px-6 pb-12 mb-8">

            <motion.div
                className="text-[13vw] md:text-[14vw] font-serif leading-[1.2] lg:leading-[1.1]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                ref={scope}
            >
                Taste-led
                <br />
                Growth Studio
                <br />
                <span className="italic">from {' '}</span>Medellin
            </motion.div>


        </section>
    );
};

export default Hero;