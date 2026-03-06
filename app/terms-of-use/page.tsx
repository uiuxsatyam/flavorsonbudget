import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function TermsOfUsePage() {
    return (
        <main className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />

            <section className="pt-20 md:pt-32 pb-12 px-4 md:px-6 bg-gradient-to-b from-secondary/30 to-background">
                <div className="container mx-auto max-w-4xl">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: "Terms of Use" }]} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        Terms of Use
                    </h1>
                    <p className="text-muted-foreground text-sm font-sans italic">
                        Last Updated: March 6, 2026
                    </p>
                </div>
            </section>

            <section className="py-12 px-4 md:px-6 flex-1">
                <div className="container mx-auto max-w-3xl prose prose-slate dark:prose-invert">
                    <p>
                        Welcome to Flavors on Budget. By accessing or using our website, you agree to be bound by these Terms of Use.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By using this site, you signify your acceptance of these terms. If you do not agree to these terms, please do not use our site.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">2. Intellectual Property</h2>
                    <p>
                        All content on Flavors on Budget, including recipes, text, images, and graphics, is the property of Flavors on Budget and is protected by copyright laws. You may not reproduce, distribute, or use our content without explicit written permission.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">3. User Conduct</h2>
                    <p>
                        You agree to use the site for lawful purposes only. You are prohibited from posting any content that is defamatory, offensive, or violates the rights of others.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">4. Accuracy of Information</h2>
                    <p>
                        While we strive to provide accurate recipes and cost breakdowns, we do not guarantee the results of any recipe or the exactness of any cost estimate. Cooking results may vary based on ingredients and techniques used.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
                    <p>
                        Flavors on Budget and its owners shall not be liable for any damages arising out of your use of the site or any information provided herein.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">6. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these terms at any time. Your continued use of the site after changes are posted constitutes your acceptance of the new terms.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">7. Governing Law</h2>
                    <p>
                        These terms are governed by and construed in accordance with the laws of India.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
                    <p>
                        If you have any questions regarding these Terms of Use, please contact us at <a href="mailto:flavorsonbudget@gmail.com">flavorsonbudget@gmail.com</a>.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
