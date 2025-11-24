

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import InteractiveBackground from "./components/InteractiveBackground";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fravier - Web Portfolio",
  description: "Portfolio of Francisco Xavier Carrascal Esquivel",
  icons: {
    icon: "/imagenes/logo-def-fx.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} antialiased font-sans`}
      >
        <InteractiveBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
