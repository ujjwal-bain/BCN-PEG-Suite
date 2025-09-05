// Healthcare Offerings Data Structure

export interface Offering {
    id: string
    title: string
    description: string
    logoSrc: string
    externalLink?: string
}

export interface SubCategory {
    id: string
    title: string
    description: string
    logoSrc: string
    offerings: Offering[]
    externalLink?: string
}

export interface Category {
    id: string
    title: string
    description: string
    logoSrc: string
    subCategories: SubCategory[]
    externalLink?: string
}

export const healthcareOfferings: Category[] = [
    {
        id: "due-diligence",
        title: "Due diligence",
        description: "Healthcare diligence across the value chain includes Healthcare Providers, Suppliers, and Payers",
        logoSrc: "/icons/due-diligence.svg",
        subCategories: [
            {
                id: "providers-due-diligence",
                title: "Providers due diligence",
                description: "Insights on healthcare providers, covering market potential, operations, workforce, and growth opportunities.",
                logoSrc: "/icons/financial-due-diligence.svg",
                offerings: [
                    {
                        id: "provider-quick-diagnostic",
                        title: "Provider quick diagnostic",
                        description: "Accelerated outside-in view of provider business, operational capabilities (provider network, TAs), competition (benchmarking) and value creation (growth strategy)",
                        logoSrc: "/icons/financial-statement.svg",
                        externalLink: "/Decks/Healthcare/Sample DD Deck.pdf#page=17",
                    },
                    {
                        id: "operational-dd-toolkit",
                        title: "Operational due diligence toolkit",
                        description: "Operational Due Diligence toolkit for healthcare providers covering clinical and operational risks, physical/digital infrastructure, and performance improvement metrics (commercial excellence, cost optimisation)",
                        logoSrc: "/icons/quality-earnings.svg",
                        externalLink: "/Decks/Healthcare/Sample DD Deck.pdf#page=50",
                    },
                    {
                        id: "patient-surveys",
                        title: "Patient / Physician surveys, interviews",
                        description: "End-to-end Patient Survey Analytics to gauge sentiment, Physician Interviews for areas of strength / opportunity",
                        logoSrc: "/icons/working-capital.svg",
                        externalLink: "/Decks/Healthcare/hc-surveys.pdf",
                    },
                    {
                        id: "workforce-analytics",
                        title: "Workforce analytics",
                        description: "Identify talent optimization opportunities by benchmarking target’s organisation structure to peers",
                        logoSrc: "/icons/cash-flow.svg",
                        externalLink: "/Decks/Healthcare/workforce-analytics.pdf",
                    },
                    {
                        id: "sector-scans",
                        title: "Sector scans / Target screening",
                        description: "Customized target list of attractive players for potential acquisitions in HC sub-sectors to expand to new markets, enhance offerings, etc.",
                        logoSrc: "/icons/debt-structure.svg",
                        externalLink: "/Decks/Healthcare/sector-scans.pdf",
                    },
                ],
            },
            {
                id: "suppliers-due-diligence",
                title: "Suppliers due diligence",
                description: "Insights on pharmaceuticals, life sciences, and med-tech businesses, covering market potential, licensing, drug deals, ESG impact, and industry trends",
                logoSrc: "/icons/commercial-due-diligence.svg",
                offerings: [
                    {
                        id: "supplier-quick-diagnostic",
                        title: "Supplier quick diagnostic",
                        description: "Accelerated outside-in view of target’s business, operations, competition and value creation",
                        logoSrc: "/icons/market-sizing.svg",
                        externalLink: "/Decks/Healthcare/Sample DD Deck.pdf#page=17",
                    },
                    {
                        id: "loss-of-excl",
                        title: "Loss of exclusivity / Gx curve analysis",
                        description: "Analysis of volume and price development of originator drugs after LoE and generic entrants",
                        logoSrc: "/icons/competitive-landscape.svg",
                        externalLink: "/Decks/Healthcare/Sample DD Deck.pdf#page=29",
                    },
                    {
                        id: "in-licensing-opportunity",
                        title: "In-licensing opportunity",
                        description: "Identification and evaluation of potential drug candidates or technologies for licensing",
                        logoSrc: "/icons/customer-analysis.svg",
                        externalLink: "/Decks/Healthcare/Sample DD Deck.pdf#page=35",
                    },
                    {
                        id: "drug-deals-discovery",
                        title: "Drug deals discovery",
                        description: "Evaluating M&As, licensing agreements, and partnerships to uncover strategic opportunities and trends",
                        logoSrc: "/icons/pricing-strategy.svg",
                        externalLink: "/Decks/Healthcare/Sample DD Deck.pdf#page=38",
                    },
                    {
                        id: "smo2",
                        title: "Site management organizations growth assessment",
                        description: "Evaluation of expansion and performance of clinical trial Site Management Organizations",
                        logoSrc: "/icons/growth-opportunities.svg",
                        externalLink: "/Decks/Healthcare/Sample DD Deck.pdf#page=44",
                    },
                    {
                        id: "patient-surveys2",
                        title: "Patient / Physician surveys, interviews",
                        description: "End-to-end Patient Survey Analytics to gauge sentiment, Physician Interviews for areas of strength / opportunity",
                        logoSrc: "/icons/working-capital.svg",
                        externalLink: "/Decks/Healthcare/hc-surveys.pdf",
                    },
                    {
                        id: "esg-diagnostic",
                        title: "ESG diagnostic / Carbon assessment",
                        description: "Understand materiality of ESG issues in the industry,and benchmark target and peers’ capabilities acrosskey themes",
                        logoSrc: "/icons/growth-opportunities.svg",
                        externalLink: "/Decks/Healthcare/hc-esg-diagnostics.pdf",
                    },
                    {
                        id: "industry-pov",
                        title: "Industry PoV (Including primary research)",
                        description: "Perspective on various sub-sectors/companies, viaprimary and secondary research, start-up/ VC funding scan,incl. outlook on market disruption and innovation",
                        logoSrc: "/icons/growth-opportunities.svg",
                        externalLink: "/Decks/Healthcare/hc-industry-pov.pdf",
                    },
                ],
            },
            {
                id: "payers-due-diligence",
                title: "Payers due diligence",
                description: "Insights on health insurance providers, covering customer sentiment, workforce optimization, market trends, competitor benchmarking, and acquisition opportunities",
                logoSrc: "/icons/operational-due-diligence.svg",
                offerings: [
                    {
                        id: "member-Surveys",
                        title: "Member / Intermediary surveys",
                        description: "Survey analytics to gauge customer sentiment, areas of opportunities and value proposition for the target",
                        logoSrc: "/icons/operational-efficiency.svg",
                        externalLink: "/Decks/Healthcare/hc-surveys.pdf",
                    },
                    {
                        id: "workforce-analytics2",
                        title: "Workforce analytics",
                        description: "Identify talent optimization opportunities by benchmarking target’s org. structure to peers",
                        logoSrc: "/icons/supply-chain.svg",
                        externalLink: "/Decks/Healthcare/workforce-analytics.pdf",
                    },
                    {
                        id: "industry pov2",
                        title: "Industry PoV (Including primary research)",
                        description: "Insights on sectors/companies via research, VC funding, market disruption, and innovation",
                        logoSrc: "/icons/it-systems.svg",
                        externalLink: "/Decks/Healthcare/hc-industry-pov.pdf",
                    },
                    {
                        id: "sector-scans2",
                        title: "Sector scans / Target screening",
                        description: "Custom list of attractive HC sub-sector acquisition players to expand markets and enhance offerings",
                        logoSrc: "/icons/human-resources.svg",
                        externalLink: "/Decks/Healthcare/sector-scans.pdf",
                    },
                    {
                        id: "competitor-benchmarking",
                        title: "Competitor benchmarking",
                        description: "Comparing target and competitor insurance offerings to identify relative position and areas of improvement",
                        logoSrc: "/icons/regulatory-compliance.svg",
                    },
                ],
            },
        ],
    },
]

export const categories = [
    { name: "Pharmaceuticals and biotechnology", link: "https://iris-sites.bain.com/healthcare-life-sciences/pharmaceuticals-biotechnology/?contentTabs=home", logo: "/Icons/Bain/biotech.png" },
    { name: "Med tech", link: "https://iris-sites.bain.com/healthcare-life-sciences/med-tech/?contentTabs=home", logo: "/Icons/Bain/medtech.png" },
    { name: "Healthcare providers", link: "https://iris-sites.bain.com/healthcare-life-sciences/healthcare-providers/?contentTabs=home", logo: "/Icons/Bain/providers.png" },
    { name: "Healthcare payers", link: "https://iris-sites.bain.com/healthcare-life-sciences/healthcare-payers/?contentTabs=home", logo: "/Icons/Bain/payers.png" },
    { name: "Healthcare services", link: "https://iris-sites.bain.com/healthcare-life-sciences/healthcare-services/?contentTabs=home", logo: "/Icons/Bain/hc-life.png" },
    { name: "Gx curve / Loss of exclusivity model", link: "", logo: "/Icons/Bain/gxCurve.png", comingSoon: true },
];

export const bainExperts = [
    { name: "Meet the team", link: "https://iris-sites.bain.com/healthcare-life-sciences/?contentTabs=practiceteam" },
    { name: "Contact the team", link: "mailto:Healthcare&LifeSciencesRequests.Global@bain.com" },
];

export const bcnExperts = [
    { initials: "MM", name: "Milan Maheshwari", title: "Senior Manager, New Delhi BCN", email: "milan.maheshwari@bain.com", profile: "/Profiles/MilanMah.png" },
    { initials: "SS", name: "Sumanyu Sawhney", title: "Senior Manager, Warsaw BCN", email: "sumanyu.sawhney@bain.com", profile: "/Profiles//SumanyuSawhney.png" },
];

export const otherExperts = [
    { name: "PEG Brain by RDS", link: "https://pegbrain.bain.dev", description: "Includes MSCI Healthcare Diagnostic, Frost and Sullivan research, KLAS Research, and more" },
    {
        name: "Healthcare research tools on compass", link: "https://compass.bain.com/compass/results?selectedFilterList=%5B%7B%22filterName%22:%22Source%22,%22filterOptions%22:%5B%7B%22title%22:%22Research%22,%22count%22:28,%22selected%22:true%7D%5D,%22filterType%22:%22Source%22,%22displayName%22:%22Source%22,%22selected%22:false,%22visible%22:true,%22default%22:false,%22totalFilterCount%22:10822%7D,%7B%22filterName%22:%22IndustryTopResearch%22,%22filterOptions%22:%5B%7B%22title%22:%22Healthcare%22,%22count%22:28,%22selected%22:true%7D%5D,%22filterType%22:%22MultiSelect%22,%22displayName%22:%22Industry%22,%22selected%22:false,%22visible%22:true,%22default%22:false,%22totalFilterCount%22:28%7D,%7B%22filterName%22:%22EmployeeStatus%22,%22filterOptions%22:%5B%7B%22title%22:%22Active%22,%22count%22:0,%22selected%22:true%7D%5D,%22filterType%22:%22MultiSelect%22,%22displayName%22:%22Status%22,%22displayOrder%22:4,%22selected%22:true,%22visible%22:false,%22default%22:true,%22missingDocCount%22:0,%22totalFilterCount%22:28%7D%5D&searchTerm=Healthcare&pageNumber=1/experts/regulatory",
        description: "Includes links to IQVIA Analytics, EvaluatePharma, GlobalData Medical"
    },
    // { name: "Expert finder", link: expertFinderLink, description: "Directs to Bain experts on Healthcare and PE" },
];

