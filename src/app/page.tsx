import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Services />
      <CTA />
    </main>
  );
}
