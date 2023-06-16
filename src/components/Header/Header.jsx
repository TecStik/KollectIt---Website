import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Logo from './kollect-logo.png'
import "./Header.css";


export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <>
      <Helmet>
        <title>{window.location.pathname.slice(1) === "" ? "KOLLECTIT-Home" : window.location.pathname.slice(1)}</title>
      </Helmet>
      <nav className="navbar">
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <img src={Logo} alt="" id="logo" height={170} style={{ marginTop: "5%" }} />
            <span style={{ marginLeft: '-1.5%', color: "#134D61", fontWeight: "bold" }}>KOLLECTIT</span>
            {/* <i className="fas fa-arrow-down">KOLLECTIT</i> */}
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
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
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Our Platform
              </Link>
            </li>

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
                to="/KOLLECTIT-Join"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Why you need it?</Link>
            </li>

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
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>

      {/* 2nd Nav */}

      <nav className="Twonavbar">
        <div className="Twonav-container">
          <h4 id="TwoNavText">Eliminating obstacles to collection</h4>
        </div>
      </nav>

      <br />
      <br />
      <br />
    </>
  );
}
