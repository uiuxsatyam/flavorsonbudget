"use client";

import { use, useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ChevronLeft, Download, Share2, Maximize2, Calendar,
    ArrowRight, Eye, User, Sparkles, MessageCircle,
    Heart, Bookmark, Check, Copy, Lightbulb, TrendingUp,
    Target, HelpCircle, BookOpen, Calculator, Flame, Scale,
    Smartphone, Pin, Camera, Youtube, BarChart3, ListOrdered
} from "lucide-react";
import { getGuideBySlug, guides } from "@/lib/guides-data";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SidebarAd } from "@/components/sidebar-ad";
import { AffiliateSection } from "@/components/affiliate-section";
import "./guide-detail.css";

const categoryIcons: Record<string, any> = {
    "Challenge": Calculator,
    "Cooking 101": Flame,
    "Comparison": Scale,
};

export default function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const guide = getGuideBySlug(slug);

    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [shareOpen, setShareOpen] = useState(false);
    const [toast, setToast] = useState("");
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [copyFeedback, setCopyFeedback] = useState("");
    const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const showToast = useCallback((msg: string) => {
        setToast(msg);
        if (toastTimer.current) clearTimeout(toastTimer.current);
        toastTimer.current = setTimeout(() => setToast(""), 2600);
    }, []);

    // Progress bar logic
    useEffect(() => {
        const handleScroll = () => {
            const d = document.documentElement;
            const bar = document.getElementById("guide-progress");
            if (bar) bar.style.width = (d.scrollTop / (d.scrollHeight - d.clientHeight) * 100) + "%";
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!guide) {
        notFound();
    }

    const Icon = categoryIcons[guide.category] || BookOpen;
    const relatedGuides = guides.filter(g => g.slug !== slug).slice(0, 3);

    return (
        <main className="guides-page-themed min-h-screen bg-background">
            <div className="guide-progress" id="guide-progress" />
            <div className={`fob-toast ${toast ? "show" : ""}`}>{toast}</div>

            <Navbar />

            {/* Share Overlay */}
            <div className={`share-overlay ${shareOpen ? "open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) setShareOpen(false); }}>
                <div className="share-modal">
                    <h3><Share2 size={20} className="inline-block mr-2" /> Share this Guide</h3>
                    <p>Help others master budget cooking!</p>
                    <div className="share-buttons">
                        <button className="share-btn pinterest" onClick={() => window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&description=${encodeURIComponent(guide.title)}`, "_blank")}>Pinterest</button>
                        <button className="share-btn whatsapp" onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`${guide.title} — ${guide.subtitle}. ${window.location.href}`)}`, "_blank")}>WhatsApp</button>
                        <button className="share-btn copy" onClick={() => { navigator.clipboard.writeText(window.location.href); setCopyFeedback("Link copied!"); setTimeout(() => setCopyFeedback(""), 2000); }}>{copyFeedback ? <Check size={16} /> : <Copy size={16} />} Copy Link</button>
                    </div>
                    <button className="share-close" onClick={() => setShareOpen(false)}>Close</button>
                </div>
            </div>

            <div className="pt-20 md:pt-24 pb-20">
                <div className="container mx-auto max-w-6xl px-4 md:px-6 mb-6">
                    <Breadcrumbs
                        items={[
                            { label: "Guides", href: "/guides" },
                            { label: guide.title }
                        ]}
                    />
                </div>
                {/* Hero Section */}
                <header className="container mx-auto max-w-5xl px-4 md:px-6 mb-12 text-center">
                    <div className="flex items-center justify-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-4">
                        <Icon className="h-4 w-4" />
                        {guide.category}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4 leading-tight">
                        {guide.title}<br />
                        {guide.subtitle && <em className="text-primary italic font-medium opacity-90">{guide.subtitle}</em>}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground font-medium border-y border-border/50 py-4 max-w-2xl mx-auto">
                        <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {guide.author}</span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {guide.date}</span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span className="flex items-center gap-1.5"><Eye className="h-4 w-4" /> {guide.views} views</span>
                    </div>
                </header>

                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* LEFT SIDEBAR - Navigation & Trending */}
                        <aside className="lg:col-span-3 hidden lg:block space-y-8">
                            <div className="sidebar-widget glass-card sticky top-28">
                                <h4 className="flex items-center gap-2 font-bold mb-4"><ListOrdered size={16} /> Jump To</h4>
                                <ul className="space-y-3 text-sm font-medium text-muted-foreground">
                                    <li><a href="#intro" className="hover:text-primary transition-colors flex items-center gap-2"><BookOpen size={14} /> Introduction</a></li>
                                    <li><a href="#main-guide" className="hover:text-primary transition-colors flex items-center gap-2"><Maximize2 size={14} /> The Guide</a></li>
                                    {guide.sections.map((s, i) => (
                                        <li key={i}>
                                            <a href={`#section-${i}`} className="hover:text-primary transition-colors flex items-center gap-2">
                                                <Target size={14} /> {s.title}
                                            </a>
                                        </li>
                                    ))}
                                    <li><a href="#faq" className="hover:text-primary transition-colors flex items-center gap-2"><HelpCircle size={14} /> FAQ</a></li>
                                </ul>
                            </div>

                            <div className="sidebar-widget bg-primary/5 border border-primary/10 rounded-2xl p-6">
                                <h4 className="flex items-center gap-2 font-bold mb-3 text-primary"><Smartphone size={16} /> Pocket Version</h4>
                                <p className="text-xs text-muted-foreground mb-4 leading-relaxed font-medium">
                                    Save this guide to your phone for quick reference while shopping or cooking.
                                </p>
                                <Button size="sm" className="w-full rounded-full gap-2 text-xs font-bold">
                                    <Download className="h-3 w-3" /> Save to Photos
                                </Button>
                            </div>
                        </aside>

                        {/* CENTER CONTENT - The Meat */}
                        <div className="lg:col-span-6 space-y-12">
                            {/* Introduction */}
                            <section id="intro" className="glass-section space-y-6">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold">The Strategic Breakdown</h2>
                                <p className="lead text-lg font-medium text-foreground/80 italic leading-relaxed">
                                    &quot;{guide.intro.lead}&quot;
                                </p>
                                {guide.intro.body.map((p, i) => (
                                    <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                                ))}
                                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl">
                                    <h4 className="font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Sparkles className="h-4 w-4 text-primary" /> Key Takeaways
                                    </h4>
                                    <ul className="space-y-3">
                                        {guide.intro.keyTakeaways.map((t, i) => (
                                            <li key={i} className="text-sm font-medium flex items-start gap-3">
                                                <span className="text-primary mt-0.5 font-bold">✓</span>
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* Main Visual Guide */}
                            <section id="main-guide" className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold">Visual Cheat Sheet</h2>
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="icon" className="rounded-full shadow-sm hover:text-primary"><Share2 className="h-4 w-4" /></Button>
                                        <Button variant="ghost" size="icon" className="rounded-full shadow-sm hover:text-primary"><Download className="h-4 w-4" /></Button>
                                    </div>
                                </div>
                                <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                                    <img
                                        src={guide.image}
                                        alt={guide.title}
                                        className="w-full h-auto object-contain cursor-zoom-in"
                                        onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200'; }}
                                    />
                                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="bg-background/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-border/50">
                                            <Maximize2 className="h-5 w-5 text-foreground" />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Custom Sections */}
                            {guide.sections.map((section, idx) => (
                                <section key={idx} id={`section-${idx}`} className="glass-section space-y-6">
                                    <div className="flex items-center gap-3">
                                        <span className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                                            {idx + 1}
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">{section.title}</h2>
                                    </div>
                                    {section.content.map((p, i) => (
                                        <p key={i} className="text-muted-foreground leading-relaxed italic">&quot;{p}&quot;</p>
                                    ))}

                                    {section.list && (
                                        <div className={`grid gap-4 ${section.type === 'comparison' ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                                            {section.list.map((item, i) => {
                                                const [label, val] = item.split(': ');
                                                return (
                                                    <div key={i} className="flex items-center justify-between p-4 bg-card/50 rounded-xl border border-border/10 hover:border-primary/20 transition-all font-medium group">
                                                        <span className="text-sm font-bold group-hover:text-primary transition-colors">{label}</span>
                                                        <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-bold">{val}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </section>
                            ))}

                            {/* FAQ */}
                            <section id="faq" className="glass-section space-y-8">
                                <h2 className="text-3xl font-serif font-bold text-center">Questions?</h2>
                                <div className="space-y-4">
                                    {guide.faqs.map((f, i) => (
                                        <div key={i} className="border border-border/30 rounded-2xl overflow-hidden shadow-sm bg-card/30">
                                            <button
                                                className="w-full text-left p-6 flex items-center justify-between hover:bg-primary/5 transition-colors group"
                                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                            >
                                                <span className="font-bold text-foreground/90 group-hover:text-primary transition-colors">{f.q}</span>
                                                <span className={`text-xl font-light transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                                            </button>
                                            <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}>
                                                <div className="p-6 pt-0 text-muted-foreground leading-relaxed text-sm">
                                                    {f.a}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* RIGHT SIDEBAR - Related & Newsletter */}
                        <aside className="lg:col-span-3 space-y-8">
                            <div className="sidebar-widget glass-card">
                                <h4 className="flex items-center gap-2 font-bold mb-6"><TrendingUp size={16} /> More Guides</h4>
                                <div className="space-y-6">
                                    {relatedGuides.map((g) => (
                                        <Link key={g.slug} href={`/guides/${g.slug}`} className="group block">
                                            <div className="flex gap-4">
                                                <div className="relative h-16 w-12 flex-shrink-0 rounded-lg overflow-hidden bg-muted border border-border/10">
                                                    <img
                                                        src={g.image}
                                                        alt={g.title}
                                                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <h5 className="font-bold text-xs group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-1">
                                                        {g.title}
                                                    </h5>
                                                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                                                        {g.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <Button asChild variant="link" className="mt-8 p-0 text-primary h-auto font-bold group w-full justify-start">
                                    <Link href="/guides" className="flex items-center gap-2 text-xs uppercase tracking-widest">
                                        View All Guides
                                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="sidebar-widget glass-card">
                                <h4 className="flex items-center gap-2 font-bold mb-6"><TrendingUp size={16} /> Related Recipes</h4>
                                <div className="space-y-4">
                                    {guide.relatedRecipes.map((r, i) => (
                                        <Link key={i} href={`/recipes/${r.slug}`} className="flex items-center gap-4 group p-2 rounded-xl hover:bg-primary/5 transition-all border border-transparent hover:border-primary/10">
                                            <span className="text-2xl group-hover:scale-110 transition-transform">{r.emoji}</span>
                                            <div>
                                                <div className="text-sm font-bold group-hover:text-primary transition-colors">{r.title}</div>
                                                <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">{r.price}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <AffiliateSection
                                title="Kitchen Favorites"
                                products={[
                                    {
                                        name: "Compact Rice Cooker",
                                        description: "Perfect for small budgets and tiny kitchens.",
                                        price: "₹1,499",
                                        link: "#"
                                    },
                                    {
                                        name: "Cast Iron Skillet",
                                        description: "Lasts a lifetime. Best for heating up leftovers.",
                                        price: "₹899",
                                        link: "#"
                                    }
                                ]}
                            />

                            <SidebarAd size="square" label="Budget Tips" />

                            <div className="sidebar-widget glass-card bg-secondary/50 border-none shadow-inner p-8 text-center space-y-6">
                                <div className="mx-auto w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                                    <BarChart3 size={24} />
                                </div>
                                <h3 className="font-serif font-bold text-lg">Never Pay Full Price</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Join 5,000+ budget cooks getting daily tricks and hacks.
                                </p>
                                <div className="space-y-3">
                                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#E60023] text-white text-xs font-bold hover:scale-105 transition-transform"><Pin size={14} /> Pinterest</a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white text-xs font-bold hover:scale-105 transition-transform"><Camera size={14} /> Instagram</a>
                                </div>
                            </div>

                            <SidebarAd size="tall" />
                        </aside>
                    </div>
                </div>
            </div>

            {/* Engagement Bar */}
            <div className="engagement-bar-themed">
                <div className="container mx-auto max-w-xl flex items-center justify-between px-6">
                    <button className={`eng-btn ${liked ? "active" : ""}`} onClick={() => { setLiked(!liked); if (!liked) showToast("Added to likes!"); }}>
                        <Heart size={20} fill={liked ? "currentColor" : "none"} />
                        <span className="text-sm font-bold">Like</span>
                    </button>
                    <div className="h-6 w-px bg-border/50" />
                    <button className="eng-btn" onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: 'smooth' })}>
                        <HelpCircle size={20} />
                        <span className="text-sm font-bold">Ask</span>
                    </button>
                    <div className="h-6 w-px bg-border/50" />
                    <button className="eng-btn" onClick={() => setShareOpen(true)}>
                        <Share2 size={20} />
                        <span className="text-sm font-bold">Share</span>
                    </button>
                    <div className="h-6 w-px bg-border/50" />
                    <button className={`eng-btn ${saved ? "active" : ""}`} onClick={() => { setSaved(!saved); showToast(saved ? "Removed from board" : "Saved to your board!"); }}>
                        <Bookmark size={20} fill={saved ? "currentColor" : "none"} />
                        <span className="text-sm font-bold">{saved ? "Saved" : "Save"}</span>
                    </button>
                </div>
            </div>

            <Footer />
        </main>
    );
}
