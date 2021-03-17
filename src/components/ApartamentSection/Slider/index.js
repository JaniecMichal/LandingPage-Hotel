import React from "react";
import "./style.css";
import leftArrow from "../../../images/sliderLeft.svg";
import rightArrow from "../../../images/sliderRight.svg";
import SliderItem from "./SliderItem";
import aplinImage from "../../../images/aplin.png";
import gratbahnImage from "../../../images/gratbahn.png";
import sommerskiImage from "../../../images/sommerski.png";

const Slider = () => {
  const apartamentsData = [
    {
      apartamentName: "Aplin Apartaments",
      apartamentImage: aplinImage,
      apartamentVolume: 6,
      apartamentBeds: 2,
      apartamentArea: "80 m2",
      apartamentPrice: 45,
    },
    {
      apartamentName: "Gratbahn Apartaments",
      apartamentImage: gratbahnImage,
      apartamentVolume: 6,
      apartamentBeds: 2,
      apartamentArea: "80 m2",
      apartamentPrice: 39,
    },
    {
      apartamentName: "Sommerski Rooms",
      apartamentImage: sommerskiImage,
      apartamentVolume: 6,
      apartamentBeds: 2,
      apartamentArea: "80 m2",
      apartamentPrice: 55,
    },
  ];
  return (
    <section className="slider">
      <img src={leftArrow} alt="" className="sliderArrow" />

      {apartamentsData.map(
        ({
          apartamentName,
          apartamentImage,
          apartamentVolume,
          apartamentBeds,
          apartamentArea,
          apartamentPrice,
        }) => (
          <SliderItem
            roomName={apartamentName}
            roomImage={apartamentImage}
            roomVolume={apartamentVolume}
            roomBeds={apartamentBeds}
            roomArea={apartamentArea}
            roomPrice={apartamentPrice}
          />
        )
      )}

      <img src={rightArrow} alt="" className="sliderArrow" />
    </section>
  );
};

export default Slider;
