import React from "react";
import "./Home.css";
import payment from '../Images/payment.png'
import Mobilepayment from '../Images/Mobilepayment.png'
import { Slide, Zoom } from 'react-slideshow-image';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function Home() {

  let height = "150px";

  //   const Container = styled.div`
  // border: 1px solid red;
  // position: relative;
  // overflow: hidden;
  // width: 100%;
  // `;

  //   const Children = styled.div`
  // width: 100%;
  // position: relative;
  // height: ${height};
  // `;

  //   const Arrow = styled.div`
  // text-shadow: 1px 1px 1px #fff;
  // z-index: 100;
  // line-height: ${height};
  // text-align: center;
  // position: absolute;
  // top: 0;
  // width: 10%;
  // font-size: 3em;
  // cursor: pointer;
  // user-select: none;
  // ${props =>
  //       props.right
  //         ? css`
  //         left: 90%;
  //       `
  //         : css`
  //         left: 0%;
  //       `}
  // `;

  //   const Dot = styled.span`
  // font-size: 1.5em;
  // cursor: pointer;
  // text-shadow: 1px 1px 1px #fff;
  // user-select: none;
  // `;

  //   const Dots = styled.span`
  // text-align: center;
  // width: 100%;
  // z-index: 100;
  // `;

  //   const CarouselUI = ({ position, total, handleClick, children }) => (
  //     <Container>
  //       <Children>
  //         {children}
  //         <Arrow onClick={handleClick} data-position={position - 1}>
  //           {"<"}
  //         </Arrow>
  //         <Arrow right onClick={handleClick} data-position={position + 1}>
  //           {">"}
  //         </Arrow>
  //       </Children>
  //       <Dots>
  //         {Array(...Array(total)).map((val, index) => (
  //           <Dot key={index} onClick={handleClick} data-position={index}>
  //             {index === position ? "● " : "○ "}
  //           </Dot>
  //         ))}
  //       </Dots>
  //     </Container>
  //   );

  //   const Carousel = makeCarousel(CarouselUI);

  const slides = [
    { url: "https://i.ibb.co/phKFyrw/laptop-1.png", title: "beach" },
    { url: "https://i.ibb.co/Jdg09c9/laptop-2-01-01.png", title: "boat" },
    { url: "https://i.ibb.co/phKFyrw/laptop-1.png", title: "beach" },
    { url: "https://i.ibb.co/Jdg09c9/laptop-2-01-01.png", title: "boat" },
    { url: "https://i.ibb.co/phKFyrw/laptop-1.png", title: "beach" },
    { url: "https://i.ibb.co/Jdg09c9/laptop-2-01-01.png", title: "boat" },
    { url: "https://i.ibb.co/phKFyrw/laptop-1.png", title: "beach" },
    { url: "https://i.ibb.co/Jdg09c9/laptop-2-01-01.png", title: "boat" },
    { url: "https://i.ibb.co/phKFyrw/laptop-1.png", title: "beach" },
  ];
  const images = [
    'https://i.ibb.co/phKFyrw/laptop-1.png',
    'https://i.ibb.co/Jdg09c9/laptop-2-01-01.png',
    'https://i.ibb.co/zZGXhHj/laptop-3-01.png',
    'https://i.ibb.co/sgTV4Tv/laptop-4-01.png',
    'https://i.ibb.co/SBKzNg8/laptop-5-01.png',
    'https://i.ibb.co/7WsMX04/laptop-6-01.png',
    'https://i.ibb.co/QYWZKRj/laptop-7.png',
    'https://i.ibb.co/6YMKwdN/laptop-8-01.png',
    'https://i.ibb.co/c8Br4nx/laptop-9-01.png',
    'https://i.ibb.co/TH6Cpm6/laptop-10-01.png',
    'https://i.ibb.co/MhNhwSt/laptop-11-01.png',
    'https://i.ibb.co/rxCRxMJ/laptop2-01.png',
    // 'images/slide_6.jpg',
    // 'images/slide_7.jpg'
  ];

  const containerStyles = {
    width: "65%",
    height: "280px",
    margin: "0 auto",

  };
  return (
    <>
      <div>
        <Header />


        <section id="hero" class="hero d-flex align-items-center section-bg">
          <div class="container">
            <div class="row justify-content-between gy-5">
              <div
                class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#134D61" }}>Taming the Chaos of Collection</p>
                <br />
                <br />
                {/* <h2 data-aos="fade-up" style={{ color: "#134D61" }}>Cross-Platform Collection</h2> */}

                <div class="content">
                  <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                  <li>Economic Crimes, Payment Discrepancies, Inaccurate Reporting, Payment Fraud, etc., are all problems faced by Businesses and Individuals. KollectIt offers an effortless way to ensure yours or a collection team’s reporting is precise.</li>
                   </ul>
                </div>
                {/* <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                <a href="#book-a-table" class="btn-book-a-table">Book a Table</a>
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch
                    Video</span></a>
              </div> */}
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center text-lg-start">
                <br />
                <br />
                {/* <Slide>
                  {
                    images.map((each, index) => <img key={index} style={{ width: "70%", alignItems: "center" }} id="slideImage" src={each} />)
                  }
                </Slide> */}
                <img style={{ width: "70%", alignItems: "center" }} id="slideImage" src={payment} />
              </div>
            </div>
          </div>
        </section>
        <br />
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <img src={Mobilepayment} class="img-fluid" alt="" id="ImgeSize" />
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <div class="content">
                  <h2 style={{ color: "#134D61" }}>The Ultimate Collection App for All Platforms</h2>
                  <br />
                  {/* <h3>Join KOLLECTIT as an IBFI</h3> */}
                  <br />
                  <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                   <li>Looking at the mix of banking transactions, paper-based activity still dominates the share in transaction value. While digital options are freely available, people prefer dealing in hard cash and checks. A lack of trust of online channels is one of the main issues, but avoiding taxes and documentation are also major contributory factors. With The KollectIt Cross-Platform App, The Admin User is granted Super Access allowing them to assign Team Members to roles, overlook each Team Member’s Task Status, remove roles as per needed or even finish a Team Member’s access to information. With separate priviledges for Cashier’s and Riders(Collection Staff), KollectIt ensures the collection aspect of any collection endeavour is optimized.</li>
                    {/* <br /> */}
                    {/* <li>With KOLLECTIT, you'll enjoy streamlined processes, reduced monitoring requirements, and associated costs. Bid farewell to excessive regulatory reporting and filing burdens, as The KOLLECTIT Platform streamlines these tasks on your behalf.</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br />
          {/* <div class="content">
            <h2>Empowering Islamic Banking with Distinctive Features</h2>
            <br />
            <br />
            <ul style={{ listStyleType: "none" }}>
              <li></li>
            </ul>
          </div> */}


          {/* <div class="container">
            <div class="section-title">
              <h2>
                Overcome the Challenges of Islamic Banking with KOLLECTIT
              </h2>
              <br />
              <p>The lack of transparency and the burden of manual documentation can present significant challenges. With KOLLECTIT, entire Islamic Banking transactions are executed digitally in just a few clicks/taps, while  ensuring compliance with Sharia principles. There may no longer be delays caused by continuous
                back-and-forths or pre-signed post-dated documents. Rest assured that The Solution meets Sharia requirements, allowing you to conduct all transactions seamlessly.
                Enhanced Efficiency and Reduced Costs.
              </p>
              <p>With KOLLECTIT, you'll enjoy streamlined processes, reduced monitoring requirements, and associated costs. Say goodbye to the overwhelming requirements of regulatory reporting and filing, because The KOLLECTIT Platform simplifies these tasks for banking users of our website.</p>
            </div>
          </div> */}

        </section>


        {/* <section id="about" class="about">

          <div class="container" data-aos="fade-up" style={{ marginTop: "-5%" }}>

            <div class="row gx-0">
              <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div class="content">
                  <h2>KOLLECTIT is aligned with the vision of digitalized Islamic Banking.</h2>
                  <br />
                  <br />
                  <ul style={{ listStyleType: "none", marginLeft: "-6%" }}>
                    <li>By leveraging KOLLECTIT, you can complement the country's digital transformation efforts. Embrace the possibility of integrating with The Raast Network and stay ahead of the curve.</li>
                    <br />
                    <li>Join us on this groundbreaking journey as we reshape Islamic Banking. Embrace innovation, improve efficiency, and ensure true Sharia compliance using KOLLECTIT. Contact us now to learn more about our transformative solution and how it can benefit your organization. Let's revolutionize Islamic Banking and Financial Services with KOLLECTIT</li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                <img src={damiImage} id="labtopImage" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section> */}


        {/* <div class="container">
          <div class="section-title">
            <h2><span></span>Overcome the Challenges of Murabaha with KOLLECTIT</h2>
            <br />
            <p>
              Stand out from conventional banks and strengthen your Islamic Banking window with KOLLECTIT. KOLLECTIT offers enhanced regulatory compliance, real-time automated reporting, and superior controls that minimize the need for physical inspections and audits. Embrace transparency and security, as Blockchain Technology functions to diminish the risks of forgery and ensures the integrity of your transactions. Paving the Way to Authentically Digitized Islamic Banking.
            </p>
          </div>
        </div> */}


        {/*  */}
        <Footer />

      </div>
    </>
  );
}

export default Home;
