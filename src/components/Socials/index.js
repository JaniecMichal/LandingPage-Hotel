import React from "react";
import instaIcon from "../../images/insta.svg";
import faceIcon from "../../images/face.svg";

const Socials = ({ className }) => (
  <div className={className}>
    <img src={instaIcon} alt="socialsIcon" />
    <img src={faceIcon} alt="socialsIcon" />
  </div>
);

export default Socials;
