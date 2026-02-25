"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight, BookOpen, Calculator, Flame, Scale } from "lucide-react";
import { getAllGuides } from "@/lib/guides-data";
import { Breadcrumbs } from "@/components/breadcrumbs";

const guides = getAllGuides();

const categoryIcons: Record<string, any> = {
    "Challenge": Calculator,
    "Cooking 101": Flame,
    "Comparison": Scale,
};

export default function GuidesPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredGuides = guides.filter((guide) => {
        return guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            guide.category.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <main className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />

            {/* Header Section */}
            <section className="pt-20 md:pt-32 pb-12 px-4 md:px-6 bg-gradient-to-b from-primary/5 to-background">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-6 text-left">
                        <Breadcrumbs items={[{ label: "Guides" }]} />
                    </div>
                    <div className="text-center">
                        <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                            Visual Pocket Guides
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                            Budget Cooking Cheat Sheets
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                            High-impact visual guides to help you master budget cooking,
                            from grocery challenges to spice secrets.
                        </p>

                        {/* Search */}
                        <div className="max-w-md mx-auto relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <Input
                                placeholder="Search guides (e.g., 'spice' or 'grocery')"
                                className="pl-9 bg-card border-border/50 focus:border-primary/50"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Guides Grid */}
            <section className="py-12 px-4 md:px-6 flex-1">
                <div className="container mx-auto max-w-6xl">
                    {filteredGuides.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredGuides.map((guide) => {
                                const Icon = categoryIcons[guide.category] || BookOpen;
                                return (
                                    <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group">
                                        <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col h-full bg-card/50 backdrop-blur-sm">
                                            {/* Thumbnail Container - 9:16 aspect ratio hint */}
                                            <div className="relative aspect-[9/12] overflow-hidden bg-muted flex items-center justify-center">
                                                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                                                <img
                                                    src={guide.image}
                                                    alt={guide.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800';
                                                    }}
                                                />
                                                <Badge className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur-md text-foreground border-none shadow-sm flex gap-1.5 items-center">
                                                    <Icon className="h-3 w-3 text-primary" />
                                                    {guide.category}
                                                </Badge>
                                            </div>

                                            <CardContent className="p-6 flex-1">
                                                <h3 className="font-serif font-bold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-1">
                                                    {guide.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed italic">
                                                    &quot;{guide.description}&quot;
                                                </p>
                                                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                                    Posted {guide.date}
                                                </div>
                                            </CardContent>

                                            <CardFooter className="p-6 pt-0">
                                                <Button className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm" variant="outline">
                                                    Open Guide
                                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-card/30 rounded-3xl border border-dashed border-border/50">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted/50 mb-6">
                                <Search className="h-10 w-10 text-muted-foreground/50" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-foreground mb-3">No guides found</h3>
                            <p className="text-muted-foreground max-w-sm mx-auto mb-8">
                                Try a different search term or browse our categories.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => setSearchQuery("")}
                                className="rounded-full px-8"
                            >
                                Show All Guides
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
