import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col bg-background text-foreground">
            <Navbar />

            <section className="pt-20 md:pt-32 pb-12 px-4 md:px-6 bg-gradient-to-b from-secondary/30 to-background">
                <div className="container mx-auto max-w-4xl">
                    <div className="mb-6">
                        <Breadcrumbs items={[{ label: "Contact" }]} />
                    </div>
                    <div className="text-center">
                        <Badge variant="outline" className="mb-4 text-primary border-primary/30">
                            Get in Touch
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                            Contact Us
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 font-sans">
                            Have a question, a recipe suggestion, or just want to say hello? We'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 md:px-6 flex-1">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <Card className="border-border/50">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="font-serif font-bold text-xl mb-2">Email</h3>
                                <p className="text-muted-foreground text-sm mb-4">The fastest way to reach us for general inquiries.</p>
                                <a href="mailto:flavorsonbudget@gmail.com" className="text-primary font-medium hover:underline">
                                    flavorsonbudget@gmail.com
                                </a>
                            </CardContent>
                        </Card>

                        <Card className="border-border/50">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <h3 className="font-serif font-bold text-xl mb-2">Social Media</h3>
                                <p className="text-muted-foreground text-sm mb-4">Follow us and send a DM for quick tips and community chat.</p>
                                <a href="https://pin.it/3riAMZofo" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                                    Pinterest
                                </a>
                            </CardContent>
                        </Card>

                        <Card className="border-border/50">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h3 className="font-serif font-bold text-xl mb-2">Location</h3>
                                <p className="text-muted-foreground text-sm mb-4">Based in the heart of India, serving budget lovers worldwide.</p>
                                <span className="text-foreground font-medium">Hyderabad, India</span>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-sm">
                        <h2 className="font-serif text-3xl font-bold mb-6 text-center">Send us a Message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Your name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <input type="email" className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="your@email.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Subject</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="How can we help?" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all min-h-[150px]" placeholder="Write your message here..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
