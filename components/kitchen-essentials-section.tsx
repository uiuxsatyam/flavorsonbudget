"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star } from "lucide-react";

const products = [
  {
    name: "Non-Stick Frying Pan",
    benefit: "Perfect for everyday cooking with minimal oil. Easy to clean and long-lasting.",
    rating: 4.8,
    badge: "Best Seller",
    image: "/images/pan.webp",
    reviewCount: 324,
    link: "https://amzn.to/3LU0OaU",
  },
  {
    name: "Carbon Steel Wok",
    benefit: "Ideal for stir-fries and quick cooking. Heats evenly for authentic flavors.",
    rating: 4.7,
    badge: "Chef's Pick",
    image: "/images/wok.webp",
    reviewCount: 189,
    link: "https://amzn.to/4qgzFNb",
  },
  {
    name: "Kitchen Knife Set",
    benefit: "Sharp, durable knives for all your prep work. Essential for every home cook.",
    rating: 4.9,
    badge: "Top Rated",
    image: "/images/knives.webp",
    reviewCount: 405,
    link: "https://amzn.to/3ZjaMFM",
  },
  {
    name: "Vegetable Chopper",
    benefit: "Save time on meal prep with quick, uniform cuts. Perfect for busy kitchens.",
    rating: 4.6,
    badge: "Time Saver",
    image: "/images/chopper.webp",
    reviewCount: 176,
    link: "https://amzn.to/3MbeONy",
  },
  {
    name: "Cooking Essential Kit",
    benefit: "Everything you need to get started - spatulas, ladles, and more in one set.",
    rating: 4.8,
    badge: "Starter Kit",
    image: "/images/essentials.webp",
    reviewCount: 242,
    link: "https://amzn.to/4cgNx6J",
  },
  {
    name: "Pressure Cooker",
    benefit: "Cook delicious meals in half the time. Perfect for curries, dal, and rice dishes.",
    rating: 4.9,
    badge: "Fast Cooking",
    image: "/images/pressure-cooker.webp",
    reviewCount: 510,
    link: "https://amzn.to/3LZLkSJ",
  },
  {
    name: "Mixing Bowl Set",
    benefit: "Multi-purpose stainless steel bowls with measurement markings for easy meal prep.",
    rating: 4.7,
    badge: "Must Have",
    image: "/images/mixing-bowls.webp",
    reviewCount: 195,
    link: "https://amzn.to/3ZSTyPF",
  },
  {
    name: "Wooden Cutting Board",
    benefit: "Durable and gentle on knives. Perfect for chopping vegetables and prepping ingredients.",
    rating: 4.8,
    badge: "Essential",
    image: "/images/cutting-board.webp",
    reviewCount: 218,
    link: "https://amzn.to/3ZUhcLB",
  },
];

export function KitchenEssentialsSection() {
  return (
    <section id="kitchen-essentials" className="py-16 md:py-24 bg-background">
      <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Affiliate Recommendations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Kitchen Essentials
          </h2>
          <p className="text-muted-foreground text-lg">
            Budget-friendly tools that make cooking easier and more enjoyable
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl shadow-md flex flex-col h-full"
            >
              <div className="relative aspect-square overflow-hidden bg-muted/50">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground shadow-lg font-semibold">
                  {product.badge}
                </Badge>
              </div>
              <CardContent className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-3 justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-secondary text-secondary" />
                      <span className="text-sm font-bold text-foreground">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviewCount} reviews)</span>
                  </div>
                  <h3 className="font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 leading-snug">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                    {product.benefit}
                  </p>
                </div>
                <Button size="sm" className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg transition-all" asChild>
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                    Check Price
                    <ExternalLink className="h-4 w-4" />
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
