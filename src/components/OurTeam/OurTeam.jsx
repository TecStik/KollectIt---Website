import Header from '../../components/Header/Header';
import React, { useState, useEffect } from "react";
import { Slide, Zoom } from 'react-slideshow-image';
import './OurTeam.css';
import Footer from "../../components/Footer/Footer";
import splash from '../Images/Team.png'


export default function OurTeam() {

    const [navSize, setnavSize] = useState(170);
    const [marginSize, setmarginSize] = useState("5%");
    const [navPosition, setnavPosition] = useState("fixed");

    const listenScrollEvent = () => {
        window.scrollY > 120 ? setnavSize(100) : setnavSize(170);
        window.scrollY > 120 ? setmarginSize('-5%') : setmarginSize('5%');
        window.scrollY > 120 ? setnavPosition('unset') : setnavPosition('fixed');
        // window.scrollY > 10 ? setnavColor("#fff") : setnavColor("#fff");
        // window.scrollY > 10 ? setnavItemColor("#012049") : setnavItemColor("#fff");
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <>
            <Header />
            <section id="OurTeam" class="OurTeam d-flex align-items-center section-bg" style={{ marginTop: "0%", backgroundColor: "white" }}>
                <div class="container">
                    <div class="row justify-content-between gy-5">
                        <div
                            class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                            <h1 data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>About Operator</h1>
                            <div class="content">
                                <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                                    <li>TecStik is a technology subsidiary led by Pacific Financial Services: A company that has been operating globally for over 20 years. TecStik provides IT consulting, Advanced Digital Transformation, ITAS/SAAS (IT as a Service /Software as a Service), Artificial Intelligence, Data Sciences, Blockchain/Web3 and Cloud offerings. TecStik has assembled a team of seasoned finance professionals and technology specialists who provide clients with optimal solutions for their businesses. After conducting meticulous research and development, TecStik regularly builds technology products for the valued clientele: bringing Fintech, Medtech and Ecommerce solutions. These products are well-suited for enhanced productivity and convenience for users. With TecStik’s highly seasoned team of Bankers, Software Developers and Financial Consultants, the outfit consistently develops innovative fintech applications for both Mobile and Desktop Devices.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
                            <img style={{ width: "100%", alignItems: "center" }} id="ourTimeImage" src={splash} />
                        </div>
                    </div>
                </div>
            </section>



            <div class="container" id="OurTeamSection">
                <div class="section-title" id='Ourteam'>
                    <h2><span></span>Our Team</h2>
                    <br />
                    <p>Led by experts, TecStik and The KollectIt App is primarily operated by professionals who have prominent reputations across The Finance Industry.</p>
                </div>
            </div>

            <section id="Ourteam" class="Ourteam">
                <div class="container" data-aos="fade-up" id='TeamContainer'>

                    <div class="row gx-0" style={{ justifyContent: "center" }}>
                        <div class="col-lg-6 d-flex align-items-center mt-0 mb-0" data-aos="zoom-out" data-aos-delay="200">
                            <div class="content">
                                <h2>Mr. Bilal Saleem - Chief Executive</h2>
                                <br />
                                <h5>Mr. Bilal Saleem is the Director of TecStik, bringing you KollectIt. His extensive expertise in Banking and Finance leading Pacific Financial Services Pvt. Ltd., has allowed TecStik to make diligent efforts to upgrade your cash collection efforts.</h5>
                                <br />
                                <ul>
                                    <li>Over 26 years of experience in Corporate Finance, Treasury and Investment Banking with several successful transactions to his credit.</li>
                                    <br />
                                    <li> An Entrepreneur with his own consultancy firm providing advisory to several local and International clientele.</li>
                                    <br />
                                    <li> Holds MBA in Finance from Iowa State University(USA).</li>
                                </ul>
                                <br />
                                <br />
                                <br />
                            </div>
                        </div>
                        {/* <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                            <div class="content">
                                <h2>Mr. Bilal Saleem - Chief Executive</h2>
                                <br />
                                <h5>Bilal Saleem is the Director of TecStik, bringing you KOLLECTIT. His extensive expertise in Banking and Finance leading Pacific Financial Services Pvt. Ltd., has allowed TecStik to make diligent efforts for rectifying Islamic Banking.</h5>
                                <br />
                                <ul>
                                    <li>Over 26 years of experience in Corporate Finance, Treasury and Investment Banking with several successful transactions to his credit.</li>
                                    <br />
                                    <li> An Entrepreneur with his own consultancy firm providing advisory to several local and International clientele. </li>
                                    <br />
                                    <li>Holds MBA in Finance from Iowa State University(USA)</li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>

            </section>

            <section id="Ourteam" class="Ourteam" >
                <div class="container" data-aos="fade-up" id='TeamContainer'>

                    <div class="row gx-0 ">
                        <div class="col-lg-6 d-flex flex-column justify-content-center mt-0 mb-0" data-aos="fade-up" data-aos-delay="200">
                            <div class="content m-2">
                                <h2>Mr. Azfar Saleem - Marketing Director</h2>
                                <br />
                                <h5>Guided by strategy and discipline, Mr. Azfar Saleem excels at developing compelling strategies to promote the underlying concept of IJMA, supported by the driving force of technology.</h5>
                                <br />
                                <ul>
                                    <li>With more than a decade of experience in Digital Marketing, Azfar has collaborated with leading international technology firms.</li>
                                    <br />
                                    <li>He holds an undergraduate degree with honors in Anthropology from Kingston University in London, UK.</li>
                                    <br />
                                    <li>Posessing certified knowledge of research methods, Mr. Azfar thoroughly investigates, supervises, and executes the vast array of projected requirements for professionals engaged in cash-intensive finance</li>
                                    <br />
                                    <li>Mr. Azfar's primary focus lies in researching technology to optimize and augment the financial industry.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 d-flex align-items-center mt-2 mb-2" data-aos="zoom-out" data-aos-delay="200" style={{ marginTop: "-4.5%" }}>
                            <div class="content">
                                <h2>Mr. Hammad Ahmed, CFA, CMA, IFQ as Product Manager</h2>
                                <br />
                                <h5>Muhammad Hammad Ahmed holds over 16 years of experience in Corporate Finance, Commercial Banking, Investment Banking ,Islamic Finance and Fintech.
                                    <br />
                                    <br />
                                    Working with TecStik in a pivotal Technical Role, Mr. Hammad Ahmed oversees the technical updates of KollectIt, identifies trends of cash or cheque payments according to KollectIt Users’ Geographical Locations.</h5>
                                <br />
                                <ul>
                                    <li>Played Instrumental Role in setting up of Islamic Banking window of Chase Bank in KenyaAdvisor to Malaysian Islamic Investment Bank on fintech initiatives.</li>
                                    <br />
                                    <li> Advisor to Malaysian Islamic Investment Bank on fintech initiatives..</li>
                                    <br />
                                    <li>Holds prestigious qualifications in finance including CFA,CMA,IFQ</li>
                                    <br />
                                    <li>Holds numerous global Fintech certifications</li>
                                    <br />
                                    <li>Position holder in The International Blockchain examination</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
            {/* <div id='Team'>
            </div> */}

            <br />
            <div id='Teamfooter'>
                <Footer />
            </div>
        </ >
    )
}
