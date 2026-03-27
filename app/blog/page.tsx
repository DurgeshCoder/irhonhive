import { BlogList } from "@/components/sections/blog-list"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Knowledge Base | Ironhive Fitness Gym Gomti Nagar",
    description: "Expert advice on training, nutrition, and fitness results. Read our latest articles dedicated to helping the Lucknow community reach their peak performance.",
}

export default function BlogPage() {
    return (
        <main>
            <BlogList />
        </main>
    )
}
