import React from "react";
import "./style.css";
import wave from "../../images/wave.svg";
import borderWave from "../../images/apartamentWave.svg";
import { Link } from "react-router-dom";

const Section = ({
  sectionWave,
  sectionTitle,
  sectionDescription,
  sectionExtraContent,
  sectionButtonLinkText,
  sectionModifierClass,
  headerModifierClass,
  descriptionModifierClass,
  buttonModifierClass,
  sectionHeaderImage,
  modifierHeaderImageClass,
  sectionLinkTo,
  pageSection,
  pageImage,
}) => {
  return (
    <section className={`section ${sectionModifierClass}`}>
      {sectionWave ? <img src={wave} className="section__wave" alt="" /> : ""}
      {pageSection && pageImage ? (
        <img src={pageImage} alt="" className="pageImage" />
      ) : (
        ""
      )}
      <img
        src={sectionHeaderImage}
        alt=""
        className={`section__HeaderImage ${modifierHeaderImageClass}`}
      />

      <header className={`section__header ${headerModifierClass}`}>
        <h2
          className={`section__headerTitle ${
            pageSection ? "section__headerTitle--pageVersion" : ""
          }`}
          id="apartaments"
        >
          {sectionTitle}
        </h2>
        {!pageSection ? (
          <img src={borderWave} alt="" className="section__headerWave" />
        ) : (
          ""
        )}
      </header>

      <p className={`section__description ${descriptionModifierClass}`}>
        {sectionDescription}
      </p>

      {sectionExtraContent}

      {!pageSection ? (
        <button className={`section__buttonLink ${buttonModifierClass}`}>
          <Link
            to={sectionLinkTo ? sectionLinkTo : ""}
            className="section__linkTo"
          >
            More {sectionButtonLinkText}
          </Link>
        </button>
      ) : (
        ""
      )}
    </section>
  )
};

export default Section;
