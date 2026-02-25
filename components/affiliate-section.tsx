"use client";

import { ShoppingCart, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AffiliateProduct {
    name: string;
    description: string;
    price: string;
    link: string;
    image?: string;
}

interface AffiliateSectionProps {
    title: string;
    products: AffiliateProduct[];
}

export function AffiliateSection({ title, products }: AffiliateSectionProps) {
    return (
        <div className="sidebar-widget glass-card p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-border/50 pb-4">
                <h4 className="font-serif font-bold text-lg flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4 text-primary" />
                    {title}
                </h4>
                <ShieldCheck className="h-4 w-4 text-amber-600/50" />
            </div>

            <div className="space-y-6">
                {products.map((product, i) => (
                    <div key={i} className="group space-y-3">
                        <div className="space-y-1">
                            <h5 className="font-bold text-sm group-hover:text-primary transition-colors leading-snug">
                                {product.name}
                            </h5>
                            <p className="text-xs text-muted-foreground line-clamp-2 italic">
                                {product.description}
                            </p>
                        </div>
                        <div className="flex items-center justify-between pt-1">
                            <span className="text-sm font-bold text-primary">{product.price}</span>
                            <Button size="sm" variant="outline" className="h-8 rounded-full text-[10px] font-bold uppercase tracking-wider gap-1.5" asChild>
                                <a href={product.link} target="_blank" rel="noopener noreferrer">
                                    Shop Deal <ExternalLink className="h-3 w-3" />
                                </a>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-[9px] text-center text-muted-foreground/50 border-t border-border/30 pt-4 leading-relaxed font-medium">
                *Affiliate link: At no extra cost to you, we may earn a small commission if you purchase through our links.
            </p>
        </div>
    );
}
