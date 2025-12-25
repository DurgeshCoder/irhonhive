"use client"

import { Instagram, Twitter, Linkedin } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import Image from "next/image"

import punitImg from "@/assets/images/trainer/punit_awasti.jpeg"
import sunilImg from "@/assets/images/trainer/sunil_kumar.jpeg"

const trainers = [
    {
        name: "Sunil Kumar",
        role: "Head Coach / Bodybuilding",
        image: sunilImg,
        initials: "SK",
        social: [Instagram, Twitter],
    },
    {
        name: "Punit Awasthi",
        role: "Senior Trainer / Fitness",
        image: punitImg,
        initials: "PA",
        social: [Instagram, Linkedin],
    },
]

export function Trainers() {
    return (
        <section id="trainers" className="py-16 md:py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <FadeIn direction="down">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">The Architects</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                            Meet Your <span className="text-primary">Coaches</span>
                        </h3>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {trainers.map((trainer, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="group relative overflow-hidden rounded-xl bg-neutral-900 border border-white/5">
                                <div className="aspect-[3/4] bg-neutral-800 relative overflow-hidden">
                                    {/* Image or Placeholder */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />

                                    {trainer.image ? (
                                        <Image
                                            src={trainer.image}
                                            alt={trainer.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-white/10 text-6xl font-black uppercase group-hover:scale-105 transition-transform duration-500">
                                            {trainer.initials}
                                        </div>
                                    )}

                                    {/* Social Overlay */}
                                    <div className="absolute top-4 right-4 z-20 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-2">
                                        {trainer.social.map((Icon, i) => (
                                            <div key={i} className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors cursor-pointer">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                    <h4 className="text-xl font-bold text-white uppercase mb-1">{trainer.name}</h4>
                                    <p className="text-primary text-sm font-medium tracking-wider uppercase">{trainer.role}</p>
                                </div>

                                {/* Honeycomb Accent */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
