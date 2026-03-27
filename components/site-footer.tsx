"use client"

import Link from "next/link"
import { Hexagon } from "lucide-react"

export function SiteFooter() {
    return (
        <footer className="bg-muted/30 border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="relative">
                                <Hexagon className="w-8 h-8 text-primary fill-primary/20" strokeWidth={1.5} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-1.5 h-4 bg-foreground/80 rotate-12" />
                                </div>
                            </div>
                            <span className="text-xl font-bold tracking-tighter uppercase text-foreground leading-tight">Ironhive<br className="sm:hidden" /><span className="text-primary ml-1">Fitness Gym</span></span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Forging strength, discipline, and community since 2014. Join the hive and become the best version of yourself.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-foreground font-bold uppercase mb-6 tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            {["About", "Programs", "Membership", "Trainers", "Blog", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-bold uppercase mb-6 tracking-wider">Programs</h4>
                        <ul className="space-y-3">
                            {["Strength Training", "Fat Loss", "Cross-Training", "Personal Training", "Athlete Conditioning"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-bold uppercase mb-6 tracking-wider">Operating Hours</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex justify-between items-center bg-card border border-border p-3 rounded-lg shadow-sm">
                                <span className="uppercase tracking-widest text-[10px] font-black text-primary">Morning</span>
                                <span className="text-foreground font-black text-xs">5:30 AM - 11:30 AM</span>
                            </li>
                            <li className="flex justify-between items-center bg-card border border-border p-3 rounded-lg shadow-sm">
                                <span className="uppercase tracking-widest text-[10px] font-black text-primary">Evening</span>
                                <span className="text-foreground font-black text-xs">4:00 PM - 10:00 PM</span>
                            </li>
                            <li className="mt-4 text-[10px] text-muted-foreground uppercase tracking-widest font-bold text-center">
                                Open 7 Days A Week
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
                        © {new Date().getFullYear()} Ironhive Fitness Gym. Built for Strength.
                    </p>
                    <div className="flex flex-wrap gap-6 items-center justify-center">
                        <Link href="#" className="text-muted-foreground hover:text-primary text-[10px] font-bold uppercase tracking-widest">Privacy</Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary text-[10px] font-bold uppercase tracking-widest">Terms</Link>
                        <span className="hidden md:block h-4 w-px bg-border" />
                        <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                            Built by <a href="https://substringtechnologies.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-foreground transition-colors">Substring</a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
