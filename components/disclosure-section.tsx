"use client";

import { Shield } from "lucide-react";

export function DisclosureSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
            <Shield className="h-6 w-6" />
          </div>
          
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Affiliate Disclosure
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            Some links on this website are affiliate links. This means we may earn a small commission at no extra cost to you if you make a purchase through these links. We only recommend products we genuinely find useful and budget-friendly. Your trust is important to us.
          </p>
        </div>
      </div>
    </section>
  );
}
