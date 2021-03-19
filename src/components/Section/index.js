import React from "react";
import "./style.css";
import wave from "../../images/wave.svg";
import borderWave from "../../images/apartamentWave.svg";

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
}) => {
  return (
    <section className={`section ${sectionModifierClass}`}>
      {sectionWave ? <img src={wave} className="section__wave" /> : ""}

      <img
        src={sectionHeaderImage}
        alt=""
        class={`section__HeaderImage ${modifierHeaderImageClass}`}
      />

      <header className={`section__header ${headerModifierClass}`}>
        <h2 className="section__headerTitle" id="apartaments">
          {sectionTitle}
        </h2>
        <img src={borderWave} alt="" className="section__headerWave" />
      </header>

      <p className={`section__description ${descriptionModifierClass}`}>
        {sectionDescription}
      </p>

      {sectionExtraContent}

      <a href="" className={`section__buttonLink ${buttonModifierClass}`}>
        More {sectionButtonLinkText}
      </a>
    </section>
  );
};

export default Section;
