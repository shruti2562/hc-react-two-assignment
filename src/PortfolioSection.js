import React from "react";
import CabinImage from "./assets/img/portfolio/cabin.png";
import CakeImage from "./assets/img/portfolio/cake.png";
import CircusImage from "./assets/img/portfolio/circus.png";
import GameImage from "./assets/img/portfolio/game.png";
import SafeImage from "./assets/img/portfolio/safe.png";
import SubmarineImage from "./assets/img/portfolio/submarine.png";
import Portfolio from "./Portfolio";

const PortfolioSection = () => (
  <section className="page-section portfolio" id="portfolio">
    <div className="container">
      <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
        Portfolio
      </h2>

      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <i className="fas fa-star"></i>
        </div>
        <div className="divider-custom-line"></div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mb-5">
          <Portfolio dataBsTarget="#portfolioModal1" image={CabinImage} />
        </div>

        <div className="col-md-6 col-lg-4 mb-5">
          <Portfolio dataBsTarget="#portfolioModal2" image={CakeImage} />
        </div>

        <div className="col-md-6 col-lg-4 mb-5">
          <Portfolio dataBsTarget="#portfolioModal3" image={CircusImage} />
        </div>

        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
          <Portfolio dataBsTarget="#portfolioModal4" image={GameImage} />
        </div>

        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
          <Portfolio dataBsTarget="#portfolioModal5" image={SafeImage} />
        </div>

        <div className="col-md-6 col-lg-4">
          <Portfolio dataBsTarget="#portfolioModal6" image={SubmarineImage} />
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
