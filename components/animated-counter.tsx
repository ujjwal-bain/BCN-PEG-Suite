"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export default function AnimatedCounter({ end, duration = 2000, suffix = "", prefix="", className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const startTimeRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    // Reset when end changes
    countRef.current = 0
    startTimeRef.current = null
    setCount(0)

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const progress = timestamp - startTimeRef.current
      const progressRatio = Math.min(progress / duration, 1)

      // Easing function for smoother animation
      const easedProgress =
        progressRatio < 0.5
          ? 4 * progressRatio * progressRatio * progressRatio
          : 1 - Math.pow(-2 * progressRatio + 2, 3) / 2

      const nextCount = Math.floor(easedProgress * end)

      if (nextCount !== countRef.current) {
        countRef.current = nextCount
        setCount(nextCount)
      }

      if (progressRatio < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(end) // Ensure we end at the exact target
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [end, duration])

  return (
    <span className={cn("tabular-nums", className)}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
