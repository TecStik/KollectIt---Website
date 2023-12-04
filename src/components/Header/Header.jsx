import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Logo from './kollect-logo.png'
import "./Header.css";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");





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


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
  let product = "KCOLLECTIT";
  let status = "REQUESTED";

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/create", {
      name: name,
      companyName: companyName,
      email: email,
      mobile: mobile,
      product: product,
      status: status
    }).then((res) => {
      setName("");
      setCompanyName("");
      setEmail("");
      setMobile("");
      console.log(res?.data)
    }).catch(err => window.alert("All Fields Required!"));

    handleClose()
  }


  return (
    <>
      <Helmet>
        <title>{window.location.pathname.slice(1) === "" ? "KollectIt" : window.location.pathname.slice(1)}</title>
      </Helmet>
      <nav className="navbar"
      >
        <div className="nav-container" >
          <Link exact to="/" className="nav-logo" style={{ color: "#134D61", fontSize: '30px', fontWeight: 600 }}>
            <img src={Logo} alt="" id="logo" height={100} />
            <span id="Kollectit">
              KollectIt
            </span>
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
            <li className="nav-item">
              <Link
                exact
                to="/KollectIt-WhyYouNeedKollectIt"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Why you Need KollectIt</Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/KollectIt-HowItWorks"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                How it Works</Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/KollectIt-ContactUS"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {/* </StyleRoot> */}
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>

      {/* 2nd Nav */}

      <nav className="second__nav">
        <div style={{ color: "#134D61", fontSize: '1.6rem',padding:'0px 30px' }} className="res1">Digitise Physical Collection</div>
        <div className="download_container res2" onClick={handleShow}>Download APK</div>
      </nav>


      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>APK of KollectIt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Name:</Form.Label>
          <Form.Control placeholder="Enter Your Name" className="mb-1" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <Form.Label>Company Name:</Form.Label>
          <Form.Control placeholder="Enter Your Company Name" className="mb-1" type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          <Form.Label>Email:</Form.Label>
          <Form.Control placeholder="Enter Your Email" className="mb-1" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Form.Label>Mobile No:</Form.Label>
          <Form.Control placeholder="Enter Your Mobile No" className="mb-1" type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


      {/* <nav className="Twonavbar" >
        <div className="Twonav-container">
          <h4 id="TwoNavText" style={{ color: "#134D61" }}>Digitise Physical Collection</h4>
          <div className="download_container">
            <p id="download">Download APK</p>
          </div>
        </div>
      </nav> */}
    </>
  );
}


