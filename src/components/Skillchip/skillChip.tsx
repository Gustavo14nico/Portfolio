import type { ReactNode } from "react";

type SkillChipProps = {
    children: ReactNode;
};

export function SkillChip({ children }: SkillChipProps) {
    return (
        <div className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 transition-all duration-300 hover:scale-105 hover:bg-cyan-400/20">
            {children}
        </div>
    );
}