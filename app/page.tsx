import { FaqSection } from "./_components/pgaeSections/FaqSection";
import HeroSection from "./_components/pgaeSections/Hero";
// import { ProjectSection } from "./_components/pgaeSections/ProjectSection";
import { Navbar } from "./_components/elements/Navbar";
import { Footer } from "./_components/pgaeSections/Footer";
import { ServiceSection } from "./_components/pgaeSections/ServiceSection";
import { TestimonialSection } from "./_components/pgaeSections/TestimonialSection";
import { WhyChooseUs } from "./_components/pgaeSections/WhyChooseUs";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <ProjectSection /> */}
      <ServiceSection />
      <WhyChooseUs />
      <TestimonialSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Home;
