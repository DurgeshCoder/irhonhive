"use client"

import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

// Updated plans with Rupee Pricing for Lucknow Gym
const plans = [
    {
        name: "Basic",
        price: "2000",
        period: "/mo",
        description: "Essential monthly access to gym facilities.",
        features: ["Access to Gym Floor", "General Trainer Support", "Locker Access", "Open 6am - 10pm"],
        cta: "Join Basic",
        highlight: false,
    },
    {
        name: "Quarterly",
        price: "4000",
        period: "/3mo",
        description: "Commit to 3 months and save big.",
        features: ["All Basic Features", "Diet Consultation", "Steam Room Access (1/wk)", "Price Lock Guarantee"],
        cta: "Join Quarterly",
        highlight: true,
    },
    {
        name: "Half Yearly",
        price: "6000",
        period: "/6mo",
        description: "Serious commitment for serious results.",
        features: ["All Quarterly Features", "Unlimited Steam Room", "Full Body Assessment", "2 Guest Passes"],
        cta: "Join Half Yearly",
        highlight: false,
    },
    {
        name: "Yearly",
        price: "8000",
        period: "/yr",
        description: "Best value for long-term transformation.",
        features: ["All Half-Yearly Features", "Priority Support", "Personal Locker", "Free T-Shirt", "Freeze Membership Option"],
        cta: "Join Yearly",
        highlight: false,
    },
    {
        name: "Personal Training",
        price: "10000",
        period: "/mo",
        description: "Dedicated 1-on-1 coaching for maximum results.",
        features: ["Gym Membership Included", "12 PT Sessions/mo", "Custom Meal Plans", "Daily Check-ins", "Performance Tracking"],
        cta: "Get Coached",
        highlight: false,
    },
]

export function Membership() {
    const getWhatsappLink = (planName: string) => {
        const text = encodeURIComponent(`Hi Ironhive, I'm interested in the ${planName} membership plan.`);
        return `https://wa.me/917007552746?text=${text}`;
    }

    return (
        <section id="membership" className="py-24 bg-card relative overflow-hidden">
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn direction="right">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Membership Plans</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                            Invest In Your <span className="text-primary">Strength</span>
                        </h3>
                        <p className="text-muted-foreground">
                            Flexible plans designed to fit your goals and lifestyle. No hidden fees.
                        </p>
                    </div>
                </FadeIn>

                {/* Adjusted grid for 5 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-6">
                    {plans.map((plan, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div
                                className={`relative flex flex-col p-6 rounded-2xl border ${plan.highlight ? 'border-primary bg-white/5 scale-105 z-10 shadow-2xl shadow-primary/20' : 'border-white/10 bg-white/5'} transition-all duration-300 hover:border-primary/50 h-full`}
                            >
                                {plan.highlight && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg">
                                        <Star className="w-3 h-3 fill-black" /> Best Value
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h4 className="text-xl font-bold text-white uppercase mb-2">{plan.name}</h4>
                                    <div className="flex items-baseline">
                                        <span className="text-4xl font-black text-white">₹</span>
                                        <span className="text-5xl font-black text-white">{plan.price}</span>
                                        <span className="text-muted-foreground ml-1 text-sm">{plan.period}</span>
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
                                    onClick={() => window.open(getWhatsappLink(plan.name), '_blank')}
                                >
                                    {plan.cta}
                                </Button>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
