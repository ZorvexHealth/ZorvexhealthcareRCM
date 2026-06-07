import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import Aboutus from "./Aboutus.jsx";
import Testimonials from "./Testimonials.jsx";
import FAQ from "./FAQ.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";

import { useState } from "react";

import Popup from "./Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Nav openPopup={() => setShowPopup(true)} />

      <Hero openPopup={() => setShowPopup(true)} />

      <Aboutus />

      <FAQ />

      <Contact openPopup={() => setShowPopup(true)} />

      <Footer />

      {showPopup && <Popup closePopup={() => setShowPopup(false)} />}
    </>
  );
}

export default App;
