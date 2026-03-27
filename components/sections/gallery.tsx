"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Maximize2, X } from "lucide-react"

// Import images
import img1 from "@/assets/images/ironhive_fitness1.jpeg"
import img2 from "@/assets/images/ironhive_fitness2.jpeg"
import img3 from "@/assets/images/ironhive_fitness3.jpeg"
import img4 from "@/assets/images/ironhive_fitness4.jpeg"
import img5 from "@/assets/images/ironhive_fitness5.jpeg"
import img6 from "@/assets/images/ironhive_fitness6.jpeg"
import img7 from "@/assets/images/ironhive_fitness7.jpeg"

// Types for gallery items
type Category = "All" | "Equipment" | "Facility" | "Accessories"

interface GalleryItem {
    id: number
    src: StaticImageData
    category: Exclude<Category, "All">
    title: string
    alt: string
    size?: "small" | "medium" | "large"
}

const galleryItems: GalleryItem[] = [
    {
        id: 1,
        src: img1,
        category: "Facility",
        title: "Main Strength Zone",
        alt: "Spacious gym floor with lifting platforms",
        size: "large"
    },
    {
        id: 2,
        src: img2,
        category: "Equipment",
        title: "Precision Machines",
        alt: "Row of heavy duty machines",
        size: "medium"
    },
    {
        id: 3,
        src: img3,
        category: "Accessories",
        title: "Free Weights Arsenal",
        alt: "Rack of dumbbells and weights",
        size: "small"
    },
    {
        id: 4,
        src: img4,
        category: "Facility",
        title: "Performance Sector",
        alt: "Gym area focused on performance",
        size: "small"
    },
    {
        id: 5,
        src: img5,
        category: "Equipment",
        title: "Heavy Duty Racks",
        alt: "Squat racks and power cages",
        size: "medium"
    },
    {
        id: 6,
        src: img6,
        category: "Facility",
        title: "Conditioning Area",
        alt: "Open space for functional training",
        size: "medium"
    },
    {
        id: 7,
        src: img7,
        category: "Accessories",
        title: "Functional Gear",
        alt: "Specialized training accessories",
        size: "medium"
    },
]

export function Gallery() {
    const [filter, setFilter] = useState<Category>("All")
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

    const filteredItems = galleryItems.filter(
        (item) => filter === "All" || item.category === filter
    )

    return (
        <section id="gallery" className="py-16 md:py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                        <h2 className="text-primary font-mono text-xs md:text-sm tracking-widest uppercase mb-2">The Arsenal</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter mb-4 leading-tight">
                            Inside The <span className="text-primary">Hive</span>
                        </h3>
                        <p className="text-muted-foreground text-sm md:text-base px-4">
                            Explore our world-class facility, premium equipment, and the tools you need to forge your ultimate physique.
                        </p>
                    </div>
                </FadeIn>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {(["All", "Facility", "Equipment", "Accessories"] as Category[]).map((cat) => (
                        <Button
                            key={cat}
                            variant="outline"
                            onClick={() => setFilter(cat)}
                            className={`rounded-full border-border hover:border-primary hover:text-primary transition-all uppercase tracking-wider text-xs font-bold ${filter === cat
                                ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:text-primary-foreground"
                                : "bg-transparent text-muted-foreground"
                                }`}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={item.id}
                                className={`relative group overflow-hidden rounded-xl bg-muted border border-border aspect-4/3 cursor-pointer shadow-sm`}
                                onClick={() => setSelectedImage(item)}
                            >
                                {/* Real Image */}
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    placeholder="blur"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{item.category}</span>
                                    <h4 className="text-foreground font-bold text-lg uppercase drop-shadow-sm">{item.title}</h4>
                                    <div className="absolute top-4 right-4 bg-background/50 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100 border border-border">
                                        <Maximize2 className="w-4 h-4 text-foreground" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
                <DialogContent className="max-w-5xl w-full bg-transparent border-none p-0 shadow-none">
                    {selectedImage && (
                        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-background border border-border">
                            <div className="absolute pt-4 pr-4 top-0 right-0 z-50">
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="rounded-full bg-background/50 text-foreground hover:bg-primary hover:text-primary-foreground backdrop-blur-md border border-border"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    <X className="w-5 h-5" />
                                </Button>
                            </div>
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md p-4 border-t border-border">
                                <h4 className="text-foreground font-bold text-xl uppercase">{selectedImage.title}</h4>
                                <p className="text-muted-foreground text-sm hidden md:block">{selectedImage.alt}</p>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    )
}
