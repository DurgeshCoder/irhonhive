"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

const schedule = {
    monday: [
        { time: "06:00 AM", class: "Wake Up Warrior", trainer: "Alex" },
        { time: "09:00 AM", class: "HIIT Burn", trainer: "Sarah" },
        { time: "05:00 PM", class: "Power Hour", trainer: "Marcus" },
        { time: "07:00 PM", class: "Yoga Flow", trainer: "Elena" },
    ],
    tuesday: [
        { time: "06:00 AM", class: "Strength Foundations", trainer: "Marcus" },
        { time: "08:00 AM", class: "Cardio Blast", trainer: "Sarah" },
        { time: "06:00 PM", class: "Cross-Training", trainer: "Alex" },
    ],
    wednesday: [
        { time: "06:00 AM", class: "Wake Up Warrior", trainer: "Alex" },
        { time: "12:00 PM", class: "Lunch Crunch", trainer: "Sarah" },
        { time: "07:00 PM", class: "Mobility Masterclass", trainer: "Elena" },
    ],
    // ... other days (simplified for brevity)
}

export function Schedule() {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Timetable</h2>
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                        Plan Your <span className="text-primary">Attack</span>
                    </h3>
                </div>

                <Tabs defaultValue="monday" className="w-full max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-white/5 p-1 h-auto">
                        {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].map((day) => (
                            <TabsTrigger
                                key={day}
                                value={day}
                                className="data-[state=active]:bg-primary data-[state=active]:text-black text-gray-400 uppercase text-xs sm:text-sm font-bold py-3"
                            >
                                {day.slice(0, 3)}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {Object.entries(schedule).map(([day, classes]) => (
                        <TabsContent key={day} value={day} className="mt-8">
                            <div className="bg-card border border-white/10 rounded-xl overflow-hidden">
                                {classes.map((cls, index) => (
                                    <div key={index} className="flex items-center justify-between p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                                            <span className="text-primary font-mono font-bold">{cls.time}</span>
                                            <h4 className="text-white font-bold text-lg uppercase">{cls.class}</h4>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-sm text-gray-400 uppercase tracking-wider block">Trainer</span>
                                            <span className="text-white font-bold">{cls.trainer}</span>
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
