import React from "react";
import "./style.css";
import volumeIcon from "../../../../images/roomVolume.svg";
import bedsIcon from "../../../../images/roomBeds.svg";
import areaIcon from "../../../../images/roomArea.svg";

const SliderItem = ({
  roomName,
  roomImage,
  roomVolume,
  roomBeds,
  roomArea,
  roomPrice,
}) => {
  return (
    <article className="sliderItem">
      <img src={roomImage} alt={roomName} className="sliderItem__image" />

      <div className="sliderItem__details">
        <div className="sliderItem__detailsInfo">
          <h3 className="sliderItem__title">{roomName}</h3>

          <div className="sliderItem__roomDetails">
            <div className="sliderItem__detailsItem">
              <img src={volumeIcon} />
              <span className="sliderItem__detailText">{roomVolume}</span>
            </div>

            <div className="sliderItem__detailsItem">
              <img src={bedsIcon} />
              <span className="sliderItem__detailText">{roomBeds}</span>
            </div>

            <div className="sliderItem__detailsItem">
              <img src={areaIcon} />
              <span className="sliderItem__detailText">{roomArea}</span>
            </div>
          </div>
        </div>

        <div className="sliderItem__priceInfo">
          {roomPrice}
          <span className="sliderItem__pricePer">/night</span>
        </div>
      </div>
    </article>
  );
};

export default SliderItem;
