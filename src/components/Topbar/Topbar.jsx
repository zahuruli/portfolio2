import React from "react";
import "./topbar.scss";
import MailIcon from "@mui/icons-material/Mail";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";

const Topbar = ({ menuOpen, setmenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <PersonOutlineTwoToneIcon className="icon" />
            <span>
              {" "}
              <a href="tel:+8801710815467">+8801710815467</a>{" "}
            </span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>
              {" "}
              <a href="mailto:zahurul8259@gmail.com">
                zahurul8259@gmail.com
              </a>{" "}
            </span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setmenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
