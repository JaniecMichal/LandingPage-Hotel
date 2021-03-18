import React from "react";
import Carousel from "react-elastic-carousel";
import "./style.css";
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
    {
      apartamentName: "Wienna Rooms",
      apartamentImage: aplinImage,
      apartamentVolume: 6,
      apartamentBeds: 2,
      apartamentArea: "80 m2",
      apartamentPrice: 45,
    },
    {
      apartamentName: "Mountain Apartament",
      apartamentImage: gratbahnImage,
      apartamentVolume: 6,
      apartamentBeds: 2,
      apartamentArea: "80 m2",
      apartamentPrice: 39,
    },
    {
      apartamentName: "Brno Rooms",
      apartamentImage: sommerskiImage,
      apartamentVolume: 6,
      apartamentBeds: 2,
      apartamentArea: "80 m2",
      apartamentPrice: 55,
    },
    {
      apartamentName: "Wienna Rooms",
      apartamentImage: aplinImage,
      apartamentVolume: 6,
      apartamentBeds: 2,
      apartamentArea: "80 m2",
      apartamentPrice: 45,
    },
    {
      apartamentName: "Mountain Apartament",
      apartamentImage: gratbahnImage,
      apartamentVolume: 6,
      apartamentBeds: 2,
      apartamentArea: "80 m2",
      apartamentPrice: 39,
    },
    {
      apartamentName: "Brno Rooms",
      apartamentImage: sommerskiImage,
      apartamentVolume: 6,
      apartamentBeds: 2,
      apartamentArea: "80 m2",
      apartamentPrice: 55,
    },
  ];
  return (
    <Carousel itemsToShow={3} className="carousel">
      {apartamentsData.map(
        ({
          apartamentName,
          apartamentImage,
          apartamentVolume,
          apartamentBeds,
          apartamentArea,
          apartamentPrice,
        }) => {
          return (
            <SliderItem
              key={apartamentName}
              roomName={apartamentName}
              roomImage={apartamentImage}
              roomVolume={apartamentVolume}
              roomBeds={apartamentBeds}
              roomArea={apartamentArea}
              roomPrice={apartamentPrice}
            />
          );
        }
      )}
    </Carousel>
  );
};

export default Slider;
