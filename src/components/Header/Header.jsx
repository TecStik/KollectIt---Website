import React, { useState, useEffect } from "react";
import Radium, { StyleRoot } from 'radium';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Logo from './kollect-logo.png'
import "./Header.css";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [navSize, setnavSize] = useState(170);
  const [marginSize, setmarginSize] = useState("5%");
  const [navPosition, setnavPosition] = useState("fixed");
  const [menuSize, setmenuSize] = useState("");
  const [MarginLeft, setMarginLeft] = useState("");
  const [height, setheight] = useState("");

  const listenScrollEvent = () => {
    window.scrollY > 120 ? setnavSize(100) : setnavSize(170);
    window.scrollY > 120 ? setmarginSize('-5%') : setmarginSize('5%');
    window.scrollY > 120 ? setmenuSize('15') : setmenuSize('0%');
    window.scrollY > 120 ? setnavPosition('unset') : setnavPosition('fixed');
    window.scrollY > 10 ? setMarginLeft(".35%") : setMarginLeft("");
    // window.scrollY > 10 ? setheight("75px") : setheight('65px');
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const style = {
    // Adding media query..

    '@media screen and (max-width: 500px)': {
      marginTop: menuSize,
    },
  };
  return (
    <>
      <Helmet>
        <title>{window.location.pathname.slice(1) === "" ? "KOLLECTIT-Home" : window.location.pathname.slice(1)}</title>
      </Helmet>
      <nav className="navbar"
        style={{
          // backgroundColor: navColor,
          // color: navItemColor,
          // height: navSize,
          // transition: "all 1s",
          // height: height

        }}
      >
        <div className="nav-container" >
          <Link exact to="/" className="nav-logo" style={{ color: "#134D61", fontSize: '30px', fontWeight: 600 }}>
            <img src={Logo} alt="" id="logo" height={170} style={{ marginTop: "6%" }} />
            KOLLECTIT
          </Link>

          {/* <StyleRoot> */}
          <ul className={click ? "nav-menu active" : "nav-menu"} >
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                exact
                to="/KOLLECTIT-About"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </Link>
            </li> */}


            {/* <li className="nav-item">
              <div class="dropdown">
                <div id="services">Our Platform <i className="fa fa-caret-down"></i></div>
                <div class="dropdown-Industries">
                  <>
                    <> <Link to="/KOLLECTIT-OurTeam">Our team</Link></>
                  </>

                </div>
              </div>
            </li> */}
            <li className="nav-item">
              <Link
                exact
                to="/KOLLECTIT-Need"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Why you Need KollectIt</Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/KOLLECTIT-OurTeam"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Our Team
              </Link>
            </li>
            {/* <li className="nav-item">
              <div class="dropdown">
                <div id="services"><Link to="/KOLLECTIT-OurTeam#Ourteam">Our team</Link><i className="fa fa-caret-down"></i></div>
                <div class="dropdown-Industries">
                    <a href="/KOLLECTIT-OurTeam#AboutOperator">About</a>
                  <>
                  </>

                </div>
              </div>
            </li> */}
            <li className="nav-item">
              <Link
                exact
                to="/KOLLECTIT-Contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
            {/* <li className="nav-item">
                <Button variant="outline-primary" className="nav-links">Login</Button>
            </li>
            <li className="nav-item">
                <Button variant="outline-primary">Sign UP</Button>
            </li> */}
          </ul>
          {/* </StyleRoot> */}
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>

      {/* 2nd Nav */}

      <nav className="Twonavbar">
        <div className="Twonav-container">
          <h4 id="TwoNavText" style={{ color: "#134D61" }}>Digitize Physical Collection</h4>
        </div>
      </nav>

      <br />
      <br />
      <br />
    </>
  );
}


