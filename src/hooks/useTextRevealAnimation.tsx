import { useEffect } from "react";
import SplitType from "split-type";
import { stagger, useAnimate } from "framer-motion";

const useTextRevealAnimation = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        new SplitType(scope.current, {
            types: 'lines,words',
            tagName: "span",
        });
    }, [scope]);
    
    const entranceAnimation = () => {
        return animate(scope.current.querySelectorAll('.word'), 
            { 
                opacity: [0, 1],
                transform: ["translateY(100%)", "translateY(0%)"],
            }, 
            {
                duration: 0.6,
                delay: stagger(0.1),
                ease: "easeOut",
            }
        );
    };

    const exitAnimation = () => {
        return animate(scope.current.querySelectorAll('.word'), 
            { 
                opacity: [1, 0],
                transform: ["translateY(0%)", "translateY(100%)"],
            }, 
            {
                duration: 0.6,
                delay: stagger(-0.05, {
                    from: "last",
                }),
                ease: "easeIn",
            }
        );
    }

    return {
        scope,
        entranceAnimation,
        exitAnimation,
    };
};

export default useTextRevealAnimation;