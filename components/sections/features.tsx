"use client"

import { Zap, Users, Clock, ShieldCheck } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

const features = [
    {
        title: "Advance Weight Training",
        description: "Master your form with professional-grade equipment and expert guidance.",
        icon: Zap,
    },
    {
        title: "CrossFit & Cardio",
        description: "High-intensity functional training to boost your metabolic rate and endurance.",
        icon: Users,
    },
    {
        title: "Personal Coaching",
        description: "Dedicated 1-on-1 attention to fast-track your fitness transformation.",
        icon: ShieldCheck,
    },
    {
        title: "Diet & Nutrition",
        description: "Tailored meal plans and expert counseling to fuel your body correctly.",
        icon: Zap,
    },
]

export function Features() {
    return (
        <section className="py-20 bg-background border-y border-border">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="flex flex-col items-center text-center p-6 border border-border rounded-xl hover:bg-muted transition-colors group h-full shadow-sm">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow-primary/20">
                                    <feature.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="text-xl font-bold text-foreground uppercase mb-3 group-hover:text-primary transition-colors">{feature.title}</h4>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
