import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import { NewsletterPopup } from '@/components/newsletter-popup'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'Flavors on Budget - Delicious Recipes Without Overspending',
  description: 'Discover budget-friendly recipes, kitchen essentials, and grocery picks. Cook delicious meals without overspending. Perfect for students, families, and anyone who loves great food on a budget.',
  keywords: 'budget recipes, cheap meals, affordable cooking, kitchen essentials, grocery tips, budget-friendly food',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        sizes: 'any',
      }
    ],
    apple: '/images/logo.png',
  },
  verification: {
    other: {
      "p:domain_verify": "c94c22fc82b892a7773c6cea0d4e0ec4",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <NewsletterPopup />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "G-D602ZYW7N3"} />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vmvc5xi28h");
          `}
        </Script>
        <Script
          src="https://subscribe-forms.beehiiv.com/attribution.js"
          strategy="afterInteractive"
          async
        />
      </body>
    </html>
  )
}
