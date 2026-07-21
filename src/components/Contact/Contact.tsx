import { SocialCard } from "./SocialCard";

export function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-8">

        <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6 shadow-2xl md:p-12">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Contato
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Vamos conversar?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              Se você tem uma ideia, um projeto ou uma oportunidade,
              entre em contato comigo através das minhas redes sociais.
            </p>

          </div>

          <div className="mt-10 flex justify-center md:mt-14">
            <SocialCard />
          </div>

        </div>

      </div>
    </section>
  );
}