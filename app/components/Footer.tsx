"use client";

import { Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
    rightsText: string;
}

export default function Footer({ rightsText }: FooterProps) {
    return (
        <footer className="w-full py-8 mt-20 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                    © {new Date().getFullYear()} Francisco Xavier Carrascal Esquivel. {rightsText}
                </div>

                <div className="flex gap-6">
                    <a
                        href="https://www.linkedin.com/in/francisco-xavier-carrascal-esquivel-50b680370/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="https://github.com/FranciscoXavierCarrascalEsquivel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:franciscocarrascalfeina@gmail.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
