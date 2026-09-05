import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Philosophy } from "@/components/Philosophy";
import { Methodology } from "@/components/Methodology";
import { Services } from "@/components/Services";
import { BrandTools } from "@/components/BrandTools";
import { Clients } from "@/components/Clients";
import { Journey } from "@/components/Journey";
import { Legacy } from "@/components/Legacy";
import { Awards } from "@/components/Awards";
import { Download } from "@/components/Download";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <Philosophy />
      <Methodology />
      <Services />
      <BrandTools />
      <Clients />
      <Journey />
      <Legacy />
      <Awards />
      <Download />
      <Contact />
      <Footer />
    </main>
  );
}
