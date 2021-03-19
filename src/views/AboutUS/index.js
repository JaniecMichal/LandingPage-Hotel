import React from "react";
import "./style.css";
import Container from "../../components/Container";
import InfoHeader from "../../components/InfoHeader";
import MainHeader from "../../components/MainHeader";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import MobileExtraBar from "../../components/MobileExtraBar";
import aboutImage from "../../images/aboutImage.png";
import { aboutRestContent, aboutUsDescription } from "./assets";

const AboutUS = () => {
  return (
    <Container pageVersion={true}>
      <InfoHeader headerMessage="We are open!" />
      <MainHeader pageSection={true} pageTitle={"About us"} />
      <Section
        pageSection={true}
        pageImage={aboutImage}
        sectionModifierClass={"section--pageVersion"}
        sectionTitle={"Best stay at Kaprun"}
        headerModifierClass={"section__header--pageVersion"}
        sectionDescription={aboutUsDescription}
        descriptionModifierClass={"section__description--pageVersion"}
        sectionExtraContent={aboutRestContent()}
      />
      <Footer pageVersion={true} />
      <MobileExtraBar />
    </Container>
  );
};

export default AboutUS;
