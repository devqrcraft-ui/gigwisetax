// app/components/SchemaMarkup.tsx
// JSON-LD Schema for rich Google snippets

interface SchemaProps {
  type: 'calculator' | 'article' | 'faq' | 'website'
  data?: Record<string, unknown>
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GigWiseTax",
    "url": "https://www.gigwisetax.com",
    "description": "Free self-employment tax calculator for gig workers. All 51 states. Tax year 2026.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.gigwisetax.com/calculators?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function CalculatorSchema({ platformName, stateName }: { platformName: string, stateName?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": `${platformName} Tax Calculator 2026${stateName ? ` — ${stateName}` : ''}`,
    "url": "https://www.gigwisetax.com",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": `Free ${platformName} self-employment tax calculator for 2026. Calculate SE tax, federal income tax, and state taxes.`,
    "provider": {
      "@type": "Organization",
      "name": "GigWiseTax",
      "url": "https://www.gigwisetax.com"
    }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ArticleSchema({ title, description, datePublished }: { title: string, description: string, datePublished: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": new Date().toISOString().split('T')[0],
    "author": {
      "@type": "Organization",
      "name": "GigWiseTax",
      "url": "https://www.gigwisetax.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GigWiseTax",
      "url": "https://www.gigwisetax.com"
    }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQSchema({ items }: { items: { q: string, a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
