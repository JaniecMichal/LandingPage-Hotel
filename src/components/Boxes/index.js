import React from "react";
import "./style.css";
import specialOfferWave from "../../images/specialOfferWave.svg";
import boxesArrow from "../../images/boxesArrow.svg";

const Boxes = () => (
  <section className="boxesSection">
    <header className="boxesSection__header">
      <h2 className="boxesSection__headerTitle">Special offer</h2>
      <img src={specialOfferWave} alt="" />
    </header>

    <article className="boxesSection__box">
      <header>
        <h3 className="boxesSection__headerTitle">Restaurant</h3>
        <img src={specialOfferWave} alt="" />
      </header>
      <div className="boxesSection__details">
        <p className="boxesSection__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do or
          incididunt ut labor
        </p>
        <a href="">
          <img src={boxesArrow} alt="" />
        </a>
      </div>
    </article>

    <article className="boxesSection__box boxesSection__box--rental">
      <header>
        <h3 className="boxesSection__headerTitle">Rental</h3>
        <img src={specialOfferWave} alt="" />
      </header>
    </article>
  </section>
);

export default Boxes;
