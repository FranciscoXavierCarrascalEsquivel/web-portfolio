import Button from "../components/Button"
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Header() {
    return (
        <header className="sticky w-full  text-white shadow">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-2">
                    <img src="/imagenes/logo-def-fx.png" alt="Logo FX" width="75" height="75" />
                    <h1 className="text-xl font-bold">Francisco Xavier Carrascal Esquivel</h1>
                </div>
                <LanguageSwitcher />
            </div>
        </header>
    );
}
