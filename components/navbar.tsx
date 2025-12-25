"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Hexagon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
    { name: "About", href: "#about" },
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

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative">
                        <Hexagon className="w-8 h-8 text-primary fill-primary/20 group-hover:fill-primary transition-colors" strokeWidth={1.5} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-1.5 h-4 bg-black/80 rotate-12" />
                        </div>
                    </div>
                    <span className="text-xl font-bold tracking-tighter uppercase">Ironhive<span className="text-primary">.</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest text-muted-foreground hover:text-white"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider skew-x-[-10deg]">
                        <span className="skew-x-[10deg]">Join Now</span>
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-black/95 border-l border-white/10">
                        <div className="flex flex-col gap-8 mt-10">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-2xl font-bold hover:text-primary transition-colors uppercase"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider">
                                Join Now
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
