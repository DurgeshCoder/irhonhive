"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FadeIn } from "@/components/ui/fade-in"

const faqs = [
  {
    question: "Which is the best gym in Gomti Nagar Lucknow?",
    answer: "Ironhive Fitness Gym is widely considered the best gym in Gomti Nagar, Lucknow, offering state-of-the-art strength training equipment, certified personal trainers, and a motivating environment designed for real transformations."
  },
  {
    question: "What is the fee of gym in Lucknow?",
    answer: "Gym fees in Lucknow vary, but at Ironhive Fitness Gym Gomti Nagar, we offer affordable membership plans starting from ₹1500 per month, with special discounts for quarterly and half-yearly commitments."
  },
  {
    question: "Is there any gym near me in Gomti Nagar?",
    answer: "Yes, Ironhive Fitness Gym is conveniently located at 1/21, Vastu Khand, Gomti Nagar, Lucknow. It is easily accessible for residents near Mithai Wala Chauraha, Patrakarpuram, and Husariya."
  },
  {
    question: "Do you offer personal training in Gomti Nagar?",
    answer: "Absolutely! We provide expert personal training in Gomti Nagar with certified coaches who specialize in weight loss, muscle gain, and overall athletic performance."
  },
  {
    question: "What are the timings of Ironhive Fitness Gym Lucknow?",
    answer: "We offer flexible timings for working professionals: Morning 5:30 AM to 11:30 AM and Evening 4:00 PM to 10:00 PM."
  }
]

export function FAQ() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-primary font-mono text-sm tracking-wider uppercase mb-2">Got Questions?</h2>
            <h3 className="text-3xl md:text-5xl font-black text-foreground uppercase tracking-tighter mb-4">
              Common <span className="text-primary">Inquiries</span>
            </h3>
            <p className="text-muted-foreground">Everything you need to know about the best fitness center in Gomti Nagar.</p>
          </div>
        </FadeIn>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <AccordionItem value={`item-${index}`} className="border border-border bg-card rounded-xl px-4 overflow-hidden shadow-sm transition-all duration-300 hover:border-primary/30">
                <AccordionTrigger className="text-foreground hover:text-primary transition-colors text-left font-bold uppercase py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </FadeIn>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
