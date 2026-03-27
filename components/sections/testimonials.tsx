"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

const testimonials = [
    {
        name: "James T.",
        role: "Gomti Nagar Resident",
        content: "Hands down the best gym in Gomti Nagar Lucknow. The equipment is top tier, and the community vibe is unmatched. Worth every rupee!",
        rating: 5,
    },
    {
        name: "Sarah M.",
        role: "Professional from Gomti Nagar",
        content: "I've tried many fitness centers in Lucknow, but Ironhive stands out for its hygiene and expert trainers. Perfect for working professionals like me.",
        rating: 5,
    },
    {
        name: "David K.",
        role: "Transformation Client",
        content: "Lost 15kg in 4 months. If you are looking for a gym near you in Lucknow that actually delivers results, Ironhive is the place to be.",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Reviews</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter">
                            Voices From The <span className="text-primary">Hive</span>
                        </h3>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 shadow-lg h-full group">
                                <CardContent className="pt-6 h-full flex flex-col">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground italic mb-6 flex-1 text-sm md:text-base leading-relaxed group-hover:text-foreground transition-colors">"{t.content}"</p>
                                    <div className="mt-auto pt-4 border-t border-border/50">
                                        <h4 className="font-bold text-foreground uppercase text-sm tracking-wider">{t.name}</h4>
                                        <p className="text-xs text-muted-foreground font-mono">{t.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
