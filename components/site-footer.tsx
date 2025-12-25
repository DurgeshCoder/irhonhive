"use client"

import Link from "next/link"
import { Hexagon } from "lucide-react"

export function SiteFooter() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="relative">
                                <Hexagon className="w-8 h-8 text-primary fill-primary/20" strokeWidth={1.5} />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-1.5 h-4 bg-black/80 rotate-12" />
                                </div>
                            </div>
                            <span className="text-xl font-bold tracking-tighter uppercase text-white">Ironhive<span className="text-primary">.</span></span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Forging strength, discipline, and community since 2014. Join the hive and become the best version of yourself.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            {["About", "Programs", "Membership", "Trainers", "Blog", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wide">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Programs</h4>
                        <ul className="space-y-3">
                            {["Strength Training", "Fat Loss", "Cross-Training", "Personal Training", "Athlete Conditioning"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wide">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase mb-6 tracking-wider">Operating Hours</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex justify-between items-center bg-white/5 p-3 rounded">
                                <span className="uppercase tracking-wide text-xs">Morning</span>
                                <span className="text-white font-bold">6:00 AM - 11:00 AM</span>
                            </li>
                            <li className="flex justify-between items-center bg-white/5 p-3 rounded">
                                <span className="uppercase tracking-wide text-xs">Evening</span>
                                <span className="text-white font-bold">4:00 PM - 11:00 PM</span>
                            </li>
                            <li className="mt-4 text-xs text-gray-500 text-center">
                                Open 7 Days A Week
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} Ironhive Fitness. All rights reserved.
                    </p>
                    <div className="flex gap-6 items-center">
                        <Link href="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-wider">Privacy Policy</Link>
                        <Link href="#" className="text-gray-500 hover:text-white text-xs uppercase tracking-wider">Terms of Service</Link>
                        <span className="text-gray-600 text-[10px] uppercase tracking-wider border-l border-white/10 pl-6">
                            Made by <a href="https://substringtechnologies.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">Substring Technologies</a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
