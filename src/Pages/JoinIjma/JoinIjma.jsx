import React from 'react';
import Header from '../../components/Header/Header';
import './JoinKOLLECTIT.css';
import arabic from "../../assests/arabic.png";
import Footer from "../../components/Footer/Footer";



export default function JoinKOLLECTIT() {
  return (
    <>

      <div>
        <Header />
        {/* <br /> */}
        {/* <br />
        <br />
        <br />
        <br /> */}
        {/* <br /> */}
        {/* <br /> */}
        {/* <br /> */}

        <section id="JoinKOLLECTIT" class="JoinKOLLECTIT d-flex align-items-center section-bg">
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#11366B" }}>Our Platform</p>
                <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#11366B", fontSize: "30px" }}>Join KOLLECTIT as an IBFI</p>
                <h6 data-aos="fade-up" style={{ color: "black" }}>Using Blockchain and Advanced Technologies, KOLLECTIT offers a disruptive alternative for organizations seeking to overcome the high cost, risk, and friction associated with existing Islamic Banking and Financial Services Operations.</h6>
                <br />
                <h6>KOLLECTIT effectively tackles the criticism surrounding Islamic Banks adhering to conventional banking controlled by the State Bank of Pakistan.</h6>
                <br />
                <h6 data-aos="fade-up" style={{ color: "black" }}>KOLLECTIT enables the digitization of Islamic Banking with Transparency and Security. KOLLECTIT is a permissioned Blockchain network of Islamic Financial Institutions (IFIs).</h6>
                <br />
                <br />
                <div style={{
                  background: "#E6E6E6", margin: "7px", padding: "7px", borderRadius: "42px",
                  fontSize: "18px", fontFamily: "200px"
                }}>
                  <ul>
                    <li>Blockchain has taken The Financial World by storm.</li>
                    <li>The Technology is at the Center of a massive push for innovation in the global financial sector </li>
                    <li>It holds the potential to fundamentally alter how transactions are conducted </li>
                    <li>The technology is also known as the “Internet of Value”</li>
                    <li> It increases the efficiency, security and transparency of transactions</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
                <img src={arabic} id="labtopImage" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" />
              </div>
            </div>
          </div>
        </section>



      </div>
      <div id='KOLLECTITfooter'>
        <Footer />
      </div>
    </>
  )
}
