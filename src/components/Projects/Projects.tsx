import { useState } from "react";
import logoBP from "../../assets/image/img-logo-bio-power.png";

export function Projects() {

    const projects = [
        {
            title: "Bio Power — Plataforma de E-commerce",

            description:
                "Plataforma web para compra de suplementos, vitaminas e produtos de bem-estar, desenvolvida com foco em simplicidade e facilidade de uso.",

            detailedDescription:
                "O Bio Power foi desenvolvido em equipe durante os primeiros semestres da faculdade com o objetivo de criar uma experiência de compra simples e intuitiva para produtos de bem-estar.",

            technologies: [
                "JavaScript",
                "HTML",
                "CSS",
            ],

            features: [
                "Catálogo de produtos",
                "Navegação por categorias",
                "Visualização de produtos",
                "Carrinho de compras",
                "Interface responsiva",
            ],

            github:
                "https://github.com/Otavig/bio-power#bio-power-pt",

            demo: "#",

            image: logoBP,
        },
    ];

    const [selectedProject, setSelectedProject] = useState<
        (typeof projects)[number] | null
    >(null);

    return (
        <section
            id="projects"
            className="bg-slate-900 py-24"
        >
            <div className="mx-auto max-w-6xl px-6">

                {/* Container */}
                <div className="rounded-3xl border border-slate-700 bg-slate-800 p-12">

                    {/* Título */}
                    <div className="mb-16 text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                            Projetos
                        </span>
                    </div>

                    {/* Lista de projetos */}
                    <div className="space-y-10">

                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="group overflow-hidden rounded-2xl border border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
                            >

                                <div className="grid items-center gap-8 md:grid-cols-[0.8fr_1.2fr]">

                                    {/* Imagem */}
                                    <div className="flex h-[350px] items-center justify-center p-6">

                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
                                        />

                                    </div>

                                    {/* Informações */}
                                    <div className="flex flex-col justify-between p-8">

                                        <div className="w-full">

                                            <h2 className="text-3xl font-bold text-white">
                                                {project.title}
                                            </h2>

                                            <p className="mt-6 text-lg leading-relaxed text-slate-400">
                                                {project.description}
                                            </p>

                                            {/* Tecnologias */}
                                            <div className="mt-6 flex flex-wrap gap-3">

                                                {project.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-full border border-blue-500/20 bg-blue-600/15 px-4 py-2 text-sm text-blue-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}

                                            </div>

                                        </div>

                                        {/* Botões */}
                                        <div className="mt-8 flex gap-4">

                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="rounded-xl border border-blue-500 px-5 py-2 text-blue-400 transition hover:bg-blue-500 hover:text-white"
                                            >
                                                GitHub
                                            </a>

                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setSelectedProject(project);
                                                }}
                                                className="rounded-xl bg-blue-500 px-5 py-2 text-white transition hover:bg-blue-600"
                                            >
                                                Ver Projeto
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

            {/* MODAL */}
            {selectedProject && (

                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
                    onClick={() => setSelectedProject(null)}
                    role="dialog"
                    aria-modal="true"
                >

                    <div
                        className="relative z-[10000] max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-700 bg-slate-800 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Fechar */}
                        <button
                            type="button"
                            onClick={() => setSelectedProject(null)}
                            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-xl text-slate-300 transition hover:bg-blue-500 hover:text-white"
                            aria-label="Fechar"
                        >
                            ×
                        </button>

                        {/* Imagem */}
                        <div className="flex h-64 items-center justify-center bg-slate-900 p-8">

                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="max-h-full max-w-full object-contain"
                            />

                        </div>

                        {/* Conteúdo */}
                        <div className="p-8 md:p-10">

                            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                                Projeto
                            </span>

                            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                                {selectedProject.title}
                            </h2>

                            {/* Sobre */}
                            <div className="mt-6">

                                <h3 className="text-xl font-semibold text-white">
                                    Sobre o projeto
                                </h3>

                                <p className="mt-3 text-base leading-relaxed text-slate-400">
                                    {selectedProject.detailedDescription}
                                </p>

                            </div>

                            {/* Tecnologias */}
                            <div className="mt-8">

                                <h3 className="text-xl font-semibold text-white">
                                    Tecnologias
                                </h3>

                                <div className="mt-4 flex flex-wrap gap-3">

                                    {selectedProject.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-blue-500/20 bg-blue-600/15 px-4 py-2 text-sm text-blue-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}

                                </div>

                            </div>

                            {/* Funcionalidades */}
                            <div className="mt-8">

                                <h3 className="text-xl font-semibold text-white">
                                    Funcionalidades
                                </h3>

                                <ul className="mt-4 space-y-3">

                                    {selectedProject.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-3 text-slate-400"
                                        >
                                            <span className="h-2 w-2 rounded-full bg-blue-500" />

                                            {feature}
                                        </li>
                                    ))}

                                </ul>

                            </div>

                            {/* Ações */}
                            <div className="mt-10 flex flex-wrap gap-4">

                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl border border-blue-500 px-6 py-3 text-blue-400 transition hover:bg-blue-500 hover:text-white"
                                >
                                    Ver no GitHub
                                </a>

                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="rounded-xl bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600"
                                >
                                    Fechar
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </section>
    );
}