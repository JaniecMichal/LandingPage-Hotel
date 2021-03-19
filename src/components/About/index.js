import React from "react";
import "./style.css";
import Section from "../Section";
import smallBaner from "../../images/aboutBanerSmall.png";
import { toAboutSection } from "../../routes";

const About = () => (
  <Section
    sectionTitle={"About us"}
    sectionWave={false}
    sectionHeaderImage={smallBaner}
    modifierHeaderImageClass={"section__HeaderImage--about"}
    sectionModifierClass={"section--about"}
    sectionDescription={
      "Tempor incididunt ut labore et dolore magna aliqu enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
    }
    headerModifierClass={"section__header--about"}
    descriptionModifierClass={"section__description--main"}
    sectionExtraContent={
      <>
        <p className="section__description section__description--sub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          <strong className="section__importantText">
            Ut enim ad minim veniam
          </strong>
          , quis nostrud exercitatdidunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
        </p>

        <p className="section__description section__description--sub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    }
    buttonModifierClass={"section__buttonLink--about"}
    sectionButtonLinkText={"about us"}
    sectionLinkTo={toAboutSection()}
  />
);

export default About;
