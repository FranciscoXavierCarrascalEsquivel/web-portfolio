"use client";

import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

interface LanguageSectionProps {
    title: string;
    levels: {
        native: string;
        b2: string;
        a1: string;
    };
}

export default function LanguageSection({ title, levels }: LanguageSectionProps) {
    const languages = [
        {
            name: "Español",
            level: levels.native,
            flag: "/flags/es.png",
            color: "from-red-500 to-yellow-500"
        },
        {
            name: "Català",
            level: levels.native,
            flag: "/flags/cat.svg",
            color: "from-yellow-400 to-red-500"
        },
        {
            name: "English",
            level: levels.b2,
            flag: "/flags/en.svg",
            color: "from-blue-600 to-red-600"
        },
        {
            name: "Deutsch",
            level: levels.a1,
            flag: "/flags/de.svg",
            color: "from-black to-yellow-500"
        },
    ];

    return (
        <section id="languages" className="w-full max-w-6xl mx-auto px-4 py-20 scroll-mt-24">
            <MotionWrapper useScroll delay={0.1}>
                <h2 className="text-4xl font-bold text-center mb-16 text-white">
                    {title}
                </h2>
            </MotionWrapper>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {languages.map((lang, index) => (
                    <MotionWrapper
                        key={lang.name}
                        delay={0.2 + index * 0.1}
                        className="group relative"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500" />

                        <div className="relative h-full bg-gray-900 rounded-2xl p-6 flex flex-col items-center justify-center border border-gray-800 transition-transform duration-300 group-hover:-translate-y-2">
                            <div className="w-20 h-20 mb-6 rounded-full overflow-hidden shadow-lg border-4 border-gray-800">
                                <img
                                    src={lang.flag}
                                    alt={`${lang.name} flag`}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">
                                {lang.name}
                            </h3>

                            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-800 text-gray-300 border border-gray-700 text-center">
                                {lang.level}
                            </span>
                        </div>
                    </MotionWrapper>
                ))}
            </div>
        </section>
    );
}
