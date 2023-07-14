import React, { useState } from "react";
import "./HowItWork.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import splash from './splash.png'
import Spalsh from './Spalsh.jpeg'

import { Slide, Zoom } from 'react-slideshow-image';

import loginAdmin from './Admin/loginAdmin.png'
import adminHome from './Admin/adminHome.png'
import adminCashier from './Admin/adminCashier.png';
import AdminRider from './Admin/AdminRider.png';
import arrowImage from './arrowImage.jpg'
import Register from './Register.png';
import Welcome from './Welcom.png';
import rider1 from './Admin/rider1.png';
import Adminregister from './Admin/register.png';


import adminHomeback from './Admin/adminHomeback.png'
import ClientList from './Admin/ClientList.png';
import Summary from './Admin/Summary.png';
import setPassword from './Admin/setPassword.png';
import teamMember from './Admin/teamMember.png';
import trasactiom from './Admin/trasactiom.png';


import CashierLogin from './Cashier/Cashierlogin.png'
import cashierHome from './Cashier/cashierHome.png'
import ClientForm from './Cashier/ClientForm.png'
import ChooseRider from './Cashier/chooseRider.png'
import AssignRider from './Cashier/AssignRider.png'
import CashierBackHome from './Cashier/CashierBackHome.png'
// import AllPayment from './Cashier/AllPayment.png'


import RiderLogin from './Rider/riderLogin.png'
import RiderHome from './Rider/riderHome.png'
import riderClientList from './Rider/riderClientList.png'
import RiderCollect from './Rider/collectCashorCheque.png'
import enterOPT from './Rider/enterOPT.png'
import OTPconfirmation from './Rider/OTPconfirmation.png'
import Trasfer from './Rider/Trasfer.png'
import AllPayment from './Rider/AllPayment.png';
import RiderBackHome from './Rider/RiderBackHome.png';


import tecstiklogo from './tecstiklogo.png';

function HowItWork() {

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px',
    background: "yellow"
  }
  const [trigger, setTrigger] = useState(0);
  const [CashierTrigger, setCashierTrigger] = useState(0);
  const [RiderTrigger, setRiderTrigger] = useState(0);

  return (
    <>
      <div>
        <Header />

        {/* <section id="SplashImage"
          style={{
            backgroundImage: `url(${splash})`,
          }}
        /> */}
        <div class="container">
          <div class="section-title">
            <br />
            <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }} >How it Works</h2>
            <br />
            <p>Use KollectIt to streamline financial processes and eliminate discrepancies. The app utilizes integrated databases to provide a comprehensive solution for managing payments and ensuring smooth transactions. </p>
          </div>
        </div>

{/* ==================ADMIN================ */}

        <div class="section-title">
          <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }} >ADMIN(S)</h2>
          <p>With our user-friendly interface, admins can easily examine payment statuses, assign roles to collection staff and cashiers, and track payment fulfillment using both Smartphones and Desktops.</p>
        </div>

        <section id="specials" class="specials">
          <div class="container">
            <div class="row">
              <div class="col-lg-2">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item active show" onClick={() => setTrigger(0)}>
                    <a class="nav-link" onClick={() => setTrigger(0)}>Register</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setTrigger(1)}>
                    <a class="nav-link" onClick={() => setTrigger(1)} >Login</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setTrigger(2)}>
                    <a class="nav-link" onClick={() => setTrigger(2)} >Add Cashiers</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setTrigger(3)}>
                    <a class="nav-link" onClick={() => setTrigger(3)}>Add Rider(s) or Cash Collector(s)</a>
                    {/* (s) or Cash Collector(s) */}
                  </li>
                  <li class="nav-item active show" onClick={() => setTrigger(4)}>
                    <a class="nav-link" onClick={() => setTrigger(4)}>Client List</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setTrigger(5)}>
                    <a class="nav-link" onClick={() => setTrigger(5)} >Reports</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setTrigger(6)}>
                    <a class="nav-link" onClick={() => setTrigger(6)} >Team Members</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setTrigger(7)}>
                    <a class="nav-link" onClick={() => setTrigger(7)} >Transactions</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setTrigger(8)}>
                    <a class="nav-link" onClick={() => setTrigger(8)}>Change Password</a>
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
                            <h1 style={{color: "#134D61" }}>Register</h1>
                            <p style={{fontSize:"22px"}} >
                              The user can register themselves  as an Organization’s Admin by providing relevant details:
                            </p>
                            <ul  style={{fontSize:"20px"}}>
                              <li>Company Name:</li>
                              <li>Short Code</li>
                              <li>Login Id</li>
                              <li>Password  </li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={Welcome} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
                            <img src={Register} alt="" id="newImageSize" />

                          </div>
                        </div>
                      </div>
                    </>
                  ) : trigger === 1 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 style={{color: "#134D61" }}>Login</h1>
                            <p style={{fontSize:"22px"}}>
                            By Logging in to The KollectIt App as an Admin, The User is displayed The Corresponding Home Screen to access features like:
</p>
                            <ul style={{fontSize:"20px"}}>
                              <li>Add members</li>
                              <li>View Team members</li>
                              <li>View Reports</li>
                              <li>View Transaction(s) Status</li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                          <img src={Welcome} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>Add Cashier(s)</h1>
                            <p style={{fontSize:"22px"}}>The Admin can add cashier(s) to their organization, by recording the following information:</p>
                            <ul style={{fontSize:"20px"}}>
                              <li>Company Name:</li>
                              <li>Short Code</li>
                              <li>Login Id</li>
                              <li>Selecting “Cashier” from the dropdown menu available</li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={adminHome} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "-5%", }} /> 
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>Add Rider(s) or Cash Collector(s)</h1>
                            <p style={{fontSize:"22px"}}>Admin(s) can conveniently add cash collection staff by providingThe following information:</p>
                            <ul style={{fontSize:"20px"}}>
                              <li>Their Name</li>
                              <li>Email</li>
                              <li>Cell Phone Number</li>
                              <li>Password used by them to login to the app</li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={adminHome} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "-5%", }} />
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>Client List</h1>
                            <p style={{fontSize:"20px"}}>
                              Once Admin User(s) of an organization select the Client List Button, they can easily access a list of all client(s) that have outstanding cash receivables. Following the button click, The Admin User is shown a list of all of their organizations Clients or Accounts Receivables. After tapping a particular client or receivable account, the following details can be viewed:         </p>
                            <ul style={{fontSize:"20px"}}>
                              <li>Client Name</li>
                              <li>Client ID</li>
                              <li>Client Type</li>
                              <li>Internal Staff Assigned for Collection from them</li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={adminHome} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "25%", }} />
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>Reports</h1>
                            <p style={{fontSize:"22px"}}>
                              By tapping the "Reports" button, organization admin users gain an overview of collections assigned to their cashier(s), empowering them to monitor staff status effectively. Admin users can view the amount that must be received from each cashier(s).
                            </p>
                            <ul style={{fontSize:"20px"}}>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={adminHome} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "55%" }} />
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>Team Members</h1>
                            <p style={{fontSize:"22px"}}>
                              Accessing the “team members” section, allows admin(s) to view an organized list of their entire collection staff. Divided into “Cashiers” and “Riders”, Admin Users are free to view all their staff details recorded within the KollectIt App. The details that show can be seen on the screenshots on the right →
                            </p>
                            <ul style={{fontSize:"20px"}}>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={adminHomeback} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>Transactions</h1>
                            <p style={{fontSize:"22px"}}>
                            The Transactions section allow Admin(s) assigned to an organization’s collections to view all of the collection activity their team is responsible for. Transaction information is classified as:</p>
                            <ul style={{fontSize:"20px"}}>
                              <li>Date</li>
                              <li>Nature of transaction</li>
                              <li>The payor</li>
                              <li>The name of a rider who has collected cash from the payor</li>
                              <li>The amount of cash collected</li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={adminHomeback} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "28%", }} />
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 30, }}>Change Password</h1>
                            <p style={{fontSize:"22px"}}>
                            Admin Users can easily change their KollectIt login passwords by selecting the "Change Password" button, entering their previous password, and specifying the desired new password.
                            </p>
                            <ul style={{fontSize:"20px"}}>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={adminHomeback} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "55%", }} />
                            <img src={setPassword} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  )
                    :
                    <></>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

{/* ==================CASHIER================ */}
    
            <div class="section-title">
          <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }}>CASHIER(S)</h2>
          <p>Cashiers play a pivotal role in the system too, as they have the ability to assign relevant staff to collect payments from specific clients and oversee the entire payment process.</p>
        </div>

        <section id="specials" class="specials">
          <div class="container">
            <div class="row">
              <div class="col-lg-2">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item active show" onClick={() => setCashierTrigger(0)}>
                    <a class="nav-link" onClick={() => setCashierTrigger(0)}>Cashier Home</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setCashierTrigger(1)}>
                    <a class="nav-link" onClick={() => setCashierTrigger(1)} >Add Client(s)</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setCashierTrigger(2)}>
                    <a class="nav-link" onClick={() => setCashierTrigger(2)} >Assign Rider(s) to Client(S)</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setCashierTrigger(3)}>
                    <a class="nav-link" onClick={() => setCashierTrigger(3)}>Deposit</a>
                    {/* (s) or Cash Collector(s) */}
                  </li>
                  <li class="nav-item active show" onClick={() => setCashierTrigger(4)}>
                    <a class="nav-link" onClick={() => setCashierTrigger(4)}>View Payment</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setCashierTrigger(5)}>
                    <a class="nav-link" onClick={() => setCashierTrigger(5)} >Client List</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setCashierTrigger(6)}>
                    <a class="nav-link" onClick={() => setCashierTrigger(6)}>Change Password</a>
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>Cashier Home</h1>
                            <p style={{fontSize:"22px"}}>
                              The Cashier can login to the app with the credentials provided by the Admin. Displayed The KollectIt Cashier Home Screen,  the Cashier is free to:
                            </p>
                            <ul style={{fontSize:"20px"}}>
                              <li>Add Client to the organisation</li>
                              <li>Assign Riders to Client</li>
                              <li>View Deposits: Payments received from the rider to bank or to the supervisor</li>
                              <li>View Payments collected by assigned  riders in real time.</li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={CashierLogin} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>Add Client(s)</h1>
                            <p style={{fontSize:"22px"}}>
                              When adding a client, the following details are required:
                            </p>
                            <ul style={{fontSize:"20px"}}>
                              <li>Client Id</li>
                              <li>Client Name</li>
                              <li>Contact Number</li>
                              <li>Email</li>
                              <li>Amount</li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={cashierHome} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "25%" }} />
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>Assign Rider(s) to Client(s)</h1>
                            <p style={{fontSize:"22px"}}>
                              Assign Rider(s) to your Clients by selecting a Member of the Designated Collection Staff and specifying an amount to be collected, if required.
                            </p>
                            <ul style={{fontSize:"20px"}}>
                              <li>Company Name:</li>
                              <li>Short Code</li>
                              <li>Login Id</li>
                              <li>Cashiers</li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={cashierHome} alt="" id="newImageSizeThree" />
                            <img src={arrowImage} alt="" height={12} width={20} style={{ marginTop: "-3%", }} />
                            <img src={AssignRider} alt="" id="newImageSizeThree" />
                            <img src={arrowImage} alt="" height={12} width={20} style={{ marginTop: "-10%", }} />
                            <img src={ChooseRider} alt="" id="newImageSizeThree" />
                          </div>
                        </div>
                      </div>

                    </>
                  ) : CashierTrigger === 3 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>Deposit</h1>
                            <p style={{fontSize:"22px"}}>
                            </p>
                            <ul style={{fontSize:"20px"}}>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={cashierHome} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "55%" }} />
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>View Payment</h1>
                            <p style={{fontSize:"22px"}}>
                            </p>
                            <ul style={{fontSize:"20px"}}>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={CashierBackHome} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61"}}>Client List</h1>
                            <p style={{fontSize:"22px"}}>
                            </p>
                            <ul style={{fontSize:"20px"}}>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={CashierBackHome} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "30%" }} />
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>Change Password</h1>
                            <p style={{fontSize:"25px"}}>
                            </p>
                            <ul style={{fontSize:"20px"}}>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={CashierBackHome} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "55%" }} />
                            <img src={setPassword} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  )
                    :
                    <></>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        
{/* ==================CASH COLLECTION STAFF================ */}


          <div class="section-title">
          <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }}>CASH COLLECTION STAFF</h2>
          <p>Customers can ensure payment confirmation independently - in real time! Customers, vendors, suppliers will be sent a verification code via SMS so they can provide it to the rider. Providing confirmation of their payment from both sides.</p>
        </div>

        <section id="specials" class="specials">
          <div class="container">
            <div class="row">
              <div class="col-lg-2">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item active show" onClick={() => setRiderTrigger(0)}>
                    <a class="nav-link" onClick={() => setRiderTrigger(0)}>Rider Home</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setRiderTrigger(1)}>
                    <a class="nav-link" onClick={() => setRiderTrigger(1)}>View Assigned Clients</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setRiderTrigger(2)}>
                    <a class="nav-link" onClick={() => setRiderTrigger(2)}>Collect Payment from assigned Client</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setRiderTrigger(3)}>
                    <a class="nav-link" onClick={() => setRiderTrigger(3)}>
                    Client Notified upon Proceeding via SMS and Email
                    </a>
                  </li>
                  <li class="nav-item active show" onClick={() => setRiderTrigger(4)}>
                    <a class="nav-link" onClick={() => setRiderTrigger(4)}>Rider enter OTP verify Payment</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setRiderTrigger(5)}>
                    <a class="nav-link" onClick={() => setRiderTrigger(5)}>Verify Payment</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setRiderTrigger(6)}>
                    <a class="nav-link" onClick={() => setRiderTrigger(6)}>Trasfer</a>
                  </li>
                  <li class="nav-item active show" onClick={() => setRiderTrigger(7)}>
                    <a class="nav-link" onClick={() => setRiderTrigger(7)}>Change Password</a>
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61"}}>Rider Home</h1>
                            <p style={{fontSize:"22px"}}>
                              By Logging in to The KollectIt App as Rider, The User will be Navigated to The Rider Home Screen to access features like:
                            </p>
                            <ul style={{fontSize:"19px"}}>
                              <li>Client List: to see, clients assigned to them.</li>
                              <li>Payment Collections: To view all collected payments.</li>
                              <li>Verify Payments: Verify recently collected unverified payment.</li>
                              <li>View Transactions: View transactions within an Organization, including collections and internal transfers.</li>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={RiderLogin} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>View Assigned Clients</h1>
                            <p style={{fontSize:"22px"}}>
                              Free to choose from an option at the rider’s home screen, to view their assigned collections, Riders can conveniently view a list of collections assigned to them.
                            </p>
                            <ul style={{fontSize:"20px"}}>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={RiderHome} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "-2%", }} />
                            <img src={riderClientList} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : RiderTrigger === 2 ? (
                    <>
                      <div class="tab-pane active show">
                        <div class="row">
                          <div class="col-lg-6 details order-2 order-lg-1">
                            <h1 data-aos="fade-up" style={{ color: "#134D61"}}>Collect Payment from assigned Client</h1>
                            <p style={{fontSize:"22px"}}>
                              The rider collect’s payments from assigned clients by specifying
                            </p>
                            <ul style={{fontSize:"20px"}}>
                              <li>Amount Collected</li>
                              <li>Select Mode of Payment if Cheque/Cash</li>
                              <li>Attach Cheque Copy if :cheque</li>
                            </ul>
                            <p style={{fontSize:"20px"}}>Upon submitting detail, a Payment Verification code is sent to the client.</p>
                            <p style={{fontSize:"20px"}}>Client to share PVC with rider to receive digital receipt of its Payment.</p>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={riderClientList} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
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
                            <p style={{fontSize:"20px"}}>
                              Collecting from assigned clients, a Rider must specify
                            </p>
                            <ul style={{fontSize:"19px"}}>
                              <li>Amount Collected</li>
                              <li>Select Mode of Payment if Check or Cash</li>
                              <li>Attach a Picture of a Check, if that’s the mode of payment.</li>
                            </ul>
                            <p style={{fontSize:"19px"}}>
                              Upon submitting details, a Payment Verification code (PVC)
                              or OTP (One Time Password) is sent to the client.
                            </p>
                            <p style={{fontSize:"19px"}}>
                              The client simply shares The PVC with The Rider to receive
                              Digital Receipt of Payment.
                            </p>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={RiderLogin} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61"}}>Rider enter OTP verify Payment</h1>
                            <p style={{fontSize:"22px"}}>
                              The rider is suppose to collect payments from assigned clients by specifying
                            </p>
                            <ul style={{fontSize:"20px"}}>
                              <li>Amount Collected</li>
                              <li>Select Mode of Payment if Cheque/Cash</li>
                              <li>Attach Cheque Copy if :cheque</li>
                            </ul>
                            <p style={{fontSize:"20px"}}>
                              Upon submitting detail, a Payment Verification code is sent to the client.
                            </p>
                            <p style={{fontSize:"20px"}}>
                              Client to share PVC with rider to receive digital receipt of its Payment.
                            </p>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={OTPconfirmation} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>Verify Payment</h1>
                            <p style={{fontSize:"25px"}}>
                            </p>
                            <ul style={{fontSize:"20px"}}>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={RiderBackHome} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>Trasfer</h1>
                            <p style={{fontSize:"25px"}}>
                            </p>
                            <ul style={{fontSize:"20px"}}>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={RiderBackHome} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "30%", }} />
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
                            <h1 data-aos="fade-up" style={{ color: "#134D61" }}>Change Password</h1>
                            <p style={{fontSize:"25px"}}>
                            </p>
                            <ul style={{fontSize:"20px"}}>
                            </ul>
                          </div>
                          <div class="col-lg-6 text-center order-1 order-lg-2">
                            <img src={RiderBackHome} alt="" id="newImageSize" />
                            <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "55%", }} />
                            <img src={setPassword} alt="" id="newImageSize" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) :
                    <></>
                  }
                </div>
              </div>
            </div>
          </div>
        </section>


        <div class="container">
          <div class="section-title">
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








// Admin ======================>

// {/* <center>
// <div id="SlideImage">
//   {/* Step-00 */}
//   <Slide autoplay={false}
//     nextArrow={
//       <button style={{
//         background: 'none',
//         border: '0px',
//         width: '30px',
//         marginRight: "0.5%",
//         padding: 0

//       }}>
//         <svg fill="#F0F2F5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg>
//       </button>
//     }
//     prevArrow={
//       <button style={{
//         background: 'none',
//         border: '0px',
//         width: '30px',
//         marginLeft: "0.5%",
//         padding: 0
//       }}>
//         <svg fill="#F0F2F5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg>
//       </button>
//     }>

//     {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container " id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//             <br />
//             <br />
//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61", fontWeight: 500, fontSize: 33, marginBottom: "1%" }}>Register</p>
//               <h5 data-aos="fade-up" style={{ color: "#134D61" }}>Step-00</h5>
//               <br />
//               <h6>The user can register themselves  as an Organization’s Admin by providing relevant details:</h6>
//               <div class="col-lg-6 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                 <div class="content m-2" style={{ textAlign: "left" }}>
//                   <ul>
//                     <li>Company Name:</li>
//                     <li>Short Code</li>
//                     <li>Login Id</li>
//                     <li>Password  </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//             <br />
//             <br />
//             <img src={Welcome} alt="" id="newImageSize" />
//             <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
//             <img src={Register} alt="" id="newImageSize" />
//           </div>
//         </div>
//       </div>
//     </section> */}
//     {/* Step-01 */}
//     {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container" id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//             <br />
//             <br />
//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 33, }}>Login</h1>
//               <h5 data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Step-01</h5>
//               <h6>By Logging in to The KollectIt App as Admin, The User is displayed The Admin Home Screen to access features like:</h6>
//               <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                 <div class="content m-2" style={{ textAlign: "left" }}>
//                   <ul>
//                     <li>Add members</li>
//                     <li>View Team members</li>
//                     <li>View Reports</li>
//                     <li>View Transaction(s) Status</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center mt-12" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//             <br />
//             <br />
//             <img src={Adminregister} alt="" id="newImageSize" />
//             <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
//             <img src={loginAdmin} alt="" id="newImageSize" />
//           </div>
//         </div>
//       </div>
//     </section> */}
//     {/* Step-02 */}
//     {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container" style={{ marginBottom: '-1%' }} id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">

//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 30, }}>Add Cashier(s)</h1>
//               <h5 data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Step-02</h5>
//               <br />
//               <h6>The Admin can add cashier(s) to their organization, by recording the following information:</h6>
//               <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                 <div class="content m-2" style={{ textAlign: "left" }}>
//                   <ul>
//                     <li>Company Name:</li>
//                     <li>Short Code</li>
//                     <li>Login Id</li>
//                     <li>Selecting “Cashier” from the dropdown menu available</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//             <br />
//             <br />
//             <img src={adminHome} alt="" id="newImageSizethree" />
//             <img src={arrowImage} alt="" height={12} width={20} style={{ marginTop: "auto", marginBottom: "auto" }} />
//             <img src={adminCashier} alt="" id="newImageSizethree" />
//           </div>
//         </div>
//       </div>
//     </section> */}

//     {/* Step-03 */}
//     {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container" id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//             <br />
//             <br />
//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 30, }}>Add Rider(s) or Cash Collector(s)</h1>
//              <h6>Admin(s) can conveniently add cash collection staff by providing
//                 The following information:
//               </h6>
//               <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                 <div class="content m-2" style={{ textAlign: "left" }}>
//                   <ul>
//                     <li>Their Name</li>
//                     <li>Email</li>
//                     <li>Cell Phone Number</li>
//                     <li>Password used by them to login to the app</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }} >
//             <br />
//             <br />
//             <img src={adminHome} alt="" id="newImageSize" />
//             <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "0%", }} />
//             <img src={rider1} alt="" id="newImageSize" />
//           </div>
//         </div>
//       </div>
//     </section> */}

//     {/* Step 04 */}
//     {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container" id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//             <br />
//             <br />
//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 30, }}>Client List</h1>
        
//               <h6>Admin(s) can conveniently add cash collection staff by providing
//                 The following information:
//               </h6>
//               <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                 <div class="content m-2" style={{ textAlign: "left" }}>
//                   <ul>
//                     <li>Their Name</li>
//                     <li>Email</li>
//                     <li>Cell Phone Number</li>
//                     <li>Password used by them to login to the app</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//             <br />
//             <br />
//             <img src={adminHome} alt="" id="newImageSize" />
//             <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "20%", }} />
//             <img src={ClientList} alt="" id="newImageSize" />
//           </div>
//         </div>
//       </div>
//     </section> */}
//     {/* Step 05 */}
//     {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container" id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//             <br />
//             <br />
//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 30, }}>Reports</h1>
//               <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                 <div class="content m-2" style={{ textAlign: "left" }}>
//                 </div>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//             <br />
//             <br />
//             <img src={adminHome} alt="" id="newImageSize" />
//             <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "43%" }} />
//             <img src={Summary} alt="" id="newImageSize" />
//           </div>
//         </div>
//       </div>
//     </section> */}
//     {/* Step 06 */}
//     {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container" id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//             <br />
//             <br />
//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 30, }}>Team Members</h1>
            
//               <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                 <div class="content m-2" style={{ textAlign: "left" }}>
               
//                 </div>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//             <br />
//             <br />
//             <img src={adminHomeback} alt="" id="newImageSize" />
//             <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
//             <img src={teamMember} alt="" id="newImageSize" />
//           </div>
//         </div>
//       </div>
//     </section> */}
//     {/* Step 07 */}
//     {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container" id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//             <br />
//             <br />
//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 30, }}>Transactions</h1>
        
//               <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                 <div class="content m-2" style={{ textAlign: "left" }}>
           
//                 </div>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//             <br />
//             <br />
//             <img src={adminHomeback} alt="" id="newImageSize" />
//             <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "25%", }} />
//             <img src={trasactiom} alt="" id="newImageSize" />
//           </div>
//         </div>
//       </div>
//     </section> */}
//     {/* Step 08 */}
//     {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container" id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//             <br />
//             <br />
//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 30, }}>Change Password</h1>
//               <h6>Admin(s) can conveniently add cash collection staff by providing
//                 The following information:
//               </h6>
//               <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                 <div class="content m-2" style={{ textAlign: "left" }}>
//                 </div>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//             <br />
//             <br />
//             <img src={adminHomeback} alt="" id="newImageSize" />
//             <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "45%", }} />
//             <img src={setPassword} alt="" id="newImageSize" />
//           </div>
//         </div>
//       </div>
//     </section> */}
//   </Slide>
// </div>
// </center> */}


// Cashier ====================>
 

// {/* <center>
//           <div id="SlideImage">
//             <Slide autoplay={false}
//               nextArrow={
//                 <button style={{
//                   background: 'none',
//                   border: '0px',
//                   width: '30px',
//                   marginRight: "0.5%",
//                   padding: 0

//                 }}>
//                   <svg fill="#F0F2F5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg>
//                 </button>
//               }
//               prevArrow={
//                 <button style={{
//                   background: 'none',
//                   border: '0px',
//                   width: '30px',
//                   marginLeft: "0.5%",
//                   padding: 0
//                 }}>
//                   <svg fill="#F0F2F5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg>
//                 </button>
//               }>

//               {/* Step-01 */}
//               {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//                 <div class="container" id="RiderRiderImageSliderRes">
//                   <div class="row justify-content-between gy-5">
//                     <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//                       <br />
//                       <br />
//                       <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//                         <h2 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 600, fontSize: 33, marginBottom: "1%" }}>Cashier Home</h2>
//                         <h6>The Cashier can login to the app with the credentials provided by the Admin. Displayed The KollectIt Cashier Home Screen,  the Cashier is free to:</h6>
//                         <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                           <div class="content m-2" style={{ textAlign: "left" }}>
//                             <ul>
//                               <li>Add Client to the organisation</li>
//                               <li>Assign Riders to Client</li>
//                               <li>View Deposits: Payments received from the rider to bank or to the supervisor</li>
//                               <li>View Payments collected by assigned  riders in real time.</li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>

//                     </div>
//                     <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//                       <br />
//                       <br />
//                       <img src={CashierLogin} alt="" id="newImageSize" />
//                       <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
//                       <img src={cashierHome} alt="" id="newImageSize" />
//                     </div>
//                   </div>
//                 </div>
//               </section> */}
//               {/* Step-02 */}
//               {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//                 <div class="container" id="RiderImageSliderRes">
//                   <div class="row justify-content-between gy-5">
//                     <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//                       <br />
//                       <br />
//                       <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//                         <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61", fontWeight: 500, fontSize: 33, marginBottom: "-2%" }}>Add Client(s)</p>
//                         <br />
//                         <h6>When adding a client, the following details are required:</h6>
//                         <div class="col-lg-6 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                           <div class="content m-2" style={{ textAlign: "left" }}>
//                             <ul>
//                               <li>Client Id</li>
//                               <li>Client Name</li>
//                               <li>Contact Number</li>
//                               <li>Email</li>
//                               <li>Amount</li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>

//                     </div>
//                     <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//                       <br />
//                       <br />
//                       <img src={cashierHome} alt="" id="newImageSize" />
//                       <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "20%" }} />
//                       <img src={ClientForm} alt="" id="newImageSize" />
//                     </div>
//                   </div>
//                 </div>
//               </section> */}
//               {/* Step-03 */}
//               {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//                 <div class="container" id="RiderImageSliderRes">
//                   <div class="row justify-content-between gy-5">
//                     <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//                       <br />
//                       <br />
//                       <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//                         <h2 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 600, fontSize: 33, marginBottom: "1%" }}>Assign Rider(s) to Client(s)</h2>
//                         <br />
//                         <h6>Assign Rider(s) to your Clients by selecting a Member of the Designated Collection Staff and specifying an amount to be collected, if required.</h6>
//                         <div class="col-lg-6 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                           <div class="content m-2" style={{ textAlign: "left" }}>
//                             <ul>
//                               <li>Company Name:</li>
//                               <li>Short Code</li>
//                               <li>Login Id</li>
//                               <li>Cashiers</li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>

//                     </div>
//                     <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//                       <br />
//                       <br />
//                       <img src={cashierHome} alt="" id="newImageSizeThree" />
//                       <img src={arrowImage} alt="" height={12} width={20} style={{ marginTop: "-3%", }} />
//                       <img src={AssignRider} alt="" id="newImageSizeThree" />
//                       <img src={arrowImage} alt="" height={12} width={20} style={{ marginTop: "-10%", }} />
//                       <img src={ChooseRider} alt="" id="newImageSizeThree" />
//                     </div>
//                   </div>
//                 </div>
//               </section> */}
//               {/* Step 04 */}
//               {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//                 <div class="container" id="RiderImageSliderRes">
//                   <div class="row justify-content-between gy-5">
//                     <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//                       <br />
//                       <br />
//                       <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//                         <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 30, }}>Deposit</h1>
                 
//                         <h6>Admin(s) can conveniently add cash collection staff by providing
//                           The following information:
//                         </h6>
//                         <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                           <div class="content m-2" style={{ textAlign: "left" }}>
//                             <ul>
//                               <li>Their Name</li>
//                               <li>Email</li>
//                               <li>Cell Phone Number</li>
//                               <li>Password used by them to login to the app</li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>

//                     </div>
//                     <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//                       <br />
//                       <br />
//                       <img src={cashierHome} alt="" id="newImageSize" />
//                       <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "45%" }} />
//                       <img src={Trasfer} alt="" id="newImageSize" />
//                     </div>
//                   </div>
//                 </div>
//               </section> */}
//               {/* Step 05 */}
//               {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//                 <div class="container" id="RiderImageSliderRes">
//                   <div class="row justify-content-between gy-5">
//                     <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//                       <br />
//                       <br />
//                       <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//                         <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 30, }}>View Payment</h1>
//                         <h6>Admin(s) can conveniently add cash collection staff by providing
//                           The following information:
//                         </h6>
//                         <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                           <div class="content m-2" style={{ textAlign: "left" }}>
//                             <ul>
//                               <li>Their Name</li>
//                               <li>Email</li>
//                               <li>Cell Phone Number</li>
//                               <li>Password used by them to login to the app</li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>

//                     </div>
//                     <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//                       <br />
//                       <br />
//                       <img src={CashierBackHome} alt="" id="newImageSize" />
//                       <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
//                       <img src={AllPayment} alt="" id="newImageSize" />
//                     </div>
//                   </div>
//                 </div>
//               </section> */}
//               {/* Step 06 */}
//               {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//                 <div class="container" id="RiderImageSliderRes">
//                   <div class="row justify-content-between gy-5">
//                     <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//                       <br />
//                       <br />
//                       <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//                         <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 30, }}>Client List</h1>
                   
//                         <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                           <div class="content m-2" style={{ textAlign: "left" }}>
//                           </div>
//                         </div>
//                       </div>

//                     </div>
//                     <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//                       <br />
//                       <br />
//                       <img src={CashierBackHome} alt="" id="newImageSize" />
//                       <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "25%" }} />
//                       <img src={ClientList} alt="" id="newImageSize" />
//                     </div>
//                   </div>
//                 </div>
//               </section> */}
//               {/* Step 07 */}
//               {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//                 <div class="container" id="RiderImageSliderRes">
//                   <div class="row justify-content-between gy-5">
//                     <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//                       <br />
//                       <br />
//                       <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//                         <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 30, }}>Change Password</h1>
                    
//                         <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                           <div class="content m-2" style={{ textAlign: "left" }}>
                          
//                           </div>
//                         </div>
//                       </div>

//                     </div>
//                     <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//                       <br />
//                       <br />
//                       <img src={CashierBackHome} alt="" id="newImageSize" />
//                       <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "45%" }} />
//                       <img src={setPassword} alt="" id="newImageSize" />
//                     </div>
//                   </div>
//                 </div>
//               </section> */}
//             </Slide>
//           </div>
//         </center> */}




// Rider ==============>

// {/* <center>
//   <div id="SlideImage">
//     {/* Step-00 */}
//     <Slide autoplay={false}
//       nextArrow={
//         <button style={{
//           background: 'none',
//           border: '0px',
//           width: '30px',
//           marginRight: "0.5%",
//           padding: 0

//         }}>
//           <svg fill="#F0F2F5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg>
//         </button>
//       }
//       prevArrow={
//         <button style={{
//           background: 'none',
//           border: '0px',
//           width: '30px',
//           marginLeft: "0.5%",
//           padding: 0
//         }}>
//           <svg fill="#F0F2F5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg>
//         </button>
//       }>
//       {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container" id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//             <br />
//             <br />
//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <h2 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 600, fontSize: 30, marginBottom: "1%" }}>Rider Home</h2>
          
//               <h6>By Logging in to The KollectIt App as Rider, The User will be Navigated to The Rider Home Screen to access features like:</h6>
//               <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                 <div class="content" style={{ textAlign: "left" }}>
//                   <ul>
//                     <li>Client List: to see, clients assigned to them.</li>
//                     <li>Payment Collections: To view all collected payments.</li>
//                     <li>Verify Payments: Verify recently collected unverified payment.</li>
//                     <li>View Transactions: View transactions within an Organization, including collections and internal transfers.</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//             <br />
//             <br />
//             <img src={RiderLogin} alt="" id="newImageSize" />
//             <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
//             <img src={RiderHome} alt="" id="newImageSize" />
//           </div>
//         </div>
//       </div>
//     </section> */}

//       {/*  */}
//       {/* Step-01 */}
//       {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container" id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//             <br />
//             <br />
//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61", fontWeight: 600, fontSize: 33, marginBottom: "1%" }}>View Assigned Clients </p>
//                <br />
//               <h6>Free to choose from an option at the rider’s home screen, to view
//                 their assigned collections, Riders can conveniently view a list of
//                 collections assigned to them.</h6>
//             </div>

//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//             <br />
//             <br />
//             <img src={RiderHome} alt="" id="newImageSize" />
//             <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
//             <img src={riderClientList} alt="" id="newImageSize" />
//           </div>
//         </div>
//       </div>
//     </section> */}
//       {/* Step-02 */}
//       {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container" id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//             <br />
//             <br />
//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <h2 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 30, marginBottom: "1%" }}>Collect Payment from assigned Client</h2>
//                <h6>The rider collect’s payments from assigned clients by specifying</h6>
//               <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                 <div class="content m-2" style={{ textAlign: "left" }}>
//                   <ul>
//                     <li>Amount Collected</li>
//                     <li>Select Mode of Payment  if Cheque/Cash</li>
//                     <li>Attach Cheque Copy if :cheque</li>
//                   </ul>
//                 </div>
//               </div>
//               <h6>Upon submitting detail, a Payment Verification code is sent to the client.</h6>
//               <h6>Client to share PVC with rider to receive digital receipt of its Payment.</h6>
//             </div>

//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//             <br />
//             <br />
//             <img src={riderClientList} alt="" id="newImageSize" />
//             <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
//             <img src={RiderCollect} alt="" id="newImageSize" />
//           </div>
//         </div>
//       </div>
//     </section> */}
//       {/* Step-03 */}
//       {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container" id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//             <br />
//             <br />
//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <p data-aos="fade-up" data-aos-delay="100" id="ContentRiderPragraf" style={{ color: "#134D61" }}>Upon proceed an payment verification code</p>
//              <h6>Collecting from assigned clients, a Rider must specify</h6>
//               <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                 <div class="content" style={{ textAlign: "left" }}>
//                   <ul>
//                     <li>Amount Collected</li>
//                     <li>Select Mode of Payment  if Check or Cash</li>
//                     <li>Attach a Picture of a Check, if that’s the mode of payment.</li>
//                   </ul>
//                 </div>
//               </div>
//               <h6>Upon submitting details, a Payment Verification code (PVC)  <br /> or OTP (One Time Password) is sent to the client.</h6>
//               <h6>The client simply shares The PVC with The Rider to receive <br /> Digital  Receipt  of Payment.</h6>

//             </div>

//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//             <br />
//             <br />
//             <img src={RiderLogin} alt="" id="newImageSize" />
//             <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
//             <img src={RiderHome} alt="" id="newImageSize" />
//           </div>
//         </div>
//       </div>
//     </section> */}
//       {/* Step-04 */}
//       {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container" id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//             <br />
//             <br />
//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <h2 data-aos="fade-up" style={{ color: "#134D61", marginBottom: "1%", fontSize: 30 }}>Rider enter OTP verify Payment</h2>
//               <br />
//               <h6>The rider is suppose to collect payments from assigned clients by specifying</h6>
//               <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                 <div class="content m-2" style={{ textAlign: "left" }}>
//                   <ul>
//                     <li>Amount Collected</li>
//                     <li>Select Mode of Payment  if Cheque/Cash</li>
//                     <li>Attach Cheque Copy if :cheque</li>
//                   </ul>
//                 </div>
//               </div>
//               <h6>Upon submitting detail, a Payment Verification code is sent to the client.</h6>
//               <h6>Client to share PVC with rider to receive digital receipt of its Payment.</h6>
//             </div>

//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//             <br />
//             <br />
//             <img src={OTPconfirmation} alt="" id="newImageSize" />
//             <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
//             <img src={enterOPT} alt="" id="newImageSize" />
//           </div>
//         </div>
//       </div>
//     </section> */}

//       {/* Step 05*/}
//       {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container" id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//             <br />
//             <br />
//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 30, }}>Verify Payment</h1>
       
//               <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                 <div class="content m-2" style={{ textAlign: "left" }}>
            
//                 </div>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//             <br />
//             <br />
//             <img src={RiderBackHome} alt="" id="newImageSize" />
//             <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "auto", marginBottom: "auto" }} />
//             <img src={AllPayment} alt="" id="newImageSize" />
//           </div>
//         </div>
//       </div>
//     </section> */}
//       {/* Step 06 */}
//       {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container" id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//             <br />
//             <br />
//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 30, }}>Trasfer</h1>
    
//               <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                 <div class="content m-2" style={{ textAlign: "left" }}>
             
//                 </div>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//             <br />
//             <br />
//             <img src={RiderBackHome} alt="" id="newImageSize" />
//             <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "25%", }} />
//             <img src={Trasfer} alt="" id="newImageSize" />
//           </div>
//         </div>
//       </div>
//     </section> */}
//       {/* Step 07 */}
//       {/* <section id="howItWorkRider" class="howItWork d-flex align-items-center section-bg " >
//       <div class="container" id="RiderImageSliderRes">
//         <div class="row justify-content-between gy-5">
//           <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
//             <br />
//             <br />
//             <div class="content ml-4" style={{ textAlign: "left" }} id="ContentRider">
//               <h1 data-aos="fade-up" style={{ color: "#134D61", fontWeight: 500, fontSize: 30, }}>Change Password</h1>
        
//               <div class="col-lg-12 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
//                 <div class="content m-2" style={{ textAlign: "left" }}>
      
//                 </div>
//               </div>
//             </div>

//           </div>
//           <div class="col-lg-6 d-flex flex-row justify-content-center" data-aos="fade-up" data-aos-delay="200" style={{ alignItems: "center" }}>
//             <br />
//             <br />
//             <img src={RiderBackHome} alt="" id="newImageSize" />
//             <img src={arrowImage} alt="" height={20} width={40} style={{ marginTop: "45%", }} />
//             <img src={setPassword} alt="" id="newImageSize" />
//           </div>
//         </div>
//       </div>
//     </section> */}

//     </Slide>
//   </div>
// </center> */}