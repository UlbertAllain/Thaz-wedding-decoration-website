import { HeroSection } from "@/modules/home/components/hero-section";
import { AboutSection } from "@/modules/home/components/about-section";
import { FeaturedSection } from "@/modules/home/components/featured-section";
import { RegionsSection } from "@/modules/home/components/regions-section";
import { ContactSection } from "@/modules/home/components/contact-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <RegionsSection />
      <ContactSection />
    </main>
  );
}
