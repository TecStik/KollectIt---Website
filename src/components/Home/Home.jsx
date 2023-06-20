import React from "react";
import "./Home.css";
import payment from '../Images/payment.png'
import Mobilepayment from '../Images/Mobilepayment.png'
import { Slide, Zoom } from 'react-slideshow-image';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ladypayment from '../Images/ladypayment.png'


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
        <section id="hero" class="hero d-flex align-items-center section-bg" style={{ background: "white" }}>
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
                  <h2 style={{ color: "#134D61" }}>The Ultimate Collection App for All Platforms</h2>
                  <br />
                  <br />
                  <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                    <li>Looking at the mix of banking transactions, paper-based activity still dominates the share in transaction value. While digital options are freely available, people prefer dealing in hard cash and checks. A lack of trust of online channels is one of the main issues, but avoiding documentation are is also a major contributory factors. With The KollectIt Cross-Platform App, The Admin User is granted Super Access allowing them to assign Team Members to roles, overlook each Team Member’s Task Status, remove roles as per needed or even finish a Team Member’s access to information. With separate priviledges for Cashier’s and Riders (Collection Staff), KollectIt ensures the collection aspect of any collection endeavor is optimized.</li>
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
              <h2>Conquer Collection Challenges with KollectIt</h2>
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
                  <h2>KOLLECTIT is aligned with the vision of digitalized Islamic Banking.</h2>
                  <br />
                  <br />
                  <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                    <li>By leveraging KOLLECTIT, you can complement the country's digital transformation efforts. Embrace the possibility of integrating with The Raast Network and stay ahead of the curve.</li>
                    <br />
                    <li>Join us on this groundbreaking journey as we reshape Islamic Banking. Embrace innovation, improve efficiency, and ensure true Sharia compliance using KOLLECTIT. Contact us now to learn more about our transformative solution and how it can benefit your organization. Let's revolutionize Islamic Banking and Financial Services with KOLLECTIT</li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <img src={ladypayment} id="ladiesImage" alt="" />
              </div>
            </div>
          </div>
        </section>


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
