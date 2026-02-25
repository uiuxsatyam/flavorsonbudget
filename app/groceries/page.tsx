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
import { ShoppingCart, Check, ListChecks, Info, TrendingDown, ArrowRight } from "lucide-react";

const groceries = [
    {
        category: "Spices & Masalas",
        description: "Authentic Indian spices to elevate every dish. We recommend buying in whole form and grinding at home for 3x more flavor at 1/2 the cost.",
        image: "/images/spices.webp",
        items: ["Garam Masala", "Turmeric", "Red Chili Powder", "Cumin Seeds"],
        link: "https://amzn.to/4cgNPdP",
        savingTip: "Buy loose packs at mandis for 50% savings over bottled brands."
    },
    {
        category: "Sauces & Condiments",
        description: "Flavor boosters for quick and tasty meals. Essential for making plain rice or noodles taste like restaurant gourmet.",
        image: "/images/sauces.webp",
        items: ["Soy Sauce", "Tomato Ketchup", "Green Chutney", "Vinegar"],
        link: "https://amzn.to/4ae7qc1",
        savingTip: "Standard sizes offer better per-ml value than trial sachets."
    },
    {
        category: "Pasta, Noodles & Rice",
        description: "Essential carbs for filling budget meals. These form the base of our 'Cost Per Serving' calculations.",
        image: "/images/essentials.webp",
        items: ["Basmati Rice", "Instant Noodles", "Penne Pasta", "Brown Rice"],
        link: "https://amzn.to/4cfcgIG",
        savingTip: "Rice becomes 30% cheaper when bought in 5kg+ bags."
    },
    {
        category: "Budget Pantry Staples",
        description: "Stock your kitchen with everyday essentials. High-protein lentils and versatile oils that last for months.",
        image: "/images/pantry.webp",
        items: ["Lentils", "Chickpeas", "Cooking Oil", "Atta (Flour)"],
        link: "https://amzn.to/4qiMG93",
        savingTip: "Store in airtight containers to prevent moisture and double shelf life."
    },
];

export default function GroceriesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-20 md:pt-24 pb-12 text-foreground">
                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: "Grocery Picks" }]} />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Content Area */}
                        <div className="lg:w-3/4">
                            <header className="mb-12">
                                <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 hover:bg-primary/20 transition-colors">Smart Shopping</Badge>
                                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Budget Grocery Picks</h1>
                                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                    Stop overpaying for marketing. We pick products that deliver the best flavor-to-rupee ratio.
                                    Below are our verified staples that keep our recipe costs under ₹100.
                                </p>
                            </header>

                            <div className="space-y-12">
                                {groceries.map((item, idx) => (
                                    <section key={idx} className="bg-card rounded-3xl overflow-hidden border border-border/40 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex flex-col md:flex-row">
                                            <div className="md:w-1/3 relative aspect-video md:aspect-auto bg-muted">
                                                <Image
                                                    src={item.image || "/placeholder.svg"}
                                                    alt={item.category}
                                                    fill
                                                    className="object-cover"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800';
                                                    }}
                                                />
                                            </div>
                                            <div className="p-8 md:w-2/3 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h2 className="text-2xl font-serif font-bold">{item.category}</h2>
                                                        <span className="text-primary"><TrendingDown size={20} /></span>
                                                    </div>
                                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                                        {item.items.map((sub, i) => (
                                                            <div key={i} className="flex items-center gap-2 text-sm">
                                                                <Check size={14} className="text-primary" /> {sub}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 mb-6 flex gap-3 items-start">
                                                    <div className="p-1.5 rounded-lg bg-primary/20 text-primary">
                                                        <Info size={16} />
                                                    </div>
                                                    <p className="text-xs text-muted-foreground italic font-medium">
                                                        <span className="text-foreground font-bold uppercase mr-1">Budget Guru Tip:</span>
                                                        {item.savingTip}
                                                    </p>
                                                </div>

                                                <Button className="w-full md:w-auto gap-2 py-6 px-8 rounded-full font-bold shadow-lg hover:translate-y-[-2px] transition-all" asChild>
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                        <ShoppingCart size={18} />
                                                        Stock Your Pantry
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </section>
                                ))}
                            </div>
                        </div>

                        {/* Sticky Sidebar */}
                        <aside className="lg:w-1/4">
                            <div className="space-y-8 sticky top-24">
                                <div className="p-8 rounded-3xl bg-secondary/30 backdrop-blur-sm border border-border/50 text-center">
                                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                        <ListChecks size={32} />
                                    </div>
                                    <h3 className="font-serif font-bold text-xl mb-3">Shopping List</h3>
                                    <p className="text-sm text-muted-foreground mb-6">
                                        Download our "₹5,000 Monthly Pantry" checklist. Never miss a staple again.
                                    </p>
                                    <Button variant="outline" className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all">
                                        Get the List <ArrowRight size={14} className="ml-2" />
                                    </Button>
                                </div>

                                <SidebarAd size="tall" label="Weekly Coupons" />

                                <AffiliateSection
                                    title="Essential Staples"
                                    products={[
                                        { name: "5kg Basmati Rice", description: "Long grain, aged for flavor.", price: "₹499", link: "#" },
                                        { name: "Organic Ghee", description: "Pure cow ghee for authentic taste.", price: "₹650", link: "#" }
                                    ]}
                                />
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
