export function Footer() {
    return(
        <footer>
            <div className="border-t border-white/10 bg-black/40 py-10 backdrop-blur">
                <div className="mx-auto max-w-7xl px-8">
                    <p className="text-center font-mono text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} Bync Studios. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}