import { socialLinks } from "../../data/socialLinks";

export function SocialCard() {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6">

      {socialLinks.map((social) => {

        const Icon = social.icon;

        return (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className={`
              group
              flex
              h-24
              w-24
              items-center
              justify-center

              sm:h-28
              sm:w-28

              md:h-[120px]
              md:w-[120px]

              border-[3px]
              border-[#2d2d2d]

              bg-black

              shadow-[4px_4px_0px_#2d2d2d]
              md:shadow-[6px_6px_0px_#2d2d2d]

              transition-all
              duration-200

              hover:-translate-x-1
              hover:-translate-y-1

              md:hover:-translate-x-[6px]
              md:hover:-translate-y-[6px]

              hover:shadow-[8px_8px_0px_#2d2d2d]
              md:hover:shadow-[12px_12px_0px_#2d2d2d]

              ${social.rounded}
              ${social.padding}
              ${social.hoverColor}
            `}
          >
            <Icon
              className={`
                text-4xl
                sm:text-5xl
                md:text-[60px]

                transition-colors
                duration-200

                group-hover:text-white

                ${social.iconColor}
              `}
            />
          </a>
        );
      })}

    </div>
  );
}