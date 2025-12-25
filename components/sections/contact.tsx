"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-card relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Get In Touch</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                                Start Your <span className="text-primary">Journey</span>
                            </h3>
                            <p className="text-muted-foreground text-lg">
                                Ready to transform? Visit us, call us, or drop a message. The Hive awaits.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase">Location</h4>
                                    <p className="text-gray-400">1/21, Vastu Khand, Gomti Nagar, <br /> Lucknow, Uttar Pradesh 226010</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase">Phone</h4>
                                    <p className="text-gray-400">+91-7007552746<br />+91-8127171111</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold uppercase">Email</h4>
                                    <p className="text-gray-400">ironhivefitnessgym@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <h4 className="text-white font-bold uppercase mb-4">Follow The Hive</h4>
                            <div className="flex gap-4">
                                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                                    <div key={i} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer text-white">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-black p-8 rounded-2xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold uppercase text-gray-500 tracking-wider">Name</label>
                                    <Input id="name" placeholder="John Doe" className="bg-white/5 border-white/10 focus:border-primary text-white" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-xs font-bold uppercase text-gray-500 tracking-wider">Phone</label>
                                    <Input id="phone" placeholder="(555) 000-0000" className="bg-white/5 border-white/10 focus:border-primary text-white" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold uppercase text-gray-500 tracking-wider">Email</label>
                                <Input id="email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 focus:border-primary text-white" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="goal" className="text-xs font-bold uppercase text-gray-500 tracking-wider">Primary Goal</label>
                                <select id="goal" className="w-full h-10 rounded-md bg-white/5 border border-white/10 text-sm px-3 text-white focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary">
                                    <option className="bg-black">Strength Training</option>
                                    <option className="bg-black">Fat Loss</option>
                                    <option className="bg-black">Endurance</option>
                                    <option className="bg-black">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold uppercase text-gray-500 tracking-wider">Message</label>
                                <Textarea id="message" placeholder="Tell us about your fitness journey..." className="bg-white/5 border-white/10 focus:border-primary text-white min-h-[120px]" />
                            </div>

                            <Button size="lg" className="w-full bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider h-12">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
