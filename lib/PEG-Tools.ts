import { Lightbulb, DatabaseIcon } from "lucide-react";

export interface PEGTool {
  title: string;
  description: string;
  info: string;
  icon: any;
  link: string;
  buttonText: string;
  fees: string;
  category: string;
  via?: string;
}


export const PEGtools: PEGTool[] = [
    {
    title: "NOVA",
    description: "SaaS-based survey analytics platform",
    info: "Unlock instant insights with our SaaS-based survey platform with one click, using advanced filtering and segmentation",
    icon: '/Icons/Survey/nova-favicon.png',
    link: "https://nova-qa.339713029942.aws.bain.dev/project/",
    buttonText: "Access NOVA",
    fees: "$2.2K – $3.6K / survey (one time access fees)",
    category: "BCN PEG tools"
  },
  {
    title: "Expert network outreach tool",
    description: "Expert guidance for complex business challenges",
    info: "Launch expert outreach across multiple networks using a single form—simple, fast, centralized",
    icon: '/Icons/Bain/Bain-icon.png',
    link: "https://apps.powerapps.com/play/e/68188270-bfbc-46a6-a77e-578f71be40fb/a/e2809290-cadf-4c86-b5cd-ad66d2f1fcfb?tenantId=eb120e12-65f1-477a-be8c-fe4f65926724&source=portal&hidenavbar=true",
    buttonText: "Access outreach tool",
    fees: "No fees",
    category: "Other PEG tools"
  },
  {
    title: "PEXC",
    description: "Fast, secure access to Bain’s diligence insights",
    info: "Search Bain’s diligence archive and request secure, read-only access to past case materials",
    icon: '/Icons/Bain/Bain-icon.png',
    link: "https://pexc.bain.com/",
    buttonText: "Access PEXC",
    fees: "No fees",
    category: "Other PEG tools"
  },
  {
    title: "PEG Brain",
    description: "Centralized repository for Bain tools and databases",
    info: "A web-based platform designed to help identify the right tools for various use cases during the diligence process",
    icon: '/Icons/Bain/Bain-icon.png',
    link: "https://pegbrain.bain.dev/",
    buttonText: "Access PEG Brain",
    fees: "No fees",
    category: "Other PEG tools"
  },
  {
    title: "Glassdoor",
    description: "Pull Glassdoor reviews and ratings",
    info: "Extract employee reviews and ratings from Glassdoor via Rave for cultural benchmarking",
    icon: '/Icons/Workforce/glassdoor2.png',
    link: "https://rave.bain.dev/glassdoor",
    buttonText: "Access RAVE",
    fees: "No fees",
    category: "Employee reviews",
    via: "/Icons/Workforce/rave.jpg"
  },
  {
    title: "Indeed",
    description: "Capture employee reviews from Indeed",
    info: "Extract employee-generated reviews from Indeed to assess culture and workplace sentiment",
    icon: '/Icons/indeed.webp',
    link: "https://databank.bain.dev/scrapers/3",
    buttonText: "Access tool",
    fees: "Starting at $200",
    category: "Employee reviews",
    via: "/Icons/WebData.png"
  },
  {
    title: "PE Pulse tool",
    description: "Instant fund intelligence",
    info: "Search Bain’s growing repository of Mid-Market PE fund manager intelligence, and quickly navigate through key profile metrics, fund performance, and download detailed Redbook",
    icon: '/Icons/Bain/Bain-icon.png',
    link: "/Decks/PEG Tools/PE Pulse - Fund intelligence_v1.ppsm",
    buttonText: "Run tool",
    fees: "No fees",
    category: "BCN PEG tools"
  },
  {
    title: "PE Pulse live",
    description: "Instant fund intelligence – Tableau dashboard",
    info: "Live PE Pulse Tableau dashboard for on-demand comparison of fund performance across vintages",
    icon: '/Icons/Bain/Bain-icon.png',
    link: "https://us-east-1.online.tableau.com/#/site/casepracticeproduct/views/PEPulseTableauBook_17490198874730/Fundperformancedashboard?:iid=1",
    buttonText: "Access tool",
    fees: "No fees",
    category: "BCN PEG tools"
  },
  {
    title: "Geo coding",
    description: "Convert between addresses and coordinates with ease",
    info: "Convert addresses to lat/long/place ID or reverse geocode coordinates into readable locations",
    icon: '/Icons/Google_Maps_icon.png',
    link: "https://databank.bain.dev/scrapers/16",
    buttonText: "Access Geo coding",
    fees: "Starting at $10",
    category: "Geo scrapers"
  },
  {
    title: "Geo distance",
    description: "Calculate straight-line / driving distance",
    info: "Measure straight-line or driving distances between locations to support routing or logistics",
    icon: '/Icons/Google_Maps_icon.png',
    link: "https://databank.bain.dev/scrapers/15",
    buttonText: "Access Geo distance",
    fees: "Starting at $0",
    category: "Geo scrapers"
  },
  {
    title: "Geo plotting",
    description: "Plot locations on a map or as GeoJSON",
    info: "Visualize location data on an interactive map or export to GeoJSON for further analysis",
    icon: '/Icons/Google_Maps_icon.png',
    link: "https://databank.bain.dev/scrapers/17",
    buttonText: "Access Geo plotting",
    fees: "Starting at $0",
    category: "Geo scrapers"
  },
  {
    title: "Gartner",
    description: "Extract software product reviews from Gartner",
    info: "Collect software reviews from Gartner for sentiment insights and competitor comparisons",
    icon: '/Icons/gartner.webp',
    link: "https://databank.bain.dev/scrapers/1",
    buttonText: "Access tool",
    fees: "Starting at $200",
    category: "Company reviews"
  },
  {
    title: "Amazon (Product details)",
    description: "Collect product details from Amazon listings",
    info: "Extract detailed product data from Amazon pages for tracking, comparison, or analysis",
    icon: '/Icons/amazon.webp',
    link: "https://databank.bain.dev/scrapers/11",
    buttonText: "Access tool",
    fees: "Starting at $200",
    category: "Product reviews"
  },
  {
    title: "Amazon",
    description: "Automated product searches on Amazon",
    info: "Search Amazon by keyword and extract key product details from search result listings",
    icon: '/Icons/amazon.webp',
    link: "https://databank.bain.dev/scrapers/10",
    buttonText: "Access tool",
    fees: "Starting at $200",
    category: "Product search"
  },
  {
    title: "Best Buy",
    description: "Extract product reviews from Best Buy",
    info: "Scrape Best Buy product reviews to support sentiment analysis and competitive insights",
    icon: '/Icons/best-buy.webp',
    link: "https://databank.bain.dev/scrapers/7",
    buttonText: "Access tool",
    fees: "Starting at $200",
    category: "Product reviews"
  },
  {
    title: "Best Buy",
    description: "Automate product searches on Best Buy",
    info: "Automate keyword-based product searches on Best Buy and extract structured details",
    icon: '/Icons/best-buy.webp',
    link: "https://databank.bain.dev/scrapers/6",
    buttonText: "Access tool",
    fees: "Starting at $200",
    category: "Product search"
  },
  {
    title: "Target",
    description: "Extract product reviews from Target",
    info: "Scrape product reviews from Target to gain insight into customer sentiment and feedback",
    icon: '/Icons/target.webp',
    link: "https://databank.bain.dev/scrapers/9",
    buttonText: "Access tool",
    fees: "Starting at $200",
    category: "Product reviews"
  },
  {
    title: "Target",
    description: "Automated product searches on Target",
    info: "Use front-end site search to extract structured product data from Target search results",
    icon: '/Icons/target.webp',
    link: "https://databank.bain.dev/scrapers/8",
    buttonText: "Access tool",
    fees: "Starting at $200",
    category: "Product search"
  },
  {
    title: "Trustpilot",
    description: "Scrape company reviews from Trustpilot",
    info: "Collect Trustpilot reviews to understand brand sentiment and customer experience trends",
    icon: '/Icons/trustpilot.webp',
    link: "https://databank.bain.dev/scrapers/2",
    buttonText: "Access tool",
    fees: "Starting at $200",
    category: "Company reviews"
  },
  {
    title: "Yelp",
    description: "Extract localized reviews and business data from Yelp",
    info: "Scrape reviews and local business data from Yelp profiles to analyze customer feedback",
    icon: '/Icons/yelp.webp',
    link: "https://databank.bain.dev/scrapers/14",
    buttonText: "Access tool",
    fees: "Starting at $200",
    category: "Company reviews"
  },
  {
    title: "HG insights",
    description: "Customer mix analysis using HG Insights",
    info: "Segment customer data by size, geography, and industry to create client-ready outputs",
    icon: '/Icons/HG2.png',
    link: "/Decks/PEG Tools/HG Insights_Sample Output.pdf",
    buttonText: "Access sample output",
    fees: "Starting at $0",
    category: "Customer analysis"
  },
  {
    title: "Google",
    description: "Extract reviews from Google business profiles",
    info: "Scrape location-specific Google reviews for sentiment analysis and local benchmarking",
    icon: '/Icons/google.webp',
    link: "https://databank.bain.dev/scrapers/13",
    buttonText: "Access tool",
    fees: "Starting at $200",
    category: "Company reviews"
  },
];
