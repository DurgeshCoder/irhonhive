"use client"

import { Button } from "@/components/ui/button"

export function Transformations() {
    return (
        <section className="py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Real Results</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                            Forged In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Fire</span>
                        </h3>
                    </div>
                    <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 uppercase tracking-wider">
                        View All Stories
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="bg-black border border-white/10 rounded-xl overflow-hidden p-2 hover:border-primary/50 transition-colors">
                            <div className="grid grid-cols-2 gap-2 h-64">
                                <div className="bg-neutral-900 relative flex items-center justify-center rounded-l-lg overflow-hidden">
                                    <span className="absolute top-2 left-2 bg-black/50 backdrop-blur text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Before</span>
                                    <div className="w-full h-full bg-neutral-800" />
                                </div>
                                <div className="bg-neutral-800 relative flex items-center justify-center rounded-r-lg overflow-hidden">
                                    <span className="absolute top-2 right-2 bg-primary text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase">After</span>
                                    <div className="w-full h-full bg-neutral-700" />
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-bold text-white">Member Name {i + 1}</h4>
                                    <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded">-12 kg</span>
                                </div>
                                <p className="text-xs text-gray-400 italic">"The hive mentality kept me going when I wanted to quit. Best decision of my life."</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
