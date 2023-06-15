import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import "./App.css";
import SecondHeader from "./Pages/SecondHeader/SecondHeader";
import {
  // About,
  // Contact,
  // JoinKOLLECTIT,
  // OurTeam,
  // Platform,
  Home,
} from "./Pages/index";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import { Helmet } from "react-helmet";

export const App = () => {
  return (
    // <BrowserRouter>
    //   <SecondHeader />
    // </BrowserRouter>

    <BrowserRouter>
      <Helmet>
        ‍<title>KOLLECTIT</title>‍
        <meta
          name="description"
          content="Find all the best quality products your pet may need"
        />
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
      <Home />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/KOLLECTIT-About" element={<About />} />
        <Route path="/KOLLECTIT-Join" element={<JoinKOLLECTIT />} />
        <Route path="/KOLLECTIT-Platform" element={<Platform />} />
        <Route path="/KOLLECTIT-OurTeam" element={<OurTeam />} />
        <Route path="/KOLLECTIT-Contact" element={<Contact />} />
      </Routes> */}
    </BrowserRouter>
  );
};
