import React from "react";
import Navbar from "./Navbar";
import IntroSection from "./IntroSection";
import PortfolioSection from "./PortfolioSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import CopyrightSection from "./CopyrightSection";
import "./styles.css";
import PortfolioModals from "./PortfolioModals";

const App = () => {
  return (
    <div id="page-top">
      <Navbar />
      <IntroSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <CopyrightSection />
      <PortfolioModals />
    </div>
  );
};

export default App;
