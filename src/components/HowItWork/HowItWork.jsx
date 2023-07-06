import React from "react";
import "./HowItWork.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import splash from './splash.png'
import Spalsh from './Spalsh.jpeg'


import loginAdmin from './Admin/loginAdmin.png'
import adminHome from './Admin/adminHome.png'
import adminCashier from './Admin/adminCashier.png';
import AdminRider from './Admin/AdminRider.png';
import arrowImage from './arrowImage.jpg'
import Register from './Register.png';
import Welcome from './Welcom.png';


import CashierLogin from './Cashier/Cashierlogin.png'
import cashierHome from './Cashier/cashierHome.png'
import ClientForm from './Cashier/ClientForm.png'
import ChooseRider from './Cashier/chooseRider.png'
import AssignRider from './Cashier/AssignRider.png'

import RiderLogin from './Rider/riderLogin.png'
import RiderHome from './Rider/riderHome.png'
import riderClientList from './Rider/riderClientList.png'
import RiderCollect from './Rider/collectCashorCheque.png'
import enterOPT from './Rider/enterOPT.png'
import OTPconfirmation from './Rider/OTPconfirmation.png'



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
        <div class="container">
          <div class="section-title">
            <br />
            <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }} >How it Works</h2>
            <br />
            <p>Use KollectIt to streamline financial processes and eliminate discrepancies. The app utilizes integrated databases to provide a comprehensive solution for managing payments and ensuring smooth transactions. </p>
          </div>
        </div>

        <div class="section-title">
          <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }} >ADMIN(S)</h2>
          <p>With our user-friendly interface, admins can easily examine payment statuses, assign roles to collection staff and cashiers, and track payment fulfillment using both Smartphones and Desktops.</p>
        </div>

        <section id="howItWork" class="howItWork d-flex align-items-center section-bg" style={{ background: "white" }}>
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <br />
                <br />
                <div class="content m-2">
                  <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61", fontWeight: 500, fontSize: 33, marginBottom: "1%" }}>Register</p>
                  <h5 data-aos="fade-up" style={{ color: "#134D61" }}>Step-00</h5>
                  <br />
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
              <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
                <br />
                <br />
                <img src={Welcome} alt="" id="newImageSize" />
                <img src={arrowImage} alt="" height={25} width={50} style={{ marginTop: "auto", marginBottom: "auto" }} />
                <img src={Register} alt="" id="newImageSize" />
              </div>
            </div>
          </div>
        </section>

        <br />
        <br />

        <section id="about" class="about">
          <div class="container" data-aos="fade-up">

            <div class="row gx-0" id="">
              <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
                <img src={loginAdmin} alt="" id="newImageSize" />
                <img src={arrowImage} alt="" height={25} width={50} style={{ marginTop: "auto", marginBottom: "auto" }} />
                <img src={adminHome} alt="" id="newImageSize" />
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content" id="leftContent">
                  <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 33, marginBottom: "1%" }}>Login</h1>
                  <h5 data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Step-01</h5>
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


        <section id="howItWork" class="howItWork d-flex align-items-center section-bg" >
          <div class="container" id="howItWorkContain">
            <div class="row justify-content-between gy-5">
              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content m-4">
                  <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61", fontWeight: 500, fontSize: 33, marginBottom: "1%" }}>Add Member</p>
                  <h5 data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61", }}>Step-02</h5>
                  <br />
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
              <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
                <img src={adminHome} alt="" id="newImageSizeThree" />
                <img src={arrowImage} alt="" height={12} width={20} style={{ marginTop: "auto", marginBottom: "auto" }} />
                <img src={adminCashier} alt="" id="newImageSizeThree" />
                <img src={arrowImage} alt="" height={12} width={20} style={{ marginTop: "auto", marginBottom: "auto" }} />
                <img src={AdminRider} alt="" id="newImageSizeThree" />
              </div>
            </div>
          </div>
        </section>

        {/* <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600, textAlign: "center", justifyContent: "center" }} id="HeadeingCashier"></h2> */}
        <div class="section-title">
          <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }}>CASHIER(S)</h2>
      <p>Cashiers play a pivotal role in the system too, as they have the ability to assign relevant staff to collect payments from specific clients and oversee the entire payment process.</p>
        </div>

        <section id="about" class="about">
          <div class="container" data-aos="fade-up" id="howItWorkContain">
            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
                <img src={CashierLogin} alt="" id="newImageSize" />
                <img src={arrowImage} alt="" height={25} width={50} style={{ marginTop: "auto", marginBottom: "auto" }} />
                <img src={cashierHome} alt="" id="newImageSize" />
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content" id="leftContent">
                  <h2 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 600, fontSize: 33, marginBottom: "1%" }}>Cashier Home</h2>
                  <h5 data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Step-01</h5>
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

        <section id="howItWork" class="howItWork d-flex align-items-center section-bg" style={{ background: "white" }}>
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content m-4">
                  <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61", fontWeight: 500, fontSize: 33, marginBottom: "-2%" }}>Add Client(s)</p>
                  <h5 data-aos="fade-up" style={{ color: "#134D61" }}>Step-02</h5>
                  <br />
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
              <div class="col-lg-6  order-1 order-lg-2 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
                <img src={cashierHome} alt="" id="newImageSize" />
                <img src={arrowImage} alt="" height={25} width={50} style={{ marginTop: "auto", marginBottom: "auto" }} />
                <img src={ClientForm} alt="" id="newImageSize" />
              </div>

            </div>
          </div>
        </section>

        <br />
        <br />

        <section id="about" class="about">
          <div class="container" data-aos="fade-up">

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
                <img src={cashierHome} alt="" id="newImageSizeThree" />
                <img src={arrowImage} alt="" height={12} width={20} style={{ marginTop: "auto", marginBottom: "auto" }} />
                <img src={AssignRider} alt="" id="newImageSizeThree" />
                <img src={arrowImage} alt="" height={12} width={20} style={{ marginTop: "auto", marginBottom: "auto" }} />
                <img src={ChooseRider} alt="" id="newImageSizeThree" />
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content" id="leftContent">
                  <h2 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 600, fontSize: 33, marginBottom: "1%" }}>Assign Rider(s) to Client(s)</h2>
                  <h5 data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Step-03</h5>

                  <br />
                  <h6>Assign Rider(s) to your Clients by selecting a Member of the Designated Collection Staff and specifying an amount to be collected, if required.</h6>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600, textAlign: "center", justifyContent: "center" }} id="HeadeingCashier">Rider(S)</h2> */}
        <div class="section-title">
          <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }}>Payment Collection Staff</h2>
          <p>Customers can ensure payment confirmation independently - in real time! Customers, vendors, suppliers will be sent a verification code via SMS so they can provide it to the rider. Providing confirmation of their payment from both sides.</p>
        </div>
        {/* <br /> */}
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
                <img src={RiderLogin} alt="" id="newImageSize" />
                <img src={arrowImage} alt="" height={25} width={50} style={{ marginTop: "auto", marginBottom: "auto" }} />
                <img src={RiderHome} alt="" id="newImageSize" />
              </div>
              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content" id="leftContent">
                  <h2 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 600, fontSize: 33, marginBottom: "1%" }}>Rider Home</h2>
                  <h5 data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Step-01</h5>
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

        <section id="howItWork" class="howItWork d-flex align-items-center section-bg" style={{ background: "white" }}>
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content m-4">
                  <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61", fontWeight: 600, fontSize: 33, marginBottom: "1%" }}>View Assigned Clients </p>
                  <h5 data-aos="fade-up" style={{ color: "#134D61" }}>Step-02</h5>
                  <br />
                  <h6>Free to choose from an option at the rider’s home screen, to view <br />
                    their assigned collections, Riders can conveniently view a list of <br />
                    collections assigned to them.</h6>
                </div>

              </div>
              <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
                <br />
                <br />
                <img src={RiderHome} alt="" id="newImageSize" />
                <img src={arrowImage} alt="" height={25} width={50} style={{ marginTop: "auto", marginBottom: "auto" }} />
                <img src={riderClientList} alt="" id="newImageSize" />
              </div>

            </div>
          </div>
        </section>

        <br />
        <br />

        <section id="about" class="about">
          <div class="container" data-aos="fade-up">

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <img src={riderClientList} alt="" id="newImageSize" />
                <img src={arrowImage} alt="" height={25} width={50} style={{ marginTop: "auto", marginBottom: "auto" }} />
                <img src={RiderCollect} alt="" id="newImageSize" />
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content" id="leftContent">
                  <h2 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 600, fontSize: 33, marginBottom: "1%" }}>Collect Payment from assigned Client</h2>
                  <h5 data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Step-03</h5>

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
        <br />
        <section id="howItWork" class="howItWork d-flex align-items-center section-bg" style={{ background: "white" }}>
          <div class="container" id="UponProcess" >

            <div class="row justify-content-between gy-5" >
              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content m-4">
                  <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61", fontWeight: 500, fontSize: 34, marginTop: "-20%", marginBottom: "1%" }}> Upon proceed an payment verification code</p>
                  <h5 data-aos="fade-up" style={{ color: "#134D61" }}>Step-04</h5>
                  <br />
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
                  <h6>Upon submitting details, a Payment Verification code (PVC)  <br /> or OTP (One Time Password) is sent to the client.</h6>
                  <h6>The client simply shares The PVC with The Rider to receive <br /> Digital  Receipt  of Payment.</h6>
                </div>

              </div>

              <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>

                <img src={enterOPT} alt="" id="newImageSize" />
                <img src={arrowImage} alt="" height={25} width={50} style={{ marginTop: "auto", marginBottom: "auto" }} />
                <img src={OTPconfirmation} alt="" id="newImageSize" />
              </div>


            </div>
          </div>
        </section>
        <br />
        <br />
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200">

                <img src={OTPconfirmation} alt="" id="newImageSize" />
                <img src={arrowImage} alt="" height={25} width={50} style={{ marginTop: "auto", marginBottom: "auto" }} />
                <img src={enterOPT} alt="" id="newImageSize" />
              </div>
              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content" id="leftContent">

                  <h2 data-aos="fade-up" style={{ color: "#134D61", marginBottom: "1%", fontSize: 33 }}>Rider enter OTP verify Payment</h2>
                  <h5 data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Step-05</h5>

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
        <br />
        <br />




        <div class="container">
          <div class="section-title">
            <img src={Spalsh} class="img-fluid" alt="" id="Splash" />

            <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Unlock the Potential of Cash Collection <br /> Transformation.</h2>
            <br />
            <p>
              <a href="https://play.google.com/store/apps/details?id=com.anostrat.kollectIt" target="_blank">
                <img src="https://i0.wp.com/www.techdigest.tv/wp-content/uploads/2021/02/get-it-on-google-play-badge.png?ssl=1" alt="" srcset="" height={50} />
              </a>
            </p>
          </div>
        </div>

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
