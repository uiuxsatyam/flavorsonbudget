import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function AffiliateDisclosurePage() {
    return (
        <main className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />

            <section className="pt-20 md:pt-32 pb-12 px-4 md:px-6 bg-gradient-to-b from-secondary/30 to-background">
                <div className="container mx-auto max-w-4xl">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: "Affiliate Disclosure" }]} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        Affiliate Disclosure
                    </h1>
                    <p className="text-muted-foreground text-sm font-sans italic">
                        Last Updated: March 6, 2026
                    </p>
                </div>
            </section>

            <section className="py-12 px-4 md:px-6 flex-1">
                <div className="container mx-auto max-w-3xl prose prose-slate dark:prose-invert">
                    <p>
                        In compliance with the FTC Bureau of Consumer Protection's guidelines, we want to be fully transparent about our relationship with affiliate programs.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">What is an Affiliate Link?</h2>
                    <p>
                        Some of the links on Flavors on Budget are "affiliate links." This means if you click on the link and purchase the item, we will receive an affiliate commission at no extra cost to you.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Why Do We Use Affiliate Links?</h2>
                    <p>
                        Running Flavors on Budget requires significant time and resources. Affiliate commissions help us keep the site running, allowing us to continue providing high-quality, budget-friendly recipes and guides for free.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Our Commitment</h2>
                    <p>
                        We only recommend products or services that we believe will add value to our readers. Our opinions are always our own, and we never accept payment for positive reviews. The integrity of our budget-friendly mission is our top priority.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Amazon Associates Disclosure</h2>
                    <p>
                        Flavors on Budget is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.in.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">Questions?</h2>
                    <p>
                        If you have any questions regarding this disclosure, please do not hesitate to contact us at <a href="mailto:flavorsonbudget@gmail.com">flavorsonbudget@gmail.com</a>.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
