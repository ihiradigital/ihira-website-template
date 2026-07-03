import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { StickyCallButton } from "@/components/StickyCallButton";
import { BackToTop } from "@/components/BackToTop";
import { Services } from "@/components/Services";
import { StormDamageCTA } from "@/components/StormDamageCTA";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { EmergencyBar } from "@/components/EmergencyBar";
import { ServiceArea } from "@/components/ServiceArea";
import { Footer } from "@/components/Footer";
import { QuickQuoteBanner } from "@/components/QuickQuoteBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <StormDamageCTA />
      <WhyChooseUs />
      <Process />
      <Projects />
      <Reviews />
      <FAQ />
      <div id="free-inspection">
        <ContactForm />
      </div>
      <EmergencyBar />
      <ServiceArea />
      <Footer />
      <StickyCallButton />
      <BackToTop />
      <QuickQuoteBanner />
    </main>
  );
}
