import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />

            <section className="pt-20 md:pt-32 pb-12 px-4 md:px-6 bg-gradient-to-b from-secondary/30 to-background">
                <div className="container mx-auto max-w-4xl">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: "About Us" }]} />
                    </div>
                    <div className="text-center">
                        <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                            Our Story
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                            About Flavors on Budget
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 font-sans">
                            We believe that eating well shouldn't mean spending a fortune. Our mission is to provide delicious, restaurant-quality recipes that anyone can afford.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 md:px-6 flex-1">
                <div className="container mx-auto max-w-3xl prose prose-slate dark:prose-invert">
                    <h2 className="font-serif text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                        Flavors on Budget was born out of a simple observation: most "gourmet" recipes require expensive, hard-to-find ingredients and high-end kitchen equipment. We wanted to change that.
                    </p>
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                        Every recipe on our site is meticulously tested to ensure it delivers maximum flavor at minimum cost. We don't just give you a list of ingredients; we show you exactly how much you're saving compared to dining out, providing a transparent look at the value of home cooking.
                    </p>

                    <h2 className="font-serif text-3xl font-bold mt-12 mb-6">What We Offer</h2>
                    <ul className="list-disc pl-6 mb-8 text-muted-foreground space-y-3">
                        <li><strong>Budget-Friendly Recipes:</strong> Detailed cost breakdowns for every dish.</li>
                        <li><strong>Pocket Guides:</strong> Expert tips on grocery shopping, kitchen essentials, and cooking techniques.</li>
                        <li><strong>Digital Products:</strong> Comprehensive resources for those looking to master budget cooking.</li>
                        <li><strong>Value Tracking:</strong> Real-time insights into how much you can save by cooking at home.</li>
                    </ul>

                    <h2 className="font-serif text-3xl font-bold mt-12 mb-6">Join Our Community</h2>
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                        Whether you're a student, a parent, or just someone who loves a good deal, we're glad you're here. Follow us on social media for daily tips and join thousands of others who are reclaiming their kitchens and their wallets.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
