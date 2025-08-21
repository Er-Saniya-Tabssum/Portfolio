import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import Expertise from "@/components/sections/expertise";
import WorkIntro from "@/components/sections/work-intro";
import FeaturedProject from "@/components/sections/featured-project";
import PortfolioGrid from "@/components/sections/portfolio-grid";
import ExperienceSection from "@/components/sections/experience";
import ContactTestimonials from "@/components/sections/contact-testimonials";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1a191d]">
      {/* <Header /> */}

      <main>
        <HeroSection />

        <Expertise />

        <div className="bg-[#1a191d]">
          <div className="container mx-auto px-6 lg:px-8">
            <WorkIntro />

            <div className="py-16">
              <FeaturedProject />
            </div>

            <div className="pb-24">
              <PortfolioGrid />
            </div>
          </div>
        </div>

        <ExperienceSection />

        <ContactTestimonials />
      </main>

      <Footer />
    </div>
  );
}
