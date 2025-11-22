"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "../i18n";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const currentLocale = locales.find((locale) => pathname.startsWith(`/${locale}`)) || "en";

    const handleLanguageChange = (newLocale: Locale) => {
        const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
        router.push(newPath);
        setIsOpen(false);
    };

    const languageData: Record<Locale, { name: string; flag: string }> = {
        en: { name: "English", flag: "/flags/en.svg" },
        es: { name: "Español", flag: "/flags/es.svg" },
        ca: { name: "Català", flag: "/flags/cat.svg" },
        de: { name: "Deutsch", flag: "/flags/de.svg" },
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                aria-label="Change language"
            >
                <div className="w-5 h-5 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img
                        src={languageData[currentLocale].flag}
                        alt={`${languageData[currentLocale].name} flag`}
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 uppercase">
                    {currentLocale}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 py-1 overflow-hidden z-50">
                    {locales.map((locale) => (
                        <button
                            key={locale}
                            onClick={() => handleLanguageChange(locale)}
                            className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-3 ${currentLocale === locale
                                ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 font-medium"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                                }`}
                        >
                            <div className="w-5 h-5 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700 flex-shrink-0">
                                <img
                                    src={languageData[locale].flag}
                                    alt={`${languageData[locale].name} flag`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {languageData[locale].name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
