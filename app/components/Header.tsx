import { delay } from "framer-motion";
import Button from "../components/Button"
import LanguageSwitcher from "../components/LanguageSwitcher";
import MotionWrapper from "./MotionWrapper";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full text-white border-b border-gray-800 bg-black/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-2">
                    <MotionWrapper
                        className=" px-4"
                        delay={0.0}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src="/imagenes/logo-def-fx.png" alt="Logo FX" width="75" height="75" />
                    </MotionWrapper>
                    <MotionWrapper
                        className=" px-4"
                        delay={0.2}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-xl font-bold">Francisco Xavier Carrascal Esquivel</h1>
                    </MotionWrapper>
                </div>
                <MotionWrapper
                    className=" px-4"
                    delay={0.5}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <LanguageSwitcher />
                </MotionWrapper>
            </div>
        </header>
    );
}
