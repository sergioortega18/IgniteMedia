import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = (
    props: {
        variant: "primary" | "secondary" | "text";
        iconAfter?: ReactNode;
    } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
    const { className, children, variant, iconAfter,  ...rest } = props;
    return (
        <button className={twMerge(
            "h-8 md:h-11 px-4 rounded-md border border-stone-700 inline-flex items-center gap-2 transition duration-500n relative group/button",
            variant === "primary" && "bg-black text-white",
            variant === "secondary" && "hover:bg-red-orange-500 hover:text-white",
            variant === "text" && "h-auto px-0 border-transparent after:transition-all after:duration-500 after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-orange-500 hover:after:w-full",
            className
        )}
        {...rest}
    >
            <span>{children}</span>
            {iconAfter && <span>{iconAfter}</span>}
        </button>
    )
}
export default Button;