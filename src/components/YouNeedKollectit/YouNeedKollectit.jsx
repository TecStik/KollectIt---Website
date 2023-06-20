import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './YouNeedKollectit.css'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import payment from '../Images/payment.png'
import ladypayment from '../Images/ladypayment.png'
import splash from '../Images/splash1.png'


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

            {/* <div id="NewHome">
                <section id="YouNeedKollectit" class="YouNeedKollectit d-flex align-items-center section-bg">
                    <div class="container">
                        <div class="row justify-content-between gy-5">
                            <div class="col-lg-12 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                                <div class="content" style={{ background: "#E6E6E6", margin: "5px", padding: "5px", borderRadius: "22px" }}>
                                    <ul style={{ listStyleType: "none", fontSize: 22 }}>
                                        <li>With integrated databases, KollectIt brings the finest communications between your collection team. Overlook your collection process as an Admin user by confirming, examining status(es) and assigning team members to relevant roles.</li>
                                        <br />
                                        <li>Once designated for the position, your cashier or manager is tasked with ensuring fulfillment. After signing in as Cashier, the ability to add a Client(s), Assign Rider(s) for collection, view payment deposits, view payment statuses and more.</li>
                                        <br />
                                        <li>When assigned to the role of a Rider, a Rider can select an option from their home screen. Complete with a Client List designated to them, view all of the payments they have collected, verify recently collected payments with a PVC(Payment Verification Code) sent to a client.</li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            </div> */}

            <section id="about" class="about">
                <div class="container" data-aos="fade-up">

                    <div class="row gx-0">
                        <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            {/* <img src={payment} class="img-fluid" alt="" id="ImgeSize" /> */}
                        </div>
                        <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                            <div class="content">

                                <br />
                                <br />
                                {/* <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }} id="textCenter">The Ultimate Collection App for All Platforms</h2> */}
                                <br />
                                <br />
                                <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                                    <li>With integrated databases, KollectIt brings the finest communications between your collection team. Overlook your collection process as an Admin user by confirming, examining status(es) and assigning team members to relevant roles.</li>
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
                                {/* <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }} id="textCenter">KOLLECTIT is aligned with the vision of digitalized Islamic Banking.</h2> */}
                                <br />
                                <br />
                                <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                                    <li>Once designated for the position, your cashier or manager is tasked with ensuring fulfillment. After signing in as Cashier, the ability to add a Client(s), Assign Rider(s) for collection, view payment deposits, view payment statuses and more.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                            {/* <img src={ladypayment} id="ladiesImage" alt="" /> */}
                        </div>
                    </div>
                </div>
            </section>


            <section id="about" class="about">
                <div class="container" data-aos="fade-up">

                    <div class="row gx-0">
                        <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            {/* <img src={payment} class="img-fluid" alt="" id="ImgeSize" /> */}
                        </div>
                        <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                            <div class="content">

                                <br />
                                <br />
                                {/* <h2 style={{ color: "#134D61", fontSize: '35px', fontWeight: 600 }} id="textCenter">The Ultimate Collection App for All Platforms</h2> */}
                                <br />
                                <br />
                                <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                                    <li>When assigned to the role of a Rider, a Rider can select an option from their home screen. Complete with a Client List designated to them, view all of the payments they have collected, verify recently collected payments with a PVC(Payment Verification Code) sent to a client.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />

            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />

        </>
    )
}

export default YouNeedKollectit;