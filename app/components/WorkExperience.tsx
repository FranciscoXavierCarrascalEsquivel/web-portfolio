"use client";

import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
    logo?: string;
}

interface WorkExperienceProps {
    experiences: Experience[];
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
    // Map logos to experiences based on company name or index since logos are static assets
    const experiencesWithLogos = experiences.map(exp => ({
        ...exp,
        logo: exp.company.toLowerCase().includes("girona") ? "/imagenes/udg-logo.png" : "/imagenes/mercadona-logo.jpg"
    }));

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="relative space-y-8">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 md:left-1/2 md:-ml-0.5" />

                {experiencesWithLogos.map((exp, index) => (
                    <MotionWrapper
                        key={index}
                        delay={0.2 + index * 0.1}
                        className={`relative flex items-center md:justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 rounded-full border-4 border-white dark:border-black bg-green-500 shadow-sm z-10" />

                        {/* Content Card */}
                        <div className="ml-20 md:ml-0 md:w-[45%] bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-lg overflow-hidden bg-white border border-gray-800 flex-shrink-0">
                                    <img
                                        src={exp.logo}
                                        alt={`${exp.company} logo`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white leading-tight">
                                        {exp.title}
                                    </h3>
                                    <div className="text-green-400 font-medium text-sm">
                                        {exp.company}
                                    </div>
                                </div>
                            </div>

                            <span className="inline-block px-2 py-1 mb-3 text-xs font-mono text-gray-400 bg-gray-800 rounded">
                                {exp.period}
                            </span>

                            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2 py-1 text-xs font-medium rounded-full bg-green-900/20 text-green-300 border border-green-800"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </MotionWrapper>
                ))}
            </div>
        </div>
    );
}
