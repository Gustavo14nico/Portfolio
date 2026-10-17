import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import { MdOutlineMail } from "react-icons/md"

export const socialLinks = [
  {
    id: 1,
    label: "E-mail",
    icon: MdOutlineMail,
    href: "mailto:gustavo@byncstudios.com?subject=Contato%20pelo%20portf%C3%B3lio",
    iconColor: "text-pink-600",
    hoverColor: "hover:bg-[#fd1d1d]",
    rounded: "rounded-[90px_5px_5px_5px]",
    padding: "pt-3 pl-3",
  },
  {
    id: 2,
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/gustavo-de-assis-06581928a/",
    iconColor: "text-[#24A0ED]",
    hoverColor: "hover:bg-[#24A0ED]",
    rounded: "rounded-[5px_90px_5px_5px]",
    padding: "pt-3 pr-3",
  },
  {
    id: 3,
    label: "GitHub",
    icon: FaGithub,
    href: "https://github.com/Gustavo14nico",
    iconColor: "text-[#ffffff]",
    hoverColor: "hover:bg-[#F7B733]",
    rounded: "rounded-[5px_5px_5px_90px]",
    padding: "pb-[10px] pl-3",
  },
  {
    id: 4,
    label: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/5518997423902",
    iconColor: "text-[#00A849]",
    hoverColor: "hover:bg-[#4CD137]",
    rounded: "rounded-[5px_5px_90px_5px]",
    padding: "pb-3 pr-3",
  },
];