export function Projects() {
    const projects = [
        {
            title: "Sistema de Simulados",
            description:
                "Plataforma para criação e aplicação de simulados, gerenciamento de alunos e relatórios de desempenho.",
            technologies: [
                "React",
                "TypeScript",
                "Laravel",
                "PostgreSQL",
            ],
            github: "#",
            demo: "#",
            image:
                "https://placehold.co/800x450/1e293b/60a5fa?text=Sistema+de+Simulados",
        },
        {
            title: "Portfólio",
            description:
                "Meu portfólio pessoal desenvolvido para apresentar projetos, habilidades e experiências.",
            technologies: ["React", "Tailwind CSS", "TypeScript"],
            github: "#",
            demo: "#",
            image:
                "https://placehold.co/800x450/1e293b/60a5fa?text=Portfolio",
        },
        {
            title: "Jogo Educacional",
            description:
                "Aplicação desenvolvida em Unity para auxiliar o aprendizado através de atividades interativas.",
            technologies: ["Unity", "C#"],
            github: "#",
            demo: "#",
            image:
                "https://placehold.co/800x450/1e293b/60a5fa?text=Unity+Game",
        },
    ];

    return (
        <section id="projects" className="bg-slate-900 py-24">
            <div className="mx-auto max-w-6xl px-6">

                <div className="rounded-3xl border border-slate-700 bg-slate-800 p-12">

                    <div className="mb-16 text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                            Projetos
                        </span>
                    </div>

                    <div className="space-y-10">

                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="group overflow-hidden rounded-2xl border border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10"
                            >

                                <div className="grid md:grid-cols-2">

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    <div className="flex flex-col justify-between p-8">

                                        <div>

                                            <h2 className="mb-4 text-3xl font-bold text-white">
                                                {project.title}
                                            </h2>

                                            <p className="mb-6 leading-7 text-slate-400">
                                                {project.description}
                                            </p>

                                            <div className="mb-8 flex flex-wrap gap-3">
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

                                        <div className="flex gap-4">

                                            <a
                                                href={project.github}
                                                className="rounded-xl border border-blue-500 px-5 py-2 text-blue-400 transition hover:bg-blue-500 hover:text-white"
                                            >
                                                GitHub
                                            </a>

                                            <a
                                                href={project.demo}
                                                className="rounded-xl bg-blue-500 px-5 py-2 text-white transition hover:bg-blue-600"
                                            >
                                                Ver Projeto
                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}