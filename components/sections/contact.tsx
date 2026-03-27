"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function Contact() {
    const whatsappUrl = "https://wa.me/918127171111?text=Hi%20Ironhive,%20I'm%20interested%20in%20joining!"

    return (
        <section id="contact" className="py-24 bg-muted/30 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <FadeIn direction="right">
                            <div>
                                <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Get In Touch</h2>
                                <h3 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter mb-4">
                                    Start Your <span className="text-primary">Journey</span>
                                </h3>
                                <p className="text-muted-foreground text-lg">
                                    Ready to transform? Visit the <span className="text-primary font-bold">top-rated gym in Gomti Nagar Lucknow</span>. We are located near major landmarks to ensure easy access for residents of Gomti Nagar and surrounding areas.
                                </p>
                            </div>
                        </FadeIn>

                        <div className="space-y-6">
                            <FadeIn direction="right" delay={0.1}>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-bold uppercase">Location</h4>
                                        <p className="text-muted-foreground">1/21, Vastu Khand, Gomti Nagar, <br /> Lucknow, UP 226010 <br /> (Near Mithai Wala Chauraha)</p>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn direction="right" delay={0.2}>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-bold uppercase">Phone</h4>
                                        <p className="text-muted-foreground">+91-8127171111<br />+91-7007552746</p>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn direction="right" delay={0.3}>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-foreground font-bold uppercase">Email</h4>
                                        <p className="text-muted-foreground">ironhivefitnessgym@gmail.com</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        <FadeIn direction="right" delay={0.4}>
                            <div className="pt-8 border-t border-border">
                                <h4 className="text-foreground font-bold uppercase mb-4">Follow The Hive</h4>
                                <div className="flex gap-4">
                                    {[Instagram, Facebook, Youtube].map((Icon, i) => (
                                        <div key={i} className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all cursor-pointer text-foreground shadow-sm">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn direction="left">
                        <div className="bg-card p-8 rounded-2xl border border-border relative overflow-hidden h-fit shadow-xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />

                            <form className="space-y-6 relative z-10" onSubmit={(e) => {
                                e.preventDefault();
                                window.open(whatsappUrl, '_blank');
                            }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Name</label>
                                        <Input id="name" placeholder="John Doe" className="bg-background border-border focus:border-primary text-foreground" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Phone</label>
                                        <Input id="phone" placeholder="(555) 000-0000" className="bg-background border-border focus:border-primary text-foreground" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Email</label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-border focus:border-primary text-foreground" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="goal" className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Primary Goal</label>
                                    <select id="goal" className="w-full h-10 rounded-md bg-background border border-border text-sm px-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary">
                                        <option className="bg-background">Strength Training</option>
                                        <option className="bg-background">Fat Loss</option>
                                        <option className="bg-background">Endurance</option>
                                        <option className="bg-background">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Message</label>
                                    <Textarea id="message" placeholder="Tell us about your fitness journey..." className="bg-background border-border focus:border-primary text-foreground min-h-[120px]" />
                                </div>

                                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider h-12 shadow-md">
                                    Send Via WhatsApp
                                </Button>
                            </form>
                        </div>
                    </FadeIn>
                </div>

                {/* Map Embed - Moved outside grid for full width relative to container */}
                <FadeIn direction="up">
                    <div className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden border border-border mt-16 grayscale-50 hover:grayscale-0 transition-all duration-500 shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4180.0234236504575!2d81.0258346!3d26.870332500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be34da239a60d%3A0xb9265f196c7211c4!2sIronhive%20fitness!5e1!3m2!1sen!2sin!4v1766661640311!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </FadeIn>

            </div>
        </section>
    )
}
