import { softSkills, technicalSkills } from "../../data/skills";
import { SkillChip } from "../Skillchip/skillChip";

export function Skills() {
    return (
        <section id="skills" className="bg-slate-900 py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="rounded-3xl border border-slate-700 bg-slate-800 p-12 shadow-2xl">

                    {/* Título */}
                    <div className="mb-12 text-center">
                        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                            Skills
                        </span>
                    </div>

                    {/* Conteúdo */}
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

                        {/* Soft Skills */}
                        <div className="md:border-r md:border-slate-700 md:pr-10">
                            <h2 className="mb-8 text-4xl font-bold text-white">
                                Competências Pessoais
                            </h2>

                            <div className="space-y-3">
                                {softSkills.map((skill) => (
                                    <SkillChip key={skill}>
                                        {skill}
                                    </SkillChip>
                                ))}
                            </div>
                        </div>

                        {/* Hard Skills */}
                        <div className="md:pl-8">
                            <h2 className="mb-8 text-4xl font-bold text-white">
                                Competências Técnicas
                            </h2>

                            <div className="space-y-8">
                                {technicalSkills.map(({ title, skills }) => (
                                    <div key={title}>
                                        <h3 className="mb-4 text-lg font-semibold text-slate-200">
                                            {title}
                                        </h3>

                                        <div className="flex flex-wrap gap-3">
                                            {skills.map(({ name, icon: Icon }) => (
                                                <SkillChip key={name}>
                                                    {Icon && (
                                                        <Icon className="text-lg text-blue-400" />
                                                    )}
                                                    <span>{name}</span>
                                                </SkillChip>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}