import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./YouNeedKollectit.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import firstImage from "./firstImage.png";
import IIIrdImage from "./IIIrdImage.png";
import IIndImage from "./IIndImage.png";
import Mobile from "../Images/whyJoin/Mobile1.png";
import Setting from "../Images/whyJoin/Setting.png";
import Question from "../Images/whyJoin/Question.png";

import KollectitLogo from "./KollectitLogo.png";
import tecstiklogo from "./tecstiklogo.png";

const YouNeedKollectit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";

  // const changeTab = (tab) => {
  //   searchParams.set("tab", tab);
  //   setSearchParams(searchParams);
  // };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [searchParams]);

  return (
    <>
      <Header />
      <section
        id="blog"
        style={{
          background: "#7390B6",
          marginBottom: "8%",
        }}
      >
        <img src={KollectitLogo} id="logoImage" alt="" srcset="" />
      </section>

      <h1
        style={{ color: "#134D61", fontSize: "35px", fontWeight: 600 }}
        className="text-center"
      >
        Revamp your payment retrieval
      </h1>

      <section id="ReducedMonitoring" class="about">
        <div class="container" data-aos="fade-up" style={{ marginTop: "5%" }}>
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
                  Reduced Monitoring Costs: Streamlined Insights for Efficient
                  Management
                </h2>
                <br />
                <br />
                <ul
                  style={{ listStyleType: "none", marginLeft: "-5%" }}
                  id="reverseImageText"
                >
                  <li>
                    Real-time data visualization and automated alerts minimize
                    manual monitoring efforts and optimize resource allocation.
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
                <ul
                  style={{ listStyleType: "none", marginLeft: "-5%" }}
                  id="reverseImageText"
                >
                  <li>
                  <strong>KollectIt</strong> enhances communication among collection staff, cashiers, and admins through integrated databases. As Admin User, you can review collections, monitor tasks, and assign roles.
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
                <ul
                  style={{ listStyleType: "none", marginLeft: "-5%" }}
                  id="reverseImageText"
                >
                  <li>
                  After designation, cashiers or managers ensure fulfillment. Signed in, they can add clients, assign riders, view deposits, check statuses, and more using <strong>KollectIt </strong>.
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
                <ul
                  style={{ listStyleType: "none", marginLeft: "-5%" }}
                  id="reverseImageText"
                >
                  <li>
                  Upon accessing The KollectIt Home Screen, Riders or Payment Collection Staff can view assigned collections, collected payments, and verify with OTP (One-Time-Password) received by clients/customers.





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
                  Simplified Compliance Reporting: Effortless Compliance with
                  Regulatory Standards
                </h2>
                <br />
                <br />
                <ul
                  style={{ listStyleType: "none", marginLeft: "-5%" }}
                  id="reverseImageText"
                >
                  <li>
                    Centralized data management, customizable reporting tools,
                    and automated compliance updates ensure easy adherence to
                    regulatory requirements.
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
                  Improved Clarity: Enhanced Understanding and Decision-Making
                </h2>
                <br />
                <br />
                <ul
                  style={{ listStyleType: "none", marginLeft: "-5%" }}
                  id="reverseImageText"
                >
                  <li>
                    Visualized data analytics, simplified user feedback
                    analysis, and clear communication empower data-driven
                    decision-making, user-centric improvements, and stakeholder
                    transparency.
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
