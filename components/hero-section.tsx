"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChefHat, ShoppingBag, Sparkles, Users, BookOpen } from "lucide-react";
import { track } from '@vercel/analytics/react';

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-muted"
    >
      {/* Background Image with proper accessibility */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/images/hero-food.webp"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60 md:from-background md:via-background/85 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 max-w-xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground shadow-sm"
              role="text"
            >
              <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Your Budget-Friendly Kitchen Partner</span>
            </div>

            {/* Heading */}
            <header>
              <h1
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-[1.1] tracking-tight text-balance"
              >
                Delicious Flavors.{" "}
                <span className="text-primary block sm:inline">Smart Budgets.</span>
              </h1>
            </header>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Easy, affordable recipes made with simple ingredients — save money
              and cook better every day. Perfect for students, families, and
              anyone who loves great food.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              role="group"
              aria-label="Primary actions"
            >
              <Button
                size="lg"
                className="gap-2 text-base h-12 px-6 font-medium shadow-md hover:shadow-lg transition-shadow"
                asChild
                onClick={() => {
                  track('explore_recipes_click');
                }}
              >
                <a href="/recipes">
                  <ChefHat className="h-5 w-5" aria-hidden="true" />
                  Explore Budget Recipes
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base h-12 px-6 font-medium border-2 border-primary/40 hover:bg-primary/10 hover:border-primary bg-card/80 backdrop-blur-sm transition-colors"
                asChild
                onClick={() => {
                  track('shop_essentials_click');
                }}
              >
                <a href="#kitchen-essentials">
                  <ShoppingBag className="h-5 w-5" aria-hidden="true" />
                  Shop Kitchen Essentials
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap items-center gap-6 pt-4"
              role="list"
              aria-label="Site statistics"
            >
              <div className="flex items-center gap-3" role="listitem">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">100+</p>
                  <p className="text-sm text-muted-foreground">Budget Recipes</p>
                </div>
              </div>

              <div
                className="hidden sm:block h-12 w-px bg-border"
                aria-hidden="true"
              />

              <div className="flex items-center gap-3" role="listitem">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/20">
                  <Users className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">50k+</p>
                  <p className="text-sm text-muted-foreground">Happy Cooks</p>
                </div>
              </div>

              <div
                className="hidden sm:block h-12 w-px bg-border"
                aria-hidden="true"
              />

              <div className="flex items-center gap-3" role="listitem">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary">
                  <span className="text-lg font-bold text-foreground" aria-hidden="true">₹</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Under ₹100</p>
                  <p className="text-sm text-muted-foreground">Avg. Meal Cost</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element - Feature Cards (visible on larger screens) */}
          <div className="hidden lg:block" aria-hidden="true">
            <div className="relative">
              {/* Decorative floating cards */}





            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </section>
  );
}
