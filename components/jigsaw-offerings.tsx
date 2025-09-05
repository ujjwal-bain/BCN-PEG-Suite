'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface Offering {
  id: string;
  title: string;
  description: string;
  url: string;
  size: number; // Percentage of container space (e.g., 25 for 25%)
  colorClass: string;
}

const sectors: Offering[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Innovative patient-centric solutions and healthcare analytics.',
    url: '/industries/healthcare',
    size: 39, // Takes up top-left quarter
    colorClass: 'bg-blue-100'
  },
  {
    id: 'financial',
    title: 'Financial services',
    description: 'Risk modeling and portfolio optimization solutions.',
    url: '/industries/financial-services',
    size: 20, // Takes up bottom-right quarter
    colorClass: 'bg-green-100'
  },
  {
    id: 'retail',
    title: 'Consumer products / Retail',
    description: 'Retail analytics and consumer behavior insights.',
    url: '/industries/consumer-products',
    size: 20, // Takes up top-right quarter
    colorClass: 'bg-yellow-100'
  },
  {
    id: 'technology',
    title: 'Technology',
    description: 'Digital transformation and tech sector insights.',
    url: '/industries/technology',
    size: 20, // Takes up bottom-left quarter
    colorClass: 'bg-indigo-100'
  },
];

const products: Offering[] = [
  {
    id: 'survey',
    title: 'Survey analytics',
    description: 'Deep-dive consumer survey insights and analysis.',
    url: '/capabilities/survey-analytics',
    size: 40, // Large top-left section
    colorClass: 'bg-blue-200'
  },
  {
    id: 'workforce',
    title: 'Workforce analytics',
    description: 'Workforce optimization and talent insights.',
    url: '/capabilities/workforce-analytics',
    size: 33.33, // Bottom-right section
    colorClass: 'bg-green-200'
  },
  {
    id: 'digital',
    title: 'Digital diagnostics',
    description: 'Digital transformation assessment tools.',
    url: '/capabilities/digital',
    size: 30, // Top-middle section
    colorClass: 'bg-purple-200'
  },
  {
    id: 'esg',
    title: 'ESG / Carbon assessment',
    description: 'Environmental and sustainability assessments.',
    url: '/capabilities/esg',
    size: 30, // Top-right section
    colorClass: 'bg-emerald-200'
  },
  {
    id: 'sector',
    title: 'Sector scan / Target screening',
    description: 'Comprehensive industry analysis and insights.',
    url: '/capabilities/sector-scan',
    size: 33.33, // Bottom-middle section
    colorClass: 'bg-red-200'
  },
  {
    id: 'gen-ai',
    title: 'Gen AI',
    description: 'Advanced AI and machine learning solutions.',
    url: '/capabilities/gen-ai',
    size: 33.33, // Bottom-left section
    colorClass: 'bg-orange-200'
  },
];

// ...existing code...

export default function JigsawOfferings() {
  const router = useRouter();

  const OfferingGrid = ({ items, title }: { items: Offering[], title: string }) => (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className={`grid gap-4`}
        style={{
          gridTemplateColumns: title.includes('Sectors') ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          gridAutoRows: title.includes('Sectors') ? '1fr' : 'auto',
          gridTemplateRows: title.includes('Sectors') ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)',
        }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              gridColumn: title.includes('Industry') ? 'span 1' : (item.size >= 40 ? 'span 2' : 'span 1'),
              gridRow: title.includes('Industry') ? 'span 1' : (item.size >= 40 ? 'span 2' : 'span 1')
            }}
            className={`relative rounded-lg shadow-md overflow-hidden cursor-pointer group h-full ${title.includes('Industry') ? 'min-h-[150px]' : 'min-h-[200px]'
              }`}
            onClick={() => router.push(item.url)}
            role="button"
            tabIndex={0}
          >
            <div className={`${item.colorClass} w-full h-full p-6 flex flex-col justify-center`}>
              {/* Title - slides up on hover */}
              <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                <h4 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h4>
              </div>

              {/* Description - appears with fade */}
              <div className="mt-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-sm text-gray-700">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore offerings
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Click on any offering to learn more about how BCN PEG can play a role in your case
            </p>
          </div>
        </div>

        {/* Sectors Grid in its own box */}
        <OfferingGrid items={sectors} title="BCN PEG Sectors" />

        {/* Products Grid in its own box */}
        <OfferingGrid items={products} title="BCN PEG Products" />
      </div>
    </section>
  );
}