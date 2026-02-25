"use client";

import Script from 'next/script';
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";

export function Newsletter() {
    return (
        <section className="py-16 md:py-24 bg-background border-t border-border/50">
            <div className="container mx-auto max-w-4xl px-0 md:px-6">
                <div className="text-center mb-10">
                    <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                        Stay Updated
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Join the Budget Kitchen
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Get weekly low-cost recipes, grocery hacks, and exclusive cooking tips delivered straight to your inbox.
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="w-full md:max-w-[600px] bg-card/30 backdrop-blur-sm rounded-[31px] border border-border/50 shadow-xl overflow-hidden group hover:border-primary/30 transition-all duration-500">
                        <Script
                            src="https://subscribe-forms.beehiiv.com/embed.js"
                            strategy="afterInteractive"
                            async
                        />
                        <iframe
                            src="https://subscribe-forms.beehiiv.com/30ff6409-53df-40ef-9139-14f4e951967c"
                            className="beehiiv-embed w-full appearance-none m-0 p-0"
                            data-test-id="beehiiv-embed"
                            frameBorder="0"
                            scrolling="no"
                            style={{
                                width: '100%',
                                height: '320px',
                                borderRadius: '23px',
                                backgroundColor: 'transparent',
                            }}
                        />
                    </div>
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Weekly Updates
                    </span>
                    <span className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        No Spam, Ever
                    </span>
                    <span className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Unsubscribe Anytime
                    </span>
                </div>
            </div>
        </section>
    );
}
