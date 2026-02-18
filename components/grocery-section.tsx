"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const groceries = [
  {
    category: "Spices & Masalas",
    description: "Authentic Indian spices to elevate every dish",
    image: "/images/spices.webp",
    items: ["Garam Masala", "Turmeric", "Red Chili Powder"],
    link: "https://amzn.to/4cgNPdP",
  },
  {
    category: "Sauces & Condiments",
    description: "Flavor boosters for quick and tasty meals",
    image: "/images/sauces.webp",
    items: ["Soy Sauce", "Tomato Ketchup", "Green Chutney"],
    link: "https://amzn.to/4ae7qc1",
  },
  {
    category: "Pasta, Noodles & Rice",
    description: "Essential carbs for filling budget meals",
    image: "/images/essentials.webp",
    items: ["Basmati Rice", "Instant Noodles", "Penne Pasta"],
    link: "https://amzn.to/4cfcgIG",
  },
  {
    category: "Budget Pantry Staples",
    description: "Stock your kitchen with everyday essentials",
    image: "/images/pantry.webp",
    items: ["Lentils", "Chickpeas", "Cooking Oil"],
    link: "https://amzn.to/4qiMG93",
  },
];

export function GrocerySection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Grocery Picks
          </h2>
          <p className="text-muted-foreground text-lg">
            Everyday essentials that offer great value for your money
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groceries.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-border/50 hover:border-primary/50 shadow-md hover:shadow-xl transition-all duration-300 bg-card flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.category}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent group-hover:from-foreground/50 transition-all duration-300" />
                <h3 className="absolute bottom-4 left-4 right-4 font-serif font-bold text-lg text-card group-hover:text-primary-foreground transition-colors duration-300">
                  {item.category}
                </h3>
              </div>
              <CardContent className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-3 group-hover:text-foreground/70 transition-colors duration-300">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.items.map((subItem, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 bg-accent/15 text-accent font-medium rounded-full group-hover:bg-accent/25 transition-colors duration-300"
                      >
                        {subItem}
                      </span>
                    ))}
                  </div>
                </div>
                <Button size="sm" className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all" asChild>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="h-4 w-4" />
                    Buy Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
