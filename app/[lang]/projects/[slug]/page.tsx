
import { Locale, dict } from "../../../i18n";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MotionWrapper from "../../../components/MotionWrapper";
import { t } from "../../../i18n";
import { ArrowLeft, ExternalLink } from "lucide-react";

// Generate static params for all supported languages and projects
export async function generateStaticParams() {
    const params = [];
    for (const locale of Object.keys(dict)) {
        // We need to access the projects from the dictionary. 
        // Since we know the structure, we can iterate.
        const projects = dict[locale as Locale].projects.items;
        for (const project of projects) {
            params.push({ lang: locale, slug: project.slug });
        }
    }
    return params;
}

export default async function ProjectPage({ params }: { params: Promise<{ lang: Locale, slug: string }> }) {
    const { lang, slug } = await params;

    // Find project data
    const dictionary = dict[lang];
    const project = dictionary.projects.items.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen text-white pt-24 bg-black">
            <Header navItems={{}} />

            <article className="max-w-4xl mx-auto px-4 py-12 min-h-[calc(100vh-200px)]">
                {/* Back Button */}
                <MotionWrapper delay={0.1}>
                    <Link
                        href={`/${lang}/`}
                        className="inline-flex items-center text-gray-400 hover:text-green-400 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {t(lang, "projectDetails.back")}
                    </Link>
                </MotionWrapper>

                {/* Hero Section */}
                <MotionWrapper delay={0.2}>
                    <div className="relative h-[40vh] min-h-[300px] w-full rounded-2xl overflow-hidden mb-12 border border-gray-800">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center gap-4">
                                {project.title}
                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
                                        title={t(lang, "projectDetails.visitProject" as any) || "Visit Project"}
                                    >
                                        <ExternalLink className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                                    </a>
                                )}
                            </h1>
                        </div>
                    </div>
                </MotionWrapper>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <MotionWrapper delay={0.3}>
                            <h2 className="text-2xl font-semibold text-green-400 mb-4">{t(lang, "projectDetails.about")}</h2>
                            <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-line">
                                {project.longDescription}
                            </div>
                        </MotionWrapper>
                    </div>

                    {/* Sidebar / Info */}
                    <div className="lg:col-span-1">
                        <MotionWrapper delay={0.4} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 sticky top-24">
                            <h3 className="text-lg font-bold text-white mb-4">{t(lang, "projectDetails.technologies")}</h3>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-sm rounded-full bg-green-900/20 text-green-400 border border-green-800/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {project.credentials && (
                                <div className="mb-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                                    <h3 className="text-lg font-bold text-white mb-3">
                                        {t(lang, "projectDetails.accessCredentials")}
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        {project.credentials.username && (
                                            <div className="flex flex-col">
                                                <span className="text-gray-400">{t(lang, "projectDetails.username")}</span>
                                                <span className="text-white font-mono bg-gray-900 px-2 py-1 rounded select-all">
                                                    {project.credentials.username}
                                                </span>
                                            </div>
                                        )}
                                        {project.credentials.password && (
                                            <div className="flex flex-col">
                                                <span className="text-gray-400">{t(lang, "projectDetails.password")}</span>
                                                <span className="text-white font-mono bg-gray-900 px-2 py-1 rounded select-all">
                                                    {project.credentials.password}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}


                        </MotionWrapper>
                    </div>
                </div>
            </article>

            <Footer rightsText={t(lang, "footer.rights")} />
        </main>
    );
}
