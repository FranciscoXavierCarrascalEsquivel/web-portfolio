import Header from "../components/Header";
import MotionWrapper from "../components/MotionWrapper";
import TypewriterText from "../components/TypewriterText";
import Footer from "../components/Footer";
import TechGrid from "../components/TechGrid";
import LanguageSection from "../components/LanguageSection";
import WorkExperience from "../components/WorkExperience";
import ContactSection from "../components/ContactSection";
import ProjectsSection from "../components/ProjectsSection";
import { Github, Linkedin } from "lucide-react";
import { Locale, t, locales } from "../i18n";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;

  return (
    <main className="min-h-screen text-white pt-16 md:pt-24">
      <Header navItems={{
        projects: t(lang, "nav.projects"),
        experience: t(lang, "nav.experience"),
        skills: t(lang, "nav.skills"),
        languages: t(lang, "nav.languages"),
        contact: t(lang, "nav.contact")
      }} />

      <div className="flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto w-full px-4 min-h-[calc(100vh-100px)]">
        {/* Text Content - Centered */}
        <div className="flex flex-col items-center w-full text-center">
          <h1 className="mt-0 text-3xl font-bold text-center">
            <div className="min-h-[40px] md:min-h-[60px]"> {/* Prevent layout shift */}
              <TypewriterText
                text={t(lang, "hero.role")}
                className="block text-4xl md:text-6xl text-green-600"
                delay={0.5}
              />
            </div>
            <div className="mt-4 min-h-[30px] md:min-h-[40px]">
              <TypewriterText
                text={t(lang, "hero.name")}
                className="block text-xl md:text-3xl text-white"
                delay={2.5}
              />
            </div>
          </h1>

          <div className="mt-12 flex gap-6 justify-center">
            {/* LinkedIn */}
            <MotionWrapper
              delay={1.0}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.linkedin.com/in/francisco-xavier-carrascal-esquivel-50b680370/"
                target="_blank"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-500 hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-7 w-7 text-white" />
              </a>
            </MotionWrapper>

            {/* GitHub */}
            <MotionWrapper
              delay={1.2}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://github.com/FranciscoXavierCarrascalEsquivel"
                target="_blank"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-500 hover:bg-[#333] hover:border-[#333] transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-7 w-7 text-white" />
              </a>
            </MotionWrapper>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex gap-6 justify-center flex-wrap">
              {/* Fiverr Button */}
              <MotionWrapper delay={1.4}>
                <a
                  href="https://www.fiverr.com/fraviercaes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#1DBF73] hover:bg-[#19a463] text-white font-bold text-base uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-green-500/50"
                >
                  <img
                    src="/imagenes/fiverr.png"
                    alt="Fiverr"
                    className="w-6 h-6 brightness-0 invert"
                  />
                  {t(lang, "hero.fiverr")}
                </a>
              </MotionWrapper>

              {/* Contact Me Button */}
              <MotionWrapper delay={1.6}>
                <a
                  href="#contact"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white hover:bg-white text-white hover:text-black font-bold text-base uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t(lang, "hero.contact")}
                </a>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="max-w-4xl mx-auto mt-24 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30"></div>
      </div>

      <ProjectsSection
        title={t(lang, "projects.title")}
        projects={t(lang, "projects.items")}
        lang={lang}
      />

      {/* Section Separator */}
      <div className="max-w-4xl mx-auto mt-24 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30"></div>
      </div>

      <MotionWrapper useScroll delay={0.1}>
        <h1 id="work-experience" className="mt-12 mb-0 text-center text-4xl font-semibold text-white scroll-mt-48">
          {t(lang, "experience.title")}
        </h1>
      </MotionWrapper>

      <div className="relative mt-20 px-4 pb-20">
        {/* Animated Timeline Line */}
        <MotionWrapper useScroll delay={0.0}>
          <div className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-gray-700 via-gray-700 to-transparent" />
        </MotionWrapper>

        <WorkExperience experiences={t(lang, "experience.items")} />
      </div>

      {/* Section Separator */}
      <div className="max-w-4xl mx-auto mt-24 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30"></div>
      </div>

      <MotionWrapper useScroll delay={0.1}>
        <h1 id="skills" className="mt-12 mb-0 text-center text-4xl font-semibold text-white scroll-mt-48">
          {t(lang, "skills.title")}
        </h1>
      </MotionWrapper>

      <MotionWrapper useScroll delay={0.2} className="max-w-6xl mx-auto mt-20 px-4">
        <TechGrid
          categories={t(lang, "skills.categories")}
          descriptions={t(lang, "skills.descriptions")}
          hoverText={t(lang, "skills.hover")}
        />
      </MotionWrapper>

      {/* Section Separator */}
      <div className="max-w-4xl mx-auto mt-24 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30"></div>
      </div>

      <LanguageSection
        title={t(lang, "languages.title")}
        levels={t(lang, "languages.levels")}
      />

      {/* Section Separator */}
      <div className="max-w-4xl mx-auto mt-24 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30"></div>
      </div>

      <ContactSection
        title={t(lang, "contact.title")}
        subtitle={t(lang, "contact.subtitle")}
        form={t(lang, "contact.form")}
        placeholders={t(lang, "contact.placeholders")}
      />

      <Footer rightsText={t(lang, "footer.rights")} />
    </main>
  );
}
