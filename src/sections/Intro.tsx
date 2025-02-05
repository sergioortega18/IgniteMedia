"use client";

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FC, useEffect, useRef } from 'react';
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';
import Image from 'next/image';
import image1 from "@/assets/images/hero-image.jpg";
import image2 from "@/assets/images/hero-image.jpg";
import image3 from "@/assets/images/hero-image.jpg";

const works = [
    {
        name: "Sarah Chen",
        company: "Pixel Perfect",
        role: "Head of Design",
        quote: "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
        image: image1,
        imagePositionY: 0.2,
    },
    {
        name: "Marcus Rodriguez",
        company: "Craft Coffee Co.",
        role: "Founder",
        quote: "Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
        image: image2,
        imagePositionY: 0.1,
    },
    {
        name: "Emily Watson",
        company: "Studio Minimal",
        role: "Creative Director",
        quote: "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
        image: image3,
        imagePositionY: 0.55,
    },
];

const Intro: FC = () => {

    const titleRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: titleRef,
        offset: ['start end', 'end start'],
    });

    const transformTop = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"]);
    const transformBottom = useTransform(scrollYProgress, [0, 1], ["30%", "-15%"]);

    const sectionRef = useRef(null);
    const { scope, entranceAnimation } = useTextRevealAnimation();
    const inView = useInView(scope, {
        once: true,
    });

    useEffect(() => {
        if (inView) {
            entranceAnimation();
        }
    }, [inView, entranceAnimation]);


    return (
        <section
            className="mt-12 pt-12 md:mt-16 lg:mt-20 relative"
            id="intro"
            ref={sectionRef}
        >
            <div className="px-4 mb-16">
                <h2
                    className="text-[24px] md:text-[50px] lg:text-[75px] md:pl-4 lg:pl-16 mb-8 md:mb-20 md:text-5xl lg:mb-20  md:leading-[1.3] lg:leading-[1.3] lg:w-[80%] font-serif"
                    ref={scope}
                >
                    We Create Comprehensive
                    <br />
                    <span className="italic">and </span>Customized Solutions{' '} <span className="italic"> to </span>
                    <br />
                    Help Our Clients Achieve Their
                    <br />
                    Goals <span className="italic">in the</span> Digital World.
                </h2>

                {/* Grid para todas las pantallas */}
                <div className="grid grid-cols-1 sm:grid-cols-12">
                    {works.map((work, index) => (
                        <div
                            key={index}
                            className={`border-stone-700 ${
                                    index === 0 ? 'sm:col-span-12 md:col-span-5 md:col-start-1 h-[60vh] md:h-[30vh] pb-16' :
                                    index === 1 ? 'sm:col-span-12 md:col-span-5 md:col-start-8 h-[60vh] md:h-[50vh] pb-16' :
                                                  'sm:col-span-12 md:col-span-4 md:col-start-2 h-[60vh] md:h-[20vh]'
                                }`}
                        >
                            <div className="relative w-full overflow-hidden rounded-sm h-full">
                                <Image
                                    src={work.image}
                                    alt={work.name}
                                    fill
                                    style={{ objectPosition: `center ${work.imagePositionY * 100}%` }}
                                    className="size-full object-cover h-full"
                                />
                            </div>
                            <h3 className="text-[18px] md:text-[24px] font-semibold font-serif text-stone-800">{work.name}</h3>
                        </div>
                    ))}
                </div>
                
            </div>
            <div className="flex justify-center pb-24 md:py-40 lg:py-60">
                    <h2 className="text-5xl md:text-8xl lg:text-[234px] flex flex-col overflow-hidden tracking-tighter" ref={titleRef}>
                        <motion.span className="whitespace-nowrap font-serif" style={{ x: transformTop }}>
                            Marketing Narrates, <span className="italic">Conversion</span> Delivers.
                        </motion.span>
                        <motion.span className="whitespace-nowrap self-end font-serif" style={{ x: transformBottom }}>
                            Marketing Narrates, <span className="italic text-[#E61D40]">Conversion</span> Delivers.
                        </motion.span>
                    </h2>
                </div>
        </section>
    );
};

export default Intro;