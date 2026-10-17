import { TfiArrowDown } from "react-icons/tfi";
import heroBackground from "../../assets/images.jpg";

export function Hero() {
    const name = "Gustavo de Assis";

    return (
        <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center opacity-20 mix-blend-luminosity"
                style={{ backgroundImage: `url(${heroBackground})` }}
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#04060d]/60 via-[#04060d]/80 to-[#04060d]" />
            <div className="orb -left-24 top-1/4 -z-10 h-96 w-96 bg-cyan-500" />
            <div className="orb -right-24 bottom-1/4 -z-10 h-[28rem] w-[28rem] bg-violet-600 [animation-delay:-7s]" />

            <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center px-6 py-24">
                <div className="max-w-3xl text-center">
                    <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-cyan-200">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                        </span>
                        Desenvolvedor Full Stack
                    </span>

                    <p className="mb-3 font-mono text-base text-slate-400">Olá, eu me chamo</p>

                    <h1 className="gradient-text mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                        {name}
                    </h1>

                    <h2 className="cursor mb-6 font-mono text-lg font-medium text-cyan-200 sm:text-2xl">
                        React • Node.js • Laravel
                    </h2>

                    <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-slate-400">
                        Desenvolvo aplicações web modernas, escaláveis e intuitivas utilizando React,
                        TypeScript, Node.js e Laravel.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a
                            href="#projects"
                            className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-3 font-semibold text-slate-950 shadow-[0_0_30px_-5px_rgb(34_211_238/0.6)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_45px_-5px_rgb(139_92_246/0.7)]"
                        >
                            Ver Projetos
                        </a>

                        <a
                            href="#contact"
                            className="rounded-xl border border-white/15 bg-white/5 px-8 py-3 font-semibold text-slate-100 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-200"
                        >
                            Entre em contato
                        </a>
                    </div>

                    <div className="mt-16 flex justify-center">
                        <a
                            href="#about"
                            aria-label="Rolar para a próxima seção"
                            className="flex h-12 w-12 animate-bounce items-center justify-center rounded-full border border-white/20 text-slate-400 transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-300"
                        >
                            <TfiArrowDown className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
