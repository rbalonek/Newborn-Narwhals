import React from "react";
import "./ButtonSection.css";

import DiscordImg from "../../assets/DiscordImgBtn.jpg";
import TwitterImg from "../../assets/TwitterIcon.png";

export default function ButtonSection() {
  const buttonClick = (e) => {
    e.preventDefault();
    window.open("https://newborn-narwhals.netlify.app/");
  };
  return (
    <div className="buttonSection__container">
      <div className="buttons__holder">
        <button onClick={buttonClick} className="btn buy-btn">
          Buy
        </button>

        <div className="twit-dis__btns">
          <button className="twitter-btn btn">
            <img className="twitter-dtn-img" alt="img" src={TwitterImg} />
            Twitter
          </button>

          <button className="discord-btn btn">
            <img className="discord-dtn-img" alt="img" src={DiscordImg} />
            Discord
          </button>
        </div>
      </div>
    </div>
  );
}
