"use client";

export default function Cardapio() {
    return (
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-10 text-center text-red-600">Cardápio Boteco Jambeiro</h1>

            {/* Petiscos */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-red-500">Petiscos</h2>
                <ul className="space-y-2">
                    <li>
                        Pastel (8 unidades) - Camarão, queijo ou carne - <strong>R$ 45,90</strong>
                    </li>
                    <li>
                        Bolinho de Feijoada (6 unidades) - <strong>R$ 35,90</strong>
                    </li>
                    <li>
                        Bolinho de Cordeiro (6 unidades) - <strong>R$ 35,90</strong>
                    </li>
                    <li>
                        Croquete - Vaca Lôca (6 unidades) - <strong>R$ 32,90</strong>
                    </li>
                </ul>
            </section>

            {/* Porções */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-red-500">Porções</h2>
                <ul className="space-y-2">
                    <li>
                        Batata Frita - <strong>R$ 25,90</strong>
                    </li>
                    <li>
                        Frango à Passarinho - <strong>R$ 29,90</strong>
                    </li>
                    <li>
                        Camarões Crocantes - <strong>R$ 69,90</strong>
                    </li>
                    <li>
                        Onion Rings com molho gorgonzola - <strong>R$ 29,90</strong>
                    </li>
                </ul>
            </section>

            {/* Chapa */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-red-500">Chapas (1kg)</h2>
                <ul className="space-y-2">
                    <li>
                        Chapa A - Diversos tipos de carne + fritas - <strong>R$ 98,90</strong>
                    </li>
                    <li>
                        Chapa do RJ - Bife ancho, picanha suína, costelinha, batata rústica - <strong>R$ 98,90</strong>
                    </li>
                    <li>
                        Franguinho - Filezinhos de frango grelhado - <strong>R$ 89,90</strong>
                    </li>
                    <li>
                        Do Mar - Peixes, camarões e batatas - <strong>R$ 98,90</strong>
                    </li>
                </ul>
            </section>

            {/* Churraspão */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-red-500">Churraspão</h2>
                <p className="mb-4 text-gray-700">Acompanha batata frita</p>
                <ul className="space-y-2">
                    <li>
                        Coração - <strong>R$ 29,90</strong>
                    </li>
                    <li>
                        Costela - <strong>R$ 36,90</strong>
                    </li>
                    <li>
                        Frango - <strong>R$ 29,90</strong>
                    </li>
                    <li>
                        Linguiça - <strong>R$ 29,90</strong>
                    </li>
                    <li>
                        Contra-filé - <strong>R$ 36,90</strong>
                    </li>
                </ul>
            </section>

            {/* Carro Chefe */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-red-500">Carro Chefe</h2>
                <ul className="space-y-2">
                    <li>
                        Churrascão Completo (prato) - <strong>R$ 75,90 individual</strong> /{" "}
                        <strong>R$ 139,90 duplo</strong>
                    </li>
                    <li>
                        Picanha na Chapa à Gaúcha - <strong>R$ 79,90 individual</strong> /{" "}
                        <strong>R$ 149,90 duplo</strong>
                    </li>
                    <li>
                        Risoto de Camarão - <strong>R$ 72,90 individual</strong> / <strong>R$ 139,90 duplo</strong>
                    </li>
                    <li>
                        Nhoque ao Mare - <strong>R$ 69,90 individual</strong> / <strong>R$ 129,90 duplo</strong>
                    </li>
                    <li>
                        Carne de Sol Jambeiro - <strong>R$ 78,90 individual</strong> / <strong>R$ 139,90 duplo</strong>
                    </li>
                </ul>
            </section>
        </div>
    );
}
