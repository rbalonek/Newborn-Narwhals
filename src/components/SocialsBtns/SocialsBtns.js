import React from "react";
import "./SocialsBtns.css";

import Twitter from "../../assets/TwitterIcon.png";
import Discord from "../../assets/DiscordImgBtn.jpg";

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
        <button className="icon_btn twitIconBtn">
          <img className="twitIconImg" alt="twitter" src={Twitter} />
        </button>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://discord.com/invite/5dgtRRmSnh"
      >
        <button className="icon_btn discIconBtn">
          <img className="discIconImg" alt="twitter" src={Discord} />
        </button>
      </a>
      <button onClick={buttonClick} className="btn buy-btn">
        Buy
      </button>
    </div>
  );
}
