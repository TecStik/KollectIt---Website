import React, { useRef, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
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
    <div>
      <footer
        class="text-center text-lg-start text-white"
        style={{ background: "#578B9D" }}
      >
        <div
          class="d-flex justify-content-between p-4"
          style={{ background: "#9DBCC6" }}
        >
          <div class="me-5"></div>
          <div>
            <a href={() => false} class="text-white me-3">
              {" "}
              Find us online :
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100087185961853"
              target="_blank"
              class="text-white me-4"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/Tec_Stik"
              target="_blank"
              class="text-white me-4"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              href="https://www.linkedin.com/company/tecstik/about/?viewAsMember=true"
              target="_blank"
              class="text-white me-4"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div>
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div
                class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"
                id="footerLine"
              >
                <h6 class="text-uppercase fw-bold text-white">KollectIt</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p>
                  Retail Transactions are key to the development of any
                  payments, receivables or delivery system(s). KollectIt
                  improves precision and collaboration among all collection
                  activity stakeholders, benefitting both businesses and
                  individuals.
                </p>
              </div>

              <div
                class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"
                id="footerLine"
              >
                <h6 class="text-uppercase fw-bold text-white">
                  BENEFITS OF KOLLECTIT
                </h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p>
                  <a
                    href="/KOLLECTIT-WhyYouNeedKollectIt/#Seamless"
                    class="text-white"
                  >
                    Cost-Efficient Insights
                  </a>
                </p>
                <p>
                  <a
                    href="/KOLLECTIT-WhyYouNeedKollectIt/#ReassuredAccuracy"
                    class="text-white"
                  >
                    Seamless Collaboration
                  </a>
                </p>
                <p>
                  <a
                    href="/KOLLECTIT-WhyYouNeedKollectIt/#ReassuredAccuracy1"
                    class="text-white"
                  >
                    Reassured Accuracy
                  </a>
                </p>
                <p>
                  <a
                    href="/KOLLECTIT-WhyYouNeedKollectIt/#PreciseData"
                    class="text-white"
                  >
                    Precise Data Exchange
                  </a>
                </p>
                <p>
                  <a
                    href="/KOLLECTIT-WhyYouNeedKollectIt/#SimplifiedComplianc"
                    class="text-white"
                  >
                    Compliant Reporting
                  </a>
                </p>
                <p>
                  <a
                    href="/KOLLECTIT-WhyYouNeedKollectIt/#ImprovedClarity"
                    class="text-white"
                  >
                    {" "}
                    Clear Decision-Making
                  </a>
                </p>
              </div>

              <div
                class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"
                id="footerLine"
              >
                <h6 class="text-uppercase fw-bold text-white ">
                  KOLLECTIT PLATFORM
                </h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p>
                  <Link to="/" class="text-white">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/KOLLECTIT-WhyYouNeedKollectIt" class="text-white">
                    Why you need KollectIt
                  </Link>
                </p>
                <p>
                  <Link to="/KOLLECTIT-HowItWorks" class="text-white">
                    How it Works
                  </Link>
                </p>
                <p>
                  <Link to="/KOLLECTIT-ContactUS" class="text-white">
                    Contact Us
                  </Link>
                </p>
              </div>

              <div
                class="col-md-2 col-lg-2 col-xl-3 mx-auto mb-md-0 "
                id="footerLine"
              >
                <h6 class="text-uppercase fw-bold text-white">Contact Us</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p>
                  <i class="fas fa-home mr-3"></i> Business Centre, II
                  Chundrigar Road
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i>
                  <a href="mailto:info@tecstik.com" class="text-white">
                    info@tecstik.com
                  </a>
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> (92-21) 32442392-93
                </p>
                {/* <p>
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
                </p> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Copyright --> */}
        <div
          class="text-center p-3"
          style={{ background: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright :
          <a class="text-white ml-2" href={() => false}>
            TecStik.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
}

{
  /* <div class="container">
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
        </div> */
}
