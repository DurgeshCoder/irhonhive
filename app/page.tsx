import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { About } from "@/components/sections/about"
import { Programs } from "@/components/sections/programs"
import { Membership } from "@/components/sections/membership"
import { Trainers } from "@/components/sections/trainers"
import { Transformations } from "@/components/sections/transformations"
import { Community } from "@/components/sections/community"
import { Schedule } from "@/components/sections/schedule"
import { Testimonials } from "@/components/sections/testimonials"
import { BlogPreview } from "@/components/sections/blog-preview"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <About />
      <Programs />
      <Membership />
      <Trainers />
      <Transformations />
      <Community />
      <Schedule />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </div>
  )
}
