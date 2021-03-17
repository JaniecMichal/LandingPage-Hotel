import React from "react";
import Section from "../Section";
import Slider from "./Slider";

const ApartamentSection = () => (
  <Section
    sectionTitle={"Apartaments"}
    sectionWave={true}
    sectionDescription={`  Tempor incididunt ut labore et dolore magna aliqu enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo.`}
    sectionExtraContent={<Slider />}
    sectionButtonLinkText={"apartaments"}
  />
);

export default ApartamentSection;
