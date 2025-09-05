import { useRef, useEffect } from "react"
import Image from "next/image"
import type { Testimonial } from "@/lib/testimonials-data"
import { cn } from "@/lib/utils"
import { QuoteIcon, MessageSquareQuote } from "lucide-react"

interface ScrollingTestimonialsProps {
    testimonials: Testimonial[]
    className?: string
    autoScroll?: boolean
    speed?: number // pixels per second
}

export default function ScrollingTestimonials({
    testimonials,
    className,
    autoScroll = true,
    speed = 200,
}: ScrollingTestimonialsProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const allTestimonials = [...testimonials, ...testimonials]

    useEffect(() => {
        if (!autoScroll || !scrollContainerRef.current || !contentRef.current) return

        let animationFrameId: number
        let lastTimestamp: number
        let scrollPosition = 0

        const container = scrollContainerRef.current
        const content = contentRef.current

        const checkPosition = () => {
            //     if (scrollPosition >= content.clientWidth / 2) {
            //         scrollPosition = 0
            //         container.scrollLeft = 0
            //     }
            // }
            const scrollWidth = content.scrollWidth
            const containerWidth = container.clientWidth
            const originalTestimonialsWidth = scrollWidth / 2

            // When we've scrolled past the original testimonials (not halfway through duplicated content)
            if (scrollPosition >= originalTestimonialsWidth) {
                scrollPosition = 0
                container.scrollLeft = 0
            }
        }

        const scroll = (timestamp: number) => {
            if (!lastTimestamp) lastTimestamp = timestamp
            const elapsed = timestamp - lastTimestamp
            const pixelsToScroll = (speed * elapsed) / 1000

            scrollPosition += pixelsToScroll
            container.scrollLeft = scrollPosition

            checkPosition()
            lastTimestamp = timestamp

            animationFrameId = requestAnimationFrame(scroll)
        }

        animationFrameId = requestAnimationFrame(scroll)

        return () => {
            cancelAnimationFrame(animationFrameId)
        }
    }, [autoScroll, speed])

    return (
        <section className={cn("w-full py-12 md:py-24 bg-muted/20", className)}>
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                    <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-2">
                        <MessageSquareQuote className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimonials</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Feedback from global teams we have collaborated with
                        </p>
                    </div>
                </div>

                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

                    <div
                        ref={scrollContainerRef}
                        className="overflow-x-scroll scrollbar-hide"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        <div ref={contentRef} className="flex space-x-6 py-8 px-16">
                            {allTestimonials.map((testimonial, index) => (
                                <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className="flex-shrink-0 w-[350px] bg-white rounded-lg shadow-md p-6 border border-muted">
            <div className="flex justify-between items-start mb-4">
                <QuoteIcon className="h-8 w-8 text-primary/30" />
            </div>

            <blockquote className="text-muted-foreground italic mb-6">"{testimonial.quote}"</blockquote>

            <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-bold text-primary">
                        {testimonial.author
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                    </span>
                </div>
                <div className="ml-4">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                        {testimonial.title}, {testimonial.company}
                    </div>
                </div>
            </div>
        </div>
    )
}
