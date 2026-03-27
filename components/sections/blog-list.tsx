"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, User, Tag } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export const blogArticles = [
    {
        id: "how-to-get-fit",
        title: "How to Get Fit: A Beginner's Guide to Starting Your Journey at Ironhive",
        category: "Training",
        excerpt: "Starting your fitness journey can be overwhelming. Here's a step-by-step guide to getting fit in Gomti Nagar.",
        date: "March 27, 2026",
        author: "Ironhive Team",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
        content: `
            ## 1. Set Clear, Realistic Goals
            Before you pick up a dumbbell, know why you're here. Are you looking to lose weight, build muscle, or improve your cardiovascular health? setting SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals is the first step.

            ## 2. Start with Strength Training
            At Ironhive Fitness Gym, we advocate for compound movements like squats, deadlifts, and bench presses. These exercises recruit multiple muscle groups, giving you the best 'bang for your buck' in terms of efficiency.

            ## 3. Consistency Over Intensity
            It's better to train 3 times a week consistently for a year than 6 times a week for a month and then quit. Find a schedule that works for your lifestyle in Lucknow and stick to it.

            ## 4. Don't Ignore Cardio
            While lifting is king, maintaining a healthy heart is crucial. Incorporate 20-30 minutes of moderate-intensity cardio or high-intensity interval training (HIIT) to boost your metabolic rate.
        `
    },
    {
        id: "how-to-maintain-yourself",
        title: "Beyond the Transformation: How to Maintain Your Fitness Results Long-Term",
        category: "Lifestyle",
        excerpt: "Winning the battle is one thing; winning the war is another. Learn the secrets to sustainable fitness maintenance.",
        date: "March 25, 2026",
        author: "Coach Aryan",
        image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
        content: `
            ## 1. Shift Your Identity
            Maintenance starts with your mindset. You're no longer 'someone trying to get fit'; you're an athlete. When fitness becomes part of your identity, it stops feeling like a chore.

            ## 2. The 80/20 Rule
            You don't need to be perfect 100% of the time. Eat clean, nutrient-dense foods 80% of the time, and allow yourself flexibility for the other 20%. This prevents burnout and social isolation.

            ## 3. Monitor Your Progress
            Check your weight, body measurements, or lifting numbers once a month. This helps you catch small slips before they become major setbacks.

            ## 4. Stay Part of the Community
            Being part of a tribe like Ironhive Fitness Gym ensures you have accountability even when your personal motivation dips.
        `
    },
    {
        id: "best-gym-gomti-nagar",
        title: "Why Ironhive is the Best Gym in Gomti Nagar Lucknow for Your Goals",
        category: "Community",
        excerpt: "Explore the facilities, trainers, and culture that make us the top-rated fitness center in Lucknow.",
        date: "March 20, 2026",
        author: "Ironhive Admin",
        image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
        content: `
            ## World-Class Equipment
            We don't settle for average. Our facility features premium strength training equipment designed for maximum muscle engagement and safety.

            ## Expert Personal Trainers
            Our coaches in Gomti Nagar are not just trainers; they are mentors. With years of experience in transformation and athletic performance, they guide you through every rep.

            ## Motivational Environment
            The 'Hive' isn't just a name. It's a culture of collective growth. When you train here, the energy is infectious.

            ## Prime Location
            Conveniently located in Vastu Khand, Gomti Nagar, we are the 'gym near me' that offers everything a serious fitness enthusiast needs.
        `
    }
]

export function BlogList() {
    return (
        <section className="py-24 bg-black min-h-screen">
            <div className="container mx-auto px-4 pt-20">
                <FadeIn>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">The Knowledge Base</h1>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                            Latest <span className="text-primary">Articles</span>
                        </h2>
                        <p className="text-muted-foreground italic">Expert advice on training, nutrition, and lifestyle to help you conquer your goals.</p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogArticles.map((article, index) => (
                        <FadeIn key={article.id} delay={index * 0.1}>
                            <Link href={`/blog/${article.id}`} className="group block h-full">
                                <article className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                                    <div className="relative aspect-video">
                                        <div 
                                            className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                            style={{ backgroundImage: `url(${article.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary text-black text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest shadow-lg">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-mono">
                                            <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {article.date}</span>
                                            <span className="flex items-center gap-1.5"><User className="w-3 h-3" /> {article.author}</span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {article.title}
                                        </h3>
                                        
                                        <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-1">
                                            {article.excerpt}
                                        </p>
                                        
                                        <div className="flex items-center text-primary font-bold uppercase text-xs tracking-widest gap-2">
                                            Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}
