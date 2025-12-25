"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
            {/* Background with honeycomb pattern and gradient */}
            <div className="absolute inset-0 bg-honeycomb opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 blur-[150px] rounded-full opacity-30 pointer-events-none" />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                    <span className="text-primary font-mono text-sm tracking-wider uppercase">Welcome to the Hive of Strength</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-white mb-6 leading-none"
                >
                    Forged <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Not Born</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                    Unleash your potential in a facility designed for power, endurance, and transformation.
                    Join the Ironhive community and build the best version of yourself.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider h-14 px-8 text-lg skew-x-[-10deg]">
                        <span className="skew-x-[10deg] flex items-center gap-2">
                            Join The Hive <ArrowRight className="w-5 h-5" />
                        </span>
                    </Button>
                    <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 font-bold uppercase tracking-wider h-14 px-8 text-lg skew-x-[-10deg]">
                        <span className="skew-x-[10deg] flex items-center gap-2">
                            Book Free Trial
                        </span>
                    </Button>
                </motion.div>

                {/* Stats Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-8"
                >
                    {[
                        { label: "Members Trained", value: "2.5k+" },
                        { label: "Transformations", value: "500+" },
                        { label: "Expert Coaches", value: "15+" },
                        { label: "Years Strong", value: "10+" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-primary rounded-full animate-scroll" />
                </div>
            </div>
        </section>
    )
}
