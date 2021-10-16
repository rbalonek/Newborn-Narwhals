import React from "react";
import "./SocialsBtns.css";

import Twitter from "../../assets/twitterCOROP.png";
import Discord from "../../assets/DiscordCrop.png";

export default function SocialsBtns() {
  const buttonClick = (e) => {
    e.preventDefault();
    window.open("https://newborn-narwhals.netlify.app/");
  };

  return (
    <div className="btns__container">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/newbornnarwhals"
      >
        <img className="btns__icon" alt="Twitter" src={Twitter} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://discord.com/invite/5dgtRRmSnh"
      >
        <img className="btns__icon" alt="Discord" src={Discord} />
      </a>
      <button onClick={buttonClick} className="btn buy-btn">
        Buy
      </button>
    </div>
  );
}
