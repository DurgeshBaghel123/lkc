//import Button  from "./Button.jsx"
import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import { useEffect } from "react";

const Navbar = () => {
  //Theme color change
  const [togglebtn, settogglebtn] = useState(true);
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);
  const toggleTheme = () => {
    let theme = document.documentElement.getAttribute("data-theme");
    let togglebtn = document.getElementById("theme-toggle");
    if (togglebtn.classList.contains("active")) {
      togglebtn.classList.remove("active");
    } else {
      togglebtn.classList.add("active");
    }

    console.log(togglebtn);
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <div className="row ">
      <div className="pt-2 Navbar px-3">
        <div className="logo">
          {
            <NavLink to="/">
              <img
                src="public\image\5e808ce7dc544553a7f1b1e4_Black (1).svg"
                alt="logo"
                className="w-100"
              />
            </NavLink>
          }
        </div>

        <nav className={togglebtn ? "main-navbar " : "main-navbar show"}>
          <div className="navbar">
            <div className="menu pt-2 pe-5">
              <ul className="">
                <li>
                  <NavLink to="/">
                    <i className="fa-solid fa-house mobile-icon "></i> HOME
                  </NavLink>
                </li>
                <li className="submenu">
                  <NavLink to="/services">
                    <i className="fa-solid fa-address-card mobile-icon "></i>{" "}
                    SERVICES <i className="fa-solid fa-chevron-down"></i>
                  </NavLink>
                  <div className="dropdown shadow">
                    <div className="col-md-4 ">
                      <h6>Arduino-Uno</h6>
                      <ul className="d-block">
                        <li>
                          <a href="#">Automated Washroom</a>
                        </li>
                        <li>
                          <a href="#">Alarm Clock Radio Using Arduino</a>
                        </li>
                        <li>
                          <a href="#">Arduino-Based Wireless Frequency Meter</a>
                        </li>
                        <li>
                          <a href="#">Arduino-Based Window Alarm Annunciator</a>
                        </li>
                        <li>
                          <a href="#">Arduino-Based Window Alarm Annunciator</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4 ">
                      <h6>Razberry-Pi</h6>
                      <ul className="d-block">
                        <li>
                          <a href="#">Automated Washroom</a>
                        </li>
                        <li>
                          <a href="#">Alarm Clock Radio Using Arduino</a>
                        </li>
                        <li>
                          <a href="#">Arduino-Based Wireless Frequency Meter</a>
                        </li>
                        <li>
                          <a href="#">Arduino-Based Window Alarm Annunciator</a>
                        </li>
                        <li>
                          <a href="#">Arduino-Based Window Alarm Annunciator</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4 ">
                      <h6>Cources</h6>
                      <ul className="d-block">
                        <li>
                          <a href="#">Arduino-Uno Learn</a>
                        </li>
                        <li>
                          <a href="#">Web Development</a>
                        </li>
                        <li>
                          <a href="#">Python Developer</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <NavLink to="/about">
                    <i className="fa-solid fa-shop mobile-icon"></i>ABOUT
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog">
                    <i className="fa-solid fa-shop mobile-icon"></i>BLOG
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    <i className="fa-solid fa-shop mobile-icon"></i>CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="" id="mobile-btn">
              {<Button data="BOOK A CALL" />}
            </div>
          </div>
        </nav>
        {/* dark and light theme btn */}
        <div id="toggle" onClick={toggleTheme}>
          <i className="indicator" id="theme-toggle"></i>
        </div>
        <div className="" id="desktop-btn">
          {<Button data="BOOK A CALL" />}
        </div>

        {
          <i
            className={
              togglebtn
                ? "fa-solid fa-bars mobile-btn"
                : "fa-solid fa-xmark mobile-btn"
            }
            onClick={() => {
              togglebtn ? settogglebtn(false) : settogglebtn(true);
            }}
          ></i>
        }
      </div>
    </div>
  );
};

export default Navbar;
