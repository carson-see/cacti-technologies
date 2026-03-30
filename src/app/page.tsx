import TrustBanner from "@/components/TrustBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TrustBanner />
      <Navbar />
      <Hero />
      <Services />
      <Results />
      <Portfolio />
      <About />
      <Pricing />
      <Contact />
      <Footer />
      <ChatbotWidget />
    </main>
  );
}
