import React from "react";
import "./HowItWork.css";
import payment from '../Images/payment.png'
import Mobilepayment from '../Images/Mobilepayment.png'
import { Slide, Zoom } from 'react-slideshow-image';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ladypayment from '../Images/ladypayment.png'
import splash from './splash.png'
import step00 from './step00.png'
import step1 from './step01.png'
import step02 from './step02.png'
import step3 from './step03.png'
import step4 from './step04.png'
import step05 from './step05.png'
import step6 from './step06.png'
import step7 from './step07.png'
import step8 from './step08.png'
import step9 from './step09.png'
import step10 from './step10.png'

function HowItWork() {

  return (
    <>
      <div>
        <Header />
        <section id="SplashImage"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + splash})`,
          }}
        />
        <div class="section-title">
          <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }} >ADMIN(S)</h2>
        </div>

        <section id="hero" class="hero d-flex align-items-center section-bg" style={{ background: "white" }}>
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <br />
                <br />
                <div class="content m-2">
                  <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Register</p>
                  <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Step-00</h2>
                  <h6>The user can register themselves  as an Organization’s Admin by providing relevant details:</h6>
                  <div class="col-lg-6 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
                    <div class="content m-2" style={{ textAlign: "left" }}>
                      <ul>
                        <li>Company Name:</li>
                        <li>Short Code</li>
                        <li>Login Id</li>
                        <li>Password  </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
                <br />
                <br />
                <img  src={step00} class="img-fluid" alt="" id="ImgeSize" />
              </div>
            </div>
          </div>
        </section>
        
        <br />
        
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <img src={step1} class="img-fluid" alt="" id="ImgeSize" />
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content" style={{ marginLeft: "15%" }}>
                  <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Login</h2>
                  <h5 data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Step-01</h5>
                  <br />
                  <br />
                  <h6>By Logging in to The KollectIt App as Admin, The User is displayed The Admin Home Screen to access features like:</h6>
                  <div class="col-lg-6 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
                    <div class="content m-2" style={{ textAlign: "left" }}>
                      <ul>
                        <li>Add members</li>
                        <li>View Team members</li>
                        <li>View Reports</li>
                        <li>View Transaction(s) Status</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="hero" class="hero d-flex align-items-center section-bg" style={{ background: "white" }}>
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content">
                  <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Add Member</p>
                  <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Step-02</h2>
                  <h6>The Admin adds members to their organization, including:</h6>
                  <div class="col-lg-6 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
                    <div class="content m-2" style={{ textAlign: "left" }}>
                      <ul>
                        <li>Company Name:</li>
                        <li>Short Code</li>
                        <li>Login Id</li>
                        <li>Cashiers</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
                <br />
                <br />
                <img style={{ marginLeft: "15%" }} src={step02} class="img-fluid" alt="" id="ImgeSize" />
              </div>

            </div>
          </div>
        </section>

        <div class="section-title">
          <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }}>CASHIER(S)</h2>
        </div>

        <br />
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <img src={step3} class="img-fluid" alt="" id="ImgeSize" />
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content" style={{ marginLeft: "15%" }}>
                  <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Cashier Home</h2>
                  <h5 data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Step-03</h5>
                  <br />
                  <br />
                  <h6>The Cashier can login to the app with the credentials provided by the Admin. Displayed The KollectIt Cashier Home Screen,  the Cashier is free to:</h6>
                  <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
                    <div class="content m-2" style={{ textAlign: "left" }}>
                      <ul>
                        <li>Add Client to the organisation</li>
                        <li>Assign Riders to Client</li>
                        <li>View Deposits: Payments received from the rider to bank or to the supervisor</li>
                        <li>View Payments collected by assigned  riders in real time.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hero" class="hero d-flex align-items-center section-bg" style={{ background: "white" }}>
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content">
                  <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Add Client(s)</p>
                  <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Step-04</h2>
                  <h6>When adding a client(s), the following details are required:</h6>
                  <div class="col-lg-6 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
                    <div class="content m-2" style={{ textAlign: "left" }}>
                      <ul>
                        <li>Client Id</li>
                        <li>Client Name</li>
                        <li>Contact Number</li>
                        <li>Email</li>
                        <li>Amount</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
                <br />
                <br />
                <img style={{ marginLeft: "15%" }} src={step4} class="img-fluid" alt="" id="ImgeSize" />
              </div>

            </div>
          </div>
        </section>

        <br />
        <br />

        <section id="about" class="about">
          <div class="container" data-aos="fade-up">

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <img src={step05} class="img-fluid" alt="" id="ImgeSize" />
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content" style={{ marginLeft: "15%" }}>
                  <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Assign Rider(s) to Client(s)</h2>
                  <h5 data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Step-05</h5>
                  <br />
                  <br />
                  <h6>Assign Rider(s) to your Clients by selecting a Member of the Designated Collection Staff and specifying an amount to be collected, if required.</h6>
                  {/* <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
                    <div class="content m-2" style={{ textAlign: "left" }}>
                      <ul>
                        <li>Add Client to the organisation</li>
                        <li>Assign Riders to Client</li>
                        <li>View Deposits: Payments received from the rider to bank or to the supervisor</li>
                        <li>View Payments collected by assigned  riders in real time.</li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>


        <br />
        <br />
        <div class="section-title">
          <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }}>Rider(S)</h2>
        </div>

        <br />
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <img src={step6} class="img-fluid" alt="" id="ImgeSize" />
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content" style={{ marginLeft: "15%" }}>
                  <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Rider Home</h2>
                  <h5 data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Step-06</h5>
                  <br />
                  <br />
                  <h6>By Logging in to The KollectIt App as Rider, The User will be Navigated to The Rider Home Screen to access features like:</h6>
                  <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
                    <div class="content m-2" style={{ textAlign: "left" }}>
                      <ul>
                        <li>Client List: to see, clients assigned to them.</li>
                        <li>Payment Collections: To view all collected payments.</li>
                        <li>Verify Payments: Verify recently collected unverified payment.</li>
                        <li>View Transactions: View transactions within an Organization, including collections and internal transfers.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hero" class="hero d-flex align-items-center section-bg" style={{ background: "white" }}>
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content">
                  <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>View Assigned Clients </p>
                  <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Step-07</h2>
                  <h6>Free to choose from an option at the rider’s home screen, to view their assigned collections, Riders can conveniently view a list of collections assigned to them.</h6>
                  <div class="col-lg-6 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
                    {/* <div class="content m-2" style={{ textAlign: "left" }}>
                      <ul>
                        <li>Client Id</li>
                        <li>Client Name</li>
                        <li>Contact Number</li>
                        <li>Email</li>
                        <li>Amount</li>
                      </ul>
                    </div> */}
                  </div>
                </div>

              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
                <br />
                <br />
                <img style={{ marginLeft: "15%" }} src={step7} class="img-fluid" alt="" id="ImgeSize" />
              </div>

            </div>
          </div>
        </section>

        <br />
        <br />

        <section id="about" class="about">
          <div class="container" data-aos="fade-up">

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <img src={step8} class="img-fluid" alt="" id="ImgeSize" />
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content" style={{ marginLeft: "15%" }}>
                  <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Collect Payment from assigned Client</h2>
                  <h5 data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Step-08</h5>
                  <br />
                  <br />
                  <h6>The rider collect’s payments from assigned clients by specifying</h6>
                  <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
                    <div class="content m-2" style={{ textAlign: "left" }}>
                      <ul>
                        <li>Amount Collected</li>
                        <li>Select Mode of Payment  if Cheque/Cash</li>
                        <li>Attach Cheque Copy if :cheque</li>
                      </ul>
                    </div>
                  </div>
                  <h6>Upon submitting detail, a Payment Verification code is sent to the client.</h6>
                  <h6>Client to share PVC with rider to receive digital receipt of its Payment.</h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        <br />
        <br />
        <section id="hero" class="hero d-flex align-items-center section-bg" style={{ background: "white" }}>
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content">
                  <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}> Upon proceed an payment verification code</p>
                  <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Step-09</h2>
                  <h6>Collecting from assigned clients, a Rider must specify</h6>
                  <div class="col-lg-6 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
                    <div class="content m-2" style={{ textAlign: "left" }}>
                      <ul>
                        <li>Amount Collected</li>
                        <li>Select Mode of Payment  if Check or Cash</li>
                        <li>Attach a Picture of a Check, if that’s the mode of payment.</li>
                      </ul>
                    </div>
                  </div>
                  <h6>Upon submitting details, a Payment Verification code (PVC) or OTP (One Time Password) is sent to the client.</h6>
                  <h6>The client simply shares The PVC with The Rider to receive Digital Receipt of Payment.</h6>
                </div>

              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
                <br />
                <br />
                <img style={{ marginLeft: "15%" }} src={step9} class="img-fluid" alt="" id="ImgeSize" />
              </div>

            </div>
          </div>
        </section>

        <br />
        <br />

        <section id="about" class="about">
          <div class="container" data-aos="fade-up">

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <img src={step10} class="img-fluid" alt="" id="ImgeSize" />
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content" style={{ marginLeft: "15%" }}>
                  <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Rider enter OTP verify Payment</h2>
                  <h5 data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Step-10</h5>
                  <br />
                  <br />
                  <h6>The rider is suppose to collect payments from assigned clients by specifying</h6>
                  <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
                    <div class="content m-2" style={{ textAlign: "left" }}>
                      <ul>
                        <li>Amount Collected</li>
                        <li>Select Mode of Payment  if Cheque/Cash</li>
                        <li>Attach Cheque Copy if :cheque</li>
                      </ul>
                    </div>
                  </div>
                  <h6>Upon submitting detail, a Payment Verification code is sent to the client.</h6>
                  <h6>Client to share PVC with rider to receive digital receipt of its Payment.</h6>
                </div>
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

        <br />
        <br />
        <br />
        <br />
        <br />
        {/*  */}
        <Footer />

      </div>
    </>
  );
}

export default HowItWork;
