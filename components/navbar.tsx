"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Hexagon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Programs", href: "#programs" },
    { name: "Membership", href: "#membership" },
    { name: "Trainers", href: "#trainers" },
    { name: "Community", href: "#community" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const whatsappUrl = "https://wa.me/918127171111?text=Hi%20Ironhive%20Fitness%20Gym,%20I'm%20interested%20in%20joining!"

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-2" : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative">
                        <Hexagon className="w-8 h-8 text-primary fill-primary/20 group-hover:fill-primary transition-colors" strokeWidth={1.5} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-1.5 h-4 bg-foreground/80 rotate-12" />
                        </div>
                    </div>
                    <span className="text-xl font-bold tracking-tighter uppercase leading-tight text-foreground">Ironhive<br className="sm:hidden" /><span className="text-primary ml-1">Fitness Gym</span></span>
                </Link>

                <div className="flex items-center gap-4">
                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-xs font-bold hover:text-primary transition-colors uppercase tracking-widest text-muted-foreground"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="h-6 w-px bg-border mx-2" />
                        <ThemeToggle />
                        <Button
                            size="sm"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 font-black uppercase tracking-widest skew-x-10 shadow-lg shadow-primary/20"
                            onClick={() => window.open(whatsappUrl, '_blank')}
                        >
                            <span className="skew-x-10">Join Now</span>
                        </Button>
                    </nav>

                    {/* Mobile Nav */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <ThemeToggle />
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-foreground">
                                    <Menu className="w-6 h-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-background border-l border-border w-[300px]">
                                <SheetHeader className="text-left mb-8">
                                    <SheetTitle className="text-primary font-black uppercase tracking-tighter text-2xl">Menu</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-6">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="text-xl font-black hover:text-primary transition-colors uppercase tracking-tight text-foreground"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <div className="pt-6 border-t border-border mt-4">
                                        <Button
                                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-black uppercase tracking-widest h-14"
                                            onClick={() => window.open(whatsappUrl, '_blank')}
                                        >
                                            Join The Hive
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
