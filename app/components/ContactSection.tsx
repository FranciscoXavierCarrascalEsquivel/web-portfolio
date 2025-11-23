"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import ContactGlobe from "./ContactGlobe";

interface ContactSectionProps {
    title: string;
    subtitle: string;
    form: {
        firstName: string;
        lastName: string;
        email: string;
        subject: string;
        message: string;
        send: string;
        sending: string;
        sent: string;
        error: string;
    };
    placeholders: {
        firstName: string;
        lastName: string;
        email: string;
        subject: string;
        message: string;
    };
}

export default function ContactSection({ title, subtitle, form, placeholders }: ContactSectionProps) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("https://formspree.io/f/movbwqkw", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Failed to send message");

            setStatus("success");
            setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const inputClasses = (fieldName: string) => `
    w-full px-3 py-2 rounded-lg border 
    bg-white/50 dark:bg-gray-900/50 
    border-gray-200 dark:border-gray-800
    ${focusedField === fieldName ? "border-green-500 ring-1 ring-green-500/50" : ""} 
    text-gray-900 dark:text-white 
    placeholder-gray-500 dark:placeholder-gray-500 
    outline-none transition-all duration-300
    hover:border-gray-400 dark:hover:border-gray-700 text-sm
  `;

    const labelClasses = "block text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-0.5 ml-1";

    return (
        <section id="contact" className="py-6 px-4 scroll-mt-28 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

            <MotionWrapper useScroll delay={0.1}>
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">{title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm transition-colors duration-300">
                        {subtitle}
                    </p>
                </div>
            </MotionWrapper>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

                    {/* Left Column: 3D Animation */}
                    <MotionWrapper useScroll delay={0.2} className="hidden lg:block w-full h-[420px]">
                        <ContactGlobe />
                    </MotionWrapper>

                    {/* Right Column: Form */}
                    <MotionWrapper useScroll delay={0.3} className="relative group w-full max-w-2xl mx-auto lg:mx-0">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>

                        <div className="relative bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 rounded-2xl p-5 md:p-6 shadow-2xl transition-colors duration-300">
                            <form onSubmit={handleSubmit} className="space-y-3">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <label htmlFor="firstName" className={labelClasses}>{form.firstName}</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField("firstName")}
                                            onBlur={() => setFocusedField(null)}
                                            className={inputClasses("firstName")}
                                            placeholder={placeholders.firstName}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="lastName" className={labelClasses}>{form.lastName}</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField("lastName")}
                                            onBlur={() => setFocusedField(null)}
                                            className={inputClasses("lastName")}
                                            placeholder={placeholders.lastName}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="email" className={labelClasses}>{form.email}</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField("email")}
                                        onBlur={() => setFocusedField(null)}
                                        className={inputClasses("email")}
                                        placeholder={placeholders.email}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="subject" className={labelClasses}>{form.subject}</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField("subject")}
                                        onBlur={() => setFocusedField(null)}
                                        className={inputClasses("subject")}
                                        placeholder={placeholders.subject}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="message" className={labelClasses}>{form.message}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={3}
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField("message")}
                                        onBlur={() => setFocusedField(null)}
                                        className={`${inputClasses("message")} resize-none`}
                                        placeholder={placeholders.message}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading" || status === "success"}
                                    className={`w-full py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98] ${status === "success"
                                        ? "bg-green-500 text-white shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                                        : status === "error"
                                            ? "bg-red-500 text-white"
                                            : "bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg"
                                        }`}
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="animate-spin w-4 h-4" /> {form.sending}
                                        </>
                                    ) : status === "success" ? (
                                        <>
                                            <CheckCircle className="w-4 h-4" /> {form.sent}
                                        </>
                                    ) : status === "error" ? (
                                        <>
                                            <AlertCircle className="w-4 h-4" /> {form.error}
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-3 h-3" /> {form.send}
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </MotionWrapper>
                </div>
            </div >
        </section >
    );
}
