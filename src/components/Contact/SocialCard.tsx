import { socialLinks } from "../../data/socialLinks";

export function SocialCard() {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">

      {socialLinks.map((social) => {

        const Icon = social.icon;

        return (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="group flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_35px_-5px_rgb(34_211_238/0.5)] md:h-24 md:w-24"
          >
            <Icon
              className={`
                text-3xl transition-transform duration-300 group-hover:scale-110 md:text-4xl ${social.iconColor}
              `}
            />
          </a>
        );
      })}

    </div>
  );
}