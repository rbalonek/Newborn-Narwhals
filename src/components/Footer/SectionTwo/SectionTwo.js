import React from "react";
import "./SectionTwo.css";

import { Fade, Slide } from "react-awesome-reveal";

export default function SectionTwo() {
  return (
    <div className="SectionTwo__container">
      <div className="SectionTwo__center-keeper">
        <div className="sectionTwo__text-area">
          <Fade duration={3000} triggerOnce="true">
            <h4 className="sectionTwo__text">
              Rising from the deep blue sea...our baby narwhals are here to
              steal your heart. Each narwhal is randomly generated and 100%
              unique. Are you ready to play our game and adopt an endangered NFT
              into your heart?
            </h4>
          </Fade>
        </div>
        <Slide
        // direction="up"
        >
          <img
            className="pic_two"
            alt="picTwo"
            src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1634323211/Newborn-Narwhals/PIC_2_copy_opryxn.png"
          />
        </Slide>
      </div>
    </div>
  );
}
