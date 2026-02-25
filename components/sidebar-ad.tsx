"use client";

import { Megaphone } from "lucide-react";

interface SidebarAdProps {
    size: "square" | "tall" | "banner";
    label?: string;
}

export function SidebarAd({ size, label = "Advertisement" }: SidebarAdProps) {
    const sizeClasses = {
        square: "min-h-[250px]",
        tall: "min-h-[600px]",
        banner: "min-h-[100px] w-full",
    };

    const dimensions = {
        square: "300 × 250",
        tall: "160 × 600",
        banner: "728 × 90",
    };

    return (
        <div className={`ad-placeholder ${size} ${sizeClasses[size]} relative flex flex-col items-center justify-center rounded-3xl bg-primary/5 border-2 border-dashed border-primary/20 p-6 text-center animate-pulse-slow`}>
            <div className="absolute top-3 left-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                {label}
            </div>
            <Megaphone className="h-10 w-10 text-primary/20 mb-3" />
            <div className="text-[10px] font-bold text-muted-foreground/40">
                {dimensions[size]}
            </div>
        </div>
    );
}
