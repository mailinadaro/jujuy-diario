import data from '@/data/chofer-privado.json';
import { Navigation } from '@/components/sections/globales/Navigation';
import { HeroSection } from '@/components/sections/chofer/HeroSection';
import { ProblemSection } from '@/components/sections/chofer/ProblemSection';
import { BenefitsSection } from '@/components/sections/chofer/BenefitsSection';
import { HowItWorksSection } from '@/components/sections/chofer/HowItWorksSection';
import { CoverageSection } from '@/components/sections/chofer/CoverageSection';
import { FounderSection } from '@/components/sections/chofer/FounderSection';
import { PricingSection } from '@/components/sections/chofer/PricingSection';
import { OtherTransfersSection } from '@/components/sections/chofer/OtherTransfersSection';
import { FaqSection } from '@/components/sections/chofer/FaqSection';
import { CtaSection } from '@/components/sections/chofer/CtaSection';
import { Footer } from '@/components/sections/globales/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export default function Page() {
  const whatsappNumber = data.whatsapp;

  return (
    <main className="bg-slate-50 text-slate-800 antialiased selection:bg-amber-500 selection:text-slate-950 font-sans">
      <Navigation whatsappNumber={whatsappNumber} />
      <HeroSection whatsappNumber={whatsappNumber} />
      <ProblemSection />
      <BenefitsSection />
      <HowItWorksSection whatsappNumber={whatsappNumber} />
      <CoverageSection whatsappNumber={whatsappNumber} />
      <FounderSection />
      <PricingSection whatsappNumber={whatsappNumber} />
      <FaqSection />
      <CtaSection whatsappNumber={whatsappNumber} />
      <OtherTransfersSection whatsappNumber={whatsappNumber} />
      <Footer />
      <WhatsAppButton whatsappNumber={whatsappNumber} />
    </main>
  );
}
