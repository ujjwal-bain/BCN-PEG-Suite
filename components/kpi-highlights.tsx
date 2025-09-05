"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Users, Briefcase, Star, Building, Clock, Building2, Handshake } from "lucide-react"
import AnimatedCounter from "./animated-counter"

interface KPIData {
  teams: number
  cases: number
  nps: number
  offices: number
  retainers: number
}

interface KPIHighlightsProps {
  global: KPIData
  americas: KPIData
  className?: string
}

export default function KPIHighlights({ global, americas, className }: KPIHighlightsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const kpiIcons = [
    { icon: Users, label: "Teams" },
    { icon: Briefcase, label: "Cases" },
    { icon: Star, label: "Case team NPS" },
    { icon: Building2, label: "Offices" },
    { icon: Handshake, label: "Fund/ Office dedicated teams" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div ref={sectionRef} className={className}>
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12 space-y-2"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            BCN PEG highlights
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground max-w-3xl mx-auto md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
          >
            Our global reach and impact across markets
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8 md:gap-12">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 shadow-lg max-w-4xl mx-auto w-full"
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
              {kpiIcons.map((kpi, index) => {
                const Icon = kpi.icon
                let value: number = 0
                let prefix = ""
                let suffix = ""

                switch (index) {
                  case 0:
                    value = global.teams
                    break
                  case 1:
                    value = global.cases
                    suffix = "+"
                    break
                  case 2:
                    value = global.nps
                    prefix = "~"
                    suffix = "%"
                    break
                  case 3:
                    value = global.offices
                    break
                  case 4:
                    value = global.retainers
                    prefix = "~"
                    break
                }

                return (
                  <motion.div
                    key={kpi.label}
                    variants={itemVariants}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-1">
                      {isVisible && (
                        <>
                          {/* {index === 2 && "~"} */}
                          <AnimatedCounter prefix={prefix} end={value} suffix={suffix} />
                        </>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{kpi.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
        <div className="max-w-4xl mx-auto w-full">
          <p className="text-xs text-muted-foreground/70 italic mt-4 ml-2 text-center">
            *Data reflects 2024 metrics
          </p>
        </div>
      </div>
    </div >
  )
}
