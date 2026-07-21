export function Skills() {

    return (
        <section id="skills" className=" bg-slate-900 py-24">
            <div className="mx-auto max-w-5xl px-9 ">
                <div className="rounded-3xl border border-slate-700 bg-slate-800 p-12 shadow-2xl">

                    <div className="text-center mb-12">
                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                            Skills
                        </span>
                    </div>

                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> */}
                    <div className="grid grid-cols-2 gap-10">
                        <div className="md:border-r md:border-slate-600 md:pr-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Soft Skills
                            </h2>

                            <ul className="list-disc list-inside text-slate-300 space-y-3">
                                <li>teste</li>
                            </ul>
                        </div>

                        <div className="md:pl-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Hard Skills
                            </h2>

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