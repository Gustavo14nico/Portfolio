import {
    FaReact,
    FaNodeJs,
    FaLaravel,
    FaUnity,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";

import {
    SiTypescript,
    SiTailwindcss,
    SiPhp,
    SiPostgresql,
    SiMysql,
    SiFirebase,
} from "react-icons/si";

export const softSkills = [
    "Resolução de Problemas",
    "Comunicação",
    "Trabalho em Equipe",
    "Aprendizado Contínuo",
    "Pensamento Analítico",
    "Proatividade",
    "Adaptabilidade",
    "Organização",
];

export const technicalSkills = [
    {
        title: "Frontend",
        skills: [
            {
                name: "React",
                icon: FaReact,
            },
            {
                name: "TypeScript",
                icon: SiTypescript,
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss,
            },
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                name: "Node.js",
                icon: FaNodeJs,
            },
            {
                name: "Laravel",
                icon: FaLaravel,
            },
            {
                name: "PHP",
                icon: SiPhp,
            },
        ],
    },
    {
        title: "Game Development",
        skills: [
            {
                name: "Unity",
                icon: FaUnity,
            },
            {
                name: "C#",
                icon: null, // Não há ícone oficial no react-icons
            },
        ],
    },
    {
        title: "Database",
        skills: [
            {
                name: "PostgreSQL",
                icon: SiPostgresql,
            },
            {
                name: "MySQL",
                icon: SiMysql,
            },
            {
                name: "Firebase",
                icon: SiFirebase,
            },
        ],
    },
    {
        title: "Version Control",
        skills: [
            {
                name: "Git",
                icon: FaGitAlt,
            },
            {
                name: "GitHub",
                icon: FaGithub,
            },
        ],
    },
];