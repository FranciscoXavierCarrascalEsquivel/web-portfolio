export const locales = ["en", "es", "ca", "de"] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = "ca";

interface Nav {
    projects: string;
    experience: string;
    skills: string;
    languages: string;
    contact: string;
}

interface Hero {
    role: string;
    name: string;
    fiverr: string;
    contact: string;
}

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
}

interface Experience {
    title: string;
    items: ExperienceItem[];
}

interface SkillsCategories {
    all: string;
    frontend: string;
    backend: string;
    languages: string;
    tools: string;
}

interface Skills {
    title: string;
    categories: SkillsCategories;
    hover: string;
    descriptions: Record<string, string>;
}

interface LanguageLevels {
    native: string;
    b2: string;
    a1: string;
}

interface Languages {
    title: string;
    levels: LanguageLevels;
}

interface ContactForm {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    sent: string;
    error: string;
}

interface ContactPlaceholders {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

interface Contact {
    title: string;
    subtitle: string;
    form: ContactForm;
    placeholders: ContactPlaceholders;
}

interface ProjectItem {
    slug: string;
    title: string;
    shortDescription: string;
    longDescription: string; // Using longDescription for the detail page
    technologies: string[];
    image: string;
    credentials?: ProjectCredentials;
    url?: string;
}

interface ProjectCredentials {
    username?: string;
    password?: string;
    title?: string;
}

interface Projects {
    title: string;
    items: ProjectItem[];
}

interface Footer {
    rights: string;
}

export interface Dictionary {
    siteTitle: string;
    nav: Nav;
    hero: Hero;
    experience: Experience;
    skills: Skills;
    languages: Languages;
    contact: Contact;
    footer: Footer;
    projects: Projects;
    projectDetails: ProjectDetails;
}

interface ProjectDetails {
    back: string;
    about: string;
    technologies: string;
    share: string;
    copyLink: string;
    accessCredentials?: string;
    username?: string;
    password?: string;
    visitProject?: string;
}

export const dict: Record<Locale, Dictionary> = {
    en: {
        siteTitle: "Kiko | Portfolio",
        nav: {
            projects: "Projects",
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
        },
        projects: {
            title: "Projects",
            items: [
                {
                    slug: "personal-portfolio",
                    title: "Personal Portfolio Website",
                    shortDescription: "Personal web portfolio designed as a central platform to showcase real engineering projects and technical experience.",
                    longDescription: "This project consists of the design and development of my own professional portfolio, conceived as an active technical presentation tool rather than just a static website. The portfolio is structured to facilitate reading for recruiters and technical profiles, showcasing real projects with context, technical decisions, and professional value. A clear structure, simple navigation, and direct content have been prioritized to ensure anyone can quickly understand my work, the technologies I master, and how I apply my knowledge in practical projects.",
                    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "SEO"],
                    image: "/imagenes/project-portfolio.jpg"
                },
                {
                    slug: "ai-chatbot",
                    title: "AI Knowledge Chatbot",
                    shortDescription: "Artificial intelligence-based chatbot capable of answering questions in natural language through a web interface.",
                    longDescription: "In this project, a chatbot based on the phi-4-mini model was developed, integrated into a custom web frontend. The system allows users to interact with an AI using natural language, with contextualized responses based on available information. The focus was on the practical integration of a language model into a web application, working on frontend–AI communication, interface design, and chatbot behavior with real inquiries. It demonstrates the ability to integrate AI models into real environments.",
                    technologies: ["phi-4-mini", "LLM", "HTML/CSS/JS", "Frontend-AI Integration"],
                    image: "/imagenes/project-ai.jpg",
                    credentials: {
                        username: "test@test.com",
                        password: "test123"
                    },
                    url: "https://ia.fraviercaes.es"
                },
                {
                    slug: "media-platform",
                    title: "Self-Hosted Media Platform",
                    shortDescription: "Self-hosted multimedia streaming platform deployed on a Linux server, publicly accessible via own domain and reverse proxy.",
                    longDescription: "This project involves the deployment of a complete centralized content management and consumption platform on a cloud server, using Docker containers and self-hosted services. The solution allows downloading, organizing, and playing content centrally, with remote access through a personal domain. It emphasizes infrastructure, systems, and Linux environments, including container configuration, networking, DNS, reverse proxying, and the integration of multiple services in a production environment.",
                    technologies: ["Ubuntu Server", "Docker", "Caddy", "Jellyfin", "Jellyseerr", "Prowlarr", "Radarr", "Sonarr", "qBittorrent", "Self-hosting"],
                    image: "/imagenes/project-media.jpg",
                    credentials: {
                        username: "test",
                        password: "test123"
                    },
                    url: "https://jellyfin.fraviercaes.es"
                }
            ]
        },
        projectDetails: {
            back: "Back to Portfolio",
            about: "About the Project",
            technologies: "Technologies",
            share: "Share",
            copyLink: "Copy Link",
            accessCredentials: "Access Credentials",
            username: "Username",
            password: "Password",
            visitProject: "Visit Project"
        }
    },
    es: {
        siteTitle: "Kiko | Portfolio",
        nav: {
            projects: "Proyectos",
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
        },
        projects: {
            title: "Proyectos",
            items: [
                {
                    slug: "personal-portfolio",
                    title: "Personal Portfolio Website",
                    shortDescription: "Portafolio web personal diseñado como plataforma central para mostrar proyectos reales de ingeniería y experiencia técnica.",
                    longDescription: "Este proyecto consiste en el diseño y desarrollo de mi propio portafolio profesional, concebido como una herramienta activa de presentación técnica y no solo como una web estática. El portafolio está estructurado para facilitar la lectura a reclutadores y perfiles técnicos, mostrando proyectos reales con contexto, decisiones técnicas y valor profesional. Se ha priorizado una estructura clara, navegación sencilla y contenido directo.",
                    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "SEO"],
                    image: "/imagenes/project-portfolio.jpg"
                },
                {
                    slug: "ai-chatbot",
                    title: "AI Knowledge Chatbot",
                    shortDescription: "Chatbot basado en inteligencia artificial capaz de responder preguntas en lenguaje natural a través de una interfaz web.",
                    longDescription: "En este proyecto se ha desarrollado un chatbot basado en el modelo phi-4-mini, integrado en un frontend web propio. El sistema permite a los usuarios interactuar con una IA mediante lenguaje natural, con respuestas contextualizadas. El foco del proyecto ha sido la integración práctica de un modelo de lenguaje en una aplicación web, trabajando la comunicación frontend–IA, el diseño de la interfaz y el comportamiento del chatbot.",
                    technologies: ["phi-4-mini", "LLM", "HTML/CSS/JS", "Integración Frontend-IA"],
                    image: "/imagenes/project-ai.jpg",
                    credentials: {
                        username: "test@test.com",
                        password: "test123"
                    },
                    url: "https://ia.fraviercaes.es"
                },
                {
                    slug: "media-platform",
                    title: "Self-Hosted Media Platform",
                    shortDescription: "Plataforma de streaming multimedia autohosted desplegada en un servidor Linux, accesible públicamente mediante dominio propio y proxy inverso.",
                    longDescription: "Este proyecto consiste en el despliegue de una plataforma completa de gestión y consumo de contenido multimedia en un servidor cloud, utilizando contenedores Docker y servicios autohosted. La solución permite descargar, organizar y reproducir contenido de manera centralizada. El proyecto pone énfasis en infraestructura, sistemas y entornos Linux, incluyendo la configuración de contenedores, red, DNS, proxy inverso y la integración de múltiples servicios.",
                    technologies: ["Ubuntu Server", "Docker", "Caddy", "Jellyfin", "Jellyseerr", "Prowlarr", "Radarr", "Sonarr", "qBittorrent", "Self-hosting"],
                    image: "/imagenes/project-media.jpg",
                    credentials: {
                        username: "test",
                        password: "test123"
                    },
                    url: "https://jellyfin.fraviercaes.es"
                }
            ]
        },
        projectDetails: {
            back: "Volver al portafolio",
            about: "Sobre el proyecto",
            technologies: "Tecnologías",
            share: "Compartir",
            copyLink: "Copiar enlace",
            accessCredentials: "Credenciales de acceso",
            username: "Usuario",
            password: "Contraseña",
            visitProject: "Visitar Proyecto"
        }
    },
    ca: {
        siteTitle: "Kiko | Portfolio",
        nav: {
            projects: "Projectes",
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
        },
        projects: {
            title: "Projectes",
            items: [
                {
                    slug: "personal-portfolio",
                    title: "Personal Portfolio Website",
                    shortDescription: "Portfolio web personal dissenyat com a plataforma central per mostrar projectes reals d’enginyeria, desplegaments i experiència tècnica.",
                    longDescription: "Aquest projecte consisteix en el disseny i desenvolupament del meu propi portfolio professional, concebut com una eina activa de presentació tècnica i no només com una web estàtica. El portfolio està estructurat per facilitar la lectura a recruiters i perfils tècnics, mostrant projectes reals amb context, decisions tècniques i valor professional. S’ha prioritzat una estructura clara, una navegació senzilla i contingut directe.",
                    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "SEO"],
                    image: "/imagenes/project-portfolio.jpg"
                },
                {
                    slug: "ai-chatbot",
                    title: "AI Knowledge Chatbot",
                    shortDescription: "Chatbot basat en intel·ligència artificial capaç de respondre preguntes en llenguatge natural a través d’una interfície web.",
                    longDescription: "En aquest projecte s’ha desenvolupat un chatbot basat en el model phi-4-mini, integrat en un frontend web propi. El sistema permet als usuaris interactuar amb una IA mitjançant llenguatge natural, amb respostes contextualitzades segons la informació disponible al sistema. El focus del projecte ha estat la integració pràctica d’un model de llenguatge en una aplicació web, treballant la comunicació frontend–IA, el disseny de la interfície i el comportament del chatbot.",
                    technologies: ["phi-4-mini", "LLM", "HTML/CSS/JS", "Comunicació Frontend–IA"],
                    image: "/imagenes/project-ai.jpg",
                    credentials: {
                        username: "test@test.com",
                        password: "test123"
                    },
                    url: "https://ia.fraviercaes.es"
                },
                {
                    slug: "media-platform",
                    title: "Self-Hosted Media Platform",
                    shortDescription: "Plataforma de streaming multimèdia autohosted desplegada en un servidor Linux, accessible públicament mitjançant domini propi i reverse proxy.",
                    longDescription: "Aquest projecte consisteix en el desplegament d’una plataforma completa de gestió i consum de contingut multimèdia en un servidor cloud, utilitzant contenidors Docker i serveis autohosted. La solució permet descarregar, organitzar i reproduir contingut de manera centralitzada. El projecte posa èmfasi en infraestructura, sistemes i entorns Linux, incloent la configuració de contenidors, xarxa, DNS, reverse proxy i la integració de múltiples serveis.",
                    technologies: ["Ubuntu Server", "Docker", "Caddy", "Jellyfin", "Jellyseerr", "Prowlarr", "Radarr", "Sonarr", "qBittorrent", "Self-hosting"],
                    image: "/imagenes/project-media.jpg",
                    credentials: {
                        username: "test",
                        password: "test123"
                    },
                    url: "https://jellyfin.fraviercaes.es"
                }
            ]
        },
        projectDetails: {
            back: "Tornar al portfolio",
            about: "Sobre el projecte",
            technologies: "Tecnologies",
            share: "Compartir",
            copyLink: "Copiar enllaç",
            accessCredentials: "Credencials d'accés",
            username: "Usuari",
            password: "Contrasenya",
            visitProject: "Visitar projecte"
        }
    },
    de: {
        siteTitle: "Kiko | Portfolio",
        nav: {
            projects: "Projekte",
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
        },
        projects: {
            title: "Projekte",
            items: [
                {
                    slug: "personal-portfolio",
                    title: "Personal Portfolio Website",
                    shortDescription: "Persönliches Web-Portfolio, entworfen als zentrale Plattform zur Präsentation realer Ingenieurprojekte und technischer Erfahrung.",
                    longDescription: "Dieses Projekt besteht aus dem Design und der Entwicklung meines eigenen professionellen Portfolios, konzipiert als aktives technisches Präsentationstool und nicht nur als statische Website. Das Portfolio ist so strukturiert, dass es Recruitern und technischen Profilen das Lesen erleichtert und reale Projekte mit Kontext, technischen Entscheidungen und professionellem Wert zeigt. Priorität hatten eine klare Struktur, einfache Navigation und direkte Inhalte.",
                    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "SEO"],
                    image: "/imagenes/project-portfolio.jpg"
                },
                {
                    slug: "ai-chatbot",
                    title: "AI Knowledge Chatbot",
                    shortDescription: "Auf künstlicher Intelligenz basierender Chatbot, der natürlichsprachliche Fragen über eine Weboberfläche beantworten kann.",
                    longDescription: "In diesem Projekt wurde ein Chatbot auf Basis des phi-4-mini-Modells entwickelt und in ein eigenes Web-Frontend integriert. Das System ermöglicht es Benutzern, mit einer KI in natürlicher Sprache zu interagieren, mit kontextualisierten Antworten basierend auf den verfügbaren Informationen. Der Fokus lag auf der praktischen Integration eines Sprachmodells in eine Webanwendung, der Arbeit an der Frontend-KI-Kommunikation, dem Interface-Design und dem Chatbot-Verhalten.",
                    technologies: ["phi-4-mini", "LLM", "HTML/CSS/JS", "Frontend-KI-Integration"],
                    image: "/imagenes/project-ai.jpg",
                    credentials: {
                        username: "test@test.com",
                        password: "test123"
                    },
                    url: "https://ia.fraviercaes.es"
                },
                {
                    slug: "media-platform",
                    title: "Self-Hosted Media Platform",
                    shortDescription: "Selbst gehostete Multimedia-Streaming-Plattform auf einem Linux-Server, öffentlich zugänglich über eigene Domain und Reverse Proxy.",
                    longDescription: "Dieses Projekt beinhaltet die Bereitstellung einer kompletten zentralisierten Plattform für Content-Management und -Konsum auf einem Cloud-Server unter Verwendung von Docker-Containern und selbst gehosteten Diensten. Die Lösung ermöglicht das zentrale Herunterladen, Organisieren und Abspielen von Inhalten mit Fernzugriff über eine persönliche Domain. Der Schwerpunkt liegt auf Infrastruktur, Systemen und Linux-Umgebungen.",
                    technologies: ["Ubuntu Server", "Docker", "Caddy", "Jellyfin", "Jellyseerr", "Prowlarr", "Radarr", "Sonarr", "qBittorrent", "Self-hosting"],
                    image: "/imagenes/project-media.jpg",
                    credentials: {
                        username: "test",
                        password: "test123"
                    },
                    url: "https://jellyfin.fraviercaes.es"
                }
            ]
        },
        projectDetails: {
            back: "Zurück zum Portfolio",
            about: "Über das Projekt",
            technologies: "Technologien",
            share: "Teilen",
            copyLink: "Link kopieren",
            accessCredentials: "Zugangsdaten",
            username: "Benutzer",
            password: "Passwort",
            visitProject: "Projekt Besuchen"
        }
    },
};

export function t<T = unknown>(lang: Locale, key: string): T {
    const keys = key.split('.');
    let current: unknown = dict[lang];

    for (const k of keys) {
        if (current === undefined || current === null) {
            // si no trobem la clau, retornem la key com a fallback
            return key as unknown as T;
        }

        if (typeof current !== "object") {
            // si ens trobem un primitiu abans d’acabar el path, també fem fallback
            return key as unknown as T;
        }

        current = (current as Record<string, unknown>)[k];
    }

    if (current === undefined) {
        return key as unknown as T;
    }

    return current as T;
}
