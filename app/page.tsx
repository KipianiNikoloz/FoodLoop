import { FinalCta } from "@/components/landing/FinalCta";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowSection } from "@/components/landing/HowSection";
import { OffersSection } from "@/components/landing/OffersSection";
import { PartnerSection } from "@/components/landing/PartnerSection";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { SiteHeader } from "@/components/landing/SiteHeader";

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />
      <HeroSection />
      <HowSection />
      <OffersSection />
      <PartnerSection />
      <FinalCta />
      <SiteFooter />
    </main>
  );
}
