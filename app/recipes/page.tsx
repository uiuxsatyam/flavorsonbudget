"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, ChefHat, Flame, ArrowRight } from "lucide-react";

// Mock Data
const recipes = [
    {
        id: 1,
        title: "Quick Chickpea Curry",
        category: "Dinner",
        time: "20 mins",
        difficulty: "Easy",
        calories: "320 kcal",
        image: "/images/chickpea-curry.jpg",
        tags: ["Vegan", "Gluten-Free"],
    },
    {
        id: 2,
        title: "Vegetable Stir-Fry",
        category: "Dinner",
        time: "15 mins",
        difficulty: "Easy",
        calories: "280 kcal",
        image: "/images/stir-fry.jpg",
        tags: ["Vegan", "Quick"],
    },
    {
        id: 3,
        title: "Oatmeal with Fruits",
        category: "Breakfast",
        time: "10 mins",
        difficulty: "Easy",
        calories: "250 kcal",
        image: "/images/oatmeal.jpg",
        tags: ["Healthy", "Breakfast"],
    },
    {
        id: 4,
        title: "Grilled Chicken Salad",
        category: "Lunch",
        time: "25 mins",
        difficulty: "Medium",
        calories: "400 kcal",
        image: "/images/chicken-salad.jpg",
        tags: ["High Protein", "Low Carb"],
    },
    {
        id: 5,
        title: "Banana Smoothies",
        category: "Breakfast",
        time: "5 mins",
        difficulty: "Easy",
        calories: "180 kcal",
        image: "/images/smoothie.jpg",
        tags: ["Quick", "Drink"],
    },
    {
        id: 6,
        title: "Pasta Primavera",
        category: "Dinner",
        time: "30 mins",
        difficulty: "Medium",
        calories: "450 kcal",
        image: "/images/pasta-primavera.jpg",
        tags: ["Vegetarian", "Family Favorite"],
    },
    {
        id: 7,
        title: "Avocado Toast",
        category: "Snack",
        time: "5 mins",
        difficulty: "Easy",
        calories: "220 kcal",
        image: "/images/avocado-toast.jpg",
        tags: ["Healthy", "Quick"],
    },
    {
        id: 8,
        title: "Lentil Soup",
        category: "Lunch",
        time: "40 mins",
        difficulty: "Medium",
        calories: "300 kcal",
        image: "/images/lentil-soup.jpg",
        tags: ["Vegan", "High Fiber"],
    },
    {
        id: 9,
        title: "Chocolate Mug Cake",
        category: "Dessert",
        time: "5 mins",
        difficulty: "Easy",
        calories: "280 kcal",
        image: "/images/mug-cake.jpg",
        tags: ["Dessert", "Sweet"],
    },
];

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Snack", "Dessert"];

export default function RecipesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredRecipes = recipes.filter((recipe) => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || recipe.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <main className="min-h-screen flex flex-col bg-background">
            <Navbar />

            {/* Header Section */}
            <section className="pt-32 pb-12 px-4 md:px-6 bg-gradient-to-b from-secondary/30 to-background">
                <div className="container mx-auto max-w-6xl text-center">
                    <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                        Culinary Inspiration
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        Delicious Recipes
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                        Discover budget-friendly meals that taste like a million bucks.
                        From quick breakfasts to hearty dinners, we have got you covered.
                    </p>

                    {/* Search and Filter */}
                    <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto bg-card p-4 rounded-xl shadow-sm border border-border/50">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search recipes..."
                                className="pl-9 bg-background"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
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
            </section>

            {/* Recipe Grid */}
            <section className="py-12 px-4 md:px-6 flex-1">
                <div className="container mx-auto max-w-6xl">
                    {filteredRecipes.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredRecipes.map((recipe) => (
                                <Card key={recipe.id} className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col">
                                    <div className="relative aspect-video overflow-hidden bg-muted">
                                        <Image
                                            src={recipe.image}
                                            alt={recipe.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <Badge className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-foreground hover:bg-background/90">
                                            {recipe.category}
                                        </Badge>
                                    </div>
                                    <CardContent className="p-5 flex-1">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {recipe.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                                            {recipe.title}
                                        </h3>

                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="h-4 w-4" />
                                                <span>{recipe.time}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Flame className="h-4 w-4" />
                                                <span>{recipe.calories}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <ChefHat className="h-4 w-4" />
                                                <span>{recipe.difficulty}</span>
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
