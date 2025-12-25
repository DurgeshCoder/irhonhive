"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

// Placeholder IDs - User to replace these with actual YouTube Short IDs from their channel
// Example: https://www.youtube.com/shorts/VIDEO_ID -> Use "VIDEO_ID"
const videos = [
    {
        id: "TKbuZUOW8og", // Placeholder gym motivation short
        title: "Train Insane"
    },
    {
        id: "1NjVm-01Wu4", // Placeholder
        title: "No Excuses"
    },
    {
        id: "4I_R5k1-Wl8", // Placeholder (Invalid ID, just example logic)
        title: "Heavy Lifting"
    },
    {
        id: "Om-fhgsX0d0", // Placeholder
        title: "Hive Mentality"
    }
]

export function YoutubeFeed() {
    const channelUrl = "https://www.youtube.com/@TheMuscleGameSK/shorts"

    return (
        <section id="videos" className="py-24 bg-black relative border-t border-white/5">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                            <span className="text-red-500 font-mono text-sm tracking-widest uppercase font-bold">Trending Now</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                            Watch The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Muscle Game</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Daily motivation, technique tips, and raw training footage straight from the floor.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videos.map((video, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 group">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${video.id}?autoplay=0&controls=1&rel=0&loop=1`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                />
                                {/* Overlay for style before play? Hard with iframe. 
                                    Using transparent pointer-events-none overlay for a border glow 
                                */}
                                <div className="absolute inset-0 border border-white/5 rounded-2xl pointer-events-none group-hover:border-red-500/50 transition-colors duration-300" />
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button
                        size="lg"
                        className="bg-red-600 text-white hover:bg-red-700 font-bold uppercase tracking-wider h-14 px-10 gap-3"
                        onClick={() => window.open(channelUrl, '_blank')}
                    >
                        <Play className="w-5 h-5 fill-current" /> Subscribe to Channel
                    </Button>
                </div>
            </div>
        </section>
    )
}
