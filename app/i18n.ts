export const locales = ["en", "es", "ca", "de"] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = "ca";

export const dict: Record<Locale, any> = {
    en: {
        siteTitle: "Kiko | Portfolio",
        nav: {
            experience: "Work Experience",
            skills: "Skills",
            languages: "Languages",
            contact: "Contact"
        },
        hero: {
            role: "Software Engineer",
            name: "Francisco Xavier Carrascal Esquivel",
            fiverr: "Fiverr",
            contact: "Contact me"
        },
        experience: {
            title: "Work Experience",
            items: [
                {
                    title: "Research Group Assistant (BCDS)",
                    company: "Universitat de Girona",
                    period: "Jun 2025 — Present",
                    description: "Development and maintenance of the BCDS research group website using Spring Boot, Thymeleaf, Bootstrap, HTML, CSS, and JavaScript. Dockerization of applications. Digital design and layout of visual materials (institutional brochure and web graphic resources).",
                    skills: ["Spring Boot", "Thymeleaf", "Docker", "Bootstrap", "JavaScript"]
                },
                {
                    title: "Cashier",
                    company: "Mercadona",
                    period: "Jul 2023 - Jun 2025",
                    description: "Customer service at the checkout line. Product restocking and placement. Support for specific sections such as the fruit or bakery departments.",
                    skills: ["Customer Service", "Teamwork", "Adaptability"]
                }
            ]
        },
        skills: {
            title: "Skills & Technologies",
            categories: {
                all: "All",
                frontend: "Frontend",
                backend: "Backend & DB",
                languages: "Languages",
                tools: "Tools & DevOps"
            },
            hover: "Hover over a technology to see details",
            descriptions: {
                "Next.js": "React framework for production-grade applications.",
                "React": "Library for building interactive user interfaces.",
                "Tailwind CSS": "Utility-first CSS framework for rapid UI development.",
                "Bootstrap": "Component-based framework for responsive web design.",
                "Three.js": "3D library for creating immersive web experiences.",
                "HTML5": "Standard markup language for documents designed to be displayed in a web browser.",
                "CSS3": "Style sheet language used for describing the presentation of a document written in HTML.",
                "Firebase": "Backend-as-a-Service for real-time apps.",
                "MySQL": "Open-source relational database management system.",
                "MariaDB": "Community-developed fork of the MySQL relational database management system.",
                "PostgreSQL": "Powerful, open source object-relational database system.",
                "Java": "Robust language for backend systems.",
                "C#": "Modern language for .NET development.",
                "JavaScript": "The language of the web.",
                "TypeScript": "Typed superset of JavaScript.",
                "Python": "Versatile language for AI and scripting.",
                "C++": "High-performance systems programming.",
                "Bash": "Unix shell and command language.",
                "Docker": "Platform for developing, shipping, and running applications in containers.",
                "Git": "Distributed version control system.",
                "GitHub": "Platform for hosting and collaborating on code.",
                "GitLab": "DevOps platform for software innovation.",
                "Vercel": "Platform for frontend frameworks and static sites.",
                "Blender": "Open source 3D creation suite."
            }
        },
        languages: {
            title: "Languages",
            levels: {
                native: "Native",
                b2: "CLUC B2",
                a1: "Starter (A1)"
            }
        },
        contact: {
            title: "Get in Touch",
            subtitle: "Have a project in mind? Let's build something amazing together.",
            form: {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email Address",
                subject: "Subject",
                message: "Message",
                send: "Send Message",
                sending: "Sending...",
                sent: "Sent!",
                error: "Error"
            },
            placeholders: {
                firstName: "John",
                lastName: "Doe",
                email: "john@example.com",
                subject: "Project Inquiry",
                message: "Tell me about your project..."
            }
        },
        footer: {
            rights: "All rights reserved."
        }
    },
    es: {
        siteTitle: "Kiko | Portfolio",
        nav: {
            experience: "Experiencia",
            skills: "Habilidades",
            languages: "Idiomas",
            contact: "Contacto"
        },
        hero: {
            role: "Ingeniero de Software",
            name: "Francisco Xavier Carrascal Esquivel",
            fiverr: "Fiverr",
            contact: "Contáctame"
        },
        experience: {
            title: "Experiencia Laboral",
            items: [
                {
                    title: "Asistente Grupo de Investigación (BCDS)",
                    company: "Universitat de Girona",
                    period: "Jun 2025 — Presente",
                    description: "Desarrollo y mantenimiento del sitio web del grupo de investigación BCDS utilizando Spring Boot, Thymeleaf, Bootstrap, HTML, CSS y JavaScript. Dockerización de aplicaciones. Diseño digital y maquetación de materiales visuals (folleto institucional y recursos gráficos web).",
                    skills: ["Spring Boot", "Thymeleaf", "Docker", "Bootstrap", "JavaScript"]
                },
                {
                    title: "Cajero",
                    company: "Mercadona",
                    period: "Jul 2023 - Jun 2025",
                    description: "Atención al cliente en línea de cajas. Reposición y colocación de productos. Apoyo en secciones específicas como frutería o panadería.",
                    skills: ["Atención al Cliente", "Trabajo en Equipo", "Adaptabilidad"]
                }
            ]
        },
        skills: {
            title: "Habilidades y Tecnologías",
            categories: {
                all: "Todas",
                frontend: "Frontend",
                backend: "Backend y BD",
                languages: "Lenguajes",
                tools: "Herramientas y DevOps"
            },
            hover: "Pasa el cursor sobre una tecnología para ver detalles",
            descriptions: {
                "Next.js": "Framework de React para aplicaciones de producción.",
                "React": "Biblioteca para construir interfaces de usuario interactivas.",
                "Tailwind CSS": "Framework CSS de utilidad primero para desarrollo rápido de UI.",
                "Bootstrap": "Framework basado en componentes para diseño web responsivo.",
                "Three.js": "Biblioteca 3D para crear experiencias web inmersivas.",
                "HTML5": "Lenguaje de marcado estándar para documentos web.",
                "CSS3": "Lenguaje de hojas de estilo para la presentación de documentos HTML.",
                "Firebase": "Backend como servicio para aplicaciones en tiempo real.",
                "MySQL": "Sistema de gestión de bases de datos relacionales de código abierto.",
                "MariaDB": "Fork desarrollado por la comunidad del sistema MySQL.",
                "PostgreSQL": "Potente sistema de base de datos relacional de objetos de código abierto.",
                "Java": "Lenguaje robusto para sistemas backend.",
                "C#": "Lenguaje moderno para desarrollo .NET.",
                "JavaScript": "El lenguaje de la web.",
                "TypeScript": "Superconjunto tipado de JavaScript.",
                "Python": "Lenguaje versátil para IA y scripting.",
                "C++": "Programación de sistemas de alto rendimiento.",
                "Bash": "Shell de Unix y lenguaje de comandos.",
                "Docker": "Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.",
                "Git": "Sistema de control de versiones distribuido.",
                "GitHub": "Plataforma para alojar y colaborar en código.",
                "GitLab": "Plataforma DevOps para innovación de software.",
                "Vercel": "Plataforma para frameworks frontend y sitios estáticos.",
                "Blender": "Suite de creación 3D de código abierto."
            }
        },
        languages: {
            title: "Idiomas",
            levels: {
                native: "Nativo",
                b2: "CLUC B2",
                a1: "Principiante (A1)"
            }
        },
        contact: {
            title: "Ponte en Contacto",
            subtitle: "¿Tienes un proyecto en mente? Construyamos algo increíble juntos.",
            form: {
                firstName: "Nombre",
                lastName: "Apellido",
                email: "Correo Electrónico",
                subject: "Asunto",
                message: "Mensaje",
                send: "Enviar Mensaje",
                sending: "Enviando...",
                sent: "¡Enviado!",
                error: "Error"
            },
            placeholders: {
                firstName: "Juan",
                lastName: "Pérez",
                email: "juan@ejemplo.com",
                subject: "Consulta de proyecto",
                message: "Cuéntame sobre tu proyecto..."
            }
        },
        footer: {
            rights: "Todos los derechos reservados."
        }
    },
    ca: {
        siteTitle: "Kiko | Portfolio",
        nav: {
            experience: "Experiència",
            skills: "Habilitats",
            languages: "Idiomes",
            contact: "Contacte"
        },
        hero: {
            role: "Enginyer de Software",
            name: "Francisco Xavier Carrascal Esquivel",
            fiverr: "Fiverr",
            contact: "Contacta'm"
        },
        experience: {
            title: "Experiència Laboral",
            items: [
                {
                    title: "Assistent Grup de Recerca (BCDS)",
                    company: "Universitat de Girona",
                    period: "Jun 2025 — Present",
                    description: "Desenvolupament i manteniment del lloc web del grup de recerca BCDS utilitzant Spring Boot, Thymeleaf, Bootstrap, HTML, CSS i JavaScript. Dockerització d'aplicacions. Disseny digital i maquetació de materials visuals (fulletó institucional i recursos gràfics web).",
                    skills: ["Spring Boot", "Thymeleaf", "Docker", "Bootstrap", "JavaScript"]
                },
                {
                    title: "Caixer",
                    company: "Mercadona",
                    period: "Jul 2023 - Jun 2025",
                    description: "Atenció al client en línia de caixes. Reposició i col·locació de productes. Suport en seccions específiques com fruiteria o forn.",
                    skills: ["Atenció al Client", "Treball en Equip", "Adaptabilitat"]
                }
            ]
        },
        skills: {
            title: "Habilitats i Tecnologies",
            categories: {
                all: "Totes",
                frontend: "Frontend",
                backend: "Backend i BD",
                languages: "Llenguatges",
                tools: "Eines i DevOps"
            },
            hover: "Passa el cursor sobre una tecnologia per veure detalls",
            descriptions: {
                "Next.js": "Framework de React per a aplicacions de producció.",
                "React": "Biblioteca per construir interfícies d'usuari interactives.",
                "Tailwind CSS": "Framework CSS d'utilitat primer per a desenvolupament ràpid d'UI.",
                "Bootstrap": "Framework basat en components per a disseny web responsiu.",
                "Three.js": "Biblioteca 3D per crear experiències web immersives.",
                "HTML5": "Llenguatge de marcat estàndard per a documents web.",
                "CSS3": "Llenguatge de fulls d'estil per a la presentació de documents HTML.",
                "Firebase": "Backend com a servei per a aplicacions en temps real.",
                "MySQL": "Sistema de gestió de bases de dades relacionals de codi obert.",
                "MariaDB": "Fork desenvolupat per la comunitat del sistema MySQL.",
                "PostgreSQL": "Potent sistema de base de dades relacional d'objectes de codi obert.",
                "Java": "Llenguatge robust per a sistemes backend.",
                "C#": "Llenguatge modern per a desenvolupament .NET.",
                "JavaScript": "El llenguatge de la web.",
                "TypeScript": "Superconjunt tipat de JavaScript.",
                "Python": "Llenguatge versàtil per a IA i scripting.",
                "C++": "Programació de sistemes d'alt rendiment.",
                "Bash": "Shell de Unix i llenguatge de comandes.",
                "Docker": "Plataforma per desenvolupar, enviar i executar aplicacions en contenidors.",
                "Git": "Sistema de control de versions distribuït.",
                "GitHub": "Plataforma per allotjar i col·laborar en codi.",
                "GitLab": "Plataforma DevOps per a innovació de software.",
                "Vercel": "Plataforma per a frameworks frontend i llocs estàtics.",
                "Blender": "Suite de creació 3D de codi obert."
            }
        },
        languages: {
            title: "Idiomes",
            levels: {
                native: "Natiu",
                b2: "CLUC B2",
                a1: "Principiant (A1)"
            }
        },
        contact: {
            title: "Posa't en Contacte",
            subtitle: "Tens un projecte al cap? Construïm alguna cosa increïble junts.",
            form: {
                firstName: "Nom",
                lastName: "Cognom",
                email: "Correu Electrònic",
                subject: "Assumpte",
                message: "Missatge",
                send: "Enviar Missatge",
                sending: "Enviant...",
                sent: "Enviat!",
                error: "Error"
            },
            placeholders: {
                firstName: "Joan",
                lastName: "Puig",
                email: "joan@exemple.com",
                subject: "Consulta de Projecte",
                message: "Explica'm el teu projecte..."
            }
        },
        footer: {
            rights: "Tots els drets reservats."
        }
    },
    de: {
        siteTitle: "Kiko | Portfolio",
        nav: {
            experience: "Erfahrung",
            skills: "Fähigkeiten",
            languages: "Sprachen",
            contact: "Kontakt"
        },
        hero: {
            role: "Softwareentwickler",
            name: "Francisco Xavier Carrascal Esquivel",
            fiverr: "Fiverr",
            contact: "Kontaktieren"
        },
        experience: {
            title: "Berufserfahrung",
            items: [
                {
                    title: "Forschungsassistent (BCDS)",
                    company: "Universität Girona",
                    period: "Jun 2025 — Heute",
                    description: "Entwicklung und Wartung der Website der BCDS-Forschungsgruppe mit Spring Boot, Thymeleaf, Bootstrap, HTML, CSS und JavaScript. Dockerisierung von Anwendungen. Digitales Design und Layout von visuellem Material (institutionelle Broschüre und Web-Grafikressourcen).",
                    skills: ["Spring Boot", "Thymeleaf", "Docker", "Bootstrap", "JavaScript"]
                },
                {
                    title: "Kassierer",
                    company: "Mercadona",
                    period: "Jul 2023 - Jun 2025",
                    description: "Kundenservice an der Kasse. Produktnachfüllung und -platzierung. Unterstützung in bestimmten Bereichen wie Obst oder Bäckerei.",
                    skills: ["Kundenservice", "Teamarbeit", "Anpassungsfähigkeit"]
                }
            ]
        },
        skills: {
            title: "Fähigkeiten & Technologien",
            categories: {
                all: "Alle",
                frontend: "Frontend",
                backend: "Backend & DB",
                languages: "Sprachen",
                tools: "Tools & DevOps"
            },
            hover: "Fahren Sie mit der Maus über eine Technologie für Details",
            descriptions: {
                "Next.js": "React-Framework für produktionsreife Anwendungen.",
                "React": "Bibliothek zum Erstellen interaktiver Benutzeroberflächen.",
                "Tailwind CSS": "Utility-First CSS-Framework für schnelle UI-Entwicklung.",
                "Bootstrap": "Komponenten-basiertes Framework für responsives Webdesign.",
                "Three.js": "3D-Bibliothek zum Erstellen immersiver Web-Erlebnisse.",
                "HTML5": "Standard-Auszeichnungssprache für Webdokumente.",
                "CSS3": "Stylesheet-Sprache zur Präsentation von HTML-Dokumenten.",
                "Firebase": "Backend-as-a-Service für Echtzeit-Apps.",
                "MySQL": "Open-Source relationales Datenbankmanagementsystem.",
                "MariaDB": "Community-entwickelter Fork des MySQL-Systems.",
                "PostgreSQL": "Leistungsstarkes Open-Source objekt-relationales Datenbanksystem.",
                "Java": "Robuste Sprache für Backend-Systeme.",
                "C#": "Moderne Sprache für .NET-Entwicklung.",
                "JavaScript": "Die Sprache des Webs.",
                "TypeScript": "Typisierte Obermenge von JavaScript.",
                "Python": "Vielseitige Sprache für KI und Skripting.",
                "C++": "Hochleistungs-Systemprogrammierung.",
                "Bash": "Unix-Shell und Befehlssprache.",
                "Docker": "Plattform zum Entwickeln, Versenden und Ausführen von Anwendungen in Containern.",
                "Git": "Verteiltes Versionskontrollsystem.",
                "GitHub": "Plattform zum Hosten und Zusammenarbeiten an Code.",
                "GitLab": "DevOps-Plattform für Software-Innovation.",
                "Vercel": "Plattform für Frontend-Frameworks und statische Websites.",
                "Blender": "Open-Source 3D-Erstellungssuite."
            }
        },
        languages: {
            title: "Sprachen",
            levels: {
                native: "Muttersprache",
                b2: "CLUC B2",
                a1: "Anfänger (A1)"
            }
        },
        contact: {
            title: "Kontakt aufnehmen",
            subtitle: "Haben Sie ein Projekt im Sinn? Lassen Sie uns gemeinsam etwas Großartiges bauen.",
            form: {
                firstName: "Vorname",
                lastName: "Nachname",
                email: "E-Mail-Adresse",
                subject: "Betreff",
                message: "Nachricht",
                send: "Nachricht senden",
                sending: "Senden...",
                sent: "Gesendet!",
                error: "Fehler"
            },
            placeholders: {
                firstName: "Max",
                lastName: "Mustermann",
                email: "max@beispiel.com",
                subject: "Projektanfrage",
                message: "Erzählen Sie mir von Ihrem Projekt..."
            }
        },
        footer: {
            rights: "Alle Rechte vorbehalten."
        }
    },
};

export function t(lang: Locale, key: string) {
    const keys = key.split('.');
    let current: any = dict[lang];
    for (const k of keys) {
        if (current === undefined) return key;
        current = current[k];
    }
    return current ?? key;
}