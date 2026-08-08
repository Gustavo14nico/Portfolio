export function Footer() {
    return(
        <footer>
            <div className="border-t border-slate-800 bg-slate-950 py-12">
                <div className="mx-auto max-w-7xl px-8">
                    <p className="text-center text-slate-400">
                        &copy; {new Date().getFullYear()} Bync Studios. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}