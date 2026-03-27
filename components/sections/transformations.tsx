"use client"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"

export function Transformations() {
    return (
        <section className="py-24 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <FadeIn direction="right">
                        <div>
                            <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Real Results</h2>
                            <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter">
                                Forged In <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-orange-500">Fire</span>
                            </h3>
                        </div>
                    </FadeIn>
                    <Button variant="outline" className="border-border hover:bg-muted uppercase tracking-wider font-bold">
                        View All Stories
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((_, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="bg-card border border-border rounded-xl overflow-hidden p-2 hover:border-primary/50 transition-colors shadow-sm group">
                                <div className="grid grid-cols-2 gap-2 h-64">
                                    <div className="bg-muted relative flex items-center justify-center rounded-l-lg overflow-hidden">
                                        <span className="absolute top-2 left-2 bg-background/50 backdrop-blur text-foreground text-[10px] font-bold px-2 py-0.5 rounded uppercase border border-border">Before</span>
                                        <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800" />
                                    </div>
                                    <div className="bg-muted relative flex items-center justify-center rounded-r-lg overflow-hidden border-l border-border">
                                        <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded uppercase shadow-sm">After</span>
                                        <div className="w-full h-full bg-neutral-300 dark:bg-neutral-700" />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-bold text-foreground">Member Name {i + 1}</h4>
                                        <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded">-12 kg</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground italic">"The hive mentality kept me going when I wanted to quit. Best decision of my life."</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
