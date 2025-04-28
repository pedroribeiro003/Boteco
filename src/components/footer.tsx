export default function Footer() {
    return (
        <footer className="bg-red-600 text-white mt-12">
            <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="text-center md:text-left text-sm">
                    &copy; {new Date().getFullYear()} Boteco Jambeiro. Todos os direitos reservados.
                </div>
                <div className="flex items-center gap-6">
                    <a href="#" className="hover:text-gray-300">
                        Instagram
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        Facebook
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        Contato
                    </a>
                </div>
            </div>
        </footer>
    );
}
