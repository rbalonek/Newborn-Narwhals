import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__logo-holder">
        <h4 className="powered_by">POWERED BY</h4>
        <img
          className="footer__img"
          alt="logo"
          src="https://res.cloudinary.com/bobalobbadingdong/image/upload/v1634423167/Newborn-Narwhals/pic_3_qkokzj.png"
        />
      </div>

      <div className="footer__nav-holder">
        <div className="footer__nav">
          <p style={{ color: "#6963ee", height: "3px" }}>Menu</p>
          <a
            href="https://newborn-narwhals.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Home</p>
          </a>
          <a
            href="https://newborn-narwhals.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Rarity</p>
          </a>
          <a
            href="https://newborn-narwhals.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Roadmap</p>
          </a>
          <a
            href="https://newborn-narwhals.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Game</p>
          </a>
        </div>

        <div className="footer__nav">
          <p style={{ color: "#6963ee", height: "3px" }}>Follow us</p>
          <a
            href="https://newborn-narwhals.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Twitter</p>
          </a>
          <a
            href="https://newborn-narwhals.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Discord</p>
          </a>
        </div>
      </div>
    </div>
  );
}
