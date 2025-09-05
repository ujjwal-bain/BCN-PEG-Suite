import { TrendingUp, LayoutGrid, MapPin, BarChart4, Tag } from "lucide-react";

export interface Tool {
    id: string
    name: string
    logoSrc: string
}

export interface consumerOffering {
    id: string
    title: string
    description: string
    logoSrc: string
    tools: Tool[]
    learnMoreUrl: string
}

export const consumerHeroProducts = [
    {
        name: "Quick assessment",
        description: "Quick high-level overview of category and brand performance. It provides clear insights into overall market dynamics and competitive positioning",
        pdf: "/Decks/Consumer Products/BBA Product Deck - Quick Assesment 2025.pdf",
        ppt: "/Decks/Consumer Products/BBA Product Deck - Quick Assesment 2025.pdf",
        components: [
            {
                logo: "TrendingUp",
                heading: "Growth trajectory",
                description: "Track historical growth across categories, segments and brands"
            },
            {
                logo: "LayoutGrid",
                heading: "Channel and retailer split",
                description: "Analyze market share by channel and retailer to identify opportunities"
            },
            {
                logo: "MapPin",
                heading: "Brand presence & expansion potential",
                description: "Assess brand footprint and potential areas for growth"
            },
            {
                logo: "BarChart4",
                heading: "Velocity x distribution visualization",
                description: "Visualize velocity and distribution performance over time"
            },
            {
                logo: "Tag",
                heading: "Pricing positioning",
                description: "Compare brand pricing against competitors to evaluate strategy"
            }
        ],
        dataRequirements: "Primarily leverages data available under Bain subscription"
    },
    {
        name: "Full assessment",
        description: "A comprehensive SKU-level deep dive that explores detailed market dynamics, assortment strategy, product velocity, pricing, and promotional effectiveness",
        pdf: "/Decks/Consumer Products/BBA Product deck_2025.pdf",
        ppt: "/Decks/Consumer Products/BBA Product deck_2025.pdf",
        components: [
            {
                logo: "LineChart",
                heading: "Detailed growth trends",
                description: "Explore performance trends across all market levels"
            },
            {
                logo: "ListChecks",
                heading: "SKU assortment analysis",
                description: "Evaluate sales share innovation and discontinued SKUs"
            },
            {
                logo: "PackageOpen",
                heading: "Velocity x distribution by SKU",
                description: "Analyze SKU-level velocity and distribution for optimization"
            },
            {
                logo: "Percent",
                heading: "Promotional strategy deep dive",
                description: "Review promotional depth frequency and seasonal impacts"
            },
            {
                logo: "BadgeDollarSign",
                heading: "Price positioning analysis",
                description: "Understand pricing across SKUs and competitive segments"
            }
        ],
        dataRequirements: "Leverage paid PoS data outside Bain subscription"
    },
    {
        name: "Consumer pulse",
        description: "A ready-to-use Tableau solution offering fast insights into market trends, velocity, pricing, promotion, and innovation",
        pdf: "/Decks/Consumer Products/Consumer Pulse_PEG BBA ODA Tableau Tool.pdf",
        ppt: "/Decks/Consumer Products/Consumer Pulse_PEG BBA ODA Tableau Tool.pdf",
        components: [
            {
                logo: "Zap",
                heading: "Instant insights",
                description: "Access insights quickly without complex modeling"
            },
            {
                logo: "LayoutDashboard",
                heading: "Ready-to-use dashboards",
                description: "Use prebuilt dashboards easily customizable for clients"
            },
            {
                logo: "SlidersHorizontal",
                heading: "Interactive & flexible",
                description: "Filter data by brand period SKU pricing and more"
            }
        ],
        dataRequirements: "Can be done using both subscription as well as paid PoS data"
    }
]


export const consumerOfferings: consumerOffering[] = [
    // {
    //     id: "secondary-research",
    //     title: "Primary / Secondary research",
    //     description: "Analyze market size projections, brand performance, and competitive positioning across CP&R sub-sectors by leveraging robust secondary sources and historical data",
    //     logoSrc: "/Icons/Bain/digitalResearch.png",
    //     learnMoreUrl: "/Decks/Healthcare/hc-industry-pov.pdf",
    //     tools: [
    //         { id: "euromonitor", name: "Euromonitor", logoSrc: "/Icons/PrimarySec Research/euromonitor.png" },
    //         { id: "pitchbook", name: "Pitchbook", logoSrc: "/Icons/Financial Services/pitchbook.png" },
    //         { id: "thomson-reuters", name: "Thomson Reuters", logoSrc: "/Icons/PrimarySec Research/thomson-reuters.png" },
    //     ],
    // },
    {
        id: "disruption-assessment",
        title: "Disruption assessment",
        description: "Evaluate innovation trends, competitor strategies, and shifting regulations in the CP&R landscape to identify key disruption themes and strategic risks or opportunities",
        logoSrc: "/Icons/Bain/innovation.png",
        learnMoreUrl: "/Decks/Healthcare/hc-industry-pov.pdf",
        tools: [
            { id: "factiva", name: "Factiva", logoSrc: "/Icons/Financial Services/factiva.png" },
            { id: "googleTrends", name: "Google Trends", logoSrc: "/Icons/Financial Services/googleTrends.png" },
            { id: "pitchbook", name: "Pitchbook", logoSrc: "/Icons/Financial Services/pitchbook.png" },
            { id: "dealogic", name: "Dealogic", logoSrc: "/Icons/Financial Services/dealogic.png" },
            { id: "helixFind", name: "Helix Find", logoSrc: "/Icons/Financial Services/helixFind.png" },
            { id: "crunchbase", name: "Crunchbase", logoSrc: "/Icons/Financial Services/crunchbase.png" },
            { id: "preqin", name: "Preqin", logoSrc: "/Icons/Financial Services/preqin.png" },
            { id: "tracxn", name: "Tracxn", logoSrc: "/Icons/Financial Services/tracxn.png" },
            { id: "capterra", name: "Capterra", logoSrc: "/Icons/Financial Services/capterra.png" },
            { id: "capterra2", name: "Capterra2", logoSrc: "/Icons/Financial Services/capterra2.png" },
            { id: "trustpilot", name: "Trustpilot", logoSrc: "/Icons/Financial Services/trustpilot.png" },
            { id: "CDP", name: "CDP", logoSrc: "/Icons/Financial Services/CDP.png" },
            { id: "ecovadis", name: "ecovadis", logoSrc: "/Icons/Financial Services/ecovadis.png" },
            { id: "persefoni", name: "Persefoni", logoSrc: "/Icons/Financial Services/persefoni.jpg" },
            { id: "Refinitiv", name: "Refinitiv", logoSrc: "/Icons/Financial Services/Refinitiv.png" },
        ],
    },
    {
        id: "survey-analytics",
        title: "Survey analytics++",
        description: "Conduct full-funnel consumer surveys to understand awareness, usage, decision drivers, and perception metrics such as Key Purchasing Criteria (KPC) and Net Promoter Score (NPS), enabling precise brand benchmarking",
        logoSrc: "/Icons/Financial Services/survey-analytics.png",
        learnMoreUrl: "/Decks/Survey/SurveyProductDeck.pdf",
        tools: [
            { id: "inc-query", name: "Inc-Query", logoSrc: "/Icons/Survey/IncQuery.svg" },
            { id: "qualtrics", name: "qualtrics", logoSrc: "/Icons/Survey/qualtrics.svg" },
            { id: "dynata", name: "dynata", logoSrc: "/Icons/Survey/dynata.png" },
            { id: "intelli-survey", name: "Intellisurvey", logoSrc: "/Icons/Survey/intelliSurvey.png" },
            { id: "glg", name: "glg", logoSrc: "/Icons/Survey/glg.png" },
            { id: "kantar", name: "kantar", logoSrc: "/Icons/Survey/kantar.png" },
            { id: "thirdbridge", name: "thirdbridge", logoSrc: "/Icons/Survey/thirdbridge.jpeg" },
            { id: "roirocket", name: "roirocket", logoSrc: "/Icons/Survey/roirocket.jpeg" },
            { id: "alphasights", name: "alphasights", logoSrc: "/Icons/Survey/alphasights.png" },
        ],
    },
    {
        id: "workforce-analytics",
        title: "Workforce analytics",
        description: "Analyze hiring, attrition, compensation, and org structures across CP&R players to benchmark talent trends, workforce stability, and operational priorities by function",
        logoSrc: "/Icons/Financial Services/workforce.png",
        learnMoreUrl: "/Decks/Workforce/BCN PEG Workforce analytics product deck 2025.pdf",
        tools: [
            { id: "aura", name: "Aura", logoSrc: "/Icons/Workforce/aura.svg" },
            { id: "linkedin", name: "Linkedin", logoSrc: "/Icons/Workforce/linkedin.png" },
            { id: "glassdoor", name: "Glassdoor", logoSrc: "/Icons/Workforce/glassdoor.png" },
            { id: "comaparably", name: "comaparably", logoSrc: "/Icons/Workforce/comparably.png" },
            { id: "indeed", name: "indeed", logoSrc: "/Icons/Workforce/indeed.png" },
            { id: "reveliolabs", name: "reveliolabs", logoSrc: "/Icons/Workforce/reveliolabs.jpg" },
            { id: "salarycom", name: "salarycom", logoSrc: "/Icons/Workforce/salarycom.jpg" },
        ],
    },
    {
        id: "digital-analytics",
        title: "Digital analytics",
        description: "Assess digital presence and marketing effectiveness through traffic, SEO/SEM, media spend, and social engagement to evaluate brand competitiveness in online channels",
        logoSrc: "/Icons/Financial Services/digital.png",
        learnMoreUrl: "/Decks/Digital/2023 BCN PEG - Digital Diagnostic.pdf",
        tools: [
            { id: "similarweb", name: "similarweb", logoSrc: "/Icons/Digital/similarweb.png" },
            { id: "netbasequid", name: "netbasequid", logoSrc: "/Icons/Digital/netbasequid.jpg" },
            { id: "googletrends", name: "googletrends", logoSrc: "/Icons/Digital/googletrends.png" },
            { id: "semrush", name: "semrush", logoSrc: "/Icons/Digital/semrush.png" },
            { id: "sensortower", name: "sensortower", logoSrc: "/Icons/Digital/sensortower.png" },
            { id: "spyfu", name: "spyfu", logoSrc: "/Icons/Digital/spyfu.jpg" },
            { id: "fanpagekarma", name: "fanpagekarma", logoSrc: "/Icons/Digital/fanpagekarma.jpg" },
            { id: "mscience", name: "mscience", logoSrc: "/Icons/Digital/mscience.png" },
            { id: "trajaan", name: "trajaan", logoSrc: "/Icons/Digital/trajaan.png" },
            { id: "pathmatics", name: "pathmatics", logoSrc: "/Icons/Digital/pathmatics.png" },
            { id: "hypeauditor", name: "hypeauditor", logoSrc: "/Icons/Digital/hypeauditor.png" }
        ],
    },
    {
        id: "sentiment-analytics",
        title: "Sentiment analytics",
        description: "Analyze customer reviews, ratings, and thematic sentiment to uncover key satisfaction drivers, brand risks, and performance gaps across consumer-facing CP&R brands",
        logoSrc: "/Icons/Financial Services/industry-pov.png",
        learnMoreUrl: "/Decks/Financial Services/Most common Customer sentiment Blanks – BCN PEG.pdf",
        tools: [
            { id: "capterra", name: "Capterra", logoSrc: "/Icons/Financial Services/capterra2.png" },
            { id: "helixFind", name: "Helix Find", logoSrc: "/Icons/Financial Services/helixFind.png" },
            { id: "netbasequid", name: "netbasequid", logoSrc: "/Icons/Digital/netbasequid.jpg" },
            { id: "trustpilot", name: "Trustpilot", logoSrc: "/Icons/Financial Services/trustpilot.png" },
            { id: "trustRadius", name: "Trust Radius", logoSrc: "/Icons/trustRadius.png" },
            { id: "Caplena", name: "Caplena", logoSrc: "/Icons/Financial Services/capterra.png" },
            { id: "pitchbook", name: "Pitchbook", logoSrc: "/Icons/Financial Services/pitchbook.png" },
            { id: "crunchbase", name: "Crunchbase", logoSrc: "/Icons/Financial Services/crunchbase.png" },
            { id: "preqin", name: "Preqin", logoSrc: "/Icons/Financial Services/preqin.png" },
            { id: "tracxn", name: "Tracxn", logoSrc: "/Icons/Financial Services/tracxn.png" },
            { id: "factiva", name: "Factiva", logoSrc: "/Icons/Financial Services/factiva.png" },
            { id: "dealogic", name: "Dealogic", logoSrc: "/Icons/Financial Services/dealogic.png" },
            { id: "googleTrends", name: "Google Trends", logoSrc: "/Icons/Financial Services/googleTrends.png" },
            { id: "CDP", name: "CDP", logoSrc: "/Icons/Financial Services/CDP.png" },
            { id: "ecovadis", name: "ecovadis", logoSrc: "/Icons/Financial Services/ecovadis.png" },
            { id: "persefoni", name: "Persefoni", logoSrc: "/Icons/Financial Services/persefoni.jpg" },
            { id: "Refinitiv", name: "Refinitiv", logoSrc: "/Icons/Financial Services/Refinitiv.png" },
        ],
    },
    {
        id: "target-screening",
        title: "Target screening",
        description: "Identify the potential targets and sectors in consumer markets attracting investment and the major players with highest M&A activity along with the avg deal value/ volume in specific timeframe",
        logoSrc: "/Icons/Financial Services/sector-scan.png",
        learnMoreUrl: "/Decks/Healthcare/sector-scans.pdf",
        tools: [
            { id: "s&p", name: "S&P Capital IQ", logoSrc: "/Icons/PrimarySec Research/s&p.png" },
            { id: "pitchbook", name: "Pitchbook", logoSrc: "/Icons/Financial Services/pitchbook.png" },
            { id: "crunchbase", name: "Crunchbase", logoSrc: "/Icons/Financial Services/crunchbase.png" },
            { id: "preqin", name: "Preqin", logoSrc: "/Icons/Financial Services/preqin.png" },
            { id: "helixFind", name: "Helix Find", logoSrc: "/Icons/Financial Services/helixFind.png" },
            { id: "tracxn", name: "Tracxn", logoSrc: "/Icons/Financial Services/tracxn.png" },
            { id: "capterra", name: "Capterra", logoSrc: "/Icons/Financial Services/capterra.png" },
            { id: "capterra2", name: "Capterra2", logoSrc: "/Icons/Financial Services/capterra2.png" },
            { id: "trustpilot", name: "Trustpilot", logoSrc: "/Icons/Financial Services/trustpilot.png" },
            { id: "factiva", name: "Factiva", logoSrc: "/Icons/Financial Services/factiva.png" },
            { id: "dealogic", name: "Dealogic", logoSrc: "/Icons/Financial Services/dealogic.png" },
            { id: "googleTrends", name: "Google Trends", logoSrc: "/Icons/Financial Services/googleTrends.png" },
            { id: "CDP", name: "CDP", logoSrc: "/Icons/Financial Services/CDP.png" },
            { id: "ecovadis", name: "ecovadis", logoSrc: "/Icons/Financial Services/ecovadis.png" },
            { id: "persefoni", name: "Persefoni", logoSrc: "/Icons/Financial Services/persefoni.jpg" },
            { id: "Refinitiv", name: "Refinitiv", logoSrc: "/Icons/Financial Services/Refinitiv.png" },
        ],
    },
    {
        id: "esg",
        title: "ESG diligence",
        description: "Conduct deep ESG evaluations across product safety, packaging, SCM, and sustainability to benchmark CP&R targets against peers and assess future regulatory readiness",
        logoSrc: "/Icons/Financial Services/esg.png",
        learnMoreUrl: "/Decks/Healthcare/hc-esg-diagnostics.pdf",
        tools: [
            { id: "CDP", name: "CDP", logoSrc: "/Icons/Financial Services/CDP.png" },
            { id: "msci", name: "MSCI", logoSrc: "/Icons/PrimarySec Research/msci.png" },
            { id: "ecovadis", name: "ecovadis", logoSrc: "/Icons/Financial Services/ecovadis.png" },
            { id: "s&pGlobal", name: "S&P Global", logoSrc: "/Icons/PrimarySec Research/s&pGlobal.png" },
            { id: "persefoni", name: "Persefoni", logoSrc: "/Icons/Financial Services/persefoni.jpg" },
            { id: "helixFind", name: "Helix Find", logoSrc: "/Icons/Financial Services/helixFind.png" },
            { id: "pitchbook", name: "Pitchbook", logoSrc: "/Icons/Financial Services/pitchbook.png" },
            { id: "crunchbase", name: "Crunchbase", logoSrc: "/Icons/Financial Services/crunchbase.png" },
            { id: "preqin", name: "Preqin", logoSrc: "/Icons/Financial Services/preqin.png" },
            { id: "tracxn", name: "Tracxn", logoSrc: "/Icons/Financial Services/tracxn.png" },
            { id: "capterra", name: "Capterra", logoSrc: "/Icons/Financial Services/capterra.png" },
            { id: "capterra2", name: "Capterra2", logoSrc: "/Icons/Financial Services/capterra2.png" },
            { id: "trustpilot", name: "Trustpilot", logoSrc: "/Icons/Financial Services/trustpilot.png" },
            { id: "factiva", name: "Factiva", logoSrc: "/Icons/Financial Services/factiva.png" },
            { id: "dealogic", name: "Dealogic", logoSrc: "/Icons/Financial Services/dealogic.png" },
            { id: "googleTrends", name: "Google Trends", logoSrc: "/Icons/Financial Services/googleTrends.png" },
            { id: "Refinitiv", name: "Refinitiv", logoSrc: "/Icons/Financial Services/Refinitiv.png" },
        ],
    },
]

export const selfServeTools = [
    { name: "FS Tool", link: "", logo: "/Icons/Bain/gxCurve.png", comingSoon: true },
];


export const bainPracticeTeams = [
    { name: "Wealth Management", link: "https://iris.bain.com/content-viewer/244YLD", logo: "/Icons/Bain/fs-bpt-1.png" },
    { name: "Asset Management", link: "https://iris.bain.com/content-viewer/44OYI7", logo: "/Icons/Bain/fs-bpt-2.png" },
    { name: "Liquid Assets", link: "https://tableau.bain.com/#/site/FSPractice/views/WealthManagementmarketinsightsandmarketmaps/Cover?:iid=1", logo: "/Icons/Bain/fs-bpt-3.png" },
    { name: "TSR", link: "https://iris.bain.com/content-viewer/SAUMGS", logo: "/Icons/Bain/payers.png" },
    { name: "US Fund Industry", link: "https://iris.bain.com/content-viewer/XEU083", logo: "/Icons/Bain/fs-bpt-4.png" },
];

export const bainExperts = [
    { name: "Resource 1", link: "https://iris-sites.bain.com/healthcare-life-sciences/?contentTabs=practiceteam" },
    { name: "Resource 2", link: "mailto:Healthcare&LifeSciencesRequests.Global@bain.com" },
];

export const bcnExperts = [
    { initials: "RD", name: "Reuben Dantes", title: "Director, Warsaw BCN", email: "Reuben.Dantes@Bain.com", profile: "/Profiles/ReubenDantes.jpg" },
    { initials: "AS", name: "Ankit Setia", title: "Senior Manager, New Delhi BCN", email: "Ankit.Setia@Bain.com", profile: "/Profiles/AnkitSetia.jpg" },
    { initials: "AA", name: "Akash Arora", title: "Manager, New Delhi BCN", email: "Akash.Arora@Bain.com", profile: "/Profiles/AkashArora.png" },
];

export const otherExperts = [
    { name: "Tool 1", link: "https://pegbrain.bain.dev", description: "TBD", email: "", logo: "" },
    {
        name: "Tool 2", link: "https://compass.bain.com/compass/results?selectedFilterList=%5B%7B%22filterName%22:%22Source%22,%22filterOptions%22:%5B%7B%22title%22:%22Research%22,%22count%22:28,%22selected%22:true%7D%5D,%22filterType%22:%22Source%22,%22displayName%22:%22Source%22,%22selected%22:false,%22visible%22:true,%22default%22:false,%22totalFilterCount%22:10822%7D,%7B%22filterName%22:%22IndustryTopResearch%22,%22filterOptions%22:%5B%7B%22title%22:%22Healthcare%22,%22count%22:28,%22selected%22:true%7D%5D,%22filterType%22:%22MultiSelect%22,%22displayName%22:%22Industry%22,%22selected%22:false,%22visible%22:true,%22default%22:false,%22totalFilterCount%22:28%7D,%7B%22filterName%22:%22EmployeeStatus%22,%22filterOptions%22:%5B%7B%22title%22:%22Active%22,%22count%22:0,%22selected%22:true%7D%5D,%22filterType%22:%22MultiSelect%22,%22displayName%22:%22Status%22,%22displayOrder%22:4,%22selected%22:true,%22visible%22:false,%22default%22:true,%22missingDocCount%22:0,%22totalFilterCount%22:28%7D%5D&searchTerm=Healthcare&pageNumber=1/experts/regulatory",
        description: "TBD", email: "", logo: ""
    }
];
