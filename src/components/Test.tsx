import { useEffect } from 'react';
import { usePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface TestProps extends HTMLAttributes<HTMLDivElement> {
  quote: string;
  name: string;
  role: string;
  company: string;
  imagePositionY: number;
  image: string | StaticImport;
  className?: string;
}

const Test = (props: TestProps) => {
  const { quote, name, role, company, imagePositionY, image, className, ...rest } = props;

  const { scope: quoteScope, entranceAnimation: quoteEntranceAnimation, exitAnimation: quoteExitAnimation } = useTextRevealAnimation();
  const { scope: citeScope, entranceAnimation: citeEntranceAnimation, exitAnimation: citeExitAnimation } = useTextRevealAnimation();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      quoteEntranceAnimation().then(() => {
        citeEntranceAnimation();
      });
    } else {
      Promise.all([quoteExitAnimation(), citeExitAnimation()]).then(() => {
        safeToRemove();
      });
    }
  }, [isPresent, quoteEntranceAnimation, quoteExitAnimation, citeEntranceAnimation, citeExitAnimation, safeToRemove]);

  return (
    <div className={twMerge("grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center", className)} {...rest}>
      <div className="aspect-square md:aspect-[9/16] md:col-span-2 relative">
        <motion.div
          className="absolute h-full bg-stone-900"
          initial={{
            width: "100%",
          }}
          animate={{ width: "0%" }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        <Image
          src={image}
          alt={name}
          className="size-full object-cover"
          style={{ objectPosition: `center ${imagePositionY * 100}%` }}
        />
      </div>
      <div className="md:col-span-3">
        <blockquote ref={quoteScope} className="text-2xl font-serif leading-relaxed">
          {quote}
        </blockquote>
        <cite ref={citeScope} className="block mt-4 text-lg font-semibold">
          {name}, {role} at {company}
        </cite>
      </div>
    </div>
  );
};

export default Test;