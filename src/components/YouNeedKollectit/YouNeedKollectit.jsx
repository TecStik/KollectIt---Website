import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./YouNeedKollectit.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import payment from "../Images/payment.png";
import ladypayment from "../Images/ladypayment.png";
import splash from "../Images/splash1.png";
import Mobile from "../Images/whyJoin/Mobile1.png";
import Setting from "../Images/whyJoin/Setting.png";
import Question from "../Images/whyJoin/Question.png";

import KollectLogo from "./KollectitLogo.png";
import tecstiklogo from "./tecstiklogo.png";

import CoursalImage from "./CoursalImage.png";

const YouNeedKollectit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";

  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };

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
          //   backgroundImage:`url(${KollectLogo})`,
        }}
      >
        <img src={KollectLogo} id="logoImage" alt="" srcset="" />
        {/* <h2 class="text-center">By...</h2>
        <img src={tecstiklogo} id="logoImageTec" alt="" srcset="" /> */}
      </section>

      <h1
        style={{ color: "#134D61", fontSize: "35px", fontWeight: 600 }}
        className="text-center"
      >
        Revamp Your Cash Collection Game Now!
      </h1>

      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
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
                  Seamless Collaboration
                </h2>
                <br />
                <br />
                <ul
                  style={{ listStyleType: "none", marginLeft: "-5%" }}
                  id="reverseImageText"
                >
                  <li>
                    With integrated databases, KollectIt brings the finest
                    communication between your collection team. Carefully
                    examine the collection processes as an Admin User by
                    confirming, reviewing status(es) and assigning team members
                    to relevant roles.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>

      <section id="about" class="about">
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
                    Once designated for the position, your cashier or manager is
                    tasked with ensuring fulfilment. After signing in, the
                    functionality of adding a Client(s), Assigning Rider(s) for
                    collection, viewing and making payment deposits, viewing
                    payment statuses and more are available to them.
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

      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
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
                    When assigned to the role of a Rider, a cash collector can
                    select an option from their home screen. On the home screen,
                    riders can view the list of collections designated to them,
                    a register of the payments they have collected, and they can
                    verify recently collected payments with a PVC(Payment
                    Verification Code) sent to a client.
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
          {/* <img src={Spalsh} class="img-fluid" alt="" id="Splash" /> */}
          <h2 data-aos="fade-up" style={{ color: "#134D61" }}>
            Supercharge your cash collection
          </h2>
          <br />
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
          <h2 data-aos="fade-up" style={{ color: "#134D61" }}>
            Brought to you by...
          </h2>
          <a href="https://tecstik.com/" target="_blank">
            <img src={tecstiklogo} alt="" srcset="" height={150} />
          </a>
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
