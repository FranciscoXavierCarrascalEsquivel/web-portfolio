"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import MotionWrapper from "./MotionWrapper";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
    navItems: {
        experience: string;
        skills: string;
        languages: string;
        contact: string;
    };
}

export default function Header({ navItems }: HeaderProps) {
    const items = [
        { label: navItems.experience, id: "work-experience" },
        { label: navItems.skills, id: "skills" },
        { label: navItems.languages, id: "languages" },
        { label: navItems.contact, id: "contact" }
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/50 backdrop-blur-md transition-colors duration-300">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-8">
                    <div className="flex items-center space-x-2">
                        <MotionWrapper
                            className="px-4"
                            delay={0.0}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src="/imagenes/logo-def-fx.png" alt="Logo FX" width="75" height="75" />
                        </MotionWrapper>
                        <MotionWrapper
                            className="px-4"
                            delay={0.2}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-xl font-bold hidden md:block text-gray-900 dark:text-white transition-colors duration-300">
                                Francisco Xavier Carrascal Esquivel
                            </h1>
                        </MotionWrapper>
                    </div>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {items.map((item, index) => (
                            <MotionWrapper
                                key={item.label}
                                delay={0.3 + index * 0.1}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <a
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const element = document.getElementById(item.id);
                                        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className="relative px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:text-black dark:hover:text-white group"
                                >
                                    <span className="relative z-10">{item.label}</span>
                                    <span className="absolute inset-0 bg-green-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center border border-green-500/20 backdrop-blur-sm"></span>
                                </a>
                            </MotionWrapper>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <MotionWrapper
                        className="px-4 hidden md:flex items-center gap-4"
                        delay={0.5}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <LanguageSwitcher />
                    </MotionWrapper>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
                                <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <nav className="flex flex-col p-4 space-y-4">
                    {items.map((item) => (
                        <a
                            key={item.label}
                            href={`#${item.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setIsMenuOpen(false);
                                const element = document.getElementById(item.id);
                                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                            className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
