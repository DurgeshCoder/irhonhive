"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Flame, Activity, Users, Trophy, Heart } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

const programs = [
    {
        title: "Strength Training",
        description: "Build raw power and muscle mass with our scientifically designed lifting protocols.",
        icon: Dumbbell,
        benefits: ["Linear Progression", "Compound Movements", "Hypertrophy Focus"],
    },
    {
        title: "Fat Loss Transformation",
        description: "High-intensity metabolic conditioning to burn fat and reveal your athletic physique.",
        icon: Flame,
        benefits: ["HIIT Circuits", "Nutritional Guidance", "Metabolic Boost"],
    },
    {
        title: "Cross-Training",
        description: "Total body conditioning combining strength, cardio, and functional movement.",
        icon: Activity,
        benefits: ["Functional Fitness", "Endurance Building", "Varied Workouts"],
    },
    {
        title: "Personal Training",
        description: "One-on-one coaching tailored specifically to your goals and limitations.",
        icon: Users,
        benefits: ["Custom Plans", "Form Correction", "Accountability"],
    },
    {
        title: "Athlete Conditioning",
        description: "Sport-specific training to enhance performance, speed, and agility.",
        icon: Trophy,
        benefits: ["Explosive Power", "Agility Drills", "Injury Prevention"],
    },
    {
        title: "Women-Focused",
        description: "Empowering programs designed for female physiology and fitness goals.",
        icon: Heart,
        benefits: ["Glute Focus", "Toning & Shaping", "Supportive Community"],
    },
]

export function Programs() {
    return (
        <section id="programs" className="py-24 bg-black relative">
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn delay={0.1}>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Our Programs</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Weapon</span>
                        </h3>
                        <p className="text-muted-foreground">
                            Whether you want to build mass, shred fat, or improve performance, we have a battle-tested program for you.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map((program, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <Card className="bg-white/5 border-white/10 hover:border-primary/50 transition-colors group overflow-hidden h-full flex flex-col">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                                        <program.icon className="w-6 h-6 text-primary group-hover:text-black transition-colors duration-300" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-white uppercase">{program.title}</CardTitle>
                                    <CardDescription className="text-gray-400">{program.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <ul className="space-y-2">
                                        {program.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center text-sm text-gray-300">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-primary/10 uppercase tracking-wider font-bold group-hover:translate-x-1 transition-transform">
                                        Learn More <span className="ml-2">→</span>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
