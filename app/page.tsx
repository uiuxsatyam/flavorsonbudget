import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ValueSection } from "@/components/value-section";
import { KitchenEssentialsSection } from "@/components/kitchen-essentials-section";
import { GrocerySection } from "@/components/grocery-section";
import { DigitalProductSection } from "@/components/digital-product-section";
import { DisclosureSection } from "@/components/disclosure-section";
import { SocialSection } from "@/components/social-section";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <section id="recipes">
        <ValueSection />
      </section>
      <section id="essentials">
        <KitchenEssentialsSection />
      </section>
      <section id="groceries">
        <GrocerySection />
      </section>
      <section id="digital">
        <DigitalProductSection />
      </section>
      <section id="disclosure">
        <DisclosureSection />
      </section>
      <SocialSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
