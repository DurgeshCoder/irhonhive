"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
    {
        name: "James T.",
        role: "Member since 2019",
        content: "The equipment is top tier, but the vibe is what keeps me coming back. It feels like a second home.",
        rating: 5,
    },
    {
        name: "Sarah M.",
        role: "Pro Athlete",
        content: "I've trained at gyms all over the world. Ironhive has the best facility for serious strength training, period.",
        rating: 5,
    },
    {
        name: "David K.",
        role: "Transformation Client",
        content: "Lost 40lbs in 6 months. The coaches didn't just give me a plan; they gave me a new lifestyle.",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Reviews</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                        Voices From The <span className="text-primary">Hive</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors">
                            <CardContent className="pt-6">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-gray-300 italic mb-6">"{t.content}"</p>
                                <div>
                                    <h4 className="font-bold text-white uppercase">{t.name}</h4>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
