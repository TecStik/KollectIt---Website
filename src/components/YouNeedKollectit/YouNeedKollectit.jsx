import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './YouNeedKollectit.css'
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


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

            <div id="NewHome">
                <Header />
                <section id="YouNeedKollectit" class="YouNeedKollectit d-flex align-items-center section-bg">
                    <div class="container">
                        <div class="row justify-content-between gy-5">
                            <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                                <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#11366B" }}>Why you Need KollectIt</p>
                                <div style={{
                                    background: "#FCFCFC", margin: "5px", padding: "5px", borderRadius: "22px",
                                    fontSize: "18px", fontFamily: "100px", color: "#444746"
                                }}>

                                    <h6 data-aos="fade-up" >With integrated databases, KollectIt brings the finest communications between your collection team. Overlook your collection process as an Admin user by confirming, examining status(es) and assigning team members to relevant roles.</h6>
                                    <br />
                                    <h6 data-aos="fade-up" >Once designated for the position, your cashier or manager is tasked with ensuring fulfillment. After signing in as Cashier, the ability to add a Client(s), Assign Rider(s) for collection, view payment deposits, view payment statuses and more.</h6>
                                    <br />
                                    <h6>When assigned to the role of a Rider, a Rider can select an option from their home screen. Complete with a Client List designated to them, view all of the payments they have collected, verify recently collected payments with a PVC(Payment Verification Code) sent to a client.</h6>
                                    <br />
                                    <br />
                                </div>
                                {/* <div style={{
                                    background: "#E6E6E6", margin: "5px", padding: "5px", borderRadius: "22px",
                                    fontSize: "18px", fontFamily: "200px"
                                }}>
                                    <ul style={{ listStyleType: "none" }}>
                                        <li>With integrated databases, KollectIt brings the finest communications between your collection team. Overlook your collection process as an Admin user by confirming, examining status(es) and assigning team members to relevant roles.</li>
                                        <br />
                                        <li>Once designated for the position, your cashier or manager is tasked with ensuring fulfillment. After signing in as Cashier, the ability to add a Client(s), Assign Rider(s) for collection, view payment deposits, view payment statuses and more.</li>
                                        <br />
                                        <li>When assigned to the role of a Rider, a Rider can select an option from their home screen. Complete with a Client List designated to them, view all of the payments they have collected, verify recently collected payments with a PVC(Payment Verification Code) sent to a client.</li>
                                    </ul>
                                </div> */}
                            </div>
                            <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
                                {/* <img src={arabic} id="labtopImage" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" /> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
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