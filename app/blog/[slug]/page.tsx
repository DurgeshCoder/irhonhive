import { Metadata } from "next"
import { blogArticles } from "@/components/sections/blog-list"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"

interface Props {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const article = blogArticles.find(a => a.id === slug)
    if (!article) return { title: "Article Not Found" }

    return {
        title: `${article.title} | Ironhive Fitness Gym`,
        description: article.excerpt,
    }
}

export async function generateStaticParams() {
    return blogArticles.map((article) => ({
        slug: article.id,
    }))
}

export default async function ArticlePage({ params }: Props) {
    const { slug } = await params
    const article = blogArticles.find(a => a.id === slug)
    
    if (!article) {
        notFound()
    }

    return (
        <article className="min-h-screen bg-black pt-32 pb-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <FadeIn>
                    <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest mb-8 hover:translate-x-[-4px] transition-transform">
                        <ArrowLeft className="w-4 h-4" /> Back to Knowledge Base
                    </Link>

                    <div className="mb-12">
                         <span className="bg-primary/20 text-primary text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest border border-primary/30 mb-6 inline-block">
                            {article.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-mono border-y border-white/10 py-6">
                            <span className="flex items-center gap-2 text-white"><User className="w-4 h-4 text-primary" /> {article.author}</span>
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {article.date}</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> 5 Min Read</span>
                        </div>
                    </div>

                    <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
                        <div 
                            className="absolute inset-0 bg-cover bg-center grayscale-0"
                            style={{ backgroundImage: `url(${article.image})` }}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="prose prose-invert prose-primary max-w-none">
                        <div className="text-gray-300 text-lg leading-relaxed space-y-8 whitespace-pre-line">
                            {article.content}
                        </div>
                    </div>
                    
                    <div className="mt-16 pt-16 border-t border-white/10 text-center">
                        <h3 className="text-white font-black text-2xl uppercase mb-6 tracking-tighter">Ready to Start Your Transformation?</h3>
                        <Link href="/#contact">
                            <Button className="bg-primary text-black hover:bg-white transition-all duration-300 font-black uppercase tracking-widest h-14 px-10 text-lg skew-x-[-10deg]">
                                <span className="skew-x-[10deg]">Join The Hive</span>
                            </Button>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </article>
    )
}
