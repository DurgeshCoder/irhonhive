"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
        <section className="py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Knowledge Base</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                            Latest <span className="text-primary">Intel</span>
                        </h3>
                    </div>
                    <Button variant="ghost" className="hidden md:flex text-gray-500 uppercase tracking-wider font-bold cursor-not-allowed">
                        Coming Soon <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {articles.map((article, index) => (
                        <div key={index} className="group cursor-default">
                            <div className="aspect-video bg-neutral-800 rounded-lg overflow-hidden mb-4 relative shadow-2xl">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center grayscale"
                                    style={{ backgroundImage: `url(${article.image})` }}
                                />
                                <div className="absolute top-4 left-4 bg-primary text-black text-[10px] font-black px-3 py-1 uppercase rounded-full tracking-widest">
                                    {article.category}
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">
                                {article.title}
                            </h4>
                            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                                {article.excerpt}
                            </p>
                            <span className="text-xs text-gray-500 font-mono italic">{article.date}</span>
                        </div>
                    ))}
                </div>

                <Button variant="ghost" className="md:hidden mt-8 w-full text-gray-500 uppercase tracking-wider font-bold cursor-not-allowed text-center">
                    Coming Soon <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
            </div>
        </section>
    )
}
