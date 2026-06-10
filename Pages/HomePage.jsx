import HeroSection from "./../Components/Section/HeroSection";
import StatsGrid from "../Components/Section/StatsGrid";
import CompanyStory from "../Components/Section/CompanyStory";
import Services from "../Components/Section/Services";
import RegisterSection from "../Components/Section/RegisterSection";

const HomePage = () => {
  return (
    <div className="space-y-20">
      <HeroSection />
      <StatsGrid />
      <CompanyStory />
      <Services id="services" />
      <RegisterSection />
    </div>
  );
};

export default HomePage;
