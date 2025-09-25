// app/en/page.tsx
import Header from "../components/Header";
import Button from "../components/Button";

export default function Page() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Header />


            <div className="flex gap-4 justify-center mt-40">
                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/francisco-xavier-carrascal-esquivel-50b680370/"
                    target="_blank"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 hover:bg-blue-700 transition"
                >
                    <svg className="h-6 w-6 text-blue-700 hover:text-white" fill="white" viewBox="0 0 24 24">
                        <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11 6H6v9h2v-9zm-1-1.3a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6zM18 12.3c0-2-1.1-3.3-2.9-3.3a2.7 2.7 0 0 0-2.5 1.4h-.1V9H10v9h2v-4.7c0-1.3.5-2.1 1.6-2.1s1.4.9 1.4 2.1V18h2v-5.7z" />
                    </svg>
                </a>
                {/* GitHub */}
                <a
                    href="https://github.com/FranciscoXavierCarrascalEsquivel"
                    target="_blank"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 hover:bg-gray-800 transition"
                >
                    <svg className="h-6 w-6 text-gray-800 hover:text-white" fill="white" viewBox="0 0 24 24">
                        <path d="M12 .5C5.7.5.6 5.6.6 12a11.5 11.5 0 0 0 7.8 10.9c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8.1-.6.3-1.1.6-1.3-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C16 5.2 17 5.5 17 5.5c.6 1.7.2 3 .1 3.3.7.8 1.2 1.9 1.2 3.2 0 4.5-2.8 5.5-5.5 5.8.3.2.6.7.6 1.4v2c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.4 12C23.4 5.6 18.3.5 12 .5z" />
                    </svg>
                </a>
            </div>
            <h1 className="mt-0 text-3xl font-bold text-center">
                <span className="block text-6xl text-green-600">Software Engineer</span>
                <span className="mt-2 block text-3xl text-white">
                    Francisco Xavier Carrascal Esquivel
                </span>
            </h1>
            <div className="mt-8 flex justify-center">
                <Button label="Hola" />
            </div>

            <h1 className="mt-55 mb-0 text-center text-4xl font-semibold text-white">
                Work Experience
            </h1>
            <section id="experience" className="mt-20 px-4">
  

  <ol className="relative space-y-16 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-700">
    {/* ===== ITEM 1 — University of Girona ===== */}
    <li className="relative grid grid-cols-2">
      {/* Content RIGHT */}
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

      {/* Logo marker */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <img
          src="imagenes/udg-logo.png"
          alt="UdG"
          className="h-12 w-12 rounded-full bg-white p-1 object-contain shadow"
        />
      </div>
    </li>

    {/* ===== ITEM 2 — Mercadona ===== */}
    <li className="relative grid grid-cols-2">
      {/* Content LEFT */}
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

      {/* Logo marker */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <img
          src="imagenes/mercadona-logo.jpg"
          alt="Mercadona"
          className="h-12 w-12 rounded-full bg-white p-1 object-contain shadow"
        />
      </div>
    </li>
  </ol>
</section>

        </main>
    );
}
