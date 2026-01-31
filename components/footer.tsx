"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Recipes", href: "#value" },
  { label: "Shop", href: "#essentials" },
  { label: "Digital Products", href: "#digital" },
  { label: "Affiliate Disclosure", href: "#disclosure" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-background">
      {/* Main Footer Content */}
      <div className="w-full px-4 md:px-6 max-w-6xl mx-auto py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary transition-all">
                <Image
                  src="/images/logo.png"
                  alt="Flavors on Budget"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-serif font-bold text-background">
                Flavors on Budget
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Delicious flavors, smart budgets. Your guide to eating better while spending less.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-serif font-semibold text-background">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {links.slice(0, 3).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-background/70 hover:text-background hover:translate-x-1 transition-all duration-300"
                >
                  → {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-serif font-semibold text-background">Resources</h3>
            <nav className="flex flex-col gap-3">
              {links.slice(3).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-background/70 hover:text-background hover:translate-x-1 transition-all duration-300"
                >
                  → {link.label}
                </Link>
              ))}
              <a
                href="mailto:flavorsonbudget@gmail.com"
                className="text-sm text-background/70 hover:text-background hover:translate-x-1 transition-all duration-300"
              >
                → Contact
              </a>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-serif font-semibold text-background">Connect With Us</h3>
            <p className="text-sm text-background/70 mb-2">
              Follow for daily budget-friendly recipes and kitchen tips.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://pin.it/3riAMZofo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/10 text-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                aria-label="Follow on Pinterest"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:flavorsonbudget@gmail.com"
                className="p-3 bg-background/10 text-background rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
                aria-label="Email us"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-background/20 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p className="flex items-center gap-2">
            © {new Date().getFullYear()} Flavors on Budget. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Made with <Heart className="h-4 w-4 fill-primary text-primary" /> for budget-conscious food lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
