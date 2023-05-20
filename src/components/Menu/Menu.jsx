import React from "react";
import "./menu.scss";

const Menu = ({ menuOpen, setmenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul onClick={() => setmenuOpen(!menuOpen)}>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
