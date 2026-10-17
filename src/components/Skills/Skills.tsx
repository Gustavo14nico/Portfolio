import { softSkills, technicalSkills } from "../../data/skills";
import { SkillChip } from "../Skillchip/skillChip";

export function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="glass rounded-3xl p-6 md:p-12">

                    {/* Título */}
                    <div className="mb-12 text-center">
                        <span className="text-sm font-semibold font-mono uppercase tracking-[0.3em] text-cyan-300">
                            Skills
                        </span>
                    </div>

                    {/* Conteúdo */}
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

                        {/* Soft Skills */}
                        <div className="md:border-r md:border-white/10 md:pr-10">
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
                                                        <Icon className="text-lg text-cyan-300" />
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