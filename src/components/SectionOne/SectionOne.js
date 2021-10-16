import React from "react";
import "./SectionOne.css";

import { Fade, Slide, AttentionSeeker } from "react-awesome-reveal";

export default function SectionOne() {
  return (
    <div className="sectionOne__container">
      <div className="sectionOne__center-keeper">
        <AttentionSeeker triggerOnce={true} effect="tada" delay="200">
          <Slide triggerOnce={true} direction="down" duration="2000">
            <img
              className="pic_one"
              alt="picOne"
              src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1634322415/Newborn-Narwhals/PIC_1_z4quhf.png"
            />
          </Slide>
        </AttentionSeeker>
        <div className="sectionOne__text">
          <Fade duration={3000} triggerOnce="true">
            <h1 className="sectionOne-collectable">Collectable</h1>
            <h1 className="digital-art">Digital Art</h1>
            <p className="sectionOne__text-nfts">NFTs with a fun side</p>
          </Fade>
        </div>
      </div>
    </div>
  );
}
