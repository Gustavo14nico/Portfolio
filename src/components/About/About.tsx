import profileImage from "../../image/Retrato Corporativo Profissional.png";

export function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div
          className="
            flex
            flex-col-reverse
            items-center
            gap-12

            rounded-3xl
            border
            border-slate-700
            bg-slate-800
            p-8
            shadow-2xl

            lg:flex-row
            lg:gap-20
            lg:p-14
          "
        >
          {/* Texto */}
          <div className="flex-1 text-center lg:text-left">

            <span className="font-semibold uppercase tracking-[0.3em] text-blue-400">
              Sobre Mim
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Quem sou eu?
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-400 lg:text-lg lg:leading-8">
              Desenvolvedor de software apaixonado por criar experiências digitais de qualidade.
            </p>

            <p className="mt-6 text-base leading-7 text-slate-400 lg:text-lg lg:leading-8">
              Atualmente trabalho com desenvolvimento de jogos educacionais em Unity e C#, enquanto aprofundo meus
              conhecimentos em desenvolvimento Full Stack utilizando React, TypeScript, Node.js e Laravel. Acredito
              que aprender continuamente, escrever código limpo e buscar soluções eficientes são os pilares para construir
              produtos de qualidade.
            </p>
            <p className="mt-6 text-base leading-7 text-slate-400 lg:text-lg lg:leading-8">
              Estou sempre em busca de novos desafios e oportunidades para evoluir como desenvolvedor.
            </p>

            {/* <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">

              {["React", "TypeScript", "Unity", "C#", "Node.js", "Laravel"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400"
                >
                  {tech}
                </span>
              ))}

            </div> */}

          </div>

          {/* Foto */}
          <div className="flex flex-1 justify-center">

            <div
              className="
                flex
                h-60
                w-60
                items-center
                justify-center
                rounded-full
                border-2
                border-dashed
                border-blue-500
                bg-slate-900
                shadow-xl

                sm:h-72
                sm:w-72

                lg:h-96
                lg:w-96
              "
            >
              <span className="text-slate-500">
                <img
                  src={profileImage}
                  alt="Foto de perfil"
                  className="h-full w-full rounded-full object-cover"
                />
              </span>
            </div>

          </div>

        </div>

      </div>

    </section >
  );
}