import { Landmark, CreditCard, BarChart3, PiggyBank, ShieldCheck, Briefcase, Users, TrendingUp, Activity, ClipboardList } from "lucide-react"

export interface Tool {
    id: string
    name: string
    logoSrc: string
}

export interface FSoffering {
    id: string
    title: string
    description: string
    logoSrc: string
    tools: Tool[]
    learnMoreUrl: string
}

export const FSofferings: FSoffering[] = [
    {
        id: "survey-analytics",
        title: "Survey analytics++",
        description: "Comprehensive end-to-end survey management including design, panel coordination, testing, and delivery automation, tailored for FS sub-sectors like Payments, Insurance, Wealth Management, and specialty players such as brokers and POS providers",
        logoSrc: "/Icons/Financial Services/survey-analytics.png",
        learnMoreUrl: "/Decks/Survey/SurveyProductDeck.pdf",
        tools: [
            { id: "inc-query", name: "Inc-Query", logoSrc: "/Icons/Survey/IncQuery.svg" },
            { id: "intelli-survey", name: "Intellisurvey", logoSrc: "/Icons/Survey/intelliSurvey.png" },
            { id: "dynata", name: "dynata", logoSrc: "/Icons/Survey/dynata.png" },
            { id: "glg", name: "glg", logoSrc: "/Icons/Survey/glg.png" },
            { id: "qualtrics", name: "qualtrics", logoSrc: "/Icons/Survey/qualtrics.svg" },
            { id: "kantar", name: "kantar", logoSrc: "/Icons/Survey/kantar.png" },
            { id: "thirdbridge", name: "thirdbridge", logoSrc: "/Icons/Survey/thirdbridge.jpeg" },
            { id: "roirocket", name: "roirocket", logoSrc: "/Icons/Survey/roirocket.jpeg" },
            { id: "alphasights", name: "alphasights", logoSrc: "/Icons/Survey/alphasights.png" },
        ],
    },
    {
        id: "workforce-analytics",
        title: "Workforce analytics",
        description: "In-depth talent insights through benchmarking, hiring and attrition KPIs, and org. structure analysis, with a focus on FS roles across digital payments, crypto/DeFi, and wealth — including TAM sizing and AUM estimations",
        logoSrc: "/Icons/Financial Services/workforce.png",
        learnMoreUrl: "/Decks/Workforce/BCN PEG Workforce analytics product deck 2025.pdf",
        tools: [
            { id: "aura", name: "Aura", logoSrc: "/Icons/Workforce/aura.png" },
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
        description: "Evaluation of digital competitiveness across marketing and sales channels, specifically for FS verticals such as fintech, insurance, banking, and consumer finance, including diagnostics and social media assessments",
        logoSrc: "/Icons/Financial Services/digital.png",
        learnMoreUrl: "/Decks/Digital/2023 BCN PEG - Digital Diagnostic.pdf",
        tools: [
            { id: "similarweb", name: "similarweb", logoSrc: "/Icons/Digital/similarweb.png" },
            { id: "semrush", name: "semrush", logoSrc: "/Icons/Digital/semrush.png" },
            { id: "netbasequid", name: "netbasequid", logoSrc: "/Icons/Digital/netbasequid.jpg" },
            { id: "sensortower", name: "sensortower", logoSrc: "/Icons/Digital/sensortower.png" },
            { id: "spyfu", name: "spyfu", logoSrc: "/Icons/Digital/spyfu.jpg" },
            { id: "fanpagekarma", name: "fanpagekarma", logoSrc: "/Icons/Digital/fanpagekarma.jpg" },
            { id: "mscience", name: "mscience", logoSrc: "/Icons/Digital/mscience.png" },
            { id: "trajaan", name: "trajaan", logoSrc: "/Icons/Digital/trajaan.png" },
            { id: "googletrends", name: "googletrends", logoSrc: "/Icons/Digital/googletrends.png" },
            { id: "pathmatics", name: "pathmatics", logoSrc: "/Icons/Digital/pathmatics.png" },
            { id: "hypeauditor", name: "hypeauditor", logoSrc: "/Icons/Digital/hypeauditor.png" }
        ],
    },
    // {
    //     id: "industry-PoV",
    //     title: "Industry POV",
    //     description: "Strategic forward-looking perspectives supported by deep secondary research and trend analysis, with FS-specific coverage of tokenization, Web 3.0, peer comparisons, and data-backed guidance on fund strategy",
    //     logoSrc: "/Icons/Financial Services/industry-pov.png",
    //     learnMoreUrl: "/Decks/Healthcare/hc-industry-pov.pdf",
    //     tools: [
    //         { id: "refintiveikon", name: "refintiveikon", logoSrc: "/Icons/Industry POV/refinitiveikon.png" },
    //         { id: "cbinsights", name: "cbinsights", logoSrc: "/Icons/Industry POV/cbinsights.png" },
    //         { id: "s&pcaptialiq", name: "s&pcaptialiq", logoSrc: "/Icons/Industry POV/s&pCapitalIQ.png" },
    //         { id: "dowjonesfactiva", name: "dowjonesfactiva", logoSrc: "/Icons/Industry POV/dowjonesfactiva.png" },
    //         { id: "linkedin", name: "linkedin", logoSrc: "/Icons/Industry POV/linkedin.png" },
    //         { id: "crunchbase", name: "crunchbase", logoSrc: "/Icons/Industry POV/crunchbase.jpg" },
    //         { id: "axco", name: "axco", logoSrc: "/Icons/Industry POV/axco.png" },
    //         { id: "insuranceeurope1", name: "insuranceeurope", logoSrc: "/Icons/Industry POV/insuranceeurope.png" },
    //         { id: "insuranceeurope2", name: "insuranceeurope", logoSrc: "/Icons/Industry POV/insuranceinformationinstitue.png" },
    //         { id: "insuranceeurope3", name: "insuranceeurope", logoSrc: "/Icons/Industry POV/IUMI.png" },
    //     ],
    // },
    {
        id: "sector-scan",
        title: "Sector scans / Target screening",
        description: "Structured support to build customized target lists using a phased screening approach, focused on FS sectors like Payments, Banking, and Fintech — including deep dives into digital banks, niche players, and investment platforms",
        logoSrc: "/Icons/Financial Services/sector-scan.png",
        learnMoreUrl: "/Decks/Healthcare/sector-scans.pdf",
        tools: [
            { id: "preqin", name: "Preqin", logoSrc: "/Icons/Financial Services/preqin.png" },
            { id: "helixFind", name: "Helix Find", logoSrc: "/Icons/Financial Services/helixFind.png" },
            { id: "pitchbook", name: "Pitchbook", logoSrc: "/Icons/Financial Services/pitchbook.png" },
            { id: "crunchbase", name: "Crunchbase", logoSrc: "/Icons/Financial Services/crunchbase.png" },
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
        id: "customer-sentiment",
        title: "Customer sentiment",
        description: "Thematic sentiment analysis using reviews and trend detection powered by AI, applied to FS customer feedback to identify service gaps, perception risks, and improvement opportunities across various financial verticals",
        logoSrc: "/Icons/Financial Services/customer-sentiment.png",
        learnMoreUrl: "/Decks/Financial Services/Most common Customer sentiment Blanks – BCN PEG.pdf",
        tools: [
            { id: "capterra", name: "Capterra", logoSrc: "/Icons/Financial Services/capterra2.png" },
            { id: "trustpilot", name: "Trustpilot", logoSrc: "/Icons/Financial Services/trustpilot.png" },
            { id: "trustRadius", name: "Trust Radius", logoSrc: "/Icons/trustRadius.png" },
            { id: "Caplena", name: "Caplena", logoSrc: "/Icons/Financial Services/capterra.png" },
            { id: "helixFind", name: "Helix Find", logoSrc: "/Icons/Financial Services/helixFind.png" },
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
        id: "disruption-assessment",
        title: "Disruption assessment / Start-up scans",
        description: "Comprehensive scans to assess innovation and disruption trends, with an FS lens on emerging threats and opportunities in InsurTech, WealthTech, tokenization, and shifts across the PE value chain",
        logoSrc: "/Icons/Financial Services/disruption.png",
        learnMoreUrl: "/Decks/Healthcare/hc-industry-pov.pdf",
        tools: [
            { id: "factiva", name: "Factiva", logoSrc: "/Icons/Financial Services/factiva.png" },
            { id: "dealogic", name: "Dealogic", logoSrc: "/Icons/Financial Services/dealogic.png" },
            { id: "googleTrends", name: "Google Trends", logoSrc: "/Icons/Financial Services/googleTrends.png" },
            { id: "helixFind", name: "Helix Find", logoSrc: "/Icons/Financial Services/helixFind.png" },
            { id: "pitchbook", name: "Pitchbook", logoSrc: "/Icons/Financial Services/pitchbook.png" },
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
        id: "esg",
        title: "ESG / Carbon assessment",
        description: "End-to-end ESG diagnostics and benchmarking with peer comparisons, helping FS clients identify high-potential themes and quantify value creation opportunities across segments through ESG strategy and carbon impact assessment",
        logoSrc: "/Icons/Financial Services/esg.png",
        learnMoreUrl: "/Decks/Healthcare/hc-esg-diagnostics.pdf",
        tools: [
            { id: "CDP", name: "CDP", logoSrc: "/Icons/Financial Services/CDP.png" },
            { id: "ecovadis", name: "ecovadis", logoSrc: "/Icons/Financial Services/ecovadis.png" },
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


export const marketMapSector = [
    {
        category: "Banking",
        icon: Landmark,
        items: [
            { text: "Retail banking", bold: false },
            { text: "SME banking", bold: false },
            { text: "Corporate banking", bold: false },
            // { text: "Portfolios/ NPLs", bold: false },
        ],
    },
    {
        category: "Asset / Wealth management",
        icon: ShieldCheck,
        items: [
            { text: "Private banking", bold: false },
            // { text: "Mutual funds/Unit trusts", bold: false },
            // { text: "Traditional Asset Management", bold: false },
            // { text: "Alternative Assets", bold: false },
            // { text: "Retirement Services", bold: false },
            // { text: "Administrative services", bold: false },
            { text: "Retail wealth management", bold: false },
        ],
    },
    {
        category: "Insurance",
        icon: Briefcase,
        items: [
            { text: "Life and annuity", bold: false },
            { text: "Non-life (General and commercial)", bold: false },
            // { text: "Re-insurance", bold: false },
            // { text: "Distribution", bold: false },
            { text: "Insurance brokerage", bold: false },
            // { text: "Warranties", bold: false },
            // { text: "Portfolios", bold: false },
        ],
    },
    {
        category: "Other services",
        icon: Briefcase,
        items: [
            { text: "Trust and corporate services", bold: false },
            { text: "Fund admin", bold: false },
            { text: "Consumer finance", bold: false },
            { text: "Payments", bold: false },
        ],
    },
    // {
    //     category: "Payments & Cards",
    //     icon: CreditCard,
    //     items: [
    //         { text: "Credit card issuers", bold: false },
    //         { text: "Debit/pre-paid card issuers", bold: false },
    //         { text: "Merchant acquirers/ processors", bold: false },
    //         { text: "Card associations/ payment networks", bold: false },
    //         { text: "Gateways", bold: false },
    //         { text: "Remittances", bold: false },
    //         { text: "Alternative payments", bold: false },
    //     ],
    // },
    // {
    //     category: "Capital Markets",
    //     icon: BarChart3,
    //     items: [
    //         { text: "Proprietary trading", bold: false },
    //         { text: "Investment Banking", bold: false },
    //         { text: "Brokerage", bold: false },
    //         { text: "Research", bold: false },
    //         { text: "Securities Exchange", bold: false },
    //     ],
    // },
    // {
    //     category: "Specialty Finance",
    //     icon: PiggyBank,
    //     items: [
    //         { text: "Consumer specialty Finance", bold: false },
    //         { text: "Commercial Lending", bold: false },
    //         { text: "Leasing", bold: false },
    //         { text: "Asset Based Finance (shipping, aircraft, etc)", bold: false },
    //         { text: "Real estate ABF", bold: false },
    //         { text: "Factoring", bold: false },
    //     ],
    // },
];

export const marketMapGeo = [
    {
        category: "Americas",
        items: [
            { text: "Wealth management"},
            { text: "Commercial insurance brokerage"},
            { text: "Corporate banking"},
        ],
    },
    {
        category: "EMEA",
        items: [
            { text: "Wealth management"},
            { text: "Advisor attrition analysis"},
            { text: "Auto lending"},
        ],
    },
]


export const FSofferings1 = [
    {
        title: "Survey Analytics++",
        icon: ClipboardList,
        offering: [
            "End-to-end survey ownership incl. coding/testing",
            "Automated cutter/slide production",
        ],
        examples: [
            "Specialty Insurance, Brokers, POS/terminal providers",
            "Expertise in Payments, Insurance, Wealth",
        ],
        tools: [
            "intellisurvey.png",
            "dynata.png",
            "qualtrics.png",
            "glg.png",
            "kantar.png",
        ],
    },
    {
        title: "Workforce Analytics",
        icon: Users,
        offering: [
            "Benchmarking talent pool, quality, and org. structure",
            "TAM estimation for FS-specific roles",
            "Attrition and hiring KPIs for agents, advisors",
            "Emerging areas like digital payments, NFT, crypto",
        ],
        examples: ["AUM per investment professional"],
        tools: [
            "aura.png",
            "linkedin.png",
            "glassdoor.png",
            "indeed.png",
            "salarycom.png",
        ],
    },
    {
        title: "Digital Analytics",
        icon: Activity,
        offering: [
            "Assessment of digital marketing and sales channels",
            "Brand performance and pricing insights",
            "Social media analytics for crypto exchanges",
        ],
        examples: [
            "Fintech, banking, and consumer FS evaluations",
            "Channel strategy and sales analysis",
        ],
        tools: [
            "similarweb.png",
            "semrush.png",
            "sensorTower.png",
            "spyfu.png",
            "netbase.png",
        ],
    },
    {
        title: "Industry PoV",
        icon: TrendingUp,
        offering: [
            "Forward-looking industry perspectives",
            "POVs on Tokenization and Web 3.0",
            "Fund strategy and peer benchmarking",
            "Trend analysis for risk and opportunity",
        ],
        examples: ["Sweet-spot analysis for FS verticals"],
        tools: [
            "refinitiv.png",
            "cbiinsights.png",
            "crunchbase.png",
            "eikon.png",
            "spcapitaliq.png",
        ],
    },
];

export const selfServeTools = [
    { name: "FS Tool", link: "", logo: "/Icons/Bain/gxCurve.png", comingSoon: true },
];


export const bainPracticeTeams = [
    { name: "Wealth management", link: "https://iris.bain.com/content-viewer/244YLD", logo: "/Icons/Bain/fs-bpt-1.png" },
    { name: "Asset management", link: "https://iris.bain.com/content-viewer/44OYI7", logo: "/Icons/Bain/fs-bpt-2.png" },
    { name: "Liquid assets", link: "https://tableau.bain.com/#/site/FSPractice/views/WealthManagementmarketinsightsandmarketmaps/Cover?:iid=1", logo: "/Icons/Bain/fs-bpt-3.png" },
    { name: "TSR", link: "https://iris.bain.com/content-viewer/SAUMGS", logo: "/Icons/Bain/payers.png" },
    { name: "US fund industry", link: "https://iris.bain.com/content-viewer/XEU083", logo: "/Icons/Bain/fs-bpt-4.png" },
];

export const bainExperts = [
    { name: "Resource 1", link: "https://iris-sites.bain.com/healthcare-life-sciences/?contentTabs=practiceteam" },
    { name: "Resource 2", link: "mailto:Healthcare&LifeSciencesRequests.Global@bain.com" },
];

export const bcnExperts = [
    { initials: "RD", name: "Reuben Dantes", title: "Director, Warsaw BCN", email: "Reuben.Dantes@Bain.com", profile: "/Profiles/ReubenDantes.jpg" },
    { initials: "SG", name: "Sourish Gue", title: "Director, New Delhi BCN", email: "Sourish.Gue@Bain.com", profile: "/Profiles/SourishGue.png" },
    { initials: "HK", name: "Hemant Khosla", title: "Director, New Delhi BCN", email: "hemant.khosla@bain.com", profile: "/Profiles/HemantKhosla.jpg" },
    { initials: "KN", name: "Kavi Nanda", title: "Manager, New Delhi BCN", email: "kavi.nanda@bain.com", profile: "/Profiles/KaviNanda.jpg" },
];

export const otherExperts = [
    { name: "Tool 1", link: "https://pegbrain.bain.dev", description: "TBD", email: "", logo:""  },
    {
        name: "Tool 2", link: "https://compass.bain.com/compass/results?selectedFilterList=%5B%7B%22filterName%22:%22Source%22,%22filterOptions%22:%5B%7B%22title%22:%22Research%22,%22count%22:28,%22selected%22:true%7D%5D,%22filterType%22:%22Source%22,%22displayName%22:%22Source%22,%22selected%22:false,%22visible%22:true,%22default%22:false,%22totalFilterCount%22:10822%7D,%7B%22filterName%22:%22IndustryTopResearch%22,%22filterOptions%22:%5B%7B%22title%22:%22Healthcare%22,%22count%22:28,%22selected%22:true%7D%5D,%22filterType%22:%22MultiSelect%22,%22displayName%22:%22Industry%22,%22selected%22:false,%22visible%22:true,%22default%22:false,%22totalFilterCount%22:28%7D,%7B%22filterName%22:%22EmployeeStatus%22,%22filterOptions%22:%5B%7B%22title%22:%22Active%22,%22count%22:0,%22selected%22:true%7D%5D,%22filterType%22:%22MultiSelect%22,%22displayName%22:%22Status%22,%22displayOrder%22:4,%22selected%22:true,%22visible%22:false,%22default%22:true,%22missingDocCount%22:0,%22totalFilterCount%22:28%7D%5D&searchTerm=Healthcare&pageNumber=1/experts/regulatory",
        description: "TBD", email: "", logo:""
    }
];
