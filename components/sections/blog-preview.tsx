"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

const articles = [
    {
        title: "How to Get Fit: A Beginner's Guide",
        category: "Training",
        excerpt: "Starting your fitness journey can be overwhelming. Here's a step-by-step guide to starting right.",
        date: "March 27, 2026",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Maintain results Long-Term",
        category: "Lifestyle",
        excerpt: "Winning the battle is one thing; winning the war is another. Secrets to maintenance.",
        date: "March 25, 2026",
        image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Best Gym in Gomti Nagar",
        category: "Community",
        excerpt: "Explore the facilities and culture that make Ironhive the top-rated fitness center in Lucknow.",
        date: "March 20, 2026",
        image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
    },
]

export function BlogPreview() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <FadeIn direction="right">
                        <div>
                            <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Knowledge Base</h2>
                            <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter">
                                Latest <span className="text-primary">Intel</span>
                            </h3>
                        </div>
                    </FadeIn>
                    <FadeIn direction="up">
                        <Button variant="ghost" className="hidden md:flex text-muted-foreground uppercase tracking-wider font-extrabold cursor-not-allowed border border-border">
                            Coming Soon <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {articles.map((article, index) => (
                        <FadeIn key={article.title} delay={index * 0.1}>
                            <div className="group cursor-default">
                                <div className="aspect-video bg-muted rounded-xl overflow-hidden mb-6 relative shadow-lg border border-border group-hover:border-primary/30 transition-all duration-500">
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                        style={{ backgroundImage: `url(${article.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] font-black px-3 py-1 uppercase rounded-full tracking-widest shadow-lg">
                                        {article.category}
                                    </div>
                                </div>
                                <h4 className="text-xl font-black text-foreground mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">
                                    {article.title}
                                </h4>
                                <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">
                                    {article.excerpt}
                                </p>
                                <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{article.date}</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn direction="up">
                    <Button variant="ghost" className="md:hidden mt-12 w-full text-muted-foreground uppercase tracking-wider font-extrabold cursor-not-allowed text-center border border-border py-6">
                        Coming Soon <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </FadeIn>
            </div>
        </section>
    )
}
