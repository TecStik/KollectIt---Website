import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./YouNeedKollectit.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import firstImage from "./firstImage.png";
import IIIrdImage from "./IIIrdImage.png";
import IIndImage from "./IIndImage.png";
import Mobile from ".//Mobile.png";
import Setting from "./Setting.png";
import Question from "./Question.png";
import KollectitLogo from "./KollectitLogo.png";
import tecstiklogo from "./tecstiklogo.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Slide2 from "./Slide2.png";
import Slide3 from "./Slide3.png";

const YouNeedKollectit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";

  // const changeTab = (tab) => {
  //   searchParams.set("tab", tab);
  //   setSearchParams(searchParams);
  // };

  const spanStyle = {
    // padding: '20px',
    // background: '#efefef',
    // color: '#000000'
  };

  const divStyle = {
    // display: "flex",
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundSize: 'cover',
    height: "400px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    // ob
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [searchParams]);
  const slideImages = [
    {
      url: Slide2,
      // caption: 'Slide 1'
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      // caption: 'Slide 2'
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Slide 3",
    },
  ];
  return (
    <>
      <Header />

      <div className="slide-container">
        <Slide
          indicators={(index) => (
            <div id="indicator" style={{ marginTop: "-12%", zIndex: 1 }}></div>
          )}
          scale={1.4}
        >
          <div className="each-slide-effect">
            <section
              id="blog"
              style={{
                background: "#7390B6",
                marginBottom: "8%",
              }}
            >
              <img src={KollectitLogo} id="logoImage" alt="" srcset="" />
            </section>
          </div>
          {/*  */}
          <section
            id="blog"
            style={{
              background: "#F8F8FC",
              marginBottom: "8%",
            }}
          >
            <img src={Slide2} id="logoImage2" alt="" srcset="" />
          </section>
          <section
            id="blog"
            style={{
              background: "#F8F8FC",
              marginBottom: "8%",
            }}
          >
            <img src={Slide3} id="logoImage2" alt="" srcset="" />
          </section>
          {/* */}
        </Slide>
      </div>

      <h1
        style={{ color: "#134D61", fontSize: "35px", fontWeight: 600 }}
        className="text-center"
      >
        Payment Retrieval Transformation
      </h1>

      <section id="ReducedMonitoring" class="about">
        <div class="container" data-aos="fade-up" style={{ marginTop: "4%" }}>
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
                  Cost-Efficient Insights
                </h2>
                <br />
                <br />
                <ul style={{ marginLeft: "-5%" }} id="reverseImageText">
                  Take advantage of Real Time Authentication & Monitoring with{" "}
                  <strong>KollectIt</strong>: {}
                  <li className="ml-4">
                    Minimize your manual monitoring efforts.
                  </li>
                  <li className="ml-4">Optimize your resource allocation.</li>
                </ul>
              </div>
            </div>
            <div
              class="col-lg-6 d-flex "
              style={{ justifyContent: "center" }}
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src={firstImage} id="ImgeSize" alt="" />
            </div>
          </div>
          <span id="Seamless"></span>
        </div>
      </section>

      <section class="about">
        <div class="container" data-aos="fade-up" style={{ marginTop: "-5%" }}>
          <div class="row gx-0" id="reverseImage">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={Question} class="img-fluid" alt="" id="ImgeSize" />
            </div>
            <div
              class="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
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
                  Seamless Collaboration
                </h2>
                <br />
                <br />
                <ul style={{ marginLeft: "-5%" }} id="reverseImageText">
                  <strong>KollectIt</strong> brings a comprehensive review:
                  <br />
                  <li className="ml-4">
                  Streamlined communication between collection staff, cashiers, and administrators.{" "}
                  </li>
                  <li className="ml-4">
                  Integrated databases allow admin users to review collections, monitor tasks, and
                    assign roles.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br id="ReassuredAccuracy"></br>
        <br />
      </section>

      <section class="about">
        <div class="container" data-aos="fade-up" style={{ marginTop: "-5%" }}>
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
                  Reassured Accuracy
                </h2>
                <br />
                <br />
                <ul style={{ marginLeft: "-5%" }} id="reverseImageText">
                  Cashiers or managers ensure fulfillment:
                  <li className="ml-4">
                    By adding clients using <strong>KollectIt </strong>.
                  </li>
                  <li className="ml-4">
                    By assigning riders using <strong>KollectIt </strong>.{" "}
                  </li>
                  <li className="ml-4">
                    Viewing deposits using <strong>KollectIt </strong>.
                  </li>
                  <li className="ml-4">
                    Confirming statuses, using <strong>KollectIt </strong>.
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-lg-6 d-flex "
              style={{ justifyContent: "center" }}
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src={Setting} id="ImgeSize" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="ReducedMonitoring" class="about">
        <div class="container" data-aos="fade-up" style={{ marginTop: "-5%" }}>
          <div class="row gx-0" id="reverseImage">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={Mobile} class="img-fluid" alt="" id="ImgeSize" />
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
                  Precise Data Exchange
                </h2>
                <br />
                <br />
                <ul style={{ marginLeft: "-5%" }} id="reverseImageText">
                  All of your collection staff will benefit from the following options:
                  <li className="ml-4">View assigned collections</li>
                  <li className="ml-4"> View collected payments, </li>
                  <li className="ml-4">
                    Verify received payments with client/customer OTP.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br id="SimplifiedComplianc"></br>
      </section>

      <section class="about">
        <div class="container" data-aos="fade-up" style={{ marginTop: "-5%" }}>
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
                  Compliant Reporting
                </h2>
                <br />
                <br />
                <ul style={{ marginLeft: "-5%" }} id="reverseImageText">
                  Ensure easy adherence to regulatory requirements with{" "}
                  <strong>KollectIt</strong>:
                  <li className="ml-4">Centralized data management, </li>
                  <li className="ml-4">Customizable reporting tools, </li>
                  <li className="ml-4">Automated compliance updates.</li>
                </ul>
              </div>
            </div>
            <div
              class="col-lg-6 d-flex "
              style={{ justifyContent: "center" }}
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src={IIndImage} id="ImgeSize" alt="" />
            </div>
          </div>
        </div>
        <br id="ImprovedClarity"></br>
      </section>

      <section class="about">
        <div class="container" data-aos="fade-up" style={{ marginTop: "-5%" }}>
          <div class="row gx-0" id="reverseImage">
            <div
              class="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={IIIrdImage} class="img-fluid" alt="" id="ImgeSize" />
            </div>
            <div
              class="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
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
                  Clear Decision-Making
                </h2>
                <br />
                <br />
                <ul
                  style={{ listStyleType: "none", marginLeft: "-5%" }}
                  id="reverseImageText"
                >
                  <li>
                    With <strong>KollectIt's</strong> Paid Admin Panel:
                    <li className="ml-4">Access your organization's visualized data analytics, simplified
                     user feedback analysis, and clear communication </li>

                     <li className="ml-4"><strong>KollectIt's</strong> Admin Panel empowers data-driven decision-making, user-centric
                    improvements, and stakeholder transparency.</li>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
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
          <h2 data-aos="fade-up" style={{ color: "#134D61" }}>
            <p>
              <a
                href="https://play.google.com/store/apps/details?id=com.anostrat.kollectIt"
                target="_blank"
              >
                <img
                  src="https://i0.wp.com/www.techdigest.tv/wp-content/uploads/2021/02/get-it-on-google-play-badge.png?ssl=1"
                  alt=""
                  srcset=""
                  height={50}
                />
              </a>
            </p>
          </h2>
        </div>
      </div>

      {/* <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> */}
      <Footer />
    </>
  );
};

export default YouNeedKollectit;
