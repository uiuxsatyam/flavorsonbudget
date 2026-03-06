"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, ChefHat, ArrowRight, IndianRupee } from "lucide-react";
import { getAllRecipes, getRecipeCategories } from "@/lib/recipes-data";
import { Breadcrumbs } from "@/components/breadcrumbs";

const recipes = getAllRecipes();
const categories = getRecipeCategories();

export default function RecipesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("recent"); // recent, price-low, price-high, views

    const filteredRecipes = recipes
        .filter((recipe) => {
            const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                recipe.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || recipe.category === selectedCategory;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            if (sortBy === "price-low") {
                const costA = parseInt(a.stats.find(s => s.label === "Total Cost")?.value.replace("₹", "") || "0");
                const costB = parseInt(b.stats.find(s => s.label === "Total Cost")?.value.replace("₹", "") || "0");
                return costA - costB;
            }
            if (sortBy === "price-high") {
                const costA = parseInt(a.stats.find(s => s.label === "Total Cost")?.value.replace("₹", "") || "0");
                const costB = parseInt(b.stats.find(s => s.label === "Total Cost")?.value.replace("₹", "") || "0");
                return costB - costA;
            }
            if (sortBy === "views") {
                const viewsA = parseFloat(a.views.replace("k", "")) * 1000;
                const viewsB = parseFloat(b.views.replace("k", "")) * 1000;
                return viewsB - viewsA;
            }
            // Default "recent" - assuming higher slug or just order in array for now if no specific date object
            return 0;
        });

    return (
        <main className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />

            {/* Header Section */}
            <section className="pt-20 md:pt-32 pb-12 px-4 md:px-6 bg-gradient-to-b from-secondary/30 to-background">
                <div className="container mx-auto max-w-6xl">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: "Recipes" }]} />
                    </div>
                    <div className="text-center">
                        <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                            Budget-Friendly Recipes
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                            Delicious Recipes
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                            Restaurant-quality meals at a fraction of the cost. Every recipe shows
                            exactly how much you save compared to eating out.
                        </p>

                        {/* Search and Filter */}
                        <div className="flex flex-col gap-4 max-w-4xl mx-auto bg-card p-4 rounded-xl shadow-sm border border-border/50">
                            <div className="flex flex-col md:flex-row gap-4 w-full">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search recipes..."
                                        className="pl-9 bg-background"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-medium text-muted-foreground whitespace-nowrap hidden md:inline">Sort by:</span>
                                    <select
                                        className="flex h-9 w-full md:w-[180px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                    >
                                        <option value="recent">Most Recent</option>
                                        <option value="views">Most Popular</option>
                                        <option value="price-low">Price: Low to High</option>
                                        <option value="price-high">Price: High to Low</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar border-t border-border/50 pt-3">
                                {categories.map(category => (
                                    <Button
                                        key={category}
                                        variant={selectedCategory === category ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setSelectedCategory(category)}
                                        className="whitespace-nowrap"
                                    >
                                        {category}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recipe Grid */}
            <section className="py-12 px-4 md:px-6 flex-1">
                <div className="container mx-auto max-w-6xl">
                    {filteredRecipes.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredRecipes.map((recipe) => (
                                <Link key={recipe.slug} href={`/recipes/${recipe.slug}`} className="group">
                                    <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col h-full !py-0">
                                        {/* Card Thumbnail */}
                                        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center">
                                            {recipe.image ? (
                                                <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                            ) : (
                                                <span className="text-7xl opacity-40 group-hover:scale-110 transition-transform duration-500">{recipe.emoji}</span>
                                            )}
                                            <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-foreground hover:bg-background/90">
                                                {recipe.category}
                                            </Badge>
                                        </div>
                                        <CardContent className="p-5 flex-1">
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-800">
                                                    {recipe.subcategory}
                                                </span>
                                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                                                    {recipe.stats.find(s => s.label === "Total Time")?.value}
                                                </span>
                                            </div>
                                            <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                                                {recipe.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                                {recipe.intro.lead}
                                            </p>

                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="h-3.5 w-3.5" />
                                                    <span>{recipe.stats.find(s => s.label === "Total Time")?.value}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <ChefHat className="h-3.5 w-3.5" />
                                                    <span>{recipe.stats.find(s => s.label === "Servings")?.value} servings</span>
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="p-5 pt-0">
                                            <Button className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors" variant="secondary">
                                                View Recipe
                                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                                <Search className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">No recipes found</h3>
                            <p className="text-muted-foreground">
                                Try adjusting your search or filter to find what you are looking for.
                            </p>
                            <Button
                                variant="link"
                                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                                className="mt-2 text-primary"
                            >
                                Clear all filters
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
