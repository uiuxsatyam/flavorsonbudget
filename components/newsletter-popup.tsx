"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Script from "next/script";
import { Button } from "@/components/ui/button";

export function NewsletterPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

    useEffect(() => {
        console.log("NewsletterPopup: Timer started for 10s");
        const dismissed = sessionStorage.getItem("newsletter-popup-dismissed");
        if (dismissed) {
            console.log("NewsletterPopup: Dismissed in this session. (Temporary bypass enabled for testing)");
            // setHasBeenDismissed(true); // Commented out for debugging
            // return;
        }

        const timer = setTimeout(() => {
            console.log("NewsletterPopup: Showing now!");
            setIsVisible(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsExiting(true);
        setTimeout(() => {
            setIsVisible(false);
            setHasBeenDismissed(true);
            sessionStorage.setItem("newsletter-popup-dismissed", "true");
        }, 300); // Wait for exit animation
    };

    if ((!isVisible && !isExiting) || hasBeenDismissed) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 bg-background/80 backdrop-blur-sm transition-all duration-300 ${isExiting ? "opacity-0 invisible" : "opacity-100 visible active"}`}>
            <div className={`relative w-full max-w-[600px] bg-card md:border md:border-border/50 md:shadow-2xl md:rounded-[31px] overflow-hidden transition-all duration-500 ease-out-back ${isExiting ? "scale-95 opacity-0 translate-y-8" : "scale-100 opacity-100 translate-y-0"}`}>
                {/* Close Button - Optimized for touch */}
                <button
                    className="absolute top-4 right-4 z-50 p-3 rounded-full bg-background/40 backdrop-blur-md hover:bg-background/80 transition-colors border border-border/20 shadow-sm"
                    onClick={handleClose}
                    aria-label="Close popup"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Content Container */}
                <div className="pt-10 pb-6 px-0 flex flex-col items-center">
                    <div className="text-center mb-4 px-6 md:px-10">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2 tracking-tight text-foreground">Wait! Let's Stay Connected</h2>
                        <p className="text-muted-foreground text-sm max-w-[340px] mx-auto leading-relaxed">
                            Join 5,000+ smart cooks getting our <span className="text-primary font-bold italic">best weekly recipes</span> for free.
                        </p>
                    </div>

                    <div className="w-full flex justify-center bg-transparent px-0 overflow-hidden">
                        <Script
                            src="https://subscribe-forms.beehiiv.com/embed.js"
                            strategy="afterInteractive"
                            async
                        />
                        <iframe
                            src="https://subscribe-forms.beehiiv.com/b74cb716-6f20-4495-8769-c23aae94e90e"
                            className="beehiiv-embed w-full min-w-full appearance-none m-0 p-0"
                            data-test-id="beehiiv-embed"
                            frameBorder="0"
                            scrolling="no"
                            style={{
                                height: '280px',
                                width: '100%',
                                maxWidth: '100%',
                                backgroundColor: 'transparent',
                                margin: 0,
                            }}
                        />
                    </div>

                    <p className="mt-2 text-[10px] text-muted-foreground uppercase tracking-widest font-bold opacity-50">
                        Zero Spam • Cancel Anytime • Exclusive Content
                    </p>
                </div>
            </div>
        </div>
    );
}
