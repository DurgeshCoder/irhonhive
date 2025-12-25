"use client"

import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const plans = [
    {
        name: "Basic",
        price: "49",
        period: "/mo",
        description: "Essential access to gym facilities.",
        features: ["Access to Gym Floor", "Locker Room Access", "1 Free Assessment", "Open 6am - 10pm"],
        cta: "Start Basic",
        highlight: false,
    },
    {
        name: "Pro",
        price: "89",
        period: "/mo",
        description: "Unlimited access and group classes.",
        features: ["All Basic Features", "Unlimited Group Classes", "Sauna & Steam Room", "Nutritional Guide", "Guest Pass (1/mo)"],
        cta: "Join Pro",
        highlight: true,
    },
    {
        name: "Elite",
        price: "129",
        period: "/mo",
        description: "The complete Ironhive experience.",
        features: ["All Pro Features", "Priority Equipment Access", "Towel Service", "Personal Locker", "Quarterly Body Scan", "Guest Pass (Unlimited)"],
        cta: "Go Elite",
        highlight: false,
    },
    {
        name: "Personal Training",
        price: "499",
        period: "/mo",
        description: "Dedicated coaching for maximum results.",
        features: ["Gym Membership Included", "8 PT Sessions/mo", "Custom Meal Plans", "Daily Check-ins", "Performance Tracking"],
        cta: "Get Coached",
        highlight: false,
    },
]

export function Membership() {
    return (
        <section id="membership" className="py-24 bg-card relative overflow-hidden">
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Membership Plans</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Invest In Your <span className="text-primary">Strength</span>
                    </h3>
                    <p className="text-muted-foreground">
                        Flexible plans designed to fit your goals and lifestyle. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col p-6 rounded-2xl border ${plan.highlight ? 'border-primary bg-white/5 scale-105 z-10 shadow-2xl shadow-primary/20' : 'border-white/10 bg-white/5'} transition-all duration-300 hover:border-primary/50`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg">
                                    <Star className="w-3 h-3 fill-black" /> Best Value
                                </div>
                            )}

                            <div className="mb-6">
                                <h4 className="text-xl font-bold text-white uppercase mb-2">{plan.name}</h4>
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-black text-white">$</span>
                                    <span className="text-5xl font-black text-white">{plan.price}</span>
                                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                                </div>
                                <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
                            </div>

                            <div className="flex-1 mb-6">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-300">
                                            <Check className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button
                                className={`w-full font-bold uppercase tracking-wider ${plan.highlight ? 'bg-primary text-black hover:bg-primary/90' : 'bg-white/10 text-white hover:bg-white/20'}`}
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
