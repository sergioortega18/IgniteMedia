"use client";

import { AnimatePresence, motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';
import image1 from "@/assets/images/hero-image.jpg";
import image2 from "@/assets/images/hero-image.jpg";
import image3 from "@/assets/images/hero-image.jpg";
import Test from '@/components/Test';

const abouts = [
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
        imagePositionY: 0.2,
    },
    {
        name: "Emily Watson",
        company: "Studio Minimal",
        role: "Creative Director",
        quote: "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
        image: image3,
        imagePositionY: 0.2,
    },
];

const About: FC = () => {

    const titleRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: titleRef,
        offset: ['start end', 'end start'],
    });

    const transformTop = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"]);
    const transformBottom = useTransform(scrollYProgress, [0, 1], ["10%", "-15%"]);
    
    const sectionRef = useRef(null);
    const { scope, entranceAnimation } = useTextRevealAnimation();
    const inView = useInView(scope, {
        once: true,
    });

    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (inView && !hasAnimated) {
            entranceAnimation();
            setHasAnimated(true);
        }
    }, [inView, entranceAnimation, hasAnimated]);

    const [testimonialIndex, setTestimonialIndex] = useState(0);

    const handleClickPrev = useCallback(() => {
        setTestimonialIndex((prevIndex) => (prevIndex - 1 + abouts.length) % abouts.length);
    }, []);

    const handleClickNext = useCallback(() => {
        setTestimonialIndex((prevIndex) => (prevIndex + 1) % abouts.length);
    }, []);

    return (
        <section
            className="relative"
            id="about"
            ref={sectionRef}
        >
            <div className='px-4 md:px-6 pt-12 md:pt-56 lg:mx-16 pb-12'>
                <div ref={scope}>
                    <h2
                        className="text-[32px] md:text-[75px] lg:text-[96px] leading-[1.2] lg:w-[80%] font-serif"
                    >
                        We <span className='italic'>are a </span> Tasted-led
                        <br />
                        Growth Studio <span className="italic"> from</span>
                        <br />
                        Medellin
                        <br />
                    </h2>

                    <p className='font-medium font-sans text-[12px] md:text-[22px] lg:text-[28px] pt-6 lg:pt-9  md:leading-[1.3] lg:w-[80%]'>
                        {/* <span className='font-semibold font-sans'>IGNITE MEDIA</span> is a creative growth studio led by taste. We specialize in holistic growth solutions for brands across tech, CPG, hospitality, and luxury brands. We specialize in paid social advertising, Google advertising, content creation, and event strategy. Our mission at IGNITE MEDIA is to help beloved brands grow efficiently, sustainably, and profitably. */}
                    </p>
                </div>

                <div className="relative">
                    <div className="mt-8 md:mt-14">
                        <AnimatePresence mode="wait" initial={false}>
                            {abouts.map((about, index) => (
                                index === testimonialIndex && (
                                    <Test
                                        key={about.name}
                                        name={about.name}
                                        company={about.company}
                                        role={about.role}
                                        quote={about.quote}
                                        image={about.image}
                                        imagePositionY={about.imagePositionY}
                                    />
                                )
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="flex gap-4 mt-6 lg:mt-10">
                        <button
                            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full"
                            onClick={handleClickPrev}
                            aria-label="Previous testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>
                        <button
                            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full"
                            onClick={handleClickNext}
                            aria-label="Next testimonial"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            
            <div className="flex justify-center py-8 md:py-20">
                    <h2 className="text-5xl md:text-8xl lg:text-[234px] flex flex-col overflow-hidden tracking-tighter" ref={titleRef}>
                        <motion.span className="whitespace-nowrap font-serif" style={{ x: transformTop }}>
                        Get <span className="italic">in </span> Touch Get <span className="italic">in </span> Touch   
                        </motion.span>
                        <motion.span className="whitespace-nowrap self-end font-serif" style={{ x: transformBottom }}>
                        Get <span className="italic text-[#E61D40]">in</span> Touch Get <span className="italic text-[#E61D40]">in</span> Touch
                        </motion.span>
                    </h2>
            </div>
        </section>
    );
};

export default About;