"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, UtensilsCrossed, Phone, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleSidebar() {
        setIsOpen(!isOpen);
    }

    function closeSidebar() {
        setIsOpen(false);
    }

    return (
        <div>
            {/* HEADER */}
            <header className="bg-red-600 w-full h-24 flex items-center justify-center relative">
                {/* Botão de menu */}
                <div
                    className="absolute left-4 cursor-pointer w-8 h-8 flex flex-col justify-between items-center"
                    onClick={toggleSidebar}
                >
                    <span
                        className={`block h-0.5 w-8 bg-white transform transition-all duration-300 ease-in-out ${
                            isOpen ? "rotate-45 translate-y-2" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-8 bg-white transition-all duration-300 ease-in-out ${
                            isOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-8 bg-white transform transition-all duration-300 ease-in-out ${
                            isOpen ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    />
                </div>

                {/* Logo Centralizada */}
                <div className="mx-auto">
                    <Image src="/logoBoteco.png" alt="Logo Boteco Jambeiro" width={90} height={90} priority />
                </div>
            </header>

            {/* SIDEBAR */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-white via-gray-100 to-white shadow-lg p-6 transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out z-50 flex flex-col overflow-y-auto`}
            >
                {/* Botão Fechar */}
                <button className="absolute top-4 right-4 text-red-600" onClick={toggleSidebar}>
                    <X size={28} />
                </button>

                <h2 className="text-2xl font-bold text-red-600 mb-10 mt-4 text-center">Menu</h2>

                <nav className="flex flex-col space-y-6">
                    {/* Início - Só fecha o menu */}
                    <Link
                        href="/"
                        onClick={closeSidebar}
                        className="flex items-center gap-3 text-gray-700 hover:text-red-600"
                    >
                        <Home size={20} />
                        Início
                    </Link>

                    {/* Demais - Redirecionam para páginas */}
                    <Link
                        href="/cardapio"
                        onClick={closeSidebar}
                        className="flex items-center gap-3 text-gray-700 hover:text-red-600"
                    >
                        <UtensilsCrossed size={20} />
                        Cardápio
                    </Link>

                    <Link
                        href="/contato"
                        onClick={closeSidebar}
                        className="flex items-center gap-3 text-gray-700 hover:text-red-600"
                    >
                        <Phone size={20} />
                        Contato
                    </Link>
                </nav>
            </aside>

            {/* OVERLAY COM BLUR */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    style={{
                        backdropFilter: "blur(8px)",
                        WebkitBackdropFilter: "blur(8px)",
                    }}
                    onClick={toggleSidebar}
                />
            )}
        </div>
    );
}
