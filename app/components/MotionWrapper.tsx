"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps extends MotionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    useScroll?: boolean;
}

export default function MotionWrapper({
    children,
    className = "",
    delay = 0,
    transition,
    useScroll = false,
    ...props
}: MotionWrapperProps) {
    const animationProps = useScroll
        ? {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: false, amount: 0.3 },
        }
        : {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
        };

    return (
        <motion.div
            {...animationProps}
            transition={{
                duration: 0.5,
                ...(transition as object),
                delay
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
