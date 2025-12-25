"use client"

import { Zap, Users, Clock, ShieldCheck } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

const features = [
    {
        title: "State-of-the-Art Equipment",
        description: "Train with the best. Our facility is stocked with premium Hammer Strength and Rogue equipment.",
        icon: Zap,
    },
    {
        title: "Iron Community",
        description: "Join a tribe of like-minded individuals who push each other to be better every single day.",
        icon: Users,
    },
    {
        title: "24/7 Access",
        description: "Train on your terms. Our facility is open round the clock for members.",
        icon: Clock,
    },
    {
        title: "Expert Guidance",
        description: "Our certified coaches form the backbone of your success, providing knowledgeable support.",
        icon: ShieldCheck,
    },
]

export function Features() {
    return (
        <section className="py-20 bg-black border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="flex flex-col items-center text-center p-6 border border-white/5 rounded-xl hover:bg-white/5 transition-colors group h-full">
                                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,215,0,0.1)] group-hover:shadow-[0_0_25px_rgba(255,215,0,0.3)]">
                                    <feature.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="text-xl font-bold text-white uppercase mb-3 text-neon group-hover:text-primary transition-colors">{feature.title}</h4>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
