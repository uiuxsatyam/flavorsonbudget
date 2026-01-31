"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Sparkles, Star } from "lucide-react";

const ebooks = [
  {
    id: 1,
    title: "15 Budget Meals Under ₹100",
    subtitle: "PDF Guide",
    description: "Easy, affordable recipes for everyday cooking",
    image: "/images/ebook-cover.jpg",
    badge: "Best Seller",
    featured: true,
  },
  {
    id: 2,
    title: "Street Food at Home",
    subtitle: "30 Easy Recipes",
    description: "Make your favorite street snacks at home",
    image: "/images/ebook-cover-2.jpg",
    badge: "Popular",
    featured: false,
  },
  {
    id: 3,
    title: "Quick 15-Minute Meals",
    subtitle: "For Busy Days",
    description: "Fast, healthy meals when time is short",
    image: "/images/ebook-cover-3.jpg",
    badge: "New",
    featured: false,
  },
];

export function DigitalProductSection() {
  return (
    <section className="py-16 md:py-24 bg-card" aria-labelledby="digital-products-heading">
      <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="text-accent border-accent/30 mb-4">
            Digital Products
          </Badge>
          <h2 id="digital-products-heading" className="text-3xl md:text-4xl font-serif font-bold text-foreground text-balance mb-4">
            Recipe Guides & Ebooks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical, easy-to-follow recipe guides designed to help you cook delicious meals without breaking the bank.
          </p>
        </div>

        {/* Ebooks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ebooks.map((ebook) => (
            <article
              key={ebook.id}
              className={`group relative bg-background rounded-2xl p-5 border shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full ${
                ebook.featured 
                  ? "border-primary/50 ring-2 ring-primary/30 bg-gradient-to-br from-primary/5 to-transparent" 
                  : "border-border/50 hover:border-primary/50"
              }`}
            >
              {/* Ebook Cover */}
              <div className="relative mb-4 overflow-hidden rounded-xl bg-muted group-hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={ebook.image || "/placeholder.svg"}
                    alt={`${ebook.title} - ${ebook.subtitle} ebook cover`}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                
                {/* Badge */}
                <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                  ebook.featured 
                    ? "bg-primary text-primary-foreground" 
                    : ebook.badge === "New" 
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}>
                  {ebook.featured && <Sparkles className="h-3 w-3" aria-hidden="true" />}
                  {ebook.badge === "Popular" && <Star className="h-3 w-3" aria-hidden="true" />}
                  {ebook.badge}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-primary transition-colors leading-snug">
                    {ebook.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold mt-1">{ebook.subtitle}</p>
                  <p className="text-sm text-muted-foreground mt-2 group-hover:text-foreground/70 transition-colors">
                    {ebook.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-4 pt-4 border-t border-border/30">
                  <Button 
                    className={`w-full gap-2 font-semibold shadow-md hover:shadow-lg transition-all ${
                      ebook.featured 
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                        : "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    }`}
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Get the Guide
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2.5">
                    Instant download • PDF • Lifetime access
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full" aria-hidden="true" />
            Lifetime access
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full" aria-hidden="true" />
            Mobile friendly
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full" aria-hidden="true" />
            Print at home
          </span>
        </div>
      </div>
    </section>
  );
}
