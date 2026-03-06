import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />

            <section className="pt-20 md:pt-32 pb-12 px-4 md:px-6 bg-gradient-to-b from-secondary/30 to-background">
                <div className="container mx-auto max-w-4xl">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-muted-foreground text-sm font-sans italic">
                        Last Updated: March 6, 2026
                    </p>
                </div>
            </section>

            <section className="py-12 px-4 md:px-6 flex-1">
                <div className="container mx-auto max-w-3xl prose prose-slate dark:prose-invert">
                    <p>
                        At Flavors on Budget, we prioritize your privacy. This Privacy Policy outlines the types of information we collect and how we use and protect it.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
                    <p>
                        We may collect personal information such as your name and email address when you subscribe to our newsletter, contact us via email, or participate in our community features.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>
                        Your information is used to provide you with recipe updates, newsletter content, and to respond to your inquiries. We do not sell or share your personal information with third parties for their marketing purposes.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">3. Cookies and Analytics</h2>
                    <p>
                        We use cookies to enhance your browsing experience and analytics tools (like Google Analytics and Microsoft Clarity) to understand how our visitors interact with the site. This helps us improve our content and user experience.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">4. Third-Party Links</h2>
                    <p>
                        Our website contains links to other sites (like Pinterest or affiliate partners). We are not responsible for the privacy practices or content of these external sites.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">5. Security</h2>
                    <p>
                        We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">6. Changes to This Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
                    </p>

                    <h2 className="font-serif text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:flavorsonbudget@gmail.com">flavorsonbudget@gmail.com</a>.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
