import React, { useState } from "react";
import "./Home.css";
import payment from "../Images/payment.png";
import Mobilepayment from "../Images/Mobilepayment.png";
import { Slide, Zoom } from "react-slideshow-image";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ladypayment from "../Images/ladypayment.png";
import tecstiklogo from "./tecstiklogo.png";
import KollectitLogo from "./KollectitLogo.png";
import logo from "../Footer/apk.png";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

function Home() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let height = "150px";

  const images = [
    "https://i.ibb.co/phKFyrw/laptop-1.png",
    "https://i.ibb.co/Jdg09c9/laptop-2-01-01.png",
    "https://i.ibb.co/zZGXhHj/laptop-3-01.png",
    "https://i.ibb.co/sgTV4Tv/laptop-4-01.png",
    "https://i.ibb.co/SBKzNg8/laptop-5-01.png",
    "https://i.ibb.co/7WsMX04/laptop-6-01.png",
    "https://i.ibb.co/QYWZKRj/laptop-7.png",
    "https://i.ibb.co/6YMKwdN/laptop-8-01.png",
    "https://i.ibb.co/c8Br4nx/laptop-9-01.png",
    "https://i.ibb.co/TH6Cpm6/laptop-10-01.png",
    "https://i.ibb.co/MhNhwSt/laptop-11-01.png",
    "https://i.ibb.co/rxCRxMJ/laptop2-01.png",
    // 'images/slide_6.jpg',
    // 'images/slide_7.jpg'
  ];

  const containerStyles = {
    width: "65%",
    height: "280px",
    margin: "0 auto",
  };

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
      <div>
        <Header />
        <section
          id="home"
          class="home d-flex align-items-center section-bg"
          style={{ background: "white" }}
        >
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  style={{ color: "#134D61" }}
                >
                  Seamless Reconciliation, Verified Payments
                </p>
                <br />
                {/* <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Cross-Platform Collection</h2> */}

                <div class="content">
                  <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                    <li>

                      <strong>KollectIt</strong> ensures collaborative exchange
                      of Cash. Leading to transparent financial transactions.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
                <br />
                <br />
                {/* <Slide>
                  {
                    images.map((each, index) => <img key={index} style={{ width: "70%", alignItems: "center" }} id="slideImage" src={each} />)
                  }
                </Slide> */}
                <img
                  style={{ alignItems: "center" }}
                  id="slideImage"
                  src={Mobilepayment}
                />
              </div>
            </div>
          </div>
        </section>
        <br />
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">
            <div class="row gx-0">
              <div
                class="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src={payment} class="img-fluid" alt="" id="ImgeSize" />
              </div>

              <div
                class="col-lg-6 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <div class="content">
                  <br />
                  <br />
                  <h2
                    style={{
                      color: "#134D61",
                      fontSize: "35px",
                      fontWeight: 600,
                      marginLeft: "-1%",
                    }}
                    id="textCenter"
                  >
                    The Ultimate App for Collection
                  </h2>
                  <br />
                  <br />
                  <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                    <li>
                      Driven by trust concerns and a desire to reduce manual paperwork, a desire for transactions primarily performed in tangible cash is highly prevalent all around the world.
                      <br />
                      <br />
                      Customize The KollectIt App to meet your unique needs and integrate it with in-house software to boost efficiency.
                      <br />
                      <br />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />

          <div class="container">
            <div class="section-title">
              <br />

              <h2
                style={{ color: "#134D61", fontSize: "35px", fontWeight: 600 }}
              >
                Conquer Accounts Receivable Challenges with <strong>KollectIt</strong>
              </h2>
              <br />
              {/* <p>The lack of transparency and the burden of manual documentation can present significant challenges. With KOLLECTIT, entire Islamic Banking transactions are executed digitally in just a few clicks/taps, while  ensuring compliance with Sharia principles. There may no longer be delays caused by continuous
                back-and-forths or pre-signed post-dated documents. Rest assured that The Solution meets Sharia requirements, allowing you to conduct all transactions seamlessly.
                Enhanced Efficiency and Reduced Costs.
              </p>
              <p>With KOLLECTIT, you'll enjoy streamlined processes, reduced monitoring requirements, and associated costs. Say goodbye to the overwhelming requirements of regulatory reporting and filing, because The KOLLECTIT Platform simplifies these tasks for banking users of our website.</p> */}
            </div>
          </div>
        </section>

        <section id="about" class="about">
          <div
            class="container"
            data-aos="fade-up"
            style={{ marginTop: "-5%" }}
          >
            <div class="row gx-0">
              <div
                class="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="content">
                  <h2
                    style={{
                      color: "#134D61",
                      fontSize: "35px",
                      fontWeight: 600,
                      marginLeft: "-1%",
                    }}
                    id="textCenter"
                  >
                    <strong>KollectIt</strong>: The Gateway to Precise Reporting.
                  </h2>
                  <br />
                  <br />
                  <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                    <br />
                    <li>

                      <strong>KollectIt</strong> offers a comprehensive solution to empower businesses and individuals in managing physical cash with confidence. The challenges of accurate tracking and preventing misrepresentations in cash exchanges between parties are effectively addressed by our app.                  </li>
                    <br />
                    <li>


                      <strong>KollectIt's</strong> team will also customize the app to your unique needs when we are informed of your specific requirements.  </li>
                    <br />
                    <li>Boost efficiency by integrating <strong>KollectIt</strong> with your in-house software. Head over to The "Contact Us" page on this website, outline your requirements using the form, hit send and anticipate a prompt response within 24-hours.</li>
                  </ul>
                </div>
              </div>

              <div
                class="col-lg-6 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img src={ladypayment} id="ladiesImage" alt="" />
              </div>
            </div>
          </div>
        </section>

        <div class="container">
          <div class="section-title">
            <h2 data-aos="fade-up" style={{ color: "#134D61" }}>
              Transforming Cash Collection for Unmatched Precision!
            </h2>
            <a
              href="https://play.google.com/store/apps/details?id=com.anostrat.kollectIt"
              target="_blank"
            >
              <img src={KollectitLogo} alt="" srcset="" height={150} />
            </a>
            <h2 data-aos="fade-up" style={{ color: "#134D61" }}>
              Brought to you by...
            </h2>
            <p>
              <a href="https://tecstik.com/" target="_blank">
                <img src={tecstiklogo} alt="" srcset="" height={150} />
              </a>
            </p>
            {/* <h2 data-aos="fade-up" style={{ color: "#134D61" }}>
              <p>
                <img
                  src={logo}
                  alt="logo"
                  srcset=""
                  onClick={handleShow}
                  style={{ height: "150px", width: '150px', cursor: 'pointer' }}
                />
             
              </p>
            </h2> */}
          </div>
        </div>

        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>APK of KollectIt</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Label>Name:</Form.Label>
            <Form.Control placeholder="Enter Your Name" className="mb-1" type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
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


        <Footer />
      </div>
    </>
  );
}

export default Home;
