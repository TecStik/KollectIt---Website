import React, { useState } from "react";
import "./HowItWork.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


import loginAdmin from "./Admin/loginAdmin.png";
import adminHome from "./Admin/adminHome.png";
import adminCashier from "./Admin/adminCashier.png";
import arrowImage from "./arrowImage.jpg";
import login from "./login.png";
import Register from "./register1.png";
import rider1 from "./Admin/rider1.png";
import Adminregister from "./Admin/register.png";

import adminHomeback from "./Admin/adminHomeback.png";
import ClientList from "./Admin/ClientList.png";
import Summary from "./Admin/Summary.png";
import setPassword from "./Admin/setPassword.png";
import teamMember from "./Admin/teamMember.png";
import trasactiom from "./Admin/trasaction.png";
import Reports from "./Admin/Reports.png";

import cashierHome from "./Cashier/cashierHome.png";
import ClientForm from "./Cashier/ClientForm.png";
import ChooseRider from "./Cashier/chooseRider.png";
import AssignRider from "./Cashier/AssignRider.png";
import CashierBackHome from "./Cashier/CashierBackHome.png";
// import AllPayment from './Cashier/AllPayment.png'

import RiderLogin from "./Rider/riderLogin.png";
import RiderHome from "./Rider/riderHome.png";
import riderClientList from "./Rider/riderClientList.png";
import RiderCollect from "./Rider/collectCashorCheque.png";
import enterOPT from "./Rider/enterOPT.png";
import OTPconfirmation from "./Rider/OTPconfirmation.png";
import Trasfer from "./Rider/Trasfer.png";
import AllPayment from "./Rider/AllPayment.png";
import RiderBackHome from "./Rider/RiderBackHome.png";
import tecstiklogo from "./tecstiklogo.png";
import KollectitLogo from "./KollectitLogo.png";

function HowItWork() {
  const [trigger, setTrigger] = useState(0);
  const [CashierTrigger, setCashierTrigger] = useState(0);
  const [RiderTrigger, setRiderTrigger] = useState(0);

  return (
    <>
      <div>
        <Header />

        <div class="container">
          <div class="section-title">
            <br />
            <h2 style={{ color: "#134D61", fontSize: "35px", fontWeight: 600 }}>
              How it Works
            </h2>
            <br />
            <p style={{ fontSize: "22px" }}>
              Streamline finances and eradicate collection discrepancies, while monitoring your collection processes
              with KollectIt. The app utilizes integrated databases to provide a
              comprehensive solution for managing payments and ensuring smooth
              transactions with getting payment confirmation(s) in real-time.{" "}
            </p>
          </div>
        </div>

        {/* ==================ADMIN================ */}

        <div class="section-title">
          <h2 style={{ color: "#134D61", fontSize: "35px", fontWeight: 600 }}>
            ADMIN(S)
          </h2>
          <p style={{ fontSize: "22px" }}>
            Unlock Seamless Control.
          </p>
        </div>

        <section id="specials" class="specials">
          <div class="container">
            <div class="row">
              <div class="col-lg-2">
                <ul class="nav nav-tabs flex-column">
                  <li
                    class="nav-item active show"
                    onClick={() => setTrigger(0)}
                  >
                    <a class="nav-link" onClick={() => setTrigger(0)}>
                      Register
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setTrigger(1)}
                  >
                    <a class="nav-link" onClick={() => setTrigger(1)}>
                      Login
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setTrigger(2)}
                  >
                    <a class="nav-link" onClick={() => setTrigger(2)}>
                      Add Cashiers
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setTrigger(3)}
                  >
                    <a class="nav-link" onClick={() => setTrigger(3)}>
                      Add Collectors
                    </a>
                    {/* (s) or Cash Collector(s) */}
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setTrigger(4)}
                  >
                    <a class="nav-link" onClick={() => setTrigger(4)}>
                      Client List
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setTrigger(5)}
                  >
                    <a class="nav-link" onClick={() => setTrigger(5)}>
                      Reports
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setTrigger(6)}
                  >
                    <a class="nav-link" onClick={() => setTrigger(6)}>
                      Team Members
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setTrigger(7)}
                  >
                    <a class="nav-link" onClick={() => setTrigger(7)}>
                      Transactions
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setTrigger(8)}
                  >
                    <a class="nav-link" onClick={() => setTrigger(8)}>
                      Change Password
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-10 mt-4 mt-lg-0">
                <div class="tab-content ">
                  {trigger === 0 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 style={{ color: "#134D61" }}>Register</h1>
                            <p style={{ fontSize: "22px" }}>
                              A user can register themselves as an
                              Organization’s Admin by providing relevant
                              details:
                            </p>
                            <ul style={{ fontSize: "20px" }}>
                              <li>Username</li>
                              <li>Organization Name:</li>
                              <li>Company Short Code</li>
                              <li>Login Id</li>
                              <li>Password </li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={Register} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              height={20}
                              width={40}
                              style={{
                                marginTop: "50%",
                              }}
                            />
                            <img src={Adminregister} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : trigger === 1 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 style={{ color: "#134D61" }}>Login</h1>
                            <p style={{ fontSize: "22px" }}>
                              By Logging in to The KollectIt App as an Admin,
                              The User is displayed The corresponding home
                              screen to access features like:
                            </p>
                            <ul style={{ fontSize: "20px" }}>
                              <li>Add members</li>
                              <li>View Team members</li>
                              <li>View Reports</li>
                              <li>View Transaction(s) Status</li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={login} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{
                                marginTop: "35%",
                              }}
                            />
                            <img src={loginAdmin} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : trigger === 2 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Add Cashier(s)
                            </h1>
                            <p style={{ fontSize: "22px" }}>
                              The Admin can add cashier(s) to their
                              organization, by recording the following
                              information:
                            </p>
                            <ul style={{ fontSize: "20px" }}>
                              <li>Company Name:</li>
                              <li>Assigned Short Code</li>
                              <li>Login Id</li>
                              <li>
                                Selecting “Cashier” from the dropdown menu
                                available
                              </li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={adminHome} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{ marginTop: "-5%" }}
                            />
                            <img src={adminCashier} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : trigger === 3 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Add Collectors
                            </h1>
                            <p style={{ fontSize: "22px" }}>
                              Admin(s) can conveniently add cash collection
                              staff or Rider(s) by providing the following
                              information:
                            </p>
                            <ul style={{ fontSize: "20px" }}>
                              <li>Userames</li>
                              <li>Their Email</li>
                              <li>Their Cell Phone Number</li>
                              <li>Login Password</li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={adminHome} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{ marginTop: "-5%" }}
                            />
                            <img src={rider1} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : trigger === 4 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Client List
                            </h1>
                            <p style={{ fontSize: "20px" }}>
                              Selecting the Client List Button, Admins can
                              easily access a list of all client(s) that have
                              outstanding cash receivables. Following the button
                              click, The Admin User is shown a list of all of
                              their organizations Clients or Accounts
                              Receivables. After tapping a particular client or
                              receivable account, the following details can be
                              viewed:
                            </p>
                            <ul style={{ fontSize: "20px" }}>
                              <li>Client Name</li>
                              <li>Client ID</li>
                              <li>Client Type</li>
                              <li>The Client's Contact Details</li>
                              <li>Assigned Collection Staff</li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={Reports} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{ marginTop: "25%" }}
                            />
                            <img src={ClientList} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : trigger === 5 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Reports
                            </h1>
                            <p style={{ fontSize: "22px" }}>
                              By tapping the "Reports" button, Admin users have
                              access to view the amounts to be received from
                              each cashier.
                            </p>
                            <ul style={{ fontSize: "20px" }}></ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={Reports} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{ marginTop: "55%" }}
                            />
                            <img src={Summary} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : trigger === 6 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Team Members
                            </h1>
                            <p style={{ fontSize: "22px" }}>
                              Unleash Your Team's Potential: Explore the "Team
                              Members" section to access an organized list of
                              your dedicated collection staff. With a clear
                              division into "Cashiers" and "Riders," Admin Users
                              can effortlessly view comprehensive details of
                              their team recorded within The KollectIt App. See
                              it all in action through the screenshots provided
                              →{" "}
                            </p>
                            <ul style={{ fontSize: "20px" }}></ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={adminHomeback} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{
                                marginTop: "auto",
                                marginBottom: "auto",
                              }}
                            />
                            <img src={teamMember} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : trigger === 7 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Transactions
                            </h1>
                            <p style={{ fontSize: "22px" }}>
                              Unlock Visibility with Transactions: The
                              Transactions section empowers Admin(s) of an
                              organization to effortlessly view all current and
                              upcoming collection activities undertaken by their
                              team. Transaction information is thoughtfully
                              classified as:
                            </p>
                            <ul style={{ fontSize: "20px" }}>
                              <li>Date</li>
                              <li>Nature of transaction</li>
                              <li>The payor</li>
                              <li>
                                The name of a rider who has collected cash from
                                the remittor{" "}
                              </li>
                              <li>The amount of cash collected</li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={adminHomeback} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{ marginTop: "28%" }}
                            />
                            <img src={trasactiom} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : trigger === 8 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1
                              data-aos="fade-up"
                              style={{
                                color: "#134D61",
                                fontWeight: 500,
                                fontSize: 30,
                              }}
                            >
                              Change Password
                            </h1>
                            <p style={{ fontSize: "22px" }}>
                              Admin Users can easily change their KollectIt
                              login passwords by selecting the "Change Password"
                              button, entering their previous password, and
                              specifying the desired new password.
                            </p>
                            <ul style={{ fontSize: "20px" }}></ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={adminHomeback} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{ marginTop: "55%" }}
                            />
                            <img src={setPassword} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================CASHIER================ */}

        <div class="section-title">
          <h2 style={{ color: "#134D61", fontSize: "35px", fontWeight: 600 }}>
            CASHIER(S)
          </h2>
          <p style={{ fontSize: "22px" }}>
            Empower Your Cashiers: Let them oversee the entire collection process with seamless precision.
          </p>
        </div>

        <section id="specials" class="specials">
          <div class="container">
            <div class="row">
              <div class="col-lg-2">
                <ul class="nav nav-tabs flex-column">
                  <li
                    class="nav-item active show"
                    onClick={() => setCashierTrigger(0)}
                  >
                    <a class="nav-link" onClick={() => setCashierTrigger(0)}>
                      Cashier Home
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setCashierTrigger(1)}
                  >
                    <a class="nav-link" onClick={() => setCashierTrigger(1)}>
                      Add Client(s)
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setCashierTrigger(2)}
                  >
                    <a class="nav-link" onClick={() => setCashierTrigger(2)}>
                      Assign Rider(s) to Client(S)
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setCashierTrigger(3)}
                  >
                    <a class="nav-link" onClick={() => setCashierTrigger(3)}>
                      Deposit
                    </a>
                    {/* (s) or Cash Collector(s) */}
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setCashierTrigger(4)}
                  >
                    <a class="nav-link" onClick={() => setCashierTrigger(4)}>
                      View Payment
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setCashierTrigger(5)}
                  >
                    <a class="nav-link" onClick={() => setCashierTrigger(5)}>
                      Client List
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setCashierTrigger(6)}
                  >
                    <a class="nav-link" onClick={() => setCashierTrigger(6)}>
                      Change Password
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-10 mt-4 mt-lg-0">
                <div class="tab-content ">
                  {CashierTrigger === 0 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Cashier Home
                            </h1>
                            <p style={{ fontSize: "22px" }}>
                              Cashiers log in with admin-provided credentials
                              for assigned payments. Displayed The KollectIt
                              Cashier Home Screen allows Cashiers to:
                            </p>
                            <ul style={{ fontSize: "20px" }}>
                              <li>
                                Add Clients or Customers of their organization
                              </li>
                              <li>
                                Assign Riders to Clients of their organization
                              </li>
                              <li>
                                View Deposits - Payments received from the rider
                                by bank(s) or to the supervisor.
                              </li>
                              <li>
                                Real-time view of payments collected by assigned
                                riders from clients or customers..
                              </li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={loginAdmin} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{
                                marginTop: "52%",
                              }}
                            />
                            <img src={cashierHome} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : CashierTrigger === 1 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Add Client(s)
                            </h1>
                            <p style={{ fontSize: "22px" }}>
                              When a cashier(s) is adding a client or customer,
                              the following details are required:
                            </p>
                            <ul style={{ fontSize: "20px" }}>
                              <li>Chosen Client Id</li>
                              <li>Client Name</li>
                              <li>Contact Number</li>
                              <li>Email</li>
                              <li>Amount</li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={cashierHome} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{ marginTop: "25%" }}
                            />
                            <img src={ClientForm} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : CashierTrigger === 2 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Assign Rider(s) to Client(s)
                            </h1>
                            <p style={{ fontSize: "22px" }}>
                              Assign Rider(s) to your Collections by selecting a
                              Member of the Designated Collection Staff and
                              specifying an amount to be collected, if required.
                            </p>
                            <ul style={{ fontSize: "20px" }}>
                              <li>Company Name:</li>
                              <li>Short Code</li>
                              <li>Login Id</li>
                              <li>Cashiers</li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img
                              src={cashierHome}
                              alt=""
                              id="newImageSizeThree"
                            />
                            <img
                              src={arrowImage}
                              alt=""
                              height={12}
                              width={20}
                              style={{ marginTop: "-3%" }}
                            />
                            <img
                              src={AssignRider}
                              alt=""
                              id="newImageSizeThree"
                            />
                            <img
                              src={arrowImage}
                              alt=""
                              height={12}
                              width={20}
                              style={{ marginTop: "-10%" }}
                            />
                            <img
                              src={ChooseRider}
                              alt=""
                              id="newImageSizeThree"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : CashierTrigger === 3 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Deposit
                            </h1>
                            <p style={{ fontSize: "22px" }}>
                            KollectIt provides Cashiers with the ability to track all deposits received from payment collection staff (riders). With its intuitive interface and essential features, KollectIt simplifies the process of viewing and managing payment transactions, ensuring seamless financial tracking and transparency.
                            </p>
                            <ul style={{ fontSize: "20px" }}></ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={cashierHome} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{ marginTop: "55%" }}
                            />
                            <img src={Trasfer} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : CashierTrigger === 4 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              View Payment
                            </h1>
                            <p style={{ fontSize: "22px" }}>
                            Through this functionality, cashiers can access the count of verified payments received from clients or customers by the payment collection staff.                            </p>
                            <ul style={{ fontSize: "20px" }}></ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img
                              src={CashierBackHome}
                              alt=""
                              id="newImageSize"
                            />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{
                                marginTop: "auto",
                                marginBottom: "auto",
                              }}
                            />
                            <img src={AllPayment} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : CashierTrigger === 5 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Client List
                            </h1>
                            <p style={{ fontSize: "22px" }}>
                            At the press of this button, Cashiers can access a comprehensive list of clients with verified and received payments, as well as those with pending and unverified transactions. 
                            </p>
                            <ul style={{ fontSize: "20px" }}></ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img
                              src={CashierBackHome}
                              alt=""
                              id="newImageSize"
                            />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{ marginTop: "30%" }}
                            />
                            <img src={ClientList} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : CashierTrigger === 6 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Change Password
                            </h1>
                            <p style={{ fontSize: "25px" }}>
                            Cashiers can effortlessly update their password by logging in, accessing the "Change Password" button on the home screen, and entering their old and new passwords.</p>
                            <ul style={{ fontSize: "20px" }}></ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img
                              src={CashierBackHome}
                              alt=""
                              id="newImageSize"
                            />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{ marginTop: "55%" }}
                            />
                            <img src={setPassword} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================CASH COLLECTION STAFF================ */}

        <div class="section-title">
          <h2 style={{ color: "#134D61", fontSize: "35px", fontWeight: 600 }}>
            CASH COLLECTION STAFF (Riders)
          </h2>
          <p style={{ fontSize: "22px" }}>
            Customers can ensure payment confirmation independently - in real
            time!
          </p>
        </div>

        <section id="specials" class="specials">
          <div class="container">
            <div class="row">
              <div class="col-lg-2">
                <ul class="nav nav-tabs flex-column">
                  <li
                    class="nav-item active show"
                    onClick={() => setRiderTrigger(0)}
                  >
                    <a class="nav-link" onClick={() => setRiderTrigger(0)}>
                      Rider Home
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setRiderTrigger(1)}
                  >
                    <a class="nav-link" onClick={() => setRiderTrigger(1)}>
                      View Assigned Clients
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setRiderTrigger(2)}
                  >
                    <a class="nav-link" onClick={() => setRiderTrigger(2)}>
                      Collect Payment from assigned Client
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setRiderTrigger(3)}
                  >
                    <a class="nav-link" onClick={() => setRiderTrigger(3)}>
                      Client Notified upon Proceeding via SMS and Email
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setRiderTrigger(4)}
                  >
                    <a class="nav-link" onClick={() => setRiderTrigger(4)}>
                       Enter an OTP to verify Payment
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setRiderTrigger(5)}
                  >
                    <a class="nav-link" onClick={() => setRiderTrigger(5)}>
                      Verify Payment
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setRiderTrigger(6)}
                  >
                    <a class="nav-link" onClick={() => setRiderTrigger(6)}>
                      Trasfer
                    </a>
                  </li>
                  <li
                    class="nav-item active show"
                    onClick={() => setRiderTrigger(7)}
                  >
                    <a class="nav-link" onClick={() => setRiderTrigger(7)}>
                      Change Password
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-10 mt-4 mt-lg-0">
                <div class="tab-content ">
                  {RiderTrigger === 0 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Rider Home
                            </h1>
                            <p style={{ fontSize: "22px" }}>
                              By Logging in to The KollectIt App as Rider, The
                              User will be Navigated to The Rider Home Screen to
                              access features like:
                            </p>
                            <ul style={{ fontSize: "19px" }}>
                              <li>
                                Client List: to see, clients assigned to them.
                              </li>
                              <li>
                                Payment Collections: To view all collected
                                payments.
                              </li>
                              <li>
                                Verify Payments: Verify recently collected
                                unverified payment.
                              </li>
                              <li>
                                View Transactions: View transactions within an
                                Organization, including collections and internal
                                transfers.
                              </li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={loginAdmin} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{
                                marginTop: "50%",
                              }}
                            />
                            <img src={RiderHome} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : RiderTrigger === 1 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              View Assigned Clients
                            </h1>
                            <p style={{ fontSize: "22px" }}>
                              Free to choose from an option at the rider’s home
                              screen, to view their assigned collections, Riders
                              can conveniently view a list of collections
                              assigned to them.
                            </p>
                            <ul style={{ fontSize: "20px" }}></ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={RiderHome} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{ marginTop: "-2%" }}
                            />
                            <img
                              src={riderClientList}
                              alt=""
                              id="newImageSize"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : RiderTrigger === 2 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Collect Payment from assigned Client
                            </h1>
                            <p style={{ fontSize: "22px" }}>
                              The rider collect’s payments from assigned clients
                              by specifying
                            </p>
                            <ul style={{ fontSize: "20px" }}>
                              <li>Amount Collected</li>
                              <li>Select Mode of Payment if Cheque/Cash</li>
                              <li>Attach Cheque Copy if :cheque</li>
                            </ul>
                            <p style={{ fontSize: "20px" }}>
                              Upon submitting detail, a Payment Verification
                              code is sent to the client.
                            </p>
                            <p style={{ fontSize: "20px" }}>
                              Client to share PVC with rider to receive digital
                              receipt of its Payment.
                            </p>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img
                              src={riderClientList}
                              alt=""
                              id="newImageSize"
                            />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{
                                marginTop: "auto",
                                marginBottom: "auto",
                              }}
                            />
                            <img src={RiderCollect} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : RiderTrigger === 3 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Client Notified upon Proceeding via SMS and Email
                            </h1>
                            <p style={{ fontSize: "20px" }}>
                              Collecting from assigned clients, a Rider must
                              specify
                            </p>
                            <ul style={{ fontSize: "19px" }}>
                              <li>Amount Collected</li>
                              <li>Select Mode of Payment if Check or Cash</li>
                              <li>
                                Attach a Picture of a Check, if that’s the mode
                                of payment.
                              </li>
                            </ul>
                            <p style={{ fontSize: "19px" }}>
                              Upon submitting details, a Payment Verification
                              code (PVC) or OTP (One Time Password) is sent to
                              the client.
                            </p>
                            <p style={{ fontSize: "19px" }}>
                              The client simply shares The OTP with The Rider to enter it inside The KollectIt app for confirmation. This dispatches a
                              a Digital Receipt of Payment to the client via email and cell phone number.
                            </p>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={RiderLogin} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{
                                marginTop: "auto",
                                marginBottom: "auto",
                              }}
                            />
                            <img src={RiderHome} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : RiderTrigger === 4 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Rider enter OTP verify Payment
                            </h1>
                            <p style={{ fontSize: "22px" }}>
                              The rider is suppose to collect payments from
                              assigned clients by specifying
                            </p>
                            <ul style={{ fontSize: "20px" }}>
                              <li>Amount Collected</li>
                              <li>Select Mode of Payment if Cheque/Cash</li>
                              <li>Attach Cheque Copy if :cheque</li>
                            </ul>
                            <p style={{ fontSize: "20px" }}>
                              Upon submitting detail, a Payment Verification
                              code is sent to the client.
                            </p>
                            <p style={{ fontSize: "20px" }}>
                              Client to share PVC with rider to receive digital
                              receipt of its Payment.
                            </p>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img
                              src={OTPconfirmation}
                              alt=""
                              id="newImageSize"
                            />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{
                                marginTop: "auto",
                                marginBottom: "auto",
                              }}
                            />
                            <img src={enterOPT} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : RiderTrigger === 5 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Verify Payment
                            </h1>
                            <p style={{ fontSize: "25px" }}>
                              KollectIt lets riders verify payments with client/customer-provided OTPs. Real-time verification ensures secure, transparent transactions, boosting trust. Available on iOS and Android for seamless payment management.
                            </p>
                            <ul style={{ fontSize: "20px" }}></ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={RiderBackHome} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{
                                marginTop: "auto",
                                marginBottom: "auto",
                              }}
                            />
                            <img src={AllPayment} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : RiderTrigger === 6 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Transfer
                            </h1>
                            <p style={{ fontSize: "25px" }}>

                        
Upon successful collection, riders seamlessly transfer payments to cashiers, ensuring smooth and efficient payment processing. Riders can access the list, select specific payments, and effortlessly update their status for enhanced financial management.
                            </p>
                            <ul style={{ fontSize: "20px" }}></ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={RiderBackHome} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{ marginTop: "30%" }}
                            />
                            <img src={Trasfer} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : RiderTrigger === 7 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>
                              Change Password
                            </h1>
                            <p style={{ fontSize: "25px" }}>
                             
KollectIt empowers riders with easy password updates, ensuring secure records of their collection efforts. Simply click "Change Password," enter the previous password, and set the new one for enhanced security and convenience.
                            </p>
                            <ul style={{ fontSize: "20px" }}></ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={RiderBackHome} alt="" id="newImageSize" />
                            <img
                              src={arrowImage}
                              alt=""
                              height={20}
                              width={40}
                              style={{ marginTop: "55%" }}
                            />
                            <img src={setPassword} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
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
        {/* <br /> */}
        {/* <br /> */}
        {/* <br /> */}
        {/*  */}
        <Footer />
      </div>
    </>
  );
}

export default HowItWork;
