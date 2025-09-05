export interface ContactPerson {
    id: string
    name: string
    initials: string
    toEmail: string
    ccEmail?: string
    region: "Americas" | "EMEA" | "APAC" | "MENA"
}

export interface Company {
    name: string
    logo: string
    logoHeight: number
    expertise: string
    contacts: ContactPerson[]
}

export const contactData: Company[] = [
    {
        name: "IncQuery",
        logo: "/Icons/Survey/incquery.svg",
        logoHeight: 25,
        expertise: "B2B/B2C",
        contacts: [
            {
                id: "incquery-emea-1",
                name: "Ionnis Zoulias",
                initials: "IZ",
                toEmail: "ioannis@incquery.com",
                region: "EMEA",
            },
            {
                id: "incquery-emea-2",
                name: "Sam Gullotti",
                initials: "SG",
                toEmail: "sam@incquery.com",
                region: "EMEA",
            },
        ],
    },
    {
        name: "Dialectica",
        logo: "/Icons/Survey/Dialectica.png",
        logoHeight: 23,
        expertise: "B2B/B2C",
        contacts: [
            {
                id: "dialectica-emea",
                name: "Sam Gullotti",
                initials: "SG",
                toEmail: "surveys@dialecticanet.com",
                ccEmail: "stheodoridou@dialecticanet.com",
                region: "EMEA",
            },
        ],
    },
    {
        name: "Azure",
        logo: "/Icons/Survey/azure.png",
        logoHeight: 30,
        expertise: "B2B/B2C",
        contacts: [
            {
                id: "azure-emea",
                name: "Glen Collins",
                initials: "GC",
                toEmail: "bain.azure@azureknowledge.com",
                ccEmail: "glen.collins@azureknowledge.com",
                region: "EMEA",
            },
        ],
    },
    {
        name: "Bell and Holmes",
        logo: "/Icons/Survey/bellHolmes.png",
        logoHeight: 40,
        expertise: "B2B/B2C",
        contacts: [
            {
                id: "bh-emea1",
                name: "Wilhelm Rabenstein",
                initials: "WR",
                toEmail: "requests@bellandholmes.com",
                ccEmail: "wilhelm.rabenstein@bellandholmes.com",
                region: "EMEA",
            },
            {
                id: "bh-emea2",
                name: "Jie Liu",
                initials: "JL",
                toEmail: "requests@bellandholmes.com",
                ccEmail: "jie.liu@bellandholmes.com",
                region: "EMEA",
            },
        ],
    },
    {
        name: "JasperColin",
        logo: "/Icons/Survey/jasperColin2.png",
        logoHeight: 35,
        expertise: "B2B/B2C",
        contacts: [
            {
                id: "jaspercolin-emea",
                name: "Kunika Pandey",
                initials: "KP",
                toEmail: "sales@jaspercolin.com",
                ccEmail: "Kunika.Pandey@jaspercolin.com",
                region: "EMEA",
            },
            {
                id: "jaspercolin-americas",
                name: "Quincy Brown",
                initials: "QB",
                toEmail: "sales@jaspercolin.com",
                ccEmail: "Quincy.Brown@jaspercolin.com",
                region: "Americas",
            },
        ],
    },
    {
        name: "Innovate MR",
        logo: "/Icons/Survey/innovateMR2.png",
        logoHeight: 30,
        expertise: "B2B/B2C",
        contacts: [
            {
                id: "innovatemr-emea",
                name: "Mari Smith",
                initials: "MS",
                toEmail: "centralbids@innovatemr.com",
                ccEmail: "mari@innovatemr.com",
                region: "EMEA",
            },
        ],
    },
    {
        name: "Dynata",
        logo: "/Icons/Survey/dynata.png",
        logoHeight: 40,
        expertise: "B2C",
        contacts: [
            {
                id: "dynata-emea",
                name: "Deyan Doynov",
                initials: "DD",
                toEmail: "Bain.EMEA@Dynata.com",
                ccEmail: "Deyan.Doynov@Dynata.com",
                region: "EMEA",
            },
            {
                id: "dynata-americas",
                name: "Anastacia Schuttenberg",
                initials: "AS",
                toEmail: "Anastacia.Schuttenberg@Dynata.com",
                region: "Americas",
            },
        ],
    },
    {
        name: "ROI",
        logo: "/Icons/Survey/roirocket2.png",
        logoHeight: 40,
        expertise: "B2C",
        contacts: [
            {
                id: "roi-emea",
                name: "Irina Bukovska",
                initials: "IB",
                toEmail: "bain.surveys@roirocket.com",
                ccEmail: "irina.bukovska@roirocket.com",
                region: "EMEA",
            },
            {
                id: "roi-americas",
                name: "Noah Seaton",
                initials: "NS",
                toEmail: "bain.surveys@roirocket.com",
                ccEmail: "noah.seton@roirocket.com",
                region: "Americas",
            },
        ],
    },
    {
        name: "Nielsen IQ",
        logo: "/Icons/PrimarySec Research/niq.png",
        logoHeight: 30,
        expertise: "B2C",
        contacts: [
            {
                id: "nielseniq-emea1",
                name: "Raunak Dutta",
                initials: "RD",
                toEmail: "Raunak.Dutta@nielseniq.com",
                region: "EMEA",
            },
            {
                id: "nielseniq-emea2",
                name: "Akshat A. Srivastava",
                initials: "AS",
                toEmail: "Akshat.A.Srivastava@nielseniq.com",
                region: "EMEA",
            },
        ],
    },
    {
        name: "Kantar",
        logo: "/Icons/PrimarySec Research/kantar.png",
        logoHeight: 25,
        expertise: "B2C",
        contacts: [
            {
                id: "kantar-emea1",
                name: "Thomas Witzer",
                initials: "TW",
                toEmail: "BainKantarEU@kantar.com",
                ccEmail: "Thomas.Witzer@kantar.com",
                region: "EMEA",
            },
            {
                id: "kantar-emea2",
                name: "Zoe Smart",
                initials: "ZS",
                toEmail: "BainKantarUK@kantar.com",
                ccEmail: "Zoe.Smart@kantar.com",
                region: "EMEA",
            },
            {
                id: "kantar-mena",
                name: "Yusri AbuRas",
                initials: "YA",
                toEmail: "ProfilesRFQ_MENAP@kantar.com",
                ccEmail: "Yusri.AbuRas@kantar.com",
                region: "MENA",
            },
        ],
    },
    {
        name: "Ipsos",
        logo: "/Icons/Survey/ipsos2.png",
        logoHeight: 45,
        expertise: "B2C",
        contacts: [
            {
                id: "ipsos-emea",
                name: "Lamont Lambert",
                initials: "LL",
                toEmail: "Lamont.Lambert@ipsos.com",
                region: "EMEA",
            },
        ],
    },
    {
        name: "Thirdbridge",
        logo: "/Icons/Survey/thirdBridge2.jpeg",
        logoHeight: 45,
        expertise: "B2B",
        contacts: [
            {
                id: "thirdbridge-emea1",
                name: "Mckenna Folks",
                initials: "MF",
                toEmail: "surveys@thirdbridge.com",
                ccEmail: "mckenna.folks@thirdbridge.com",
                region: "EMEA",
            },
            {
                id: "thirdbridge-emea2",
                name: "Emily Tyrrel",
                initials: "ET",
                toEmail: "surveys@thirdbridge.com",
                ccEmail: "emily.tyrrell@thirdbridge.com",
                region: "EMEA",
            },
            {
                id: "thirdbridge-emea3",
                name: "Melanie Vladimirschi",
                initials: "MV",
                toEmail: "surveys@thirdbridge.com",
                ccEmail: "melanie.vladimirschi@thirdbridge.com",
                region: "EMEA",
            },
        ],
    },
    {
        name: "Alphasights",
        logo: "/Icons/Survey/alphaSights2.png",
        logoHeight: 40,
        expertise: "B2B",
        contacts: [
            {
                id: "Alphasights-emea",
                name: "George Carrie",
                initials: "GC",
                toEmail: "Bain@Alphasights.com",
                ccEmail: "george.carrie@alphasights.com",
                region: "EMEA",
            },
        ],
    },
    {
        name: "GLG",
        logo: "/Icons/Survey/glg.png",
        logoHeight: 35,
        expertise: "B2B",
        contacts: [
            {
                id: "glg-emea",
                name: "Zion Tavares",
                initials: "ZT",
                toEmail: "ztavares@glgroup.com",
                region: "EMEA",
            },
            {
                id: "glg-americas",
                name: "Sam McCoy",
                initials: "SM",
                toEmail: "smccoy@glgroup.com",
                region: "Americas",
            },
        ],
    },
    {
        name: "Explorare",
        logo: "/Icons/Survey/explorare.png",
        logoHeight: 40,
        expertise: "B2B",
        contacts: [
            {
                id: "azure-emea1",
                name: "Michael Bertram",
                initials: "MB",
                toEmail: "bertram@explorare.de",
                region: "EMEA",
            },
            {
                id: "azure-emea2",
                name: "Fabian Kuhlmann",
                initials: "FK",
                toEmail: "kuhlmann@explorare.de",
                region: "EMEA",
            },
        ],
    },
    {
        name: "FFind",
        logo: "/Icons/Survey/ffind.png",
        logoHeight: 35,
        expertise: "B2B",
        contacts: [
            {
                id: "ffind-emea1",
                name: "Alessandro Imborgia",
                initials: "AI",
                toEmail: "c.castello@ffind.com",
                region: "EMEA",
            },
            {
                id: "ffind-emea2",
                name: "Chiara Castello",
                initials: "AI",
                toEmail: "a.imborgia@ffind.com",
                region: "EMEA",
            },
        ],
    },
    {
        name: "M3",
        logo: "/Icons/Survey/m3.png",
        logoHeight: 35,
        expertise: "Healthcare - Doctors/Nurses/Patients",
        contacts: [
            {
                id: "m3-emea",
                name: "Paul Morgan",
                initials: "PM",
                toEmail: "PMorgan@M3Global.com",
                region: "EMEA",
            },
            {
                id: "m3-apac",
                name: "Laxmisha H N",
                initials: "LN",
                toEmail: "LaxmishaHN@m3global.com",
                region: "APAC",
            },
        ],
    },
    {
        name: "Sermo",
        logo: "/Icons/Survey/sermo.png",
        logoHeight: 33,
        expertise: "Healthcare - Doctors/Nurses/Patients",
        contacts: [
            {
                id: "sermo-emea",
                name: "James Cain",
                initials: "JC",
                toEmail: "james.cain@SERMO.com",
                region: "EMEA",
            },
            {
                id: "sermo-apac",
                name: "Akash Degan",
                initials: "AD",
                toEmail: "akash.degan@sermo.com",
                region: "APAC",
            },
        ],
    },
];
