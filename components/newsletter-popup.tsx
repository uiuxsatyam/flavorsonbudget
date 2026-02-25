"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Script from "next/script";
import { Button } from "@/components/ui/button";

export function NewsletterPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

    useEffect(() => {
        // Check if user has already seen/dismissed the popup in this session
        const dismissed = sessionStorage.getItem("newsletter-popup-dismissed");
        if (dismissed) {
            setHasBeenDismissed(true);
            return;
        }

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 15000); // 15 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setHasBeenDismissed(true);
        sessionStorage.setItem("newsletter-popup-dismissed", "true");
    };

    if (!isVisible || hasBeenDismissed) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-500">
            <div className="relative w-full max-w-[600px] bg-card border border-border/50 shadow-2xl rounded-[31px] overflow-hidden animate-in zoom-in-95 duration-500">
                {/* Close Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-50 rounded-full bg-background/50 backdrop-blur-md hover:bg-background/80"
                    onClick={handleClose}
                >
                    <X className="h-5 w-5" />
                </Button>

                {/* Content */}
                <div className="p-2 pt-12 md:p-4 md:pt-14 flex flex-col items-center">
                    <div className="text-center mb-6 px-4">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">Wait! Don't Miss Out</h2>
                        <p className="text-sm text-muted-foreground">
                            Join 5,000+ smart cooks getting our weekly budget recipes.
                        </p>
                    </div>

                    <div className="w-full flex justify-center overflow-hidden">
                        <Script
                            src="https://subscribe-forms.beehiiv.com/embed.js"
                            strategy="afterInteractive"
                            async
                        />
                        <iframe
                            src="https://subscribe-forms.beehiiv.com/b74cb716-6f20-4495-8769-c23aae94e90e"
                            className="beehiiv-embed w-full appearance-none m-0 p-0"
                            data-test-id="beehiiv-embed"
                            frameBorder="0"
                            scrolling="no"
                            style={{
                                height: '320px',
                                width: '100%',
                                maxWidth: '100%',
                                borderRadius: '20px',
                                backgroundColor: 'transparent',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
