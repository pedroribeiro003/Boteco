"use client";

import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";

export default function Contato() {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-10 text-center text-red-600">Fale Conosco</h1>

            <div className="space-y-8">
                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                    <MessageCircle size={28} className="text-green-500" />
                    <div>
                        <h2 className="text-xl font-bold">WhatsApp</h2>
                        <a
                            href="https://wa.me/5521999999999" // <-- Trocar pelo número real
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-green-600 transition-all"
                        >
                            (21) 99999-9999
                        </a>
                    </div>
                </div>

                {/* Telefone */}
                <div className="flex items-center gap-4">
                    <Phone size={28} className="text-blue-500" />
                    <div>
                        <h2 className="text-xl font-bold">Telefone</h2>
                        <p className="text-gray-700">(21) 99999-9999</p>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                    <Mail size={28} className="text-yellow-500" />
                    <div>
                        <h2 className="text-xl font-bold">Email</h2>
                        <p className="text-gray-700">contato@botecojambeiro.com</p>
                    </div>
                </div>

                {/* Endereço */}
                <div className="flex items-center gap-4">
                    <MapPin size={28} className="text-red-500" />
                    <div>
                        <h2 className="text-xl font-bold">Endereço</h2>
                        <p className="text-gray-700">
                            Rua Exemplo, 123 - Bairro Ingá
                            <br />
                            Niterói - RJ
                        </p>
                    </div>
                </div>

                {/* Horário de Funcionamento */}
                <div className="flex items-center gap-4">
                    <Clock size={28} className="text-purple-500" />
                    <div>
                        <h2 className="text-xl font-bold">Horário de Funcionamento</h2>
                        <p className="text-gray-700">
                            Terça a Domingo: 11h às 23h
                            <br />
                            Segunda: Fechado
                        </p>
                    </div>
                </div>
            </div>

            {/* Botão WhatsApp Flutuante */}
            <a
                href="https://wa.me/5521999999999" // <-- Troque para o número real!
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16.72 11.06l-4.42-4.42a1.5 1.5 0 00-2.12 2.12l2.06 2.06-2.06 2.06a1.5 1.5 0 102.12 2.12l4.42-4.42z"
                    />
                </svg>
            </a>
        </div>
    );
}
