import React from "react";
import "./SocialsBtns.css";

import Twitter from "../../assets/Twitter.png";
import Discord from "../../assets/discord.jpeg";

export default function SocialsBtns() {
  return (
    <div className="btns__container">
      <img className="btns__icon" alt="Twitter" src={Twitter} />
      <img className="btns__icon" alt="Discord" src={Discord} />
      <button className="btn">Buy</button>
    </div>
  );
}
