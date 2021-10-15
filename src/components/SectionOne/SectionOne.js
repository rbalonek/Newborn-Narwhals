import React from "react";
import "./SectionOne.css";

export default function SectionOne() {
  return (
    <div className="sectionOne__container">
      <img
        className="pic_one"
        alt="picOne"
        src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1634322415/Newborn-Narwhals/PIC_1_z4quhf.png"
      />
      <div className="sectionOne__text">
        <h1>Collectable Digital Art</h1>
        <h3>NFTs with a fun side</h3>
      </div>
    </div>
  );
}
