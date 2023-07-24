import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import { Helmet } from "react-helmet";
import Home from "./components/Home/Home";
import YouNeedKollectit from "./components/YouNeedKollectit/YouNeedKollectit";
import ContactUS from "./components/ContactUS/ContactUS";
import OurTeam from "./components/OurTeam/OurTeam";
import HowItWork from "./components/HowItWork/HowItWork";


export const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        ‍<title>KollectIt</title>‍
        <meta name="description" content="Find all the best quality products your pet may need" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@user" />
        <meta name="twitter:creator" content="@user" />
        <meta name="twitter:title" content="Pets - Products" />
        <meta name="twitter:description" content="Best Products for your pet" />
        <meta name="twitter:image" content="url_to_image" />
        <meta property="og:title" content="Pets - Products" />
        <meta property="og:description" content="Best Products for your pet" />
        <meta property="og:image" content="url_to_image" />
        <meta property="og:https://tecstik.com/" content="pets.abc" />
        <meta property="og:tecstik" content="Pets - Products" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/KollectIt-WhyYouNeedKollectIt" element={<YouNeedKollectit />} />
        <Route path="/KollectIt-Contact" element={<ContactUS />} />
        <Route path="/KollectIt-HowItWorks" element={<HowItWork />} />
        {/* <Route path="/KOLLECTIT-OurTeam" element={<OurTeam />} /> */}
        {/*
        <Route path="/KOLLECTIT-About" element={<About />} />
        <Route path="/KOLLECTIT-Platform" element={<Platform />} />
      */}
      </Routes>
    </BrowserRouter>
  );
};
