"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
    const navItems = ["Work Experience", "Skills", "Languages", "Contact"];

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

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item, index) => (
                            <MotionWrapper
                                key={item}
                                delay={0.3 + index * 0.1}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <a
                                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const element = document.getElementById(item.toLowerCase().replace(" ", "-"));
                                        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }}
                                    className="relative px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300 hover:text-black dark:hover:text-white group"
                                >
                                    <span className="relative z-10">{item}</span>
                                    <span className="absolute inset-0 bg-green-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center border border-green-500/20 backdrop-blur-sm"></span>
                                </a>
                            </MotionWrapper>
                        ))}
                    </nav>
                </div>

                <MotionWrapper
                    className="px-4 flex items-center gap-4"
                    delay={0.5}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <LanguageSwitcher />
                </MotionWrapper>
            </div>
        </header>
    );
}
