import { FaqSection } from "./_components/pgaeSections/FaqSection";
import HeroSection from "./_components/pgaeSections/Hero";
// import { ProjectSection } from "./_components/pgaeSections/ProjectSection";
import { Navbar } from "./_components/elements/Navbar";
import { Footer } from "./_components/pgaeSections/Footer";
import { HowChooseUs } from "./_components/pgaeSections/HowChooseUs";
import { ServiceSection } from "./_components/pgaeSections/ServiceSection";
import { TestimonialSection } from "./_components/pgaeSections/TestimonialSection";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <ProjectSection /> */}
      <ServiceSection />
      <HowChooseUs />
      <TestimonialSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Home;
