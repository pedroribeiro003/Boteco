"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
    return (
        <div>
            {/* CONTEÚDO COMPLETO */}
            <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-8 space-y-8 md:space-y-0">
                <div className="w-full md:w-1/2 pr-8">
                    <h2 className="text-3xl font-bold mb-4">Quem Somos:</h2>
                    <p className="text-lg text-gray-700">
                        O Boteco Jambeiro é a mais nova empreitada de Jonathas de Albuquerque Abreu, atual sócio e
                        gestor do tradicional Restaurante Jambeiro, localizado no bairro do Ingá, em Niterói. Com uma
                        trajetória marcada pela dedicação à gastronomia e ao atendimento de qualidade, Jonathas decidiu
                        expandir sua atuação para oferecer uma experiência mais descontraída, sem abrir mão da
                        excelência que caracteriza o Jambeiro.
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        O Boteco Jambeiro surge como uma extensão desse compromisso, proporcionando um espaço onde os
                        clientes podem desfrutar de petiscos saborosos, bebidas variadas e um ambiente informal, ideal
                        para encontros entre amigos e momentos de descontração. A proposta é unir o melhor da culinária
                        de boteco com o padrão de qualidade que os frequentadores do Jambeiro já conhecem e apreciam.
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <Image
                        src="/place.png"
                        alt="Imagem do Boteco"
                        width={500}
                        height={400}
                        className="rounded-lg object-cover"
                    />
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-8 space-y-8 md:space-y-0">
                <div className="w-full md:w-1/2">
                    <Image
                        src="/food.png"
                        alt="Imagem da Comida"
                        width={500}
                        height={400}
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2 pl-8">
                    <h2 className="text-3xl font-bold mb-4">O que oferecemos:</h2>
                    <p className="text-lg text-gray-700">
                        No Boteco Jambeiro, você encontrará uma variedade de petiscos tradicionais de boteco, como
                        bolinhos, pastéis e porções generosas, além de uma seleção de bebidas que inclui cervejas
                        artesanais, drinks refrescantes e opções não alcoólicas. O ambiente é acolhedor e descontraído,
                        perfeito para relaxar após um longo dia ou celebrar momentos especiais com amigos e familiares.
                    </p>
                </div>
            </section>
        </div>
    );
}
