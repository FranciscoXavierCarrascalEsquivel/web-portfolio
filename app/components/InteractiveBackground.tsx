"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InteractiveBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Center initially
        mouseX.set(window.innerWidth / 2 - 400);
        mouseY.set(window.innerHeight / 2 - 400);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 400);
            mouseY.set(e.clientY - 400);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full blur-[120px]"
                style={{
                    x,
                    y,
                    background: "radial-gradient(circle, rgba(74, 222, 128, 0.4) 0%, rgba(0,0,0,0) 70%)",
                }}
            />
            <div className="absolute inset-0 bg-white/80 dark:bg-transparent transition-colors duration-300" />
        </div>
    );
}
