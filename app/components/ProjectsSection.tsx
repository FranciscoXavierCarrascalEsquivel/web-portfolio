"use client";


import MotionWrapper from "./MotionWrapper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface ProjectItem {
    slug: string;
    title: string;
    shortDescription: string;
    technologies: string[];
    image: string;
}

interface ProjectsSectionProps {
    title: string;
    projects: ProjectItem[];
    lang: string;
}

export default function ProjectsSection({ title, projects, lang }: ProjectsSectionProps) {
    const [loadingSlug, setLoadingSlug] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Prefetch all project pages on mount for instant navigation
        projects.forEach((project) => {
            router.prefetch(`/${lang}/projects/${project.slug}`);
        });
    }, [lang, projects, router]);

    return (
        <section className="w-full max-w-6xl mx-auto px-4">
            <MotionWrapper useScroll delay={0.1}>
                <h1 id="projects" className="mt-12 mb-12 text-center text-4xl font-semibold text-white scroll-mt-48">
                    {title}
                </h1>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <MotionWrapper
                        key={project.slug}
                        delay={0.2 + index * 0.1}
                        className="group relative h-full"
                    >
                        <Link
                            href={`/${lang}/projects/${project.slug}`}
                            className="block h-full"
                            onClick={() => setLoadingSlug(project.slug)}
                        >
                            <div className={`h-full bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] flex flex-col relative ${loadingSlug === project.slug ? 'opacity-70' : ''}`}>

                                {/* Loading Overlay */}
                                {loadingSlug === project.slug && (
                                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
                                        <div className="w-10 h-10 border-4 border-gray-600 border-t-green-500 rounded-full animate-spin"></div>
                                    </div>
                                )}

                                {/* Image Placeholder */}
                                <div className="h-48 overflow-hidden bg-gray-800 relative group-hover:opacity-90 transition-opacity">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 mb-auto">
                                        {project.shortDescription}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-800">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300 border border-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-500 border border-gray-700">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </MotionWrapper>
                ))}
            </div>
        </section>
    );
}
