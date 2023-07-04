import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './YouNeedKollectit.css'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import payment from '../Images/payment.png'
import ladypayment from '../Images/ladypayment.png'
import splash from '../Images/splash1.png'
import Mobile from '../Images/whyJoin/Mobile1.png'
import Setting from '../Images/whyJoin/Setting.png'
import Question from '../Images/whyJoin/Question.png'


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
            <section id="blog"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + splash})`,
                }}
            />

            <h1 style={{color: "#134D61", fontSize: '35px', fontWeight: 600}} className="text-center">Revamp Your Cash Collection Game Now!</h1>
            
            <section id="about" class="about">
                <div class="container" data-aos="fade-up">

                    <div class="row gx-0">
                        <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <img src={Question} class="img-fluid" alt="" id="ImgeSize" />
                        </div>
                        <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                            <div class="content">

                                <br />
                                <br />
                                <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600, marginLeft: "-1%" }} id="textCenter">Seamless Collaboration</h2>
                                <br />
                                <br />
                                <ul style={{ listStyleType: "none", marginLeft: "-5%" }}>
                                    <li>With integrated databases, KollectIt brings the finest communications between your collection team. Carefully look into collection processes as an Admin User by confirming, examining status(es) and assigning team members to relevant roles.</li>
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
                        <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="content">
                                <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600,marginLeft:"-1%" }} id="textCenter">Reassured Accuracy</h2>
                                <br />
                                <br />
                                <ul style={{ listStyleType: "none", marginLeft: "-5%" }}>
                                    <li>
                                        Once designated for the position, your cashier or manager is tasked with ensuring fulfilment. After signing in as Cashier, the ability to add a Client(s), Assign Rider(s) for collection, view and make payment deposits, view payment statuses and more.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex " style={{ justifyContent: "center" }} data-aos="zoom-out" data-aos-delay="200">
                            <img src={Setting} id="ImgeSize" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section id="about" class="about">
                <div class="container" data-aos="fade-up">

                    <div class="row gx-0">
                        <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <img src={Mobile} class="img-fluid" alt="" id="ImgeSize" />
                        </div>
                        <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                            <div class="content">

                                <br />
                                <br />
                                <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 ,marginLeft:"-1%"}} id="textCenter">Precise Data Exchange</h2>
                                <br />
                                <br />
                                <ul style={{ listStyleType: "none", marginLeft: "-5%" }}>
                                    <li>When assigned to the role of a Rider, a Rider can select an option from their home screen. Complete with a Client List designated to them, view all of the payments they have collected, verify recently collected payments with a PVC(Payment Verification Code) sent to a client.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />

            </section>
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
    )
}

export default YouNeedKollectit;