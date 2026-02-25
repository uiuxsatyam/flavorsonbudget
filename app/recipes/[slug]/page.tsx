"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { getRecipeBySlug } from "@/lib/recipes-data";
import type { Recipe, RecipeTip } from "@/lib/recipe-types";
import {
    ArrowLeft, Pen, CalendarDays, Eye, ListOrdered, BookOpen, IndianRupee,
    ShoppingCart, ChefHat, Sparkles, RefreshCw, Star, PiggyBank, Salad,
    HelpCircle, TrendingUp, Tag, Lightbulb, Megaphone, Mail, BarChart3,
    UtensilsCrossed, PartyPopper, Timer, Users, Flame, Heart, MessageCircle,
    Link2, Bookmark, Pin, Camera, Youtube, Gift, Target, ArrowRight,
    Smartphone, CircleDollarSign, CookingPot, AlertTriangle, Copy, Check, type LucideIcon
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SidebarAd } from "@/components/sidebar-ad";
import { AffiliateSection } from "@/components/affiliate-section";
import "./recipe-detail.css";

const statIconMap: Record<string, LucideIcon> = {
    "Total Cost": CircleDollarSign,
    "Per Serving": UtensilsCrossed,
    "Total Time": Timer,
    "Servings": Users,
    "Spice Level": Flame,
};

const tipIconMap: Record<string, LucideIcon> = {
    gold: Lightbulb,
    green: Lightbulb,
    red: AlertTriangle,
};

function getStatIcon(label: string) {
    const Icon = statIconMap[label] || Star;
    return <Icon size={22} />;
}

function getTipIcon(type: string) {
    const Icon = tipIconMap[type] || Lightbulb;
    return <Icon size={16} />;
}

function TipBox({ tip }: { tip?: RecipeTip }) {
    if (!tip) return null;
    return (
        <div className={`tip-box ${tip.type}`}>
            <span>{getTipIcon(tip.type)}</span>
            <span><strong>{tip.label}:</strong> {tip.text}</span>
        </div>
    );
}

export default function RecipeDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const recipe = getRecipeBySlug(slug);

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

    // Progress bar
    useEffect(() => {
        const handleScroll = () => {
            const d = document.documentElement;
            const bar = document.getElementById("fob-progress");
            if (bar) bar.style.width = (d.scrollTop / (d.scrollHeight - d.clientHeight) * 100) + "%";
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!recipe) return notFound();

    const likeCount = recipe.initialLikes + (liked ? 1 : 0);

    return (
        <div className="fob-recipe">
            <div className="fob-progress" id="fob-progress" />
            <div className={`fob-toast ${toast ? "show" : ""}`}>{toast}</div>

            {/* Share Overlay */}
            <div className={`share-overlay ${shareOpen ? "open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) setShareOpen(false); }}>
                <div className="share-modal">
                    <h3><UtensilsCrossed size={20} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} /> Share this Recipe</h3>
                    <p>Help your friends save {recipe.costTable.saving} on dinner tonight!</p>
                    <div className="share-buttons">
                        <button className="share-btn pinterest" onClick={() => window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&description=${encodeURIComponent(recipe.title)}`, "_blank")}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" /></svg> Pinterest</button>
                        <button className="share-btn whatsapp" onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`${recipe.title} ${recipe.titleEmphasis} — Only ${recipe.costTable.perServing} per serving! ${window.location.href}`)}`, "_blank")}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg> WhatsApp</button>
                        <button className="share-btn twitter" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${recipe.title} ${recipe.titleEmphasis}`)}&url=${encodeURIComponent(window.location.href)}`, "_blank")}><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> Twitter</button>
                        <button className="share-btn copy" onClick={() => { navigator.clipboard.writeText(window.location.href); setCopyFeedback("Link copied!"); setTimeout(() => setCopyFeedback(""), 2000); }}>{copyFeedback ? <Check size={16} /> : <Copy size={16} />} Copy Link</button>
                    </div>
                    <div className="copy-feedback">{copyFeedback}</div>
                    <button className="share-close" onClick={() => setShareOpen(false)}>Close</button>
                </div>
            </div>

            {/* Nav */}
            <nav className="fob-nav">
                <Link href="/recipes" className="back-link"><ArrowLeft size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> All Recipes</Link>
                <Link href="/" className="nav-brand">FlavorsOnBudget</Link>
            </nav>

            <div className="container mx-auto max-w-6xl px-4 md:px-6 pt-8 pb-4">
                <Breadcrumbs
                    items={[
                        { label: "Recipes", href: "/recipes" },
                        { label: recipe.title }
                    ]}
                />
            </div>

            {/* Hero */}
            <div className="hero">
                <span className="hero-category">{recipe.category} · {recipe.subcategory}</span>
                <h1>{recipe.title}<br /><em>{recipe.titleEmphasis}</em></h1>
                <div className="hero-meta">
                    <span><Pen size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> FlavorsOnBudget</span>
                    <span className="dot" />
                    <span><CalendarDays size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> {recipe.date}</span>
                    <span className="dot" />
                    <span><Eye size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> {recipe.views} views</span>
                </div>
                <div className="hero-image-wrap">
                    <div className="hero-image">
                        {recipe.image ? <img src={recipe.image} alt={recipe.title} /> : <span className="hero-image-emoji">{recipe.emoji}</span>}
                    </div>
                    <div className="savings-badge"><strong>{recipe.savingsBadgeAmount}</strong>{recipe.savingsBadgeSub}</div>
                </div>
            </div>

            {/* Stats */}
            <div className="stats-strip">
                {recipe.stats.map((s, i) => (
                    <div key={i} className="stat-card">
                        <div className="stat-icon">{getStatIcon(s.label)}</div>
                        <div className="stat-value">{s.value}</div>
                        <div className="stat-label">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Banner Ad */}
            <div className="banner-ad-wrap">
                <div className="ad-placeholder banner">
                    <span className="ad-label">Advertisement</span>
                    <span className="ad-size">728 × 90 — Leaderboard</span>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div className="page-body">
                {/* LEFT SIDEBAR */}
                <aside className="sidebar">
                    <div className="sidebar-widget">
                        <h4><ListOrdered size={16} /> Jump To</h4>
                        <ul className="quick-links">
                            <li><a href="#intro"><span className="ql-icon"><BookOpen size={14} /></span> Introduction</a></li>
                            <li><a href="#cost"><span className="ql-icon"><IndianRupee size={14} /></span> Cost Breakdown</a></li>
                            <li><a href="#ingredients"><span className="ql-icon"><ShoppingCart size={14} /></span> Ingredients</a></li>
                            <li><a href="#steps"><span className="ql-icon"><ChefHat size={14} /></span> Steps</a></li>
                            <li><a href="#tips"><span className="ql-icon"><Sparkles size={14} /></span> Tips</a></li>
                            <li><a href="#subs"><span className="ql-icon"><RefreshCw size={14} /></span> Substitutions</a></li>
                            <li><a href="#variations"><span className="ql-icon"><Star size={14} /></span> Variations</a></li>
                            <li><a href="#savings"><span className="ql-icon"><PiggyBank size={14} /></span> Savings</a></li>
                            <li><a href="#nutrition"><span className="ql-icon"><Salad size={14} /></span> Nutrition</a></li>
                            <li><a href="#faq"><span className="ql-icon"><HelpCircle size={14} /></span> FAQ</a></li>
                        </ul>
                    </div>

                    <SidebarAd size="square" label="Spice Guide" />

                    <div className="sidebar-widget">
                        <h4><TrendingUp size={16} /> Trending Now</h4>
                        <div className="sidebar-recipes">
                            {recipe.related.map((r, i) => (
                                <Link key={i} href={r.href} className="sidebar-recipe-card">
                                    <span className="sidebar-recipe-emoji">{r.emoji}</span>
                                    <div className="sidebar-recipe-info">
                                        <div className="sidebar-recipe-title">{r.title}</div>
                                        <div className="sidebar-recipe-price">{r.price}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="sidebar-widget">
                        <h4><Tag size={16} /> Categories</h4>
                        <div className="sidebar-tags">
                            <Link href="/recipes" className="sidebar-tag">Quick Meals</Link>
                            <Link href="/recipes" className="sidebar-tag">Under ₹100</Link>
                            <Link href="/recipes" className="sidebar-tag">Indian</Link>
                            <Link href="/recipes" className="sidebar-tag">Snacks</Link>
                            <Link href="/recipes" className="sidebar-tag">Non-Veg</Link>
                            <Link href="/recipes" className="sidebar-tag">Breakfast</Link>
                            <Link href="/recipes" className="sidebar-tag">Lunch Box</Link>
                            <Link href="/recipes" className="sidebar-tag">Street Food</Link>
                        </div>
                    </div>

                    <div className="ad-placeholder tall">
                        <span className="ad-icon"><Megaphone size={24} /></span>
                        <span className="ad-label">Advertisement</span>
                        <span className="ad-size">160 × 600</span>
                    </div>

                    <div className="sidebar-widget">
                        <h4><Lightbulb size={16} /> Did You Know?</h4>
                        <p style={{ fontSize: ".86rem", color: "var(--text-mid)", lineHeight: 1.65, marginBottom: 0 }}>
                            Cooking at home just <strong>3 times a week</strong> can save you over <strong>₹5,000/month</strong>.
                            That&apos;s ₹60,000 a year — enough for a vacation!
                        </p>
                    </div>

                    <div className="ad-placeholder short">
                        <span className="ad-icon"><Megaphone size={24} /></span>
                        <span className="ad-label">Advertisement</span>
                        <span className="ad-size">300 × 250</span>
                    </div>
                </aside>

                {/* CENTER CONTENT */}
                <div className="content-wrap">
                    {/* Intro */}
                    <div id="intro" className="glass-section">
                        <h2>The Recipe That Saves {recipe.costTable.saving.replace("!", "")}</h2>
                        <p className="lead">{recipe.intro.lead}</p>
                        {recipe.intro.body.map((b, i) => <p key={i} dangerouslySetInnerHTML={{ __html: b }} />)}
                        <ul className="highlights">
                            {recipe.intro.highlights.map((h, i) => <li key={i}>{h}</li>)}
                        </ul>
                    </div>

                    {/* Cost Table */}
                    <div id="cost" className="glass-section">
                        <h2><span className="section-num">{recipe.costTable.headingIcon}</span> {recipe.costTable.heading}</h2>
                        <div className="table-wrapper">
                            <table className="data-table">
                                <thead><tr><th>Ingredient</th><th>Quantity</th><th>Cost</th></tr></thead>
                                <tbody>{recipe.costTable.ingredients.map((r, i) => <tr key={i}><td>{r.name}</td><td>{r.qty}</td><td>{r.cost}</td></tr>)}</tbody>
                                <tfoot>
                                    <tr className="row-total"><td><strong>TOTAL — {recipe.costTable.totalServings}</strong></td><td></td><td><strong>{recipe.costTable.totalCost}</strong></td></tr>
                                    <tr className="row-saving"><td>Per serving <span className="tag tag-green">at home</span></td><td></td><td><strong>{recipe.costTable.perServing}</strong></td></tr>
                                    <tr><td>Same dish <span className="tag tag-red">at restaurant</span></td><td></td><td style={{ color: "var(--rust)", fontWeight: 700 }}>{recipe.costTable.restaurantCost}</td></tr>
                                    <tr className="row-saving"><td><strong><PartyPopper size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> YOU SAVE per serving</strong></td><td></td><td><strong>{recipe.costTable.saving}</strong></td></tr>
                                </tfoot>
                            </table>
                        </div>
                        <TipBox tip={recipe.costTable.tip} />
                    </div>

                    {/* Ingredients */}
                    <div id="ingredients" className="glass-section">
                        <h2><span className="section-num"><ShoppingCart size={20} /></span> Ingredients</h2>
                        {recipe.ingredients.map((g, gi) => (
                            <div key={gi}>
                                <h3>{g.groupName}</h3>
                                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", padding: 0 }}>
                                    {g.items.map((item, ii) => (
                                        <li key={ii} style={{ fontSize: "1rem", color: "var(--text-mid)", padding: "8px 0", borderBottom: "1px solid rgba(201,146,42,.08)" }}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Mid-content ad */}
                    <div className="ad-placeholder banner" style={{ marginBottom: "20px" }}>
                        <span className="ad-label">Advertisement</span>
                        <span className="ad-size">728 × 90 — Leaderboard</span>
                    </div>

                    {/* Steps */}
                    <div id="steps" className="glass-section">
                        <h2><span className="section-num">{recipe.steps.length}</span> Easy Steps</h2>
                        <ul className="steps">
                            {recipe.steps.map((s, i) => (
                                <li key={i} className="step-item">
                                    <div className="step-num">{i + 1}</div>
                                    <div>
                                        <h3 style={{ marginTop: "8px" }}>{s.title}</h3>
                                        {s.paras.map((p, pi) => <p key={pi} dangerouslySetInnerHTML={{ __html: p }} />)}
                                        <TipBox tip={s.tip} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tips */}
                    <div id="tips" className="glass-section">
                        <h2><span className="section-num"><Sparkles size={20} /></span> Tips for Perfect Results</h2>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px", padding: 0 }}>
                            {recipe.tips.map((t, i) => (
                                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "1rem", lineHeight: "1.7", color: "var(--text-mid)", padding: "8px 0", borderBottom: "1px solid rgba(201,146,42,.08)" }}>
                                    <span style={{ color: "var(--olive)", fontWeight: 700, marginTop: "2px" }}>→</span>
                                    <span><strong>{t.bold}</strong> {t.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Substitutions */}
                    <div id="subs" className="glass-section">
                        <h2><span className="section-num"><RefreshCw size={20} /></span> Budget-Friendly Substitutions</h2>
                        <div className="subs-header"><span>Original</span><span>Use Instead</span><span>Saves</span></div>
                        {recipe.substitutions.map((s, i) => (
                            <div key={i} className="sub-row">
                                <span style={{ color: "var(--text-mid)" }}>{s.original}</span>
                                <span className="sub-swap">{s.swap}</span>
                                <span className="sub-save">{s.saves}</span>
                            </div>
                        ))}
                    </div>

                    {/* Variations */}
                    <div id="variations" className="glass-section">
                        <h2><span className="section-num"><Star size={20} /></span> Delicious Variations</h2>
                        <div className="var-grid">
                            {recipe.variations.map((v, i) => (
                                <div key={i} className={`var-card${v.full ? " full" : ""}`}>
                                    <div className="var-name">{v.name}</div>
                                    <div className="var-desc">{v.desc}</div>
                                    <span className="var-price">{v.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Savings Table */}
                    <div id="savings" className="glass-section">
                        <h2><span className="section-num"><PiggyBank size={20} /></span> How Much You Save Monthly</h2>
                        <div className="table-wrapper">
                            <table className="savings-table">
                                <thead><tr><th>Scenario</th><th>Restaurant</th><th>Home</th></tr></thead>
                                <tbody>
                                    {recipe.savingsTable.rows.map((r, i) => (
                                        <tr key={i}><td>{r.scenario}</td><td className="rest-price">{r.restCost}</td><td className="home-price">{r.homeCost}</td></tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="tip-box green" style={{ marginTop: "16px" }}><span><Target size={16} /></span><span>{recipe.savingsTable.tip}</span></div>
                    </div>

                    {/* Nutrition */}
                    <div id="nutrition" className="glass-section">
                        <h2><span className="section-num"><Salad size={20} /></span> Nutrition Per Serving</h2>
                        <div className="nut-grid">
                            {recipe.nutrition.map((n, i) => (
                                <div key={i} className="nut-card">
                                    <div className="nut-value">{n.value}</div>
                                    <div className="nut-label">{n.label}</div>
                                </div>
                            ))}
                        </div>
                        <p style={{ marginTop: "14px", fontSize: ".78rem", color: "var(--text-light)", fontStyle: "italic" }}>Values are approximate and may vary by brand and serving size.</p>
                    </div>

                    {/* FAQ */}
                    <div id="faq" className="glass-section">
                        <h2><span className="section-num">?</span> Frequently Asked Questions</h2>
                        {recipe.faq.map((f, i) => (
                            <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
                                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    {f.q}
                                    <span className="faq-icon">+</span>
                                </button>
                                <div className="faq-a"><p>{f.a}</p></div>
                            </div>
                        ))}
                    </div>

                    {/* Related */}
                    <div className="glass-section">
                        <h2><span className="section-num"><Link2 size={20} /></span> More Budget Recipes</h2>
                        <div className="related-grid">
                            {recipe.related.map((r, i) => (
                                <Link key={i} href={r.href} className="related-card">
                                    <div className="related-thumb">{r.emoji}</div>
                                    <div className="related-info">
                                        <div className="related-title">{r.title}</div>
                                        <div className="related-price">{r.price}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Comments */}
                    <div className="glass-section">
                        <h2><span className="section-num"><MessageCircle size={20} /></span> Comments &amp; Reviews</h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            {recipe.seedComments.map((c, i) => (
                                <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start", background: "rgba(255,253,249,.7)", borderRadius: "14px", padding: "16px 18px", border: "1px solid rgba(201,146,42,.10)" }}>
                                    <div style={{ width: "38px", height: "38px", borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: ".9rem", color: "#fff", background: `linear-gradient(135deg, ${c.color1}, ${c.color2})` }}>{c.name[0]}</div>
                                    <div>
                                        <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text-dark)" }}>{c.name}</div>
                                        <div style={{ display: "flex", gap: "2px", color: "var(--gold-light)" }}>
                                            {Array.from({ length: c.stars }).map((_, si) => <Star key={si} size={13} fill="currentColor" />)}
                                            {Array.from({ length: 5 - c.stars }).map((_, si) => <Star key={si} size={13} />)}
                                        </div>
                                        <div style={{ fontSize: ".95rem", color: "var(--text-mid)", marginTop: "5px", lineHeight: 1.6 }}>{c.text}</div>
                                        <div style={{ fontSize: ".78rem", color: "var(--text-light)", marginTop: "4px" }}>{c.date}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="cta-block">
                        <h2><Mail size={22} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} /> Get Free Budget Meal Plans</h2>
                        <p style={{ maxWidth: "460px", margin: "0 auto 22px" }}>Join 8,000+ readers getting weekly recipes under ₹200/day for a family of 4. Get our <strong>7-Day Budget Meal Plan</strong> FREE when you sign up!</p>
                        <div className="cta-form">
                            <input type="email" placeholder="your@email.com" />
                            <button onClick={() => showToast("Meal plan sent! Check your inbox!")}><Gift size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> Get Free Plan</button>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <aside className="sidebar">
                    <div className="sidebar-widget mini-newsletter">
                        <h4><Mail size={16} /> Weekly Recipes</h4>
                        <p>Free budget meal plans delivered every Sunday!</p>
                        <input type="email" placeholder="your@email.com" />
                        <button onClick={() => showToast("Subscribed!")}>Subscribe Free</button>
                    </div>

                    <div className="sidebar-widget">
                        <h4><BarChart3 size={16} /> Quick Stats</h4>
                        <div className="sidebar-stat-row">
                            <span className="sidebar-stat-label"><CircleDollarSign size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> Total Cost</span>
                            <span className="sidebar-stat-value" style={{ color: "var(--olive)" }}>{recipe.costTable.totalCost}</span>
                        </div>
                        <div className="sidebar-stat-row">
                            <span className="sidebar-stat-label"><UtensilsCrossed size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> Per Serving</span>
                            <span className="sidebar-stat-value" style={{ color: "var(--olive)" }}>{recipe.costTable.perServing}</span>
                        </div>
                        <div className="sidebar-stat-row">
                            <span className="sidebar-stat-label"><PartyPopper size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> You Save</span>
                            <span className="sidebar-stat-value" style={{ color: "var(--rust)" }}>{recipe.costTable.saving}</span>
                        </div>
                        <div className="sidebar-stat-row">
                            <span className="sidebar-stat-label"><Timer size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> Cook Time</span>
                            <span className="sidebar-stat-value">{recipe.stats.find(s => s.label === "Total Time")?.value}</span>
                        </div>
                        <div className="sidebar-stat-row">
                            <span className="sidebar-stat-label"><Users size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> Servings</span>
                            <span className="sidebar-stat-value">{recipe.stats.find(s => s.label === "Servings")?.value}</span>
                        </div>
                        <div className="sidebar-stat-row">
                            <span className="sidebar-stat-label"><Flame size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4 }} /> Spice</span>
                            <span className="sidebar-stat-value">{recipe.stats.find(s => s.label === "Spice Level")?.value}</span>
                        </div>
                    </div>

                    <SidebarAd size="square" label="Budget Tips" />

                    <div className="sidebar-widget">
                        <h4><CookingPot size={16} /> More Recipes</h4>
                        <div className="sidebar-recipes">
                            {recipe.related.map((r, i) => (
                                <Link key={i} href={r.href} className="sidebar-recipe-card">
                                    <span className="sidebar-recipe-emoji">{r.emoji}</span>
                                    <div className="sidebar-recipe-info">
                                        <div className="sidebar-recipe-title">{r.title}</div>
                                        <div className="sidebar-recipe-price">{r.price}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="sidebar-widget">
                        <h4><Lightbulb size={16} /> Budget Tips</h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                            <li style={{ fontSize: ".86rem", color: "var(--text-mid)", lineHeight: 1.5, paddingBottom: "10px", borderBottom: "1px solid rgba(201,146,42,.08)" }}>
                                <ArrowRight size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4, color: 'var(--olive)' }} /> Buy spices in bulk packs — saves 40% vs small sachets
                            </li>
                            <li style={{ fontSize: ".86rem", color: "var(--text-mid)", lineHeight: 1.5, paddingBottom: "10px", borderBottom: "1px solid rgba(201,146,42,.08)" }}>
                                <ArrowRight size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4, color: 'var(--olive)' }} /> Prep ingredients on Sunday for weekday cooking speed
                            </li>
                            <li style={{ fontSize: ".86rem", color: "var(--text-mid)", lineHeight: 1.5, paddingBottom: "10px", borderBottom: "1px solid rgba(201,146,42,.08)" }}>
                                <ArrowRight size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4, color: 'var(--olive)' }} /> Freeze excess cream/paneer in ice cube trays
                            </li>
                            <li style={{ fontSize: ".86rem", color: "var(--text-mid)", lineHeight: 1.5 }}>
                                <ArrowRight size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 4, color: 'var(--olive)' }} /> Shop at local mandis instead of supermarkets
                            </li>
                        </ul>
                    </div>

                    <AffiliateSection
                        title="Essential Cookware"
                        products={[
                            {
                                name: "Hard Anodized Kadhai",
                                description: "Even heating for perfect Indian curries.",
                                price: "₹1,249",
                                link: "#"
                            },
                            {
                                name: "Budget Knife Set",
                                description: "Sharp, durable, and affordable.",
                                price: "₹699",
                                link: "#"
                            }
                        ]}
                    />

                    <SidebarAd size="tall" label="Grocery Deals" />

                    <div className="sidebar-widget">
                        <h4><Smartphone size={16} /> Follow Us</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", padding: "10px 12px", borderRadius: "10px", background: "rgba(230,0,35,.06)", border: "1px solid rgba(230,0,35,.12)", fontSize: ".86rem", fontWeight: 600, color: "#E60023" }}>
                                <Pin size={15} /> Pinterest
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", padding: "10px 12px", borderRadius: "10px", background: "rgba(193,53,132,.06)", border: "1px solid rgba(193,53,132,.12)", fontSize: ".86rem", fontWeight: 600, color: "#C13584" }}>
                                <Camera size={15} /> Instagram
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", padding: "10px 12px", borderRadius: "10px", background: "rgba(255,0,0,.06)", border: "1px solid rgba(255,0,0,.12)", fontSize: ".86rem", fontWeight: 600, color: "#FF0000" }}>
                                <Youtube size={15} /> YouTube
                            </a>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Engagement Bar */}
            <div className="engagement-bar">
                <button className={`eng-btn ${liked ? "liked" : ""}`} onClick={() => { setLiked(!liked); if (!liked) showToast("Recipe liked!"); }}>
                    <Heart size={16} fill={liked ? "currentColor" : "none"} />
                    <span>{likeCount}</span>
                </button>
                <div className="eng-divider" />
                <button className="eng-btn" onClick={() => document.querySelector(".glass-section:last-of-type")?.scrollIntoView({ behavior: "smooth" })}>
                    <MessageCircle size={16} /> {recipe.seedComments.length}
                </button>
                <div className="eng-divider" />
                <button className="eng-btn" onClick={() => setShareOpen(true)}><Link2 size={16} /> Share</button>
                <div className="eng-divider" />
                <button className={`eng-btn`} onClick={() => { setSaved(!saved); showToast(saved ? "Removed from saved" : "Recipe saved!"); }} style={saved ? { color: "var(--gold-light)" } : {}}>
                    <Bookmark size={16} fill={saved ? "currentColor" : "none"} /> {saved ? "Saved" : "Save"}
                </button>
            </div>
        </div>
    );
}
