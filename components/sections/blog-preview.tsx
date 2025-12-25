"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const articles = [
    {
        title: "The Science of Hypertrophy",
        category: "Training",
        excerpt: "Understand the physiological mechanisms behind muscle growth to optimize your lifting.",
        date: "Dec 12, 2024",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Fueling for Performance",
        category: "Nutrition",
        excerpt: "What to eat before and after your workout to maximize energy and recovery.",
        date: "Dec 08, 2024",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    },
    {
        title: "Mastering the Deadlift",
        category: "Technique",
        excerpt: "A comprehensive guide to perfecting your form on the king of all exercises.",
        date: "Nov 28, 2024",
        image: "https://images.unsplash.com/photo-1517963879466-e1b54ebd7690?q=80&w=1974&auto=format&fit=crop",
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
                    <Button variant="ghost" className="hidden md:flex text-white hover:text-primary uppercase tracking-wider font-bold">
                        View All Articles <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="aspect-video bg-neutral-800 rounded-lg overflow-hidden mb-4 relative">
                                {/* Image Placeholder if actual image fails */}
                                <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-white/10">Image</div>
                                <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-3 py-1 uppercase rounded-full">
                                    {article.category}
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                {article.title}
                            </h4>
                            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                                {article.excerpt}
                            </p>
                            <span className="text-xs text-gray-500 font-mono">{article.date}</span>
                        </div>
                    ))}
                </div>

                <Button variant="ghost" className="md:hidden mt-8 w-full text-white hover:text-primary uppercase tracking-wider font-bold">
                    View All Articles <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
            </div>
        </section>
    )
}
