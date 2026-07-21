export function Projects() {
    return (
        <section
            id="projects"
            className="bg-slate-900 py-16 md:py-24"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-2xl">
                    {/* Texto */}
                    <div className="text-center mb-12">
                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Projetos</span>
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                        <div className="md:border-r md:border-slate-600 md:pr-8">
                            <ul className="list-disc list-inside text-slate-300 space-y-3">
                                <li>teste</li>
                            </ul>
                        </div>

                        <div className="md:pl-8">
                            <ul className="list-disc list-inside text-slate-300 space-y-3">
                                <li>teste</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}