"use client"

import { Button } from "@/components/ui/button"

export function Community() {
    const whatsappUrl = "https://wa.me/917007552746?text=Hi%20Ironhive,%20I%20want%20to%20join%20the%20community!"

    return (
        <section id="community" className="py-24 relative overflow-hidden flex items-center bg-black">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 fixed-attachment" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

            <div className="container mx-auto px-4 relative z-10 text-left">
                <div className="max-w-2xl">
                    <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">The Hive Culture</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                        You Don't Just Join.<br />You <span className="text-primary">Belong.</span>
                    </h3>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Ironhive isn't just about lifting weights; it's about lifting each other.
                        We are a collective of driven individuals united by the pursuit of strength.
                        When you step through our doors, you leave your ego behind and become part of the tribe.
                    </p>
                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <div>
                            <h4 className="text-white font-bold text-xl mb-1 uppercase">Tribe Events</h4>
                            <p className="text-sm text-gray-400">Monthly challenges, social gatherings, and competitions.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-xl mb-1 uppercase">Support System</h4>
                            <p className="text-sm text-gray-400">Accountability partners and community mentorship.</p>
                        </div>
                    </div>
                    <Button
                        className="bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wider h-12 px-8"
                        onClick={() => window.open(whatsappUrl, '_blank')}
                    >
                        Join The Community
                    </Button>
                </div>
            </div>
        </section>
    )
}
