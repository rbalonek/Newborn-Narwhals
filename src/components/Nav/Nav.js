import React from "react";
import Tabs from "../Tabs/Tabs";
import "./Nav.css";

import Logo from "../../assets/LOGO (1).png";
import SocialsBtns from "../SocialsBtns/SocialsBtns";

export default function Nav() {
  return (
    <div className="nav-container">
      <img className="nav__logo" alt="logo" src={Logo} />
      <Tabs />
      <SocialsBtns />
    </div>
  );
}
