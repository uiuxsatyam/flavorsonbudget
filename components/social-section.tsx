"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Heart } from "lucide-react";

export function SocialSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="w-full px-4 md:px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-balance">
              Join Our Community of Budget Cooks
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Follow us for daily budget recipes, cooking tips, and grocery hacks
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/20 mb-4">
                  <svg className="h-6 w-6 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-primary-foreground mb-2">Follow on Pinterest</h3>
                <p className="text-sm text-primary-foreground/70 mb-4">
                  Daily recipe inspiration
                </p>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <a href="https://pin.it/3riAMZofo" target="_blank" rel="noopener noreferrer">
                    <Heart className="h-4 w-4 mr-2" />
                    Follow Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/20 mb-4">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-primary-foreground mb-2">Get in Touch</h3>
                <p className="text-sm text-primary-foreground/70 mb-4">
                  Questions or collaborations?
                </p>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <a href="mailto:flavorsonbudget@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Us
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
