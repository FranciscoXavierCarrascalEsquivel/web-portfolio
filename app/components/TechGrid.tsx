"use client";

import { useState } from "react";

const technologies = [
    { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/ffffff", color: "#000000", description: "React framework used to build this portfolio website with server-side rendering and optimal performance." },
    { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB", color: "#20232a", description: "JavaScript library for building interactive user interfaces, used throughout this portfolio and in the BCDS website." },
    { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6", color: "#ffffff", description: "Typed superset of JavaScript providing type safety and better development experience in this portfolio project." },
    { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#0f172a", description: "Utility-first CSS framework used for styling this portfolio with modern, responsive design." },
    { name: "Three.js", logo: "https://cdn.simpleicons.org/threedotjs/ffffff", color: "#000000", description: "3D graphics library used to create the interactive 3D carousel and visual effects in this portfolio." },
    { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED", color: "#ffffff", description: "Used at BCDS internship to containerize applications, making them lightweight and easily deployable." },
    { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/ffffff", color: "#FFA611", description: "Backend platform used in a Chess.com API data query project for real-time database and authentication." },
    { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "#000000", description: "Primary programming language used in the BCDS research group website development." },
    { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/00599C", color: "#ffffff", description: "Extensively used throughout my degree program. Proficient in systems programming and algorithm development." },
    { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", color: "#A259FF", description: "Currently using for my Bachelor's Thesis (TFG) development with .NET framework." },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#ffffff", description: "One of the main programming languages used in the BCDS research group website backend development." },
    { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB", color: "#FFD43B", description: "Used extensively in Artificial Intelligence coursework for machine learning and data analysis projects." },
];

export default function TechGrid() {
    const [hoveredTech, setHoveredTech] = useState<typeof technologies[0] | null>(null);

    return (
        <div className="flex items-center justify-center gap-8">
            <div className="grid grid-cols-4 md:grid-cols-6 gap-6">
                {technologies.map((tech) => (
                    <div
                        key={tech.name}
                        className="relative group"
                        onMouseEnter={() => setHoveredTech(tech)}
                        onMouseLeave={() => setHoveredTech(null)}
                    >
                        <div
                            className="w-20 h-20 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-2xl border-2 border-gray-700 hover:border-green-400 p-3"
                            style={{
                                backgroundColor: tech.color,
                            }}
                        >
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-96 h-32 flex items-center px-4">
                {hoveredTech && (
                    <div className="animate-in fade-in slide-in-from-left-4 duration-200">
                        <div className="text-2xl font-bold text-green-400 mb-2">
                            {hoveredTech.name}
                        </div>
                        <div className="text-sm text-gray-300 leading-relaxed">
                            {hoveredTech.description}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
