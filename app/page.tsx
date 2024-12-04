import CaseStudy from "./components/CaseStudy";
import Contact from "./components/Contact";
import CoreTechHighlight from "./components/CoreTechHighLight";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
//import Review from "./components/Review";
import Team from "./components/Team";
//import TrustedByCompanies from "./components/TrustedByCompanies";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <CoreTechHighlight />
      <Team />
      <CaseStudy />
      {/* <Review /> */}
      {/* <TrustedByCompanies /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
