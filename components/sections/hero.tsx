"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"
import Image from "next/image"

const AnimatedCounter = ({ value }: { value: string }) => {
    const ref = useRef<HTMLSpanElement>(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { damping: 100, stiffness: 100 })

    // Extract number and suffix
    const number = parseInt(value.replace(/[^0-9]/g, '')) || 0
    const suffix = value.replace(/[0-9]/g, '')

    useEffect(() => {
        motionValue.set(number)
    }, [motionValue, number])

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix
            }
        })
    }, [springValue, suffix])

    return <span ref={ref} />
}

const HexagonGrid = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.15] z-10">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat opacity-50 mix-blend-overlay"></div>
            {/* Moving light effect */}
            <motion.div
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                }}
                className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(255,215,0,0.1),transparent)]"
            />
        </div>
    )
}

export function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const headlineVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const letterVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: { opacity: 1, y: 0, rotateX: 0 }
    }

    const whatsappUrl = "https://wa.me/917007552746?text=Hi%20Ironhive,%20I%20want%20to%20Join!"
    const trialUrl = "https://wa.me/917007552746?text=Hi%20Ironhive,%20I'd%20like%20to%20book%20a%20free%20trial."

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
            {/* Real Image Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Ironhive Gym Floor"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
            </div>

            <HexagonGrid />

            {/* Parallax Background Elements */}
            <motion.div style={{ y: y1, opacity }} className="absolute inset-0 bg-honeycomb opacity-20 pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80 pointer-events-none z-10" />

            {/* Orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none z-10"
            />
            <motion.div
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, delay: 4 }}
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 blur-[150px] rounded-full pointer-events-none z-10"
            />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-20 text-center perspective-1000">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-6 px-6 py-2 rounded-full border border-primary/20 bg-black/40 backdrop-blur-sm"
                >
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex items-center gap-2"
                    >
                        <div className="w-2 h-2 rounded-full bg-primary box-shadow-neon" />
                        <span className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Welcome to the Hive</span>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={headlineVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-8"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-none flex flex-wrap justify-center gap-x-4 drop-shadow-2xl">
                        {"TRANSFORM".split("").map((char, i) => (
                            <motion.span key={i} variants={letterVariants} transition={{ type: "spring", damping: 12, stiffness: 200 }}>
                                {char}
                            </motion.span>
                        ))}
                        <span className="w-full md:w-auto" /> {/* Break on mobile */}
                        <span className="relative">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
                                YOUR BODY
                            </span>
                            <motion.span
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
                                className="absolute bottom-2 left-0 h-2 md:h-4 bg-primary -z-10 opacity-70 skew-x-12"
                            />
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-lg"
                >
                    Reach your fitness goals with the <span className="text-primary font-bold">best equipment</span> and <span className="text-primary font-bold">trainers</span> in Lucknow.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Button
                        size="lg"
                        className="group bg-primary text-black hover:bg-white hover:scale-105 transition-all duration-300 font-black uppercase tracking-widest h-14 px-10 text-lg skew-x-[-10deg] shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]"
                        onClick={() => window.open(whatsappUrl, '_blank')}
                    >
                        <span className="skew-x-[10deg] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                            Join The Hive <ArrowRight className="w-5 h-5" />
                        </span>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="group text-white border-white/40 bg-black/20 hover:bg-black/50 hover:border-white backdrop-blur-sm font-bold uppercase tracking-widest h-14 px-10 text-lg skew-x-[-10deg]"
                        onClick={() => window.open(trialUrl, '_blank')}
                    >
                        <span className="skew-x-[10deg] flex items-center gap-2">
                            Book Free Trial
                        </span>
                    </Button>
                </motion.div>

                {/* Stats Strip - Updated Style */}
                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto border-t border-white/20 pt-12 bg-black/60 backdrop-blur-md rounded-t-3xl shadow-2xl pb-8 px-4"
                >
                    {[
                        { label: "Members Trained", value: "2500+" },
                        { label: "Transformations", value: "500+" },
                        { label: "Expert Coaches", value: "15+" },
                        { label: "Years Strong", value: "10+" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center group hover:scale-110 transition-transform duration-300 cursor-default">
                            <div className="text-4xl md:text-5xl font-black text-white mb-2 font-mono flex justify-center items-center">
                                <AnimatedCounter value={stat.value} />
                            </div>
                            <div className="text-xs md:text-sm text-primary uppercase tracking-[0.2em] font-bold">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-0 right-0 flex justify-center z-20"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 bg-primary rounded-full"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
