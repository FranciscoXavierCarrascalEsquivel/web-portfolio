"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function TypewriterText({ text, className = "", delay = 0 }: TypewriterTextProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay * 1000);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Typing speed

        return () => clearInterval(interval);
    }, [started, text]);

    return (
        <span className={`inline-block ${className}`}>
            {displayedText}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="inline-block ml-1 w-1 h-[1em] bg-green-500 align-middle"
            />
        </span>
    );
}
