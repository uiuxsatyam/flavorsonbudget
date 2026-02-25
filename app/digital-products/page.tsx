"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SidebarAd } from "@/components/sidebar-ad";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Sparkles, Star, Smartphone, Printer, ShieldCheck, ArrowRight, Zap } from "lucide-react";

const ebooks = [
    {
        id: 1,
        title: "15 Budget Meals Under ₹100",
        subtitle: "Complete PDF Guide",
        description: "Our signature guide. Includes cost-breakdowns for every single ingredient, grocery lists, and 15 distinct recipes that cost less than a cup of coffee to make.",
        image: "/images/ebook-cover.webp",
        badge: "Best Seller",
        featured: true,
        price: "₹149",
        originalPrice: "₹499",
        pages: 42,
        formats: ["PDF", "EPUB"]
    },
    {
        id: 2,
        title: "Street Food at Home",
        subtitle: "30 Secret Recipes",
        description: "Learn how to make restaurant-quality pav bhaji, momos, and vada pav for a fraction of the cost. No special equipment needed, just basic kitchen tools.",
        image: "/images/ebook-cover-2.webp",
        badge: "Expert Favorite",
        featured: false,
        price: "₹299",
        originalPrice: "₹799",
        pages: 65,
        formats: ["PDF"]
    },
    {
        id: 3,
        title: "Quick 15-Minute Meals",
        subtitle: "For Busy Professionals",
        description: "When you're tempted to order Swiggy, open this. 20 ultra-fast, ultra-low-cost meals that take less time than delivery and save you ₹200+ every time.",
        image: "/images/ebook-cover-3.webp",
        badge: "New Release",
        featured: false,
        price: "₹199",
        originalPrice: "₹599",
        pages: 38,
        formats: ["PDF", "EPUB"]
    },
];

export default function DigitalProductsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <div className="pt-20 md:pt-24 pb-20">
                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <div className="mb-8">
                        <Breadcrumbs items={[{ label: "Digital Products" }]} />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Sales Area */}
                        <div className="lg:w-2/3">
                            <div className="mb-12">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                    <Zap size={14} /> Knowledge is Power
                                </div>
                                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">Master Budget Cooking with Our Expert Guides</h1>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    Tired of wasting money on food? Our digital guides cut through the noise and give you
                                    exact blueprints to save thousands every month without sacrificing flavor.
                                </p>
                            </div>

                            <div className="space-y-16">
                                {ebooks.map((ebook) => (
                                    <article key={ebook.id} className={`group relative p-8 rounded-3xl border-2 transition-all duration-500 ${ebook.featured ? "border-primary bg-primary/5 shadow-2xl scale-[1.02]" : "border-border/50 bg-card hover:border-primary/40 shadow-lg"}`}>
                                        <div className="flex flex-col md:flex-row gap-8">
                                            <div className="md:w-2/5">
                                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group-hover:rotate-1 transition-transform">
                                                    <Image
                                                        src={ebook.image || "/placeholder.svg"}
                                                        alt={ebook.title}
                                                        fill
                                                        className="object-contain"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800';
                                                        }}
                                                    />
                                                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest">{ebook.badge}</Badge>
                                                </div>
                                            </div>
                                            <div className="md:w-3/5 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex items-center gap-1 text-secondary mb-2">
                                                        {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                                        <span className="text-xs font-bold text-muted-foreground ml-2">5.0 (400+ reviews)</span>
                                                    </div>
                                                    <h2 className="text-2xl md:text-3xl font-serif font-bold mb-1">{ebook.title}</h2>
                                                    <p className="text-primary font-bold mb-4 uppercase tracking-tighter text-sm">{ebook.subtitle}</p>
                                                    <p className="text-muted-foreground leading-relaxed mb-6 italic border-l-4 border-primary/20 pl-4">
                                                        "{ebook.description}"
                                                    </p>

                                                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground font-bold mb-6">
                                                        <div className="flex items-center gap-1.5"><Download size={14} className="text-primary" /> Instant PDF</div>
                                                        <div className="flex items-center gap-1.5"><Smartphone size={14} className="text-primary" /> Phone/Tablet Ready</div>
                                                        <div className="flex items-center gap-1.5"><Smartphone size={14} className="text-primary" /> {ebook.pages} Pages</div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="flex items-end gap-3 mb-6">
                                                        <span className="text-3xl font-bold">{ebook.price}</span>
                                                        <span className="text-lg text-muted-foreground line-through decoration-primary decoration-2 mb-1">{ebook.originalPrice}</span>
                                                        <Badge variant="secondary" className="mb-2 bg-green-100 text-green-700 border-none">Save {(parseInt(ebook.originalPrice.replace('₹', '')) - parseInt(ebook.price.replace('₹', '')))}</Badge>
                                                    </div>
                                                    <Button className="w-full h-14 rounded-2xl text-lg font-bold shadow-xl hover:shadow-primary/20 transition-all flex gap-3">
                                                        <Zap size={20} /> Download My Copy Now
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* Confidence & Sidebar */}
                        <aside className="lg:w-1/3">
                            <div className="sticky top-24 space-y-8">
                                <div className="p-8 rounded-3xl bg-secondary/20 border border-border/50 text-center space-y-6">
                                    <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto shadow-inner text-primary">
                                        <ShieldCheck size={40} />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold">100% Satisfaction</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Not satisfied with the guide? Let us know within 7 days and we'll refund your money.
                                        No questions asked. We're that confident.
                                    </p>
                                    <ul className="text-left space-y-4">
                                        <li className="flex gap-3 text-sm">
                                            <div className="p-1 rounded bg-green-100 text-green-600"><Smartphone size={14} /></div>
                                            <span>Optimized for iPhone, Android & Kindle</span>
                                        </li>
                                        <li className="flex gap-3 text-sm">
                                            <div className="p-1 rounded bg-blue-100 text-blue-600"><Printer size={14} /></div>
                                            <span>High-quality print-ready layout</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-8 rounded-3xl bg-primary text-primary-foreground shadow-2xl space-y-6 relative overflow-hidden group">
                                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-serif font-bold mb-2">Bundle & Save 50%</h3>
                                        <p className="text-white/80 text-sm mb-6 leading-relaxed">
                                            Get all 3 guides + our exclusive "Secret Spice Manual" for a special price.
                                        </p>
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="text-3xl font-black">₹499</span>
                                            <span className="text-sm line-through opacity-70">₹1,897</span>
                                        </div>
                                        <Button variant="secondary" className="w-full rounded-full font-bold h-12">
                                            Claim Bundle Deal <ArrowRight size={16} className="ml-2" />
                                        </Button>
                                    </div>
                                </div>

                                <SidebarAd size="tall" label="Featured Course" />
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
