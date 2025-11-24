"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TechGridProps {
    categories: {
        all: string;
        frontend: string;
        backend: string;
        languages: string;
        tools: string;
    };
    descriptions: Record<string, string>;
    hoverText: string;
}

export default function TechGrid({ categories: catLabels, descriptions, hoverText }: TechGridProps) {
    const categories = [
        { id: "all", label: catLabels.all },
        { id: "frontend", label: catLabels.frontend },
        { id: "backend", label: catLabels.backend },
        { id: "languages", label: catLabels.languages },
        { id: "tools", label: catLabels.tools },
    ];

    const technologies = [
        // Frontend
        { name: "Next.js", category: "frontend", logo: "https://cdn.simpleicons.org/nextdotjs/ffffff", color: "#000000" },
        { name: "React", category: "frontend", logo: "https://cdn.simpleicons.org/react/61DAFB", color: "#20232a" },
        { name: "Tailwind CSS", category: "frontend", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#0f172a" },
        { name: "Bootstrap", category: "frontend", logo: "https://cdn.simpleicons.org/bootstrap/7952B3", color: "#563d7c" },
        { name: "Three.js", category: "frontend", logo: "https://cdn.simpleicons.org/threedotjs/ffffff", color: "#000000" },
        { name: "HTML5", category: "frontend", logo: "https://cdn.simpleicons.org/html5/E34F26", color: "#E34F26" },
        { name: "CSS3", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },

        // Backend & DB
        { name: "Firebase", category: "backend", logo: "https://cdn.simpleicons.org/firebase/ffffff", color: "#FFA611" },
        { name: "MySQL", category: "backend", logo: "https://cdn.simpleicons.org/mysql/4479A1", color: "#00758F" },
        { name: "MariaDB", category: "backend", logo: "https://cdn.simpleicons.org/mariadb/003545", color: "#003545" },
        { name: "PostgreSQL", category: "backend", logo: "https://cdn.simpleicons.org/postgresql/4169E1", color: "#336791" },
        { name: "Java", category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#ffffff" },
        { name: "C#", category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", color: "#A259FF" },

        // Languages
        { name: "JavaScript", category: "languages", logo: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "#000000" },
        { name: "TypeScript", category: "languages", logo: "https://cdn.simpleicons.org/typescript/3178C6", color: "#ffffff" },
        { name: "Python", category: "languages", logo: "https://cdn.simpleicons.org/python/3776AB", color: "#FFD43B" },
        { name: "C++", category: "languages", logo: "https://cdn.simpleicons.org/cplusplus/00599C", color: "#ffffff" },
        { name: "Bash", category: "languages", logo: "https://cdn.simpleicons.org/gnubash/4EAA25", color: "#4EAA25" },

        // Tools & DevOps
        { name: "Docker", category: "tools", logo: "https://cdn.simpleicons.org/docker/2496ED", color: "#ffffff" },
        { name: "Git", category: "tools", logo: "https://cdn.simpleicons.org/git/F05032", color: "#F05032" },
        { name: "GitHub", category: "tools", logo: "https://cdn.simpleicons.org/github/ffffff", color: "#181717" },
        { name: "GitLab", category: "tools", logo: "https://cdn.simpleicons.org/gitlab/FC6D26", color: "#FC6D26" },
        { name: "Vercel", category: "tools", logo: "https://cdn.simpleicons.org/vercel/ffffff", color: "#000000" },
        { name: "Blender", category: "tools", logo: "https://cdn.simpleicons.org/blender/E87D0D", color: "#E87D0D" },
    ];

    const [activeCategory, setActiveCategory] = useState("all");
    const [hoveredTech, setHoveredTech] = useState<typeof technologies[0] | null>(null);

    const filteredTechs = activeCategory === "all"
        ? technologies
        : technologies.filter(t => t.category === activeCategory);

    return (
        <div className="flex flex-col items-center w-full">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 p-1 bg-gray-100 dark:bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-800 transition-colors duration-300">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`relative px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${activeCategory === cat.id ? "text-black" : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                            }`}
                    >
                        {activeCategory === cat.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-green-400 rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{cat.label}</span>
                    </button>
                ))}
            </div>

            {/* Grid & Description Container */}
            <div className="flex flex-col lg:flex-row gap-12 w-full items-start">
                {/* Grid */}
                <motion.div
                    layout
                    className="flex-1 grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4 w-full"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredTechs.map((tech) => (
                            <motion.div
                                layout
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="relative group aspect-square"
                                onMouseEnter={() => setHoveredTech(tech)}
                                onMouseLeave={() => setHoveredTech(null)}
                            >
                                <div
                                    className="w-full h-full rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/30 backdrop-blur-sm hover:border-green-400 p-1.5 md:p-3"
                                    style={{
                                        // Subtle colored glow based on brand color
                                        boxShadow: hoveredTech?.name === tech.name ? `0 0 20px ${tech.color}40` : 'none'
                                    }}
                                >
                                    <img
                                        src={tech.logo}
                                        alt={tech.name}
                                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Description Panel (Sticky on Desktop) */}
                <div className="w-full lg:w-80 lg:sticky lg:top-32 min-h-[200px] p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200 dark:border-gray-800 flex flex-col justify-center items-center text-center transition-all duration-300">
                    <AnimatePresence mode="wait">
                        {hoveredTech ? (
                            <motion.div
                                key={hoveredTech.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-16 h-16 mb-4 p-3 rounded-xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
                                    <img src={hoveredTech.logo} alt={hoveredTech.name} className="w-full h-full object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{hoveredTech.name}</h3>
                                <span className="px-3 py-1 mb-4 text-xs font-mono text-green-600 dark:text-green-400 bg-green-400/10 rounded-full border border-green-400/20">
                                    {categories.find(c => c.id === hoveredTech.category)?.label}
                                </span>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                                    {descriptions[hoveredTech.name] || hoveredTech.name}
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-gray-500 flex flex-col items-center"
                            >
                                <div className="w-12 h-12 mb-4 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center transition-colors duration-300">
                                    <span className="text-xl">👆</span>
                                </div>
                                <p>{hoverText}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
