"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeIn } from "@/components/ui/fade-in"

const schedule = {
    monday: [
        { time: "06:00 AM", class: "Wake Up Warrior", trainer: "Sunil" },
        { time: "09:00 AM", class: "HIIT Burn", trainer: "Punit" },
        { time: "05:00 PM", class: "Power Hour", trainer: "Sunil" },
        { time: "07:00 PM", class: "Yoga Flow", trainer: "Punit" },
    ],
    tuesday: [
        { time: "06:00 AM", class: "Strength Foundations", trainer: "Sunil" },
        { time: "08:00 AM", class: "Cardio Blast", trainer: "Punit" },
        { time: "06:00 PM", class: "Cross-Training", trainer: "Sunil" },
    ],
    wednesday: [
        { time: "06:00 AM", class: "Wake Up Warrior", trainer: "Sunil" },
        { time: "12:00 PM", class: "Lunch Crunch", trainer: "Punit" },
        { time: "07:00 PM", class: "Mobility Masterclass", trainer: "Punit" },
    ],
    thursday: [
        { time: "06:00 AM", class: "Power Lift", trainer: "Sunil" },
        { time: "09:00 AM", class: "Abs & Core", trainer: "Punit" },
        { time: "06:00 PM", class: "Beast Mode", trainer: "Sunil" },
    ],
    friday: [
        { time: "06:00 AM", class: "Endurance Run", trainer: "Punit" },
        { time: "05:00 PM", class: "Full Body", trainer: "Sunil" },
        { time: "07:00 PM", class: "Recovery", trainer: "Punit" },
    ],
    saturday: [
        { time: "07:00 AM", class: "Weekend Warrior", trainer: "Sunil" },
        { time: "09:00 AM", class: "Community Lift", trainer: "Punit" },
    ]
}

export function Schedule() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Timetable</h2>
                        <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter">
                            Plan Your <span className="text-primary">Attack</span>
                        </h3>
                    </div>
                </FadeIn>

                <Tabs defaultValue="monday" className="w-full max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-muted p-1 h-auto rounded-xl border border-border">
                        {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].map((day) => (
                            <TabsTrigger
                                key={day}
                                value={day}
                                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-muted-foreground uppercase text-xs sm:text-sm font-bold py-3 transition-all"
                            >
                                {day.slice(0, 3)}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {Object.entries(schedule).map(([day, classes]) => (
                        <TabsContent key={day} value={day} className="mt-8 animate-in fade-in zoom-in-95 duration-300">
                            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
                                {classes.map((cls, index) => (
                                    <div key={index} className="flex items-center justify-between p-6 border-b border-border last:border-0 hover:bg-muted/50 transition-colors group">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                                            <span className="text-primary font-mono font-bold">{cls.time}</span>
                                            <h4 className="text-foreground font-bold text-lg uppercase group-hover:text-primary transition-colors">{cls.class}</h4>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs text-muted-foreground uppercase tracking-wider block font-bold">Trainer</span>
                                            <span className="text-foreground font-black uppercase text-sm">{cls.trainer}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}
