import { HeroSection } from "@/components/hero/HeroSection";
import { ImpactNumbers } from "@/components/work/ImpactNumbers";
import { FeaturedWork } from "@/components/work/FeaturedWork";
import { AboutSection } from "@/components/about/AboutSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <ImpactNumbers />
      <FeaturedWork />
      <AboutSection />
    </main>
  );
}
