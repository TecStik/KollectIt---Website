import React from "react";
import "./Home.css";
import payment from '../Images/payment.png'
import Mobilepayment from '../Images/Mobilepayment.png'
import { Slide, Zoom } from 'react-slideshow-image';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ladypayment from '../Images/ladypayment.png'
import tecstiklogo from './tecstiklogo.png';

function Home() {

  let height = "150px";

  const images = [
    'https://i.ibb.co/phKFyrw/laptop-1.png',
    'https://i.ibb.co/Jdg09c9/laptop-2-01-01.png',
    'https://i.ibb.co/zZGXhHj/laptop-3-01.png',
    'https://i.ibb.co/sgTV4Tv/laptop-4-01.png',
    'https://i.ibb.co/SBKzNg8/laptop-5-01.png',
    'https://i.ibb.co/7WsMX04/laptop-6-01.png',
    'https://i.ibb.co/QYWZKRj/laptop-7.png',
    'https://i.ibb.co/6YMKwdN/laptop-8-01.png',
    'https://i.ibb.co/c8Br4nx/laptop-9-01.png',
    'https://i.ibb.co/TH6Cpm6/laptop-10-01.png',
    'https://i.ibb.co/MhNhwSt/laptop-11-01.png',
    'https://i.ibb.co/rxCRxMJ/laptop2-01.png',
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
        <section id="home" class="home d-flex align-items-center section-bg" style={{ background: "white" }}>
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div
                class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Taming the Chaos of Collection</p>
                <br />
                <br />
                {/* <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Cross-Platform Collection</h2> */}

                <div class="content">
                  <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                    <li>Economic Crimes, Payment Discrepancies, Inaccurate Reporting, Payment Fraud, etc., are all problems faced by Businesses and Individuals. KollectIt offers an effortless way to ensure yours or a collection team’s reporting is precise.</li>
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
                <img style={{ alignItems: "center" }} id="slideImage" src={Mobilepayment} />
              </div>
            </div>
          </div>
        </section>
        <br />
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <img src={payment} class="img-fluid" alt="" id="ImgeSize" />
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content">

                  <br />
                  <br />
                  <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }} id="textCenter">The Ultimate Collection App for All Platforms</h2>
                  <br />
                  <br />
                  <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                    <li>Looking at the mix of banking transactions, paper-based activity still dominates the share in transaction value. While digital options are freely available, people prefer dealing in hard cash and checks. A lack of trust in online channels is one of the main issues, but avoiding documentation is also a major contributory factor. With The KollectIt Cross-Platform App, Admin Users are granted Super Access allowing them to assign team members to roles, overlook each team member’s status of tasks assigned to them, remove or switch roles of team members and even revoke a team member’s access to information if needed. With separate privileges for Cashier’s and Riders (Collection Staff), KollectIt maximizes the efficiency of collecting cash in any collection effort.</li>
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

              <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }} >Conquer Collection Challenges with KollectIt</h2>
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
          <div class="container" data-aos="fade-up" style={{ marginTop: "-5%" }}>
            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div class="content">
                  <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }} id="textCenter">KollectIt is The Key to Accurate Reporting</h2>
                  <br />
                  <br />
                  <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                    <li>Venturing into the realm of handling hard cash becomes a daunting endeavour for businesses and individuals. Misrepresenting amounts of cash exchanges becomes highly likely, when two separate parties are involved.</li>
                    <br />
                    <li>The Mobile and Desktop (hybrid) Software behind KollectIt enable clear-cut methods to authenticate how much cash is exchanged between both parties of cash transactions. Using OTPs (One-Time-Passwords) sent by KollectIt, The Providers of cash can verify the sum of cash provided. The cashier or person responsible to validate the receipt of cash or check from the receiving end, conveniently identifies the exact amount to be received so the scrutiny of parties is conducted with enhanced precision. </li>
                    <br />
                    <li>The Team behind KollectIt is geared to tailor the application to specific requirements of users. With user-friendly integration between other in-house software your financial team uses, KollectIt increases the likelihood of resolving discrepancies effectively. Simply send detailed requirements to
                      <a href="mailto:info@tecstik.com" class="text-black"><b> info@tecstik.com </b></a> and  anticipate a prompt response from KollectIt’s developers within 24-Hours.</li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <img src={ladypayment} id="ladiesImage" alt="" />
              </div>
            </div>
          </div>
        </section>
        
        <div class="container">
          <div class="section-title">
            {/* <img src={Spalsh} class="img-fluid" alt="" id="Splash" /> */}
            <img src={tecstiklogo} alt="" srcset="" height={150} />
            <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Supercharge your cash collection</h2>
            <br />
            <p>
              <a href="https://play.google.com/store/apps/details?id=com.anostrat.kollectIt" target="_blank">
                <img src="https://i0.wp.com/www.techdigest.tv/wp-content/uploads/2021/02/get-it-on-google-play-badge.png?ssl=1" alt="" srcset="" height={50} />
              </a>
            </p>
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
