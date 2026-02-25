"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SidebarAd } from "@/components/sidebar-ad";
import { AffiliateSection } from "@/components/affiliate-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Filter, Heart, ShoppingBag } from "lucide-react";

const products = [
    {
        name: "Non-Stick Frying Pan",
        category: "Cookware",
        benefit: "Perfect for everyday cooking with minimal oil. Easy to clean and long-lasting. High-performance non-stick coating that ensures your eggs and pancakes slide off easily.",
        rating: 4.8,
        badge: "Best Seller",
        image: "/images/pan.webp",
        reviewCount: 324,
        link: "https://amzn.to/3LU0OaU",
    },
    {
        name: "Carbon Steel Wok",
        category: "Cookware",
        benefit: "Ideal for stir-fries and quick cooking. Heats evenly for authentic flavors. Develops a natural non-stick surface over time with seasoning.",
        rating: 4.7,
        badge: "Chef's Pick",
        image: "/images/wok.webp",
        reviewCount: 189,
        link: "https://amzn.to/4qgzFNb",
    },
    {
        name: "Kitchen Knife Set",
        category: "Knives & Tools",
        benefit: "Sharp, durable knives for all your prep work. Essential for every home cook. Includes chef's knife, paring knife, and utility knife.",
        rating: 4.9,
        badge: "Top Rated",
        image: "/images/knives.webp",
        reviewCount: 405,
        link: "https://amzn.to/3ZjaMFM",
    },
    {
        name: "Vegetable Chopper",
        category: "Gadgets",
        benefit: "Save time on meal prep with quick, uniform cuts. Perfect for busy kitchens. Easy to disassemble and dishwasher safe.",
        rating: 4.6,
        badge: "Time Saver",
        image: "/images/chopper.webp",
        reviewCount: 176,
        link: "https://amzn.to/3MbeONy",
    },
    {
        name: "Cooking Essential Kit",
        category: "Bundles",
        benefit: "Everything you need to get started - spatulas, ladles, and more in one set. Heat-resistant silicone and ergonomic handles.",
        rating: 4.8,
        badge: "Starter Kit",
        image: "/images/essentials.webp",
        reviewCount: 242,
        link: "https://amzn.to/4cgNx6J",
    },
    {
        name: "Pressure Cooker",
        category: "Appliances",
        benefit: "Cook delicious meals in half the time. Perfect for curries, dal, and rice dishes. Multiple safety valves and heavy-duty construction.",
        rating: 4.9,
        badge: "Fast Cooking",
        image: "/images/pressure-cooker.webp",
        reviewCount: 510,
        link: "https://amzn.to/3LZLkSJ",
    },
    {
        name: "Mixing Bowl Set",
        category: "Prep Ware",
        benefit: "Multi-purpose stainless steel bowls with measurement markings for easy meal prep. Stackable design saves cabinet space.",
        rating: 4.7,
        badge: "Must Have",
        image: "/images/mixing-bowls.webp",
        reviewCount: 195,
        link: "https://amzn.to/3ZSTyPF",
    },
    {
        name: "Wooden Cutting Board",
        category: "Knives & Tools",
        benefit: "Durable and gentle on knives. Perfect for chopping vegetables and prepping ingredients. Seasoned with food-grade oil for longevity.",
        rating: 4.8,
        badge: "Essential",
        image: "/images/cutting-board.webp",
        reviewCount: 218,
        link: "https://amzn.to/3ZUhcLB",
    },
];

export default function EssentialsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-20 md:pt-24 pb-12">
                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: "Kitchen Essentials" }]} />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content */}
                        <div className="lg:w-3/4">
                            <div className="mb-10 text-left">
                                <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                                    Shop Recommendations
                                </Badge>
                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                                    Kitchen Essentials
                                </h1>
                                <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                                    The tools we actually use. We've tested hundreds of items to find the perfect balance
                                    between price and performance. Every tool here is a budget cook's superpower.
                                </p>
                            </div>

                            {/* Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {products.map((product, index) => (
                                    <Card
                                        key={index}
                                        className="group overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card flex flex-col h-full"
                                    >
                                        <div className="relative aspect-video overflow-hidden bg-muted/50">
                                            <Image
                                                src={product.image || "/placeholder.svg"}
                                                alt={product.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800';
                                                }}
                                            />
                                            <Badge className="absolute top-4 left-4 bg-background/90 backdrop-blur-md text-foreground border-none shadow-sm capitalize">
                                                {product.category}
                                            </Badge>
                                            <button className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-md text-muted-foreground hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
                                                <Heart size={16} />
                                            </button>
                                        </div>
                                        <CardContent className="p-6 flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <div className="flex items-center gap-1">
                                                        {Array.from({ length: 5 }).map((_, i) => (
                                                            <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-secondary text-secondary" : "text-muted-foreground/30"} />
                                                        ))}
                                                    </div>
                                                    <span className="text-xs font-bold text-foreground">{product.rating}</span>
                                                    <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
                                                </div>
                                                <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                                                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                                    {product.benefit}
                                                </p>
                                            </div>
                                            <Button className="w-full gap-2 font-bold py-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all" variant="secondary" asChild>
                                                <a href={product.link} target="_blank" rel="noopener noreferrer">
                                                    Check Best Price
                                                    <ExternalLink className="h-4 w-4" />
                                                </a>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-1/4 space-y-8">
                            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50 sticky top-24">
                                <h4 className="flex items-center gap-2 font-bold mb-4 uppercase tracking-wider text-xs text-muted-foreground">
                                    <Filter size={14} /> Shop Categories
                                </h4>
                                <div className="space-y-2">
                                    {["All Essentials", "Cookware", "Knives & Tools", "Gadgets", "Appliances", "Prep Ware"].map(cat => (
                                        <button key={cat} className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${cat === "All Essentials" ? "bg-primary text-primary-foreground font-bold shadow-sm" : "hover:bg-primary/10 text-muted-foreground"}`}>
                                            {cat}
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-8">
                                    <SidebarAd size="square" label="Chef's Tip" />
                                </div>

                                <div className="mt-8">
                                    <AffiliateSection
                                        title="Limited Deals"
                                        products={[
                                            { name: "Non-stick Kadai", description: "Flash sale! 40% off for 24 hours.", price: "₹899", link: "#" },
                                            { name: "Spice Jar Set", description: "Organize your kitchen on a budget.", price: "₹450", link: "#" }
                                        ]}
                                    />
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
