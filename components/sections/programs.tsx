"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Flame, Activity, Users, Trophy, Heart } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

const programs = [
    {
        title: "Strength Training",
        description: "The best strength training in Gomti Nagar. Build raw power with our scientifically designed lifting protocols and professional-grade equipment.",
        icon: Dumbbell,
        benefits: ["Linear Progression", "Compound Movements", "Hypertrophy Focus"],
    },
    {
        title: "Weight Loss Program",
        description: "Effective weight loss programs in Lucknow. High-intensity metabolic conditioning to burn fat and reveal your athletic physique fast.",
        icon: Flame,
        benefits: ["HIIT Circuits", "Nutritional Guidance", "Metabolic Boost"],
    },
    {
        title: "Personal Training",
        description: "Certified personal trainers in Gomti Nagar. One-on-one coaching tailored specifically to your goals and limitations for maximum results.",
        icon: Users,
        benefits: ["Custom Plans", "Form Correction", "Accountability"],
    },
    {
        title: "Zumba & Yoga",
        description: "Premium Zumba and Yoga classes in Lucknow. Improve flexibility and cardiovascular health in a fun, high-energy environment.",
        icon: Activity,
        benefits: ["Expert Instructors", "Flexibility Focus", "Stress Relief"],
    },
    {
        title: "Diet & Nutrition",
        description: "Customized diet and nutrition plans in Gomti Nagar. Precision fueling strategies designed to complement your training and speed up results.",
        icon: Trophy,
        benefits: ["Custom Meal Plans", "Macro Tracking", "Sustainable Habits"],
    },
    {
        title: "Athlete Conditioning",
        description: "Top-tier athlete conditioning in Lucknow. Sport-specific training to enhance power, speed, and agility for competitive levels.",
        icon: Heart,
        benefits: ["Explosive Power", "Agility Drills", "Injury Prevention"],
    },
]

export function Programs() {
    return (
        <section id="programs" className="py-16 md:py-24 bg-background relative">
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn delay={0.1}>
                    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                        <h2 className="text-primary font-mono text-xs md:text-sm tracking-widest uppercase mb-2">Our Programs</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter mb-4 leading-tight">
                            Choose Your <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary to-primary/50">Weapon</span>
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base px-4">
                            Whether you want to build mass, shred fat, or improve performance, we have a battle-tested program for you.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map((program, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                             <Card className="bg-card border-border hover:border-primary/50 transition-colors group overflow-hidden h-full flex flex-col shadow-lg">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                        <program.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-card-foreground uppercase">{program.title}</CardTitle>
                                    <CardDescription className="text-muted-foreground">{program.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <ul className="space-y-2">
                                        {program.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center text-sm text-muted-foreground">
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
