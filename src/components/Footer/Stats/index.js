import React from "react";
import "./style.css";
import apartamentsIco from "../../../images/apartamets.svg";
import locationsIco from "../../../images/location.svg";
import ratingIco from "../../../images/rating.svg";
import standardIco from "../../../images/standard.svg";

const Stats = () => {
  return (
    <section className="footer__stats">
      <article className="footer__statsItem">
        <img src={apartamentsIco} alt="apartaments_stats" />
        <div className="footer__statsDetails">
          <h6 className="footer__statsHeader">163</h6>
          <span className="footer_statsName">apartaments</span>
        </div>
      </article>
      <article className="footer__statsItem">
        <img src={locationsIco} alt="locations_stats" />
        <div className="footer__statsDetails">
          <h6 className="footer__statsHeader">7</h6>
          <span className="footer_statsName">locations</span>
        </div>
      </article>
      <article className="footer__statsItem">
        <img src={ratingIco} alt="rating_stats" />
        <div className="footer__statsDetails">
          <h6 className="footer__statsHeader">9,9</h6>
          <span className="footer_statsName">rating</span>
        </div>
      </article>
      <article className="footer__statsItem">
        <img src={standardIco} alt="starStandard_stats" />
        <div className="footer__statsDetails">
          <h6 className="footer__statsHeader">5</h6>
          <span className="footer_statsName">star standard</span>
        </div>
      </article>
    </section>
  );
};

export default Stats;
