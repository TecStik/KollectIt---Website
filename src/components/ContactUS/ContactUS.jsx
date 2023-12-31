import { message, Spin } from "antd";
import map from "./map.PNG";
import React, { useRef, useState, useEffect } from "react";
import "./ContactUS.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import tecstiklogo from "./tecstiklogo.png";
import KollectitLogo from "./KollectitLogo.png";

export default function ContactUS() {
  const [loading, setloading] = useState(true);
  function maplink() {
    window.open("https://goo.gl/maps/AhT2xjDLpdB3juyy8", "_blank");
  }

  return (
    <div>
      <Header />

      <br />
      <br />
      {/* <br /> */}
      <div class="hero-content" data-aos="fade-up">
        <h2 style={{ color: "#134D61", fontSize: "60px" }}>Contact Us</h2>
      </div>
      <br />
      {/* <br />
      <br /> */}

      <div id="CareersForm" class="Careers">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h3 style={{ color: "#134D61", fontSize: "40px" }}>
              </h3>
              <p style={{ fontSize: "20px" }}>
              </p>

              <div class="mb-3n">
                <h3 style={{ color: "#134D61", fontSize: "40px" }}>
                  Send Us an Email
                </h3>
                <p>
                  <a
                    href="mailto:info@tecstik.com"
                    class="text-black"
                    style={{ fontSize: "20px" }}
                  >
                    info@tecstik.com
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <img
                title="myFrame"
                src={map}
                id="locationMap"
                // height="200"
                // class="mb-4 mb-lg-0"
                class="col-md-10 col-lg-10 col-xl-10 mx-auto mb-md-0"
                referrerpolicy="no-referrer-when-downgrade"
                frameborder="0"
                onClick={maplink}
              />
              <br />
              <br />
              <button
                type="button"
                class="btn btn-primary"
                style={{ background: "#578B9D", alignItems: "center" }}
                id="googleMapbtn"
                onClick={maplink}
              >
                Open in Google Maps
              </button>
            </div>

            <div class="col-lg-6" style={{ backgroundColor: "#ECECEC" }}>
              <br />
              <br />
              <br />
              <form
                // action="forms/Careers.php"
                // method="post"
                // onSubmit={SndEmail}
                role="form"
                class="email-form"
              >
                <div class="row">
                  <div class="col-md-6 form-group ">
                    <input
                      style={{ margin: 10, padding: 10, color: "white" }}
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                      // ref={firstname}
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      style={{ margin: 10, padding: 10, color: "white" }}
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                      // ref={firstEmail}
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    // ref={firstSubject}
                    style={{ margin: 10, padding: 10, color: "white" }}
                  />
                </div>
                <div class="form-group mt-3">
                  <textarea
                    style={{ margin: 10, padding: 10, color: "white" }}
                    class="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                    // ref={firstMessage}
                  ></textarea>
                </div>
                <div class="text-center">
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#578B9D",
                      margin: 10,
                      padding: 10,
                      color: "white",
                      borderRadius: 20,
                    }}
                    disabled
                  >
                    Send Message
                  </button>
                  {/* {loading ? <button type="submit" class="y">Send Message</button> : <Spin size="large" />} */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
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
      {/* <br /> */}
      {/* <br /> */}
      <br />
      <Footer />
    </div>
  );
}
