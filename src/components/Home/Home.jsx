import React from "react";
import "./Home.css";
import payment from "../Images/payment.png";
import Mobilepayment from "../Images/Mobilepayment.png";
import { Slide, Zoom } from "react-slideshow-image";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ladypayment from "../Images/ladypayment.png";
import tecstiklogo from "./tecstiklogo.png";
import KollectitLogo from "./KollectitLogo.png";

function Home() {
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
                  Bridge Disrepancies: Seamlessly Reconcile Accounts
                </p>
                <br />
                <br />
                {/* <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Cross-Platform Collection</h2> */}

                <div class="content">
                  <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                    <li>
                      Economic Crimes, Payment Disrepancies, Inaccurate
                      Reporting, Payment Fraud, are all problems faced by
                      Businesses and Individuals.
                      <br />
                      <br />
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
                      Despite the availability of digital alternatives, there is
                      a preference for tangible cash and checks in financial
                      transactions. A lack of trust in online channels is one of
                      the main issues, but reducing reliance on manual paperwork
                      is also a significant catalyst for improvement. 
                      <br/>
                      <br/>
                      The <strong>KollectIt</strong> Mobile App offers smooth confirmation of delivery or retrieval, reducing discrepancies for both parties involved. allowing them to assign team members to
                      roles, keep tabs on every team member's task status with
                      ease, remove or switch roles of team members and even
                      revoke a team members access to information if needed.
                      <strong>KollectIt</strong> maximizes the efficiency of collecting cash in
                      any collection effort.
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
                      

                    <strong>KollectIt's</strong> team will also customize the app to your unique needs when we are informed of your specific requirements. Boost efficiency by integrating <strong>KollectIt</strong> with your in-house software. Head over to The "Contact Us" page on this website, outline your requirements using the form, hit send and anticipate a prompt response within 24-hours. </li>
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
              Transforming your Accounts Receivables for Unmatched Precision!
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

        {/* <div class="container">
          <div class="section-title">
            <h2><span></span>Overcome the Challenges of Murabaha with KOLLECTIT</h2>
            <br />
            <p>
              Stand out from conventional banks and strengthen your Islamic Banking window with KOLLECTIT. KOLLECTIT offers enhanced regulatory compliance, real-time automated reporting, and superior controls that minimize the need for physical inspections and audits. Embrace transparency and security, as Blockchain Technology functions to diminish the risks of forgery and ensures the integrity of your transactions. Paving the Way to Authentically Digitized Islamic Banking.
            </p>
          </div>
        </div> */}

        {/*  */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
