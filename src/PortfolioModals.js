import React from "react";
import CabinImage from "./assets/img/portfolio/cabin.png";
import CakeImage from "./assets/img/portfolio/cake.png";
import CircusImage from "./assets/img/portfolio/circus.png";
import GameImage from "./assets/img/portfolio/game.png";
import SafeImage from "./assets/img/portfolio/safe.png";
import SubmarineImage from "./assets/img/portfolio/submarine.png";
import Modal from "./Modal";

const PortfolioModals = () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.";

  return (
    <div>
      <Modal
        id="portfolioModal1"
        header="Log Cabin"
        image={CabinImage}
        text={text}
      />

      <Modal
        id="portfolioModal2"
        header="Tasty Cake"
        image={CakeImage}
        text={text}
      />

      <Modal
        id="portfolioModal3"
        header="Circus Tent"
        image={CircusImage}
        text={text}
      />

      <Modal
        id="portfolioModal4"
        header="Controller"
        image={GameImage}
        text={text}
      />

      <Modal
        id="portfolioModal5"
        header="Locked Safe"
        image={SafeImage}
        text={text}
      />

      <Modal
        id="portfolioModal6"
        header="Submarine"
        image={SubmarineImage}
        text={text}
      />
    </div>
  );
};

export default PortfolioModals;
