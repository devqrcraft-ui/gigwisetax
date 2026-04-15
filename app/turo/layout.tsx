import type { Metadata } from "next";
export const metadata: Metadata = { title: "Turo Host Tax Calculator 2026 — Income Tax + Depreciation | GigWiseTax", description: "Free Turo tax calculator 2026. Estimate income tax, self-employment tax, and car depreciation deductions for all 51 states. No signup required.", alternates: { canonical: "https://www.gigwisetax.com/turo" }, openGraph: { title: "Turo Host Tax Calculator 2026 — Income Tax + Depreciation | GigWiseTax", description: "Free Turo tax calculator 2026. Estimate income tax, self-employment tax, and car depreciation deductions for all 51 states. No signup required.", url: "https://www.gigwisetax.com/turo", siteName: "GigWiseTax", type: "website" } };
export default function Layout({ children }: { children: React.ReactNode }) {
  
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.gigwisetax.com"},{"@type":"ListItem","position":2,"name":"Turo Tax Calculator","item":"https://www.gigwisetax.com/turo"}]})}} />{children}</>;
}
