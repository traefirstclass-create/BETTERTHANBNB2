import { Hero } from "@/components/marketing/Hero";
import { Benefits } from "@/components/marketing/Benefits";
import { CurriculumPreview } from "@/components/marketing/CurriculumPreview";
import { InstructorBio } from "@/components/marketing/InstructorBio";
import { Testimonials } from "@/components/marketing/Testimonials";
import { Faq } from "@/components/marketing/Faq";
import { PricingCta } from "@/components/marketing/PricingCta";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Benefits />
      <CurriculumPreview />
      <InstructorBio />
      <Testimonials />
      <Faq />
      <PricingCta />
    </>
  );
}
