import { TfiArrowDown } from "react-icons/tfi";
import heroBackground from "../../assets/images.jpg";

export function Hero() {
    const name = "Gustavo";

    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden"
        >
            {/* Imagem de fundo */}
            <img
                src={heroBackground}
                alt="Background"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Camada escura */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Degradê */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-slate-950/90
                    via-slate-900/50
                    to-blue-950/70
                "
            />

            {/* Conteúdo */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">

                <div className="max-w-3xl text-center">

                    <p className="mb-4 text-lg font-medium text-blue-400">
                        Olá, eu sou 👋
                    </p>

                    <h1 className="mb-4 text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
                        {name}
                    </h1>

                    <h2 className="mb-6 text-2xl font-semibold text-slate-200 sm:text-3xl">
                        Desenvolvedor Full Stack
                    </h2>

                    <p className="mb-10 text-lg leading-8 text-slate-300">
                        Transformo ideias em aplicações web modernas utilizando
                        React, TypeScript, Node.js e Laravel.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

                        <a
                            href="#projects"
                            className="rounded-lg bg-blue-500 px-8 py-3 font-semibold text-white transition hover:bg-blue-600"
                        >
                            Ver Projetos
                        </a>

                        <a
                            href="#contact"
                            className="rounded-lg border border-blue-400 px-8 py-3 font-semibold text-blue-400 transition hover:bg-blue-400 hover:text-white"
                        >
                            Contato
                        </a>

                    </div>

                    <div className="mt-16 flex justify-center">

                        <a
                            href="#about"
                            className="
                                flex
                                h-16
                                w-16
                                items-center
                                justify-center
                                rounded-full
                                border-2
                                border-blue-400
                                text-blue-400
                                transition-all
                                duration-300
                                hover:scale-110
                                hover:bg-blue-400
                                hover:text-white
                                animate-bounce
                            "
                        >
                            <TfiArrowDown className="text-2xl" />
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}