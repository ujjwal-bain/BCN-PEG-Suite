"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Building2, BarChart3, Brain, Heart, Monitor, Users, TrendingUp, Shield, Cog, Target, TabletSmartphone, Leaf, CircleDollarSign, Microscope, ShoppingBag, Cpu, Wrench, Boxes, Banknote, CreditCard, Wallet, LineChart } from "lucide-react"

interface BubbleTile {
    id: string
    name: string
    icon?: React.ComponentType<{ className?: string }>
    column: 1 | 2 | 3
    heightPercent: number
    color: "medium" | "dark" | "light"
    description?: string
    path: string
}

const bubbleTiles: BubbleTile[] = [

    // Column 1 (X base - widest)
    {
        id: "survey-analytics",
        name: "Survey analytics",
        icon: BarChart3,
        column: 1,
        heightPercent: 14.66,
        color: "dark",
        description: "End-to-end support from survey coding to analytics",
        path: "/capabilities/survey-analytics",
    },
    {
        id: "workforce-analytics",
        name: "Workforce analytics",
        icon: Users,
        column: 1,
        heightPercent: 14.66,
        color: "dark",
        description: "Analyzing talent trends and market benchmarks",
        path: "/capabilities/workforce-analytics",
    },
    {
        id: "digital-diagnostics",
        name: "Digital diagnostics",
        icon: TabletSmartphone,
        column: 1,
        heightPercent: 14.66,
        color: "dark",
        description: "Optimizing digital levers through performance insights",
        path: "/capabilities/digital",
    },
    {
        id: "esg-carbon-assessment",
        name: "ESG / Carbon assessment",
        icon: Leaf,
        column: 1,
        heightPercent: 14.66,
        color: "dark",
        description: "ESG diligence from rapid scan to deep dive",
        path: "/capabilities/esg",
    },
    {
        id: "sector-scan",
        name: "Sector scan / Target screening",
        icon: Target,
        column: 1,
        heightPercent: 14.66,
        color: "dark",
        description: "Identify and evaluate high-potential sectors and targets",
        path: "/capabilities/sector-scan",
    },
    {
        id: "gen-ai",
        name: "Gen AI",
        icon: Brain,
        column: 1,
        heightPercent: 14.66,
        color: "dark",
        description: "End-to-end Gen AI Due Diligence (DD)",
        path: "/capabilities/gen-ai",
    },
    {
        id: "product-coming-soon",
        name: "More products coming soon...",
        // icon: Cpu,
        column: 1,
        heightPercent: 12,
        color: "dark",
        // description: "Explore our specialized product offerings",
        path: "/capabilities",
    },

    // Column 2 (Y base - narrowest)
    {
        id: "financial-services",
        name: "Financial services",
        icon: LineChart,
        column: 2,
        heightPercent: 22,
        color: "medium",
        description: "In-depth FS modeling with trusted forecasts",
        path: "/industries/financial-services",
    },
    {
        id: "healthcare",
        name: "Healthcare",
        icon: Microscope,
        column: 2,
        heightPercent: 22,
        color: "medium",
        description: "Targeted due diligence across healthcare segments",
        path: "/industries/healthcare",
    },
    {
        id: "consumer-products-retail",
        name: "Consumer products / Retail",
        icon: ShoppingBag,
        column: 2,
        heightPercent: 22,
        color: "medium",
        description: "End-to-end support from product sourcing to after-sales",
        path: "/industries/consumer-products",
    },
    {
        id: "technology",
        name: "Technology",
        icon: Cpu,
        column: 2,
        heightPercent: 22,
        color: "medium",
        description: "End-to-end tech diligence uncovering risk and upside",
        path: "/industries/technology",
    },
    {
        id: "industry-coming-soon",
        name: "More industries coming soon...",
        // icon: Cpu,
        column: 2,
        heightPercent: 12,
        color: "medium",
        // description: "Explore our specialized industry offerings",
        path: "/industries",
    },

    // Column 3 (Z base - medium width)
    {
        id: "expert-network-outreach",
        name: "Expert network outreach tool",
        icon: Boxes,
        column: 3,
        heightPercent: 17.6,
        color: "light",
        description: "Expert guidance for complex business challenges",
        path: "/peg-tools/#bain-peg-tools",
    },
    {
        id: "pexc",
        name: "PEXC",
        icon: Boxes,
        column: 3,
        heightPercent: 17.6,
        color: "light",
        description: "Fast, secure access to Bain’s diligence insights",
        path: "/peg-tools/#bain-peg-tools",
    },
    {
        id: "pe-pulse-tool",
        name: "PE Pulse tool",
        icon: Boxes,
        column: 3,
        heightPercent: 17.6,
        color: "light",
        description: "Instant fund intelligence",
        path: "/peg-tools/#bain-peg-tools",
    },
    {
        id: "pe-pulse-live",
        name: "PE Pulse live",
        icon: Boxes,
        column: 3,
        heightPercent: 17.6,
        color: "light",
        description: "Instant fund intelligence – Tableau dashboard",
        path: "/peg-tools/#bain-peg-tools",
    },
    {
        id: "glassdoor-reviews",
        name: "Glassdoor reviews/ ratings",
        icon: Boxes,
        column: 3,
        heightPercent: 17.6,
        color: "light",
        description: "Pull Glassdoor reviews and ratings",
        path: "/peg-tools/#employee-reviews",
    },
    {
        id: "more-peg-tools",
        name: "View all PEG Tools/ Solutions",
        // icon: Boxes,
        column: 3,
        heightPercent: 12,
        color: "light",
        // description: "Discover specialized PEG tools and resources",
        path: "/peg-tools",
    },
];

const colorSchemes = {
    dark: {
        bg: "bg-[#5C5C5C]",
        hover: "hover:bg-[#C00000]",
        border: "border-[#B3B3B3]",
        text: "text-[#FAFAFA]",
        icon: "text-[#E0E0E0]",
        hoverText: "group-hover:text-white",
        hoverIcon: "group-hover:text-white",
    },
    medium: {
        bg: "bg-[#858585]",
        hover: "hover:bg-[#C00000]",
        border: "border-[#C2C2C2]",
        text: "text-[#F9F9F9]",
        icon: "text-[#DDDDDD]",
        hoverText: "group-hover:text-white",
        hoverIcon: "group-hover:text-white",
    },
    light: {
        bg: "bg-[#D6D6D6]",
        hover: "hover:bg-[#C00000]",
        border: "border-[#858585]",
        text: "text-[#141414]",
        icon: "text-[#3C3C3C]",
        hoverText: "group-hover:text-white",
        hoverIcon: "group-hover:text-white",
    },
};

// Column base widths (X > Z > Y)
const columnWidths = {
    1: "flex-1", // X base - widest (44% of total width)
    2: "flex-1", // Y base - narrowest (26% of total width)
    3: "flex-1", // Z base - medium (30% of total width)
}

export default function OrganicBubbleOfferings() {
    const [hoveredTile, setHoveredTile] = useState<string | null>(null);

    // Group tiles by column
    const columnTiles = {
        1: bubbleTiles.filter((tile) => tile.column === 1),
        2: bubbleTiles.filter((tile) => tile.column === 2),
        3: bubbleTiles.filter((tile) => tile.column === 3),
    };

    const renderColumn = (columnNumber: 1 | 2 | 3) => {
        const tiles = columnTiles[columnNumber];
        const totalHeight = 550; // Base height for calculations

        return (
            <div className={`${columnWidths[columnNumber]} flex flex-col gap-1`}>
                {tiles.map((tile) => {
                    const colorScheme = colorSchemes[tile.color];
                    const IconComponent = tile.icon;
                    const isHovered = hoveredTile === tile.id;
                    const tileHeight = (totalHeight * tile.heightPercent) / 100;

                    return (
                        <motion.div
                            key={tile.id}
                            className={`group relative overflow-hidden border rounded-sm cursor-pointer transition-all duration-200 ease-out ${colorScheme.bg} ${colorScheme.hover} ${colorScheme.border}`}
                            style={{ height: `${tileHeight}px`, }}
                            whileHover={{
                                scale: 1.07,
                                zIndex: 10,
                                transition: { duration: 0.2 },
                            }}
                            onHoverStart={() => setHoveredTile(tile.id)}
                            onHoverEnd={() => setHoveredTile(null)}
                        >
                            <Link href={tile.path} className="block h-full w-full p-4">
                                <div className="h-full flex flex-col justify-center items-center text-center relative">
                                    {/* Default State - Icon and Name */}
                                    <motion.div
                                        className="flex flex-col items-center justify-center"
                                        animate={{
                                            y: isHovered && tile.description ? -8 : 0, // Only move up if description exists
                                            transition: { duration: 0.2 },
                                        }}
                                    >
                                        {IconComponent && (
                                            <IconComponent
                                                className={`mb-2 mt-4 ${colorScheme.icon} ${colorScheme.hoverIcon} ${tile.heightPercent >= 40 ? "h-8 w-8" : tile.heightPercent >= 30 ? "h-6 w-6" : "h-5 w-5"
                                                    }`}
                                            />
                                        )}
                                        <h3
                                            className={`${colorScheme.text} ${colorScheme.hoverText} leading-tight ${tile.heightPercent >= 40 ? "text-base" : tile.heightPercent >= 30 ? "text-sm" : "text-xs"
                                                }`}
                                        >
                                            {tile.name}
                                        </h3>
                                    </motion.div>

                                    {/* Hover State - Description */}
                                    <motion.div
                                        className={` ${colorScheme.text} ${colorScheme.hoverText}`}
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: isHovered ? 1 : 0,
                                            transition: { duration: 0.2 },
                                        }}
                                    >
                                        {tile.description && (
                                            <p
                                                className={`leading-tight ${tile.heightPercent >= 40 ? "text-sm" : "text-xs"}`}
                                            >
                                                {tile.description}
                                            </p>
                                        )}
                                    </motion.div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        );
    };

    return (
        <section className="w-full py-12 md:py-24 bg-gradient-to-br from-slate-50 to-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore BCN PEG offerings</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                            Explore a comprehensive range of specialized products and sector expertise
                        </p>
                    </div>

                    {/* Color Legend */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8 mb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-[#5C5C5C] border border-medium-300"></div>
                            <span className="text-sm font-medium text-medium-800">BCN PEG Product</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-[#858585] border border-medium-300"></div>
                            <span className="text-sm font-medium">BCN PEG Industry</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-[#D6D6D6] border border-medium-300"></div>
                            <span className="text-sm font-medium text-grey-800">PEG Tools/ Solutions</span>
                        </div>
                    </div>
                </div>

                {/* Desktop 3-Column Layout */}
                <div className="hidden lg:block">
                    <div className="mx-auto max-w-6xl">
                        <div className="flex gap-1 h-[550px]">
                            {renderColumn(1)}
                            {renderColumn(2)}
                            {renderColumn(3)}
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {bubbleTiles.map((tile) => {
                            const colorScheme = colorSchemes[tile.color];
                            const IconComponent = tile.icon;
                            const isHovered = hoveredTile === tile.id;

                            return (
                                <motion.div
                                    key={tile.id}
                                    className={`group relative overflow-hidden border rounded-sm cursor-pointer transition-all duration-200 ease-out ${colorScheme.bg} ${colorScheme.hover} ${colorScheme.border}`}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.2 },
                                    }}
                                    onHoverStart={() => setHoveredTile(tile.id)}
                                    onHoverEnd={() => setHoveredTile(null)}
                                >
                                    <Link href={tile.path} className="block h-full p-3">
                                        <div className="h-full flex flex-col justify-center items-center text-center relative">
                                            <motion.div
                                                className="flex flex-col items-center justify-center"
                                                animate={{
                                                    y: isHovered && tile.description ? -8 : 0, // Only move up if description exists
                                                    transition: { duration: 0.2 },
                                                }}
                                            >
                                                {IconComponent && (
                                                    <IconComponent className={`h-5 w-5 mb-1 mt-4 ${colorScheme.icon} ${colorScheme.hoverIcon}`} />
                                                )}
                                                <h3 className={`text-xs ${colorScheme.text} ${colorScheme.hoverText} leading-tight`}>{tile.name}</h3>
                                            </motion.div>

                                            <motion.div
                                                className={` ${colorScheme.text} ${colorScheme.hoverText}`}
                                                initial={{ opacity: 0 }}
                                                animate={{
                                                    opacity: isHovered ? 1 : 0,
                                                    transition: { duration: 0.2 },
                                                }}
                                            >
                                                <p className="text-xs leading-tight line-clamp-2">{tile.description}</p>
                                            </motion.div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}