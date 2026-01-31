"use client";

import { Card, CardContent } from "@/components/ui/card";
import { IndianRupee, Utensils, ShoppingCart, Clock } from "lucide-react";

const values = [
  {
    icon: IndianRupee,
    title: "Budget Recipes Under ₹100",
    description: "Wholesome, delicious meals that won't break the bank. Every recipe tested for taste and affordability.",
  },
  {
    icon: Utensils,
    title: "Street-Style Food at Home",
    description: "Recreate your favorite street food flavors in your own kitchen with simple techniques.",
  },
  {
    icon: ShoppingCart,
    title: "Smart Kitchen & Grocery Picks",
    description: "Curated recommendations for essential tools and groceries that offer the best value.",
  },
  {
    icon: Clock,
    title: "Quick Meals for Busy Days",
    description: "30-minute meals perfect for students, working professionals, and busy families.",
  },
];

export function ValueSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            What You&apos;ll Find Here
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to cook amazing meals on a budget
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border border-border/50 hover:border-primary/50 shadow-md hover:shadow-lg transition-all duration-300 bg-background hover:bg-accent/5"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardContent className="relative p-6 text-center space-y-4 h-full flex flex-col justify-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary mb-2 group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all duration-300 shadow-sm group-hover:shadow-md mx-auto transform group-hover:scale-110">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
