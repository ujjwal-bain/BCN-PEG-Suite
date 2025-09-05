export interface Testimonial {
  id: string
  quote: string
  author: string
  title: string
  company: string
  logoSrc?: string
  industryProduct?: "Industry" | "Product"
  offeringId?: string
}

// General testimonials that can be used across the site
export const generalTestimonials: Testimonial[] = [
  {
    id: "general-1",
    quote: "Just want to reiterate how much we appreciate your hard work throughout the process – you were an integral part to much of the product output that is already leading to major client decisions!",
    author: "Katherine Booth",
    title: "Senior Manager",
    company: "Atlanta",
    logoSrc: "/Profiles/Testimonials/KatherineBooth.jpg",
  },
  {
    id: "general-2",
    quote: "Having BCN team's extensive experience with surveys meant we had someone to liase with Qualtrics, expert networks, survey cutting and survey slide creation.",
    author: "Anuj Shah",
    title: "Senior Manager",
    company: "New York",
    industryProduct: "Product",
    offeringId: "survey-analytics",
    logoSrc: "/Profiles/Testimonials/AnujShah.jpg",
  },
  {
    id: "general-3",
    quote: "Absolutely echoing this, thanks a lot for all the work and the great collaboration! Also the client really loved the output you created throughout (from BBA analyses initially to the new survey output now).",
    author: "Rens Breugelmans",
    title: "Senior Manager",
    company: "Amsterdam",
    industryProduct: "Product",
    offeringId: "survey-analytics",
    logoSrc: "/Profiles/Testimonials/RensBreugelmans.jpg",
  },
  // {
  //   id: "general-4",
  //   quote: "Effective coordination, High quality feedback on questionnaire draft, Quick lead times incl. communication on next steps / outlook etc.",
  //   author: "Mégane Muehlestein",
  //   title: "Senior Manager",
  //   company: "Zurich",
  // },
  {
    id: "general-5",
    quote: "Thank you very much for the fantastic support over the last weeks. We had a great workshop with the client today and they were really impressed by the level of depth on all the consumer survey materials.",
    author: "Marco Luetolf",
    title: "Senior Manager",
    company: "Zurich",
    industryProduct: "Product",
    offeringId: "survey-analytics",
    logoSrc: "/Profiles/Testimonials/MarcoLuetolf.jpg",
  },
  {
    id: "general-6",
    quote: "Thank you again so much for all your work on this project! It was certainly a trickier one with challenging survey cuts, but we landed some really powerful insights with the client during the final update and drove (and continue to drive) much of their thinking of this asset. It truly would not have been possible without your efforts, so thank you for asking thoughtful questions and putting together good work. We appreciated the help – could not have done it without you!",
    author: "Kara Junttila",
    title: "Senior Manager",
    company: "San Francisco",
    industryProduct: "Product",
    offeringId: "survey-analytics",
    logoSrc: "/Profiles/Testimonials/KaraJunttila.jpg",
  },
  // {
  //   id: "general-7",
  //   quote: "Thank you so much team! This is a massive help for the practice and for all the cases we are doing.",
  //   author: "Stephen Nightingale",
  //   title: "Associate Partner",
  //   company: "New York",
  // },
  {
    id: "general-8",
    quote: "I just wanted to send a quick note to thank you for such thorough and well set out analysis on a complex cube and set of asks. You’ve really helped us get at some core insights to the case outcome and even better – the workbook is set out and packaged 100% client ready! Thanks...also for such great teaming across the case x BCN team.",
    author: "Byron Robinson",
    title: "Senior Manager",
    company: "London",
    logoSrc: "/Profiles/Testimonials/ByronRobinson.jpg",
  },
  // {
  //   id: "general-9",
  //   quote: "Thank you so much for all the support over the last few weeks – really amazing insights from the Nielsen and great collaboration..!!",
  //   author: "Holly Phillips",
  //   title: "Senior Manager",
  //   company: "London",
  // },
  // {
  //   id: "general-10",
  //   quote: "This is a fantastic turnaround. I really appreciate the team’s push to get us to this stage in 3 days”",
  //   author: "Shikha Dassie",
  //   title: "Practice Director",
  //   company: "Boston",
  // },
  // {
  //   id: "general-12",
  //   quote: "Thanks manager for the great work - please pass on our thanks to the team also!",
  //   author: "Sophie Stephens",
  //   title: "Associate Partner",
  //   company: "London",
  // },
  {
    id: "general-13",
    quote: "I wanted to thank each of you for the fantastic work you have been driving and the great client momentum you have been building, it is truly impressive and all of this would not be possible without you!",
    author: "Mathieu Dangotte",
    title: "Partner",
    company: "Amsterdam",
    logoSrc: "/Profiles/Testimonials/MathieuDangotte.jpg",
  },
  // {
  //   id: "general-14",
  //   quote: "Just wanted to let you know that our client loved the M&A work you did on the Project last week. They advised that it was hugely helpful, and also loads better than the far more extensive M&A work they had asked vendor to do, and they were accordingly wondering how they could show it to vendor to help reset the quality bar there! So just to reiterate our huge thanks for all your excellent work here and so much value delivered in just 2 days!",
  //   author: "Akansha Arya",
  //   title: "Associate Partner",
  //   company: "London",
  // },
  // {
  //   id: "general-15",
  //   quote: "Just wanted to say a big thank you for all of the work over the last week. We had a good readout with the fund last night and were able to share and discuss a lot of the workforce and M&A slides that you helped us deliver – they really appreciated the level of detail we could share and think this helped build a lot of confidence in the work we have been doing! So thank you for the big push and big impact this has had on our client!",
  //   author: "Stuart Graham",
  //   title: "Associate Partner",
  //   company: "South Africa - Rand",
  //   industryProduct: "Product",
  //   offeringId: "workforce-analytics",
  // },
  // {
  //   id: "general-16",
  //   quote: "Thank you so much to you and the team for all your support here. As always, an absolutely pleasure to work with the BCN – huge thanks for the great work here.",
  //   author: "Akansha Arya",
  //   title: "Associate Partner",
  //   company: "London",
  // },
  // {
  //   id: "general-17",
  //   quote: "BCN really took a lot of work of our plate and helped us deliver the right insights to the client. I loved how they proactively managed the process, making it a very effective collaboration",
  //   author: "Rens Breugelmans",
  //   title: "Senior Manager",
  //   company: "Amsterdam",
  // },
  // {
  //   id: "general-18",
  //   quote: "Indeed, thank you so much team. Really great to get to the level of insights and have such an integrated team.",
  //   author: "Robert Howgego",
  //   title: "Partner",
  //   company: "South Africa - Rand",
  // },
  // {
  //   id: "general-19",
  //   quote: "Delivered in less time than initially expected. Great quality work.",
  //   author: "Eduard Torrella",
  //   title: "Associate Partner",
  //   company: "Madrid",
  // },
  // {
  //   id: "general-20",
  //   quote: "Very detailed analysis with high accuracy in mapping all the relevant features and UI/UX screens.",
  //   author: "Rahul Prasad",
  //   title: "Associate Partner",
  //   company: "Seoul",
  //   industryProduct: "Product",
  //   offeringId: "digial",
  // },
  // {
  //   id: "general-21",
  //   quote: "I’m a fan of the BCN team. I admire detailed analysis, clear alignment, insightful hypothesis-driven approach, and consistent willingness to help.",
  //   author: "Gleb Krikun",
  //   title: "Expert Manager",
  //   company: "London",
  // },
  // {
  //   id: "general-22",
  //   quote: "Thank you very much for the quick turnaround. Really appreciate all the team being there and efficient when we need the most slides look great!",
  //   author: "Sena Kaya",
  //   title: "Consultant",
  //   company: "Dubai",
  // },
  {
    id: "general-23",
    quote: "Thanks a lot for sharing the final update. Also all slides were well received. You provided great support on this case and I wanted to say THANK YOU to the whole team! Looking forward to working with you in the future again.",
    author: "Simon Cecetti",
    title: "Consultant",
    company: "Frankfurt",
    logoSrc: "/Profiles/Testimonials/SimonCecetti.jpg",
  },
  // {
  //   id: "general-24",
  //   quote: "Just wanted to thank you again for the excellent work. We’ve just finished sliding the new cuts, no comments.",
  //   author: "Jenny Premoli",
  //   title: "Consultant",
  //   company: "London",
  //   industryProduct: "Product",
  //   offeringId: "survey-analytics",
  // },
  // {
  //   id: "general-25",
  //   quote: "Yeah guys you really did I noticed that, hats off to you wizards!",
  //   author: "Adil Patwary",
  //   title: "Manager",
  //   company: "Dubai",
  // },
  // {
  //   id: "general-26",
  //   quote: "Hi team! Meeting went really well. Thank you so much for your support and contribution! The world map and Mekko were very well received.",
  //   author: "Winny Mulyasasmita",
  //   title: "Consultant",
  //   company: "Dubai",
  // },
  {
    id: "general-27",
    quote: "Thanks for the 1 week support. It was short but quite dense work. We had a great meeting with the client today. They were very satisfied with the work. Thanks",
    author: "Jaewon K",
    title: "Associate Partner",
    company: "Seoul",
    logoSrc: "/Profiles/Testimonials/JaewonK.jpg",
  },
  {
    id: "general-28",
    quote: "Just wanted to say THANK YOU to you and the rest of the team. We shared both the PPT and backup Excel data with the client and they found it very useful prepping for their company presentation 😊 Many thanks again for your good work!",
    author: "Hanh Nguyen",
    title: "Expert Associate Partner",
    company: "Tokyo",
    logoSrc: "/Profiles/Testimonials/HanhNguyen.jpg",
  },
  // {
  //   id: "general-29",
  //   quote: "Hi team, Thank you! You’re the best. This is great stuff; I really appreciate you all plugging in on something new and nailing it.",
  //   author: "Hal Baseman",
  //   title: "Associate Partner",
  //   company: "Washington DC",
  // },
  // {
  //   id: "general-30",
  //   quote: "So appreciate your help on this!.... Thank you for the detailed thinking and questions – it’s a huge help…given our short week and tight timeline pre-bid!",
  //   author: "Tom Oliphant",
  //   title: "Associate Partner",
  //   company: "San Francisco",
  // },
  // {
  //   id: "general-31",
  //   quote: "Thanks for sharing the slides – looks great! Drivers below for the government piece also look good.",
  //   author: "Akash Trivedi",
  //   title: "Associate Partner",
  //   company: "Riyadh",
  // },
  // {
  //   id: "general-32",
  //   quote: "We had the interim update last week and board meeting today and the clients were very pleased with the survey output – THANK YOU!!",
  //   author: "Wilson Soh",
  //   title: "Manager",
  //   company: "Singapore",
  //   industryProduct: "Product",
  //   offeringId: "survey-analytics",
  // },
  // {
  //   id: "general-33",
  //   quote: "Thanks a bunch for the help on this DD. Especially given the crunched timelines, your help was invaluable.",
  //   author: "Aditya Muralidhar",
  //   title: "Associate Partner",
  //   company: "New Delhi",
  // },
]

export function getTestimonialsByIndustryProduct(industryProduct: string): Testimonial[] {
  switch (industryProduct) {
    case "Industry":
      return [
        ...generalTestimonials.filter(t => t.industryProduct === "Industry"),
      ]
    case "Product":
      return [
        ...generalTestimonials.filter(t => t.industryProduct === "Product"),
      ]
    default:
      return generalTestimonials
  }
}

export function getTestimonialsByOffering(offeringId: string): Testimonial[] {
  switch (offeringId) {
    default:
      return generalTestimonials
  }
}
