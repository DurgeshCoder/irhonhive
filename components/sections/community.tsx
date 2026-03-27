"use client"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"

export function Community() {
    const whatsappUrl = "https://wa.me/918127171111?text=Hi%20Ironhive%20Fitness%20Gym,%20I%20want%20to%20join%20the%20community!"

    return (
        <section id="community" className="py-24 relative overflow-hidden flex items-center bg-background min-h-[600px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 dark:opacity-20" />
            <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-transparent" />

            <div className="container mx-auto px-4 relative z-10 text-left">
                <div className="max-w-2xl">
                    <FadeIn direction="right">
                        <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">The Hive Culture</h2>
                        <h3 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter mb-6 leading-none">
                            You Don't Just Join.<br />You <span className="text-primary">Belong.</span>
                        </h3>
                    </FadeIn>
                    
                    <FadeIn direction="right" delay={0.1}>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Ironhive Fitness Gym isn't just about lifting weights; it's about lifting each other. 
                            We are a collective of driven individuals united by the pursuit of strength. 
                            When you step through our doors, you leave your ego behind and become part of the tribe.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <FadeIn direction="right" delay={0.2}>
                            <div>
                                <h4 className="text-foreground font-bold text-xl mb-1 uppercase tracking-tight">Tribe Events</h4>
                                <p className="text-sm text-muted-foreground">Monthly challenges, social gatherings, and competitions.</p>
                            </div>
                        </FadeIn>
                        <FadeIn direction="right" delay={0.3}>
                            <div>
                                <h4 className="text-foreground font-bold text-xl mb-1 uppercase tracking-tight">Support System</h4>
                                <p className="text-sm text-muted-foreground">Accountability partners and community mentorship.</p>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn direction="up" delay={0.4}>
                        <Button 
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider h-14 px-10 shadow-lg"
                            onClick={() => window.open(whatsappUrl, '_blank')}
                        >
                            Join The Community
                        </Button>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}
