import type { ReactNode } from "react";

type SkillChipProps = {
    children: ReactNode;
};

export function SkillChip({ children }: SkillChipProps) {
    return (
        <div className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-600/15 px-4 py-2 text-sm text-blue-300 transition-all duration-300 hover:scale-105 hover:bg-blue-500/25">
            {children}
        </div>
    );
}