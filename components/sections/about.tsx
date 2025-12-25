"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"
import aboutGym from "@/assets/images/ironhive_fitness.png"
export function About() {
    return (
        <section id="about" className="py-24 bg-card overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-20 pointer-events-none" />

                        <FadeIn direction="right">
                            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                                {/* Real Image Placeholder */}
                                <Image
                                    src={aboutGym}
                                    alt="Ironhive Gym Facility"
                                    fill
                                    className="object-cover"
                                />
                                {/* Fallback overlay if image missing (visual handled by Next.js alt text usually but adding gradient for safety/style) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />

                                <div className="absolute bottom-6 left-6 text-white font-black text-2xl uppercase tracking-tighter z-10">
                                    The Hive <span className="text-primary">HQ</span>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Decor */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-primary rounded-br-3xl hidden md:block" />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <FadeIn delay={0.2} direction="left">
                            <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Who We Are</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                                More Than A Gym.<br />We Are A <span className="text-primary">Movement.</span>
                            </h3>
                            <div className="space-y-6 text-muted-foreground text-lg">
                                <p>
                                    Ironhive Fitness wasn’t built to be just another place to sweat. It was forged to be a sanctuary for those who refuse to settle for average.
                                </p>
                                <p>
                                    Inspired by the collective strength and industrial efficiency of the hive, we believe that individual power is amplified by community. Here, steel meets soul.
                                </p>
                                <p>
                                    Whether you are an elite athlete or stepping into the gym for the first time, our mission is simple: to help you build a body and mind capable of conquering any challenge.
                                </p>
                            </div>

                            <div className="mt-8 flex gap-8">
                                <div>
                                    <span className="block text-3xl font-black text-white">2024</span>
                                    <span className="text-sm text-gray-400 uppercase tracking-widest">Established</span>
                                </div>
                                <div>
                                    <span className="block text-3xl font-black text-white">100%</span>
                                    <span className="text-sm text-gray-400 uppercase tracking-widest">Commitment</span>
                                </div>
                            </div>

                            <div className="mt-10">
                                <Button className="bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wider h-12 px-8">
                                    Read Our Story
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    )
}
