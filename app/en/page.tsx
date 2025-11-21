import Header from "../components/Header";
import Button from "../components/Button";
import MotionWrapper from "../components/MotionWrapper";
import Carousel3D from "../components/Carousel3D";
import TypewriterText from "../components/TypewriterText";
import Footer from "../components/Footer";
import TechGrid from "../components/TechGrid";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen text-white pt-24">
      <Header />

      <div className="flex flex-col lg:flex-row items-center justify-center mt-20 gap-8 max-w-6xl mx-auto w-full px-4">
        {/* 3D Carousel - Left Column */}
        <MotionWrapper delay={0.2} className="w-full lg:w-1/2 h-[500px]">
          <Carousel3D />
        </MotionWrapper>

        {/* Text Content - Right Column */}
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <h1 className="mt-0 text-3xl font-bold text-center">
            <div className="min-h-[60px]"> {/* Prevent layout shift */}
              <TypewriterText
                text="Software Engineer"
                className="block text-5xl text-green-600"
                delay={1.5}
              />
            </div>
            <div className="mt-2 min-h-[40px]">
              <TypewriterText
                text="Francisco Xavier Carrascal Esquivel"
                className="block text-3xl text-white"
                delay={3.5}
              />
            </div>
          </h1>

          <div className="mt-8 flex gap-4 justify-center">
            {/* LinkedIn */}
            <MotionWrapper
              delay={1.0}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <a
                href="https://www.linkedin.com/in/francisco-xavier-carrascal-esquivel-50b680370/"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 hover:bg-blue-700 transition"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
            </MotionWrapper>

            {/* GitHub */}
            <MotionWrapper
              delay={1.0}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <a
                href="https://github.com/FranciscoXavierCarrascalEsquivel"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 hover:bg-gray-800 transition"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
            </MotionWrapper>
          </div>

          <div className="mt-8 flex justify-center">
            <Button label="Hola" />
          </div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="max-w-4xl mx-auto mt-24 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30"></div>
      </div>

      <MotionWrapper useScroll delay={0.1}>
        <h1 className="mt-12 mb-0 text-center text-4xl font-semibold text-white">
          Work Experience
        </h1>
      </MotionWrapper>

      <div className="relative mt-20 px-4 pb-20">
        {/* Animated Timeline Line */}
        <MotionWrapper useScroll delay={0.0}>
          <div className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-gray-700 via-gray-700 to-transparent" />
        </MotionWrapper>

        <ol className="relative space-y-16">
          <MotionWrapper useScroll delay={0.1} className="relative grid grid-cols-2">
            <li className="contents">
              <div className="col-start-2 pl-8">
                <time className="block text-xs font-medium text-gray-400">June 2025 — Present</time>
                <h3 className="text-lg font-extrabold text-green-400">University of Girona — BCDS</h3>
                <p className="mt-1 text-sm text-gray-300">
                  Computer engineering internship at the BCDS research group.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-300 text-left">
                  <li>Development of the research group website</li>
                  <li>Containerization of applications with Docker</li>
                </ul>
              </div>
              <div className="absolute left-1/2 top-0 -translate-x-1/2">
                <img
                  src="/imagenes/udg-logo.png"
                  alt="UdG"
                  className="h-12 w-12 rounded-full bg-white p-1 object-contain shadow"
                />
              </div>
            </li>
          </MotionWrapper>

          <MotionWrapper useScroll delay={0.1} className="relative grid grid-cols-2">
            <li className="contents">
              <div className="col-start-1 pr-8 text-right">
                <div className="inline-block text-left">
                  <time className="block text-xs font-medium text-gray-400">July 2023 - June 2025</time>
                  <h3 className="text-lg font-extrabold text-green-400">Mercadona S.A.</h3>
                  <p className="mt-1 text-sm text-gray-300">
                    Worked as logistics and customer service staff.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-300 text-left">
                    <li>Customer service at checkout lines</li>
                    <li>Product restocking</li>
                    <li>Product placement on shelves</li>
                    <li>Support in specific sections such as produce and bakery</li>
                  </ul>
                </div>
              </div>
              <div className="absolute left-1/2 top-0 -translate-x-1/2">
                <img
                  src="/imagenes/mercadona-logo.jpg"
                  alt="Mercadona"
                  className="h-12 w-12 rounded-full bg-white p-1 object-contain shadow"
                />
              </div>
            </li>
          </MotionWrapper>
        </ol>
      </div>

      {/* Section Separator */}
      <div className="max-w-4xl mx-auto mt-24 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30"></div>
      </div>

      <MotionWrapper useScroll delay={0.1}>
        <h1 className="mt-12 mb-0 text-center text-4xl font-semibold text-white">
          Skills & Technologies
        </h1>
      </MotionWrapper>

      <MotionWrapper useScroll delay={0.2} className="max-w-6xl mx-auto mt-20 px-4">
        <TechGrid />
      </MotionWrapper>

      <Footer />
    </main>
  );
}
