// src/app/layout.tsx
import { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/header"; // Se quiser também o Footer
import Footer from "@/components/footer"; // Se quiser também o Header
export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt-BR">
            <body className="bg-white text-gray-800 flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
