"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex items-center space-x-2 text-xs md:text-sm font-medium text-muted-foreground mb-6 overflow-x-auto whitespace-nowrap pb-2 hide-scrollbar">
            <Link
                href="/"
                className="flex items-center hover:text-primary transition-colors gap-1.5"
            >
                <Home className="h-3.5 w-3.5" />
                <span className="hidden md:inline">Home</span>
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <ChevronRight className="h-3.5 w-3.5 opacity-50 flex-shrink-0" />
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-foreground font-semibold truncate max-w-[150px] md:max-w-none">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
}
