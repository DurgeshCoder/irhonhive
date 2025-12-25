"use client"

import { Zap, Users, Clock, ShieldCheck } from "lucide-react"

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
                        <div key={index} className="flex flex-col items-center text-center p-6 border border-white/5 rounded-xl hover:bg-white/5 transition-colors group">
                            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold text-white uppercase mb-3 text-neon">{feature.title}</h4>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
