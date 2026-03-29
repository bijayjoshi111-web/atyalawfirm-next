import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import PracticeAreas from "@/components/home/PracticeAreas";
import WhyUs from "@/components/home/WhyUs";
import Insights from "@/components/home/Insights";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <PracticeAreas />
      <WhyUs />
      <Insights />
      <CTA />
    </>
  );
}
